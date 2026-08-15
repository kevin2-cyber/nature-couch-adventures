import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { orderApi } from "@/lib/endpoints";
import type { Order } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/Card";
import { OrderStatusBadge } from "@/components/orders/OrderStatusBadge";
import { PageSpinner } from "@/components/ui/Spinner";
import { EmptyState } from "@/components/ui/EmptyState";
import { CheckCircle2 } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { formatCurrency, formatDateTime, formatTime } from "@/lib/utils";
import { ApiRequestError } from "@/lib/api";

export const OrderDetailPage = () => {
  const { code } = useParams<{ code: string }>();
  const location = useLocation();
  const justPlaced = Boolean((location.state as { justPlaced?: boolean } | null)?.justPlaced);

  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;
    setOrder(null);
    setError(null);
    orderApi
      .getByCode(code)
      .then(setOrder)
      .catch((err) => setError(err instanceof ApiRequestError ? err.message : "Couldn't find that order."));
  }, [code]);

  if (error) {
    return (
      <EmptyState
        title="Order not found"
        description={error}
        action={
          <Link to="/track">
            <Button variant="outline">Try another code</Button>
          </Link>
        }
      />
    );
  }

  if (!order) return <PageSpinner />;

  return (
    <div className="mx-auto max-w-lg flex flex-col gap-4">
      {justPlaced && (
        <div className="flex items-center gap-2 rounded-lg bg-success/10 text-success px-4 py-3 text-sm font-medium">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          Order placed! Save your order code to track pickup.
        </div>
      )}

      <Card>
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Order code</p>
              <p className="text-2xl font-bold tracking-wide">{order.orderCode}</p>
            </div>
            <OrderStatusBadge status={order.status} />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm border-y border-border py-4">
            <div>
              <p className="text-muted-foreground">Pickup time</p>
              <p className="font-medium">{formatTime(order.pickupTime)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Placed</p>
              <p className="font-medium">{formatDateTime(order.createdAt)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Name</p>
              <p className="font-medium">{order.customerName}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Phone</p>
              <p className="font-medium">{order.customerPhone}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Items</p>
            <div className="flex flex-col gap-2">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span>
                    {item.quantity} &times; {item.name}
                  </span>
                  <span className="font-medium">{formatCurrency(item.lineTotal)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between border-t border-border pt-3 font-semibold">
            <span>Total</span>
            <span>{formatCurrency(order.totalAmount)}</span>
          </div>
        </CardContent>
      </Card>

      <Link to="/track" className="text-center text-sm text-muted-foreground hover:text-foreground">
        Track a different order
      </Link>
    </div>
  );
};
