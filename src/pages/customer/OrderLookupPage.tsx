import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/Card";
import { Input, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const OrderLookupPage = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    navigate(`/orders/${code.trim().toUpperCase()}`);
  };

  return (
    <div className="mx-auto max-w-sm py-10">
      <h1 className="text-2xl font-bold text-center">Track Your Order</h1>
      <p className="text-sm text-muted-foreground text-center mt-1">
        Enter the order code you received at checkout (e.g. CN-4F7XQ2).
      </p>

      <Card className="mt-6">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="code">Order code</Label>
              <Input
                id="code"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="CN-XXXXXX"
                className="uppercase tracking-wider"
              />
            </div>
            <Button type="submit" className="w-full">
              Track order
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
