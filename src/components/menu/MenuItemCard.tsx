import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { formatCurrency } from "@/lib/utils";
import { Utensils } from "@/components/ui/icons";
import type { MenuItem } from "@/lib/types";

export const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const { addItem, lines } = useCart();
  const { showToast } = useToast();
  const [justAdded, setJustAdded] = useState(false);

  const inCart = lines.find((line) => line.menuItemId === item.id)?.quantity ?? 0;
  const canAddMore = item.inStock && inCart < item.availableQuantity;

  const handleAdd = () => {
    addItem(item, 1);
    showToast(`Added ${item.name} to cart`, "success");
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="aspect-[4/3] w-full bg-muted">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <Utensils className="h-8 w-8" />
          </div>
        )}
      </div>
      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight">{item.name}</h3>
          {!item.inStock && <Badge variant="destructive">Out of stock</Badge>}
        </div>
        {item.description && <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>}
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-base font-semibold text-primary">{formatCurrency(item.price)}</span>
          <Button size="sm" onClick={handleAdd} disabled={!canAddMore} variant={justAdded ? "secondary" : "primary"}>
            {justAdded ? "Added" : inCart > 0 ? `Add (${inCart} in cart)` : "Add to cart"}
          </Button>
        </div>
        {item.inStock && item.availableQuantity <= 5 && (
          <p className="text-xs text-warning">Only {item.availableQuantity} left</p>
        )}
      </CardContent>
    </Card>
  );
};
