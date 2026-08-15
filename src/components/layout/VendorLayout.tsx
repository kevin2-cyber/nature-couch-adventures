import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ClipboardList, LogOut, Store, Utensils } from "@/components/ui/icons";
import { useVendorAuth } from "@/context/VendorAuthContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg transition-colors",
    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted",
  );

export const VendorLayout = () => {
  const { staff, logout } = useVendorAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
              <Store className="h-4 w-4" />
            </span>
            Vendor Console
          </div>
          <nav className="flex items-center gap-1">
            <NavLink to="/vendor/orders" className={navLinkClass}>
              <ClipboardList className="h-4 w-4" /> Orders
            </NavLink>
            <NavLink to="/vendor/menu" className={navLinkClass}>
              <Utensils className="h-4 w-4" /> Menu
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-sm text-muted-foreground">{staff?.fullName}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={async () => {
                await logout();
                navigate("/vendor/login");
              }}
            >
              <LogOut className="h-4 w-4" /> Log out
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};
