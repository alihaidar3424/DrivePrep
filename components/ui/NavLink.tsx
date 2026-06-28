"use client";

import Link from "next/link";
import { useLinkStatus } from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/Spinner";

type NavLinkProps = ComponentProps<typeof Link> & {
  showSpinner?: boolean;
};

export function NavLink({ className, children, showSpinner = false, ...props }: NavLinkProps) {
  return (
    <Link className={className} {...props}>
      <NavLinkStatus showSpinner={showSpinner}>{children}</NavLinkStatus>
    </Link>
  );
}

function NavLinkStatus({
  children,
  showSpinner,
}: {
  children: ReactNode;
  showSpinner: boolean;
}) {
  const { pending } = useLinkStatus();

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5",
        pending && "pointer-events-none opacity-60",
      )}
      aria-busy={pending || undefined}
    >
      {showSpinner && pending ? <Spinner className="size-3.5 shrink-0" /> : null}
      {children}
    </span>
  );
}
