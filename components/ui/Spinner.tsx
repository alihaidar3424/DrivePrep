import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type SpinnerProps = {
  className?: string;
  label?: string;
};

export function Spinner({ className, label = "Loading" }: SpinnerProps) {
  return (
    <Loader2
      className={cn("size-4 animate-spin", className)}
      aria-hidden={label ? undefined : true}
      aria-label={label || undefined}
      role={label ? "status" : undefined}
    />
  );
}
