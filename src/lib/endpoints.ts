import { api } from "@/lib/api";
import type {
  Customer,
  LoginRequest,
  MenuItem,
  MenuItemRequest,
  Order,
  OrderSummary,
  PlaceOrderRequest,
  RegisterRequest,
  Staff,
  StatusUpdateRequest,
  StockUpdateRequest,
} from "@/lib/types";

export const customerAuthApi = {
  register: (body: RegisterRequest) => api.post<Customer>("/auth/register", body),
  login: (body: LoginRequest) => api.post<Customer>("/auth/login", body),
  logout: () => api.post<void>("/auth/logout"),
};

export const vendorAuthApi = {
  login: (body: LoginRequest) => api.post<Staff>("/vendor/auth/login", body),
  logout: () => api.post<void>("/vendor/auth/logout"),
};

export const accountApi = {
  me: () => api.get<Customer>("/account/me"),
  myOrders: () => api.get<OrderSummary[]>("/account/orders"),
};

export const menuApi = {
  browse: () => api.get<MenuItem[]>("/menu"),
  get: (id: number) => api.get<MenuItem>(`/menu/${id}`),
};

export const pickupSlotApi = {
  availableSlots: () => api.get<string[]>("/pickup-slots"),
};

export const orderApi = {
  getByCode: (code: string) => api.get<Order>(`/orders/${encodeURIComponent(code)}`),
  place: (body: PlaceOrderRequest) => api.post<Order>("/orders", body),
};

export const vendorMenuApi = {
  list: () => api.get<MenuItem[]>("/vendor/menu"),
  create: (body: MenuItemRequest) => api.post<MenuItem>("/vendor/menu", body),
  update: (id: number, body: MenuItemRequest) => api.put<MenuItem>(`/vendor/menu/${id}`, body),
  setStock: (id: number, body: StockUpdateRequest) => api.patch<MenuItem>(`/vendor/menu/${id}/stock`, body),
  toggleActive: (id: number) => api.patch<MenuItem>(`/vendor/menu/${id}/toggle-active`),
};

export const vendorOrderApi = {
  list: (filter: "active" | "all" = "active") => api.get<OrderSummary[]>(`/vendor/orders?filter=${filter}`),
  updateStatus: (id: number, body: StatusUpdateRequest) => api.patch<OrderSummary>(`/vendor/orders/${id}/status`, body),
};
