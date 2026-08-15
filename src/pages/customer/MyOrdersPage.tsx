import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { accountApi } from "@/lib/endpoints";
import type { OrderSummary } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/Card";
import { OrderStatusBadge } from "@/components/orders/OrderStatusBadge";
import { PageSpinner } from "@/components/ui/Spinner";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { formatCurrency, formatDateTime, formatTime } from "@/lib/utils";

export const MyOrdersPage = () => {
  const [orders, setOrders] = useState<OrderSummary[] | null>(null);

  useEffect(() => {
    accountApi.myOrders().then(setOrders);
  }, []);

  if (!orders) return <PageSpinner />;

  if (orders.length === 0) {
    return (
      <EmptyState
        title="No orders yet"
        description="Once you place an order it'll show up here."
        action={
          <Link to="/">
            <Button>Browse menu</Button>
          </Link>
        }
      />
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">My Orders</h1>
      <div className="flex flex-col gap-3">
        {orders.map((order) => (
          <Link key={order.orderCode} to={`/orders/${order.orderCode}`}>
            <Card className="hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold tracking-wide">{order.orderCode}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {formatDateTime(order.createdAt)} &middot; Pickup {formatTime(order.pickupTime)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium">{formatCurrency(order.totalAmount)}</span>
                  <OrderStatusBadge status={order.status} />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
