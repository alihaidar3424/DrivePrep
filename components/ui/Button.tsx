import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
  size?: "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50";

export function Button({
  className,
  variant = "primary",
  fullWidth,
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        base,
        size === "md" && "min-h-11",
        size === "lg" && "min-h-14 text-base",
        fullWidth && "w-full",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-md hover:bg-primary-hover",
        variant === "secondary" &&
          "border-2 border-border bg-card text-foreground hover:bg-muted",
        variant === "ghost" && "bg-transparent text-foreground hover:bg-muted",
        className,
      )}
      {...props}
    />
  );
}

export function LinkButton({
  href,
  className,
  variant = "primary",
  fullWidth,
  size = "md",
  children,
}: {
  href: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
  size?: "md" | "lg";
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        size === "md" && "min-h-11",
        size === "lg" && "min-h-14 text-base",
        fullWidth && "w-full",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-md hover:bg-primary-hover",
        variant === "secondary" &&
          "border-2 border-border bg-card text-foreground hover:bg-muted",
        variant === "ghost" && "bg-transparent text-foreground hover:bg-muted",
        className,
      )}
    >
      {children}
    </Link>
  );
}
