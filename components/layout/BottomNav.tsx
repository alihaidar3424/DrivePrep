"use client";

import { BookOpen, Home, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { withLang } from "@/lib/language";
import type { Language } from "@/lib/validations";
import { t } from "@/lib/translations";
import { NavLink } from "@/components/ui/NavLink";

type BottomNavProps = {
  lang: Language;
  active: "home" | "guidelines" | "start";
};

export function BottomNav({ lang, active }: BottomNavProps) {
  const items = [
    { key: "home" as const, href: withLang("/", lang), icon: Home, label: t(lang, "navHome") },
    {
      key: "guidelines" as const,
      href: withLang("/guidelines", lang),
      icon: BookOpen,
      label: t(lang, "readGuidelines"),
    },
    {
      key: "start" as const,
      href: withLang("/start", lang),
      icon: PlayCircle,
      label: t(lang, "startPractice"),
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 z-50 w-full border-t border-border pb-[env(safe-area-inset-bottom)] backdrop-blur-md"
      style={{ backgroundColor: "var(--nav)" }}
    >
      <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.key;
          return (
            <NavLink
              key={item.key}
              href={item.href}
              className={cn(
                "flex min-h-11 min-w-[4.5rem] flex-col items-center justify-center rounded-lg px-2 text-xs font-medium transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="mb-0.5 h-5 w-5" aria-hidden />
              <span className="max-w-[4.5rem] truncate">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
