import { useEffect, useMemo, useState } from "react";
import { menuApi } from "@/lib/endpoints";
import type { MenuItem } from "@/lib/types";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { PageSpinner } from "@/components/ui/Spinner";
import { EmptyState } from "@/components/ui/EmptyState";
import { Input } from "@/components/ui/Input";
import { Search } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export const MenuPage = () => {
  const [items, setItems] = useState<MenuItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  useEffect(() => {
    menuApi
      .browse()
      .then(setItems)
      .catch(() => setError("Couldn't load the menu. Please refresh the page."));
  }, []);

  const categories = useMemo(() => {
    if (!items) return ["All"];
    return ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  }, [items]);

  const filtered = useMemo(() => {
    if (!items) return [];
    return items.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [items, category, query]);

  if (error) return <EmptyState title="Something went wrong" description={error} />;
  if (!items) return <PageSpinner />;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">Today's Menu</h1>
        <p className="text-muted-foreground text-sm mt-1">Order ahead and skip the queue at pickup.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search menu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium border transition-colors",
                category === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:bg-muted",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No items found" description="Try a different search or category." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
