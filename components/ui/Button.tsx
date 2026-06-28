"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { useLinkStatus } from "next/link";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/Spinner";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
  size?: "md" | "lg";
  loading?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50";

function buttonClassName({
  className,
  variant = "primary",
  fullWidth,
  size = "md",
}: {
  className?: string;
  variant?: ButtonProps["variant"];
  fullWidth?: boolean;
  size?: ButtonProps["size"];
}) {
  return cn(
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
  );
}

export function Button({
  className,
  variant = "primary",
  fullWidth,
  size = "md",
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClassName({ className, variant, fullWidth, size })}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <Spinner className="size-4 shrink-0" label="" /> : null}
      {children}
    </button>
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
  variant?: ButtonProps["variant"];
  fullWidth?: boolean;
  size?: ButtonProps["size"];
  children: ReactNode;
}) {
  return (
    <Link href={href} className={buttonClassName({ className, variant, fullWidth, size })}>
      <LinkButtonStatus>{children}</LinkButtonStatus>
    </Link>
  );
}

function LinkButtonStatus({ children }: { children: ReactNode }) {
  const { pending } = useLinkStatus();

  return (
    <span
      className={cn(
        "inline-flex w-full items-center justify-center gap-2",
        pending && "pointer-events-none opacity-70",
      )}
      aria-busy={pending || undefined}
    >
      {pending ? <Spinner className="size-4 shrink-0" label="" /> : null}
      {children}
    </span>
  );
}
