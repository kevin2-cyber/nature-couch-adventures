import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCustomerAuth } from "@/context/CustomerAuthContext";
import { Card, CardContent } from "@/components/ui/Card";
import { Input, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ApiRequestError } from "@/lib/api";

export const LoginPage = () => {
  const { login } = useCustomerAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-sm py-10">
      <h1 className="text-2xl font-bold text-center">Welcome back</h1>
      <p className="text-sm text-muted-foreground text-center mt-1">Log in to place and track your orders.</p>

      <Card className="mt-6">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@example.com"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
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

      <p className="text-center text-sm text-muted-foreground mt-4">
        New here?{" "}
        <Link to="/register" className="font-medium text-primary hover:underline">
          Create an account
        </Link>
      </p>
      <p className="text-center text-xs text-muted-foreground mt-6">
        Demo login: student@example.com / student123
      </p>
    </div>
  );
};
