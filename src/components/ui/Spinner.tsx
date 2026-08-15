import { cn } from "@/lib/utils";

export const Spinner = ({ className }: { className?: string }) => (
  <div
    className={cn("h-6 w-6 rounded-full border-2 border-muted-foreground/30 border-t-primary animate-spin", className)}
  />
);

export const PageSpinner = () => (
  <div className="flex items-center justify-center py-24">
    <Spinner className="h-8 w-8" />
  </div>
);
