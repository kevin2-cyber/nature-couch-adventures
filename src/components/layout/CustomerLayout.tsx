import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { ShoppingCart, Utensils } from "@/components/ui/icons";
import { useCart } from "@/context/CartContext";
import { useCustomerAuth } from "@/context/CustomerAuthContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-sm font-medium px-3 py-2 rounded-lg transition-colors",
    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted",
  );

export const CustomerLayout = () => {
  const { totalItems } = useCart();
  const { customer, logout } = useCustomerAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Utensils className="h-4 w-4" />
            </span>
            Canteen
          </Link>

          <nav className="hidden sm:flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Menu
            </NavLink>
            <NavLink to="/track" className={navLinkClass}>
              Track Order
            </NavLink>
            {customer && (
              <NavLink to="/orders" className={navLinkClass}>
                My Orders
              </NavLink>
            )}
          </nav>

          <div className="flex items-center gap-2">
            {customer ? (
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Hi, {customer.fullName.split(" ")[0]}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={async () => {
                    await logout();
                    navigate("/");
                  }}
                >
                  Log out
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")} className="hidden sm:inline-flex">
                Log in
              </Button>
            )}
            <Link to="/checkout">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
        <nav className="flex sm:hidden items-center gap-1 px-4 pb-2 overflow-x-auto">
          <NavLink to="/" end className={navLinkClass}>
            Menu
          </NavLink>
          <NavLink to="/track" className={navLinkClass}>
            Track
          </NavLink>
          {customer ? (
            <NavLink to="/orders" className={navLinkClass}>
              My Orders
            </NavLink>
          ) : (
            <NavLink to="/login" className={navLinkClass}>
              Log in
            </NavLink>
          )}
        </nav>
      </header>

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        Canteen Pre-Order Portal &middot; Skip the queue, order ahead.
      </footer>
    </div>
  );
};
