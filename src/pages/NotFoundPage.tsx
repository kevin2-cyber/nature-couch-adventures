import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
    <p className="text-5xl font-bold text-primary">404</p>
    <p className="text-muted-foreground">This page doesn't exist.</p>
    <Link to="/">
      <Button>Back to menu</Button>
    </Link>
  </div>
);
