import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useVendorAuth } from "@/context/VendorAuthContext";
import { Card, CardContent } from "@/components/ui/Card";
import { Input, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Store } from "@/components/ui/icons";
import { ApiRequestError } from "@/lib/api";

export const VendorLoginPage = () => {
  const { login } = useVendorAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(username, password);
      navigate("/vendor/orders");
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
            <Store className="h-5 w-5" />
          </span>
          <h1 className="text-2xl font-bold">Vendor Console</h1>
          <p className="text-sm text-muted-foreground">Manage the menu and incoming orders.</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input id="username" required value={username} onChange={(e) => setUsername(e.target.value)} placeholder="vendor" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" loading={loading} className="w-full">
                Log in
              </Button>
            </form>
          </CardContent>
        </Card>
        <p className="text-center text-xs text-muted-foreground mt-6">Demo login: vendor / canteen123</p>
      </div>
    </div>
  );
};
