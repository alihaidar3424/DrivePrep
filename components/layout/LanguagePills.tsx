"use client";

import { cn } from "@/lib/utils";
import { withLang } from "@/lib/language";
import type { Language } from "@/lib/validations";
import { t } from "@/lib/translations";
import { NavLink } from "@/components/ui/NavLink";

type LanguagePillsProps = {
  lang: Language;
  basePath: string;
};

export function LanguagePills({ lang, basePath }: LanguagePillsProps) {
  return (
    <div className="flex rounded-full bg-muted p-1">
      <NavLink
        href={withLang(basePath, "en")}
        className={cn(
          "rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-3",
          lang === "en"
            ? "bg-foreground text-background shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {t(lang, "english")}
      </NavLink>
      <NavLink
        href={withLang(basePath, "ur")}
        className={cn(
          "rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors urdu-text sm:px-3",
          lang === "ur"
            ? "bg-foreground text-background shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {t(lang, "urdu")}
      </NavLink>
    </div>
  );
}
