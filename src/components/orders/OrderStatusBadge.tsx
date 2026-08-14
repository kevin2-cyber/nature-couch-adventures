import { Badge } from "@/components/ui/Badge";
import { statusLabel } from "@/lib/utils";
import type { OrderStatus } from "@/lib/types";

const VARIANTS: Record<OrderStatus, "default" | "success" | "warning" | "destructive" | "muted"> = {
  PENDING: "warning",
  PREPARING: "default",
  READY_FOR_PICKUP: "success",
  COMPLETED: "muted",
  CANCELLED: "destructive",
};

export const OrderStatusBadge = ({ status }: { status: OrderStatus }) => (
  <Badge variant={VARIANTS[status]}>{statusLabel(status)}</Badge>
);
