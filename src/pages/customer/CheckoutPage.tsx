import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useCustomerAuth } from "@/context/CustomerAuthContext";
import { pickupSlotApi, orderApi } from "@/lib/endpoints";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Select, Label } from "@/components/ui/Input";
import { EmptyState } from "@/components/ui/EmptyState";
import { Minus, Plus, Trash2 } from "@/components/ui/icons";
import { formatCurrency, formatTime } from "@/lib/utils";
import { ApiRequestError } from "@/lib/api";

export const CheckoutPage = () => {
  const { lines, updateQuantity, removeItem, totalAmount, clear } = useCart();
  const { customer } = useCustomerAuth();
  const navigate = useNavigate();

  const [slots, setSlots] = useState<string[] | null>(null);
  const [pickupTime, setPickupTime] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    pickupSlotApi
      .availableSlots()
      .then((result) => {
        setSlots(result);
        if (result.length > 0) setPickupTime(result[0]);
      })
      .catch(() => setSlots([]));
  }, []);

  const handlePlaceOrder = async () => {
    setError(null);
    if (!customer) {
      navigate("/login", { state: { from: { pathname: "/checkout" } } });
      return;
    }
    if (!pickupTime) {
      setError("Please choose a pickup time.");
      return;
    }
    setSubmitting(true);
    try {
      const order = await orderApi.place({
        items: lines.map((line) => ({ menuItemId: line.menuItemId, quantity: line.quantity })),
        pickupTime,
      });
      clear();
      navigate(`/orders/${order.orderCode}`, { state: { justPlaced: true } });
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : "Couldn't place your order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (lines.length === 0) {
    return (
      <EmptyState
        title="Your cart is empty"
        description="Browse the menu and add something tasty."
        action={<Button onClick={() => navigate("/")}>Browse menu</Button>}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Your Order</h1>
        {lines.map((line) => (
          <Card key={line.menuItemId}>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{line.name}</p>
                <p className="text-sm text-muted-foreground">{formatCurrency(line.price)} each</p>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(line.menuItemId, line.quantity - 1)}
                >
                  <Minus className="h-3.5 w-3.5" />
                </Button>
                <span className="w-8 text-center font-medium">{line.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(line.menuItemId, line.quantity + 1)}
                  disabled={line.quantity >= line.availableQuantity}
                >
                  <Plus className="h-3.5 w-3.5" />
                </Button>
              </div>
              <p className="w-20 text-right font-semibold">{formatCurrency(Number(line.price) * line.quantity)}</p>
              <Button variant="ghost" size="icon" onClick={() => removeItem(line.menuItemId)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <Card className="sticky top-20">
          <CardContent className="p-5 flex flex-col gap-4">
            <h2 className="font-semibold text-lg">Order Summary</h2>

            <div>
              <Label htmlFor="pickupTime">Pickup time</Label>
              {slots === null ? (
                <p className="text-sm text-muted-foreground">Loading available times...</p>
              ) : slots.length === 0 ? (
                <p className="text-sm text-destructive">The canteen isn't taking pickups right now.</p>
              ) : (
                <Select id="pickupTime" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}>
                  {slots.map((slot) => (
                    <option key={slot} value={slot}>
                      {formatTime(slot)}
                    </option>
                  ))}
                </Select>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border pt-3 font-semibold">
              <span>Total</span>
              <span>{formatCurrency(totalAmount)}</span>
            </div>

            {!customer && (
              <p className="text-xs text-muted-foreground">You'll need to log in to place this order.</p>
            )}
            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button onClick={handlePlaceOrder} loading={submitting} disabled={slots?.length === 0} className="w-full">
              Place Order
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
