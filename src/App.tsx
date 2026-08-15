import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CustomerAuthProvider } from "@/context/CustomerAuthContext";
import { VendorAuthProvider } from "@/context/VendorAuthContext";
import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { VendorLayout } from "@/components/layout/VendorLayout";
import { CustomerProtectedRoute, VendorProtectedRoute } from "@/components/layout/ProtectedRoute";

import { MenuPage } from "@/pages/customer/MenuPage";
import { LoginPage } from "@/pages/customer/LoginPage";
import { RegisterPage } from "@/pages/customer/RegisterPage";
import { CheckoutPage } from "@/pages/customer/CheckoutPage";
import { OrderDetailPage } from "@/pages/customer/OrderDetailPage";
import { OrderLookupPage } from "@/pages/customer/OrderLookupPage";
import { MyOrdersPage } from "@/pages/customer/MyOrdersPage";

import { VendorLoginPage } from "@/pages/vendor/VendorLoginPage";
import { VendorOrdersPage } from "@/pages/vendor/VendorOrdersPage";
import { VendorMenuPage } from "@/pages/vendor/VendorMenuPage";

import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <CustomerAuthProvider>
          <VendorAuthProvider>
            <CartProvider>
              <Routes>
                <Route element={<CustomerLayout />}>
                  <Route path="/" element={<MenuPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/track" element={<OrderLookupPage />} />
                  <Route path="/orders/:code" element={<OrderDetailPage />} />
                  <Route element={<CustomerProtectedRoute />}>
                    <Route path="/orders" element={<MyOrdersPage />} />
                  </Route>
                </Route>

                <Route path="/vendor/login" element={<VendorLoginPage />} />
                <Route element={<VendorProtectedRoute />}>
                  <Route element={<VendorLayout />}>
                    <Route path="/vendor" element={<Navigate to="/vendor/orders" replace />} />
                    <Route path="/vendor/orders" element={<VendorOrdersPage />} />
                    <Route path="/vendor/menu" element={<VendorMenuPage />} />
                  </Route>
                </Route>

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </CartProvider>
          </VendorAuthProvider>
        </CustomerAuthProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}
