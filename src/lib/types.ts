// Mirrors the DTOs in com.kimikevin.canteen.api.dto on the backend.

export interface MenuItem {
  id: number;
  name: string;
  description: string | null;
  category: string;
  price: string; // BigDecimal serializes as a JSON string-safe number; keep as string, parse for math
  availableQuantity: number;
  active: boolean;
  inStock: boolean;
}

export type OrderStatus = "PENDING" | "PREPARING" | "READY_FOR_PICKUP" | "COMPLETED" | "CANCELLED";

export const ORDER_STATUSES: OrderStatus[] = [
  "PENDING",
  "PREPARING",
  "READY_FOR_PICKUP",
  "COMPLETED",
  "CANCELLED",
];

export const ACTIVE_ORDER_STATUSES: OrderStatus[] = ["PENDING", "PREPARING", "READY_FOR_PICKUP"];

export interface OrderItem {
  name: string;
  quantity: number;
  unitPrice: string;
  lineTotal: string;
}

export interface Order {
  orderCode: string;
  status: OrderStatus;
  customerName: string;
  customerPhone: string;
  pickupTime: string; // "HH:mm:ss"
  createdAt: string; // ISO local date-time
  totalAmount: string;
  items: OrderItem[];
}

export interface OrderSummary {
  id: number;
  orderCode: string;
  status: OrderStatus;
  customerName: string;
  pickupTime: string;
  createdAt: string;
  totalAmount: string;
}

export interface Customer {
  id: number;
  fullName: string;
  email: string;
  phone: string;
}

export interface Staff {
  id: number;
  username: string;
  fullName: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface OrderLineRequest {
  menuItemId: number;
  quantity: number;
}

export interface PlaceOrderRequest {
  items: OrderLineRequest[];
  pickupTime: string;
}

export interface MenuItemRequest {
  name: string;
  description: string;
  category: string;
  price: number;
  availableQuantity: number;
}

export interface StockUpdateRequest {
  quantity: number;
}

export interface StatusUpdateRequest {
  status: OrderStatus;
}

export interface ApiError {
  error: string;
}
