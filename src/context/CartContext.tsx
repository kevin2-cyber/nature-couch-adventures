import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { MenuItem } from "@/lib/types";

export interface CartLine {
  menuItemId: number;
  name: string;
  price: string;
  quantity: number;
  availableQuantity: number;
}

interface CartContextValue {
  lines: CartLine[];
  addItem: (item: MenuItem, quantity?: number) => void;
  updateQuantity: (menuItemId: number, quantity: number) => void;
  removeItem: (menuItemId: number) => void;
  clear: () => void;
  totalItems: number;
  totalAmount: number;
}

const STORAGE_KEY = "canteen.cart";
const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    const cached = localStorage.getItem(STORAGE_KEY);
    return cached ? (JSON.parse(cached) as CartLine[]) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const addItem = (item: MenuItem, quantity = 1) => {
    setLines((current) => {
      const existing = current.find((line) => line.menuItemId === item.id);
      const cap = item.availableQuantity;
      if (existing) {
        return current.map((line) =>
          line.menuItemId === item.id ? { ...line, quantity: Math.min(line.quantity + quantity, cap) } : line,
        );
      }
      return [
        ...current,
        { menuItemId: item.id, name: item.name, price: item.price, quantity: Math.min(quantity, cap), availableQuantity: cap },
      ];
    });
  };

  const updateQuantity = (menuItemId: number, quantity: number) => {
    setLines((current) => {
      if (quantity <= 0) return current.filter((line) => line.menuItemId !== menuItemId);
      return current.map((line) =>
        line.menuItemId === menuItemId ? { ...line, quantity: Math.min(quantity, line.availableQuantity) } : line,
      );
    });
  };

  const removeItem = (menuItemId: number) => {
    setLines((current) => current.filter((line) => line.menuItemId !== menuItemId));
  };

  const clear = () => setLines([]);

  const { totalItems, totalAmount } = useMemo(
    () => ({
      totalItems: lines.reduce((sum, line) => sum + line.quantity, 0),
      totalAmount: lines.reduce((sum, line) => sum + Number(line.price) * line.quantity, 0),
    }),
    [lines],
  );

  return (
    <CartContext.Provider value={{ lines, addItem, updateQuantity, removeItem, clear, totalItems, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
