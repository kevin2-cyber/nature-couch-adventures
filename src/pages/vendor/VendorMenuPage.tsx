import { useEffect, useState, type FormEvent } from "react";
import { vendorMenuApi } from "@/lib/endpoints";
import type { MenuItem } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input, Label, Textarea } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { PageSpinner } from "@/components/ui/Spinner";
import { Pencil, Plus, X } from "@/components/ui/icons";
import { useToast } from "@/context/ToastContext";
import { formatCurrency } from "@/lib/utils";
import { ApiRequestError } from "@/lib/api";

interface ItemFormState {
  name: string;
  description: string;
  category: string;
  price: string;
  availableQuantity: string;
}

const EMPTY_FORM: ItemFormState = { name: "", description: "", category: "", price: "", availableQuantity: "" };

export const VendorMenuPage = () => {
  const [items, setItems] = useState<MenuItem[] | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const { showToast } = useToast();

  const load = () => vendorMenuApi.list().then(setItems);

  useEffect(() => {
    load();
  }, []);

  if (!items) return <PageSpinner />;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Menu Management</h1>
        <Button onClick={() => setShowCreate((v) => !v)} variant={showCreate ? "outline" : "primary"}>
          {showCreate ? (
            <>
              <X className="h-4 w-4" /> Cancel
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" /> New item
            </>
          )}
        </Button>
      </div>

      {showCreate && (
        <MenuItemForm
          onCancel={() => setShowCreate(false)}
          onSubmit={async (form) => {
            await vendorMenuApi.create({
              name: form.name,
              description: form.description,
              category: form.category,
              price: Number(form.price),
              availableQuantity: Number(form.availableQuantity),
            });
            showToast("Menu item created", "success");
            setShowCreate(false);
            load();
          }}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) =>
          editingId === item.id ? (
            <MenuItemForm
              key={item.id}
              initial={{
                name: item.name,
                description: item.description ?? "",
                category: item.category,
                price: item.price,
                availableQuantity: String(item.availableQuantity),
              }}
              onCancel={() => setEditingId(null)}
              onSubmit={async (form) => {
                await vendorMenuApi.update(item.id, {
                  name: form.name,
                  description: form.description,
                  category: form.category,
                  price: Number(form.price),
                  availableQuantity: Number(form.availableQuantity),
                });
                showToast("Menu item updated", "success");
                setEditingId(null);
                load();
              }}
            />
          ) : (
            <MenuItemRow key={item.id} item={item} onEdit={() => setEditingId(item.id)} onChanged={load} />
          ),
        )}
      </div>
    </div>
  );
};

const MenuItemRow = ({ item, onEdit, onChanged }: { item: MenuItem; onEdit: () => void; onChanged: () => void }) => {
  const [stockInput, setStockInput] = useState(String(item.availableQuantity));
  const [savingStock, setSavingStock] = useState(false);
  const [togglingActive, setTogglingActive] = useState(false);
  const { showToast } = useToast();

  const handleStockSave = async () => {
    const quantity = Number(stockInput);
    if (Number.isNaN(quantity) || quantity < 0) {
      showToast("Enter a valid stock quantity", "error");
      return;
    }
    setSavingStock(true);
    try {
      await vendorMenuApi.setStock(item.id, { quantity });
      showToast("Stock updated", "success");
      onChanged();
    } catch (err) {
      showToast(err instanceof ApiRequestError ? err.message : "Couldn't update stock.", "error");
    } finally {
      setSavingStock(false);
    }
  };

  const handleToggleActive = async () => {
    setTogglingActive(true);
    try {
      await vendorMenuApi.toggleActive(item.id);
      onChanged();
    } finally {
      setTogglingActive(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold">{item.name}</h3>
              <Badge variant="muted">{item.category}</Badge>
              {!item.active && <Badge variant="destructive">Inactive</Badge>}
            </div>
            {item.description && <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>}
          </div>
          <Button variant="ghost" size="icon" onClick={onEdit}>
            <Pencil className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="font-semibold text-primary">{formatCurrency(item.price)}</span>

          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={0}
              value={stockInput}
              onChange={(e) => setStockInput(e.target.value)}
              className="w-20 h-8"
            />
            <Button size="sm" variant="outline" onClick={handleStockSave} loading={savingStock}>
              Set stock
            </Button>
          </div>
        </div>

        <Button size="sm" variant={item.active ? "outline" : "secondary"} onClick={handleToggleActive} loading={togglingActive}>
          {item.active ? "Deactivate" : "Activate"}
        </Button>
      </CardContent>
    </Card>
  );
};

const MenuItemForm = ({
  initial,
  onCancel,
  onSubmit,
}: {
  initial?: ItemFormState;
  onCancel: () => void;
  onSubmit: (form: ItemFormState) => Promise<void>;
}) => {
  const [form, setForm] = useState<ItemFormState>(initial ?? EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const isEdit = Boolean(initial);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});
    setSaving(true);
    try {
      await onSubmit(form);
    } catch (err) {
      if (err instanceof ApiRequestError) {
        setFieldErrors(err.fieldErrors ?? {});
        if (!err.fieldErrors) setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card className="border-primary/40">
      <CardContent className="p-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <h3 className="font-semibold">{isEdit ? "Edit item" : "New menu item"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                error={fieldErrors.name}
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                error={fieldErrors.category}
                placeholder="Main, Snack, Drink..."
              />
            </div>
            <div>
              <Label htmlFor="price">Price (GHS)</Label>
              <Input
                id="price"
                type="number"
                min={0.01}
                step="0.01"
                required
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                error={fieldErrors.price}
              />
            </div>
            {!isEdit && (
              <div>
                <Label htmlFor="availableQuantity">Starting stock</Label>
                <Input
                  id="availableQuantity"
                  type="number"
                  min={0}
                  required
                  value={form.availableQuantity}
                  onChange={(e) => setForm({ ...form, availableQuantity: e.target.value })}
                  error={fieldErrors.availableQuantity}
                />
              </div>
            )}
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              error={fieldErrors.description}
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <div className="flex gap-2">
            <Button type="submit" loading={saving}>
              {isEdit ? "Save changes" : "Create item"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
