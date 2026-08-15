import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useCustomerAuth } from "@/context/CustomerAuthContext";
import { useVendorAuth } from "@/context/VendorAuthContext";
import { PageSpinner } from "@/components/ui/Spinner";

export const CustomerProtectedRoute = () => {
  const { customer, loading } = useCustomerAuth();
  const location = useLocation();

  if (loading) return <PageSpinner />;
  if (!customer) return <Navigate to="/login" state={{ from: location }} replace />;
  return <Outlet />;
};

export const VendorProtectedRoute = () => {
  const { staff } = useVendorAuth();
  if (!staff) return <Navigate to="/vendor/login" replace />;
  return <Outlet />;
};
