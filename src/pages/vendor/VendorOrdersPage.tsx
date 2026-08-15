import { useEffect, useState } from "react";
import { vendorOrderApi } from "@/lib/endpoints";
import type { OrderStatus, OrderSummary } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { OrderStatusBadge } from "@/components/orders/OrderStatusBadge";
import { PageSpinner } from "@/components/ui/Spinner";
import { EmptyState } from "@/components/ui/EmptyState";
import { useToast } from "@/context/ToastContext";
import { formatCurrency, formatDateTime, formatTime, cn } from "@/lib/utils";
import { ApiRequestError } from "@/lib/api";

// Mirrors OrderService.ALLOWED_TRANSITIONS on the backend.
const NEXT_ACTIONS: Record<OrderStatus, { status: OrderStatus; label: string; variant: "primary" | "destructive" }[]> = {
  PENDING: [
    { status: "PREPARING", label: "Start preparing", variant: "primary" },
    { status: "CANCELLED", label: "Cancel", variant: "destructive" },
  ],
  PREPARING: [
    { status: "READY_FOR_PICKUP", label: "Mark ready", variant: "primary" },
    { status: "CANCELLED", label: "Cancel", variant: "destructive" },
  ],
  READY_FOR_PICKUP: [{ status: "COMPLETED", label: "Mark picked up", variant: "primary" }],
  COMPLETED: [],
  CANCELLED: [],
};

export const VendorOrdersPage = () => {
  const [filter, setFilter] = useState<"active" | "all">("active");
  const [orders, setOrders] = useState<OrderSummary[] | null>(null);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const { showToast } = useToast();

  const load = (f: "active" | "all") => {
    vendorOrderApi.list(f).then(setOrders);
  };

  useEffect(() => {
    setOrders(null);
    load(filter);
  }, [filter]);

  const handleUpdate = async (id: number, status: OrderStatus) => {
    setUpdatingId(id);
    try {
      await vendorOrderApi.updateStatus(id, { status });
      showToast(`Order marked ${status.replace(/_/g, " ").toLowerCase()}`, "success");
      load(filter);
    } catch (err) {
      showToast(err instanceof ApiRequestError ? err.message : "Couldn't update the order.", "error");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex gap-1 rounded-lg border border-border p-1">
          {(["active", "all"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium capitalize transition-colors",
                filter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {orders === null ? (
        <PageSpinner />
      ) : orders.length === 0 ? (
        <EmptyState title="No orders" description={filter === "active" ? "No active orders right now." : "No orders yet."} />
      ) : (
        <div className="flex flex-col gap-3">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold tracking-wide">{order.orderCode}</p>
                    <OrderStatusBadge status={order.status} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {order.customerName} &middot; Pickup {formatTime(order.pickupTime)} &middot; {formatDateTime(order.createdAt)}
                  </p>
                </div>
                <div className="font-semibold">{formatCurrency(order.totalAmount)}</div>
                <div className="flex gap-2">
                  {NEXT_ACTIONS[order.status].map((action) => (
                    <Button
                      key={action.status}
                      size="sm"
                      variant={action.variant}
                      loading={updatingId === order.id}
                      onClick={() => handleUpdate(order.id, action.status)}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
