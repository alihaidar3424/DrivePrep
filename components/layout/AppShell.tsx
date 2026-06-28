import Link from "next/link";
import { cn } from "@/lib/utils";
import { withLang } from "@/lib/language";
import type { Language } from "@/lib/validations";
import { t } from "@/lib/translations";
import { AppLogo } from "@/components/brand/AppLogo";
import { InstallPrompt } from "@/components/pwa/InstallPrompt";
import { BottomNav } from "@/components/layout/BottomNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

type AppShellProps = {
  lang: Language;
  rtl?: boolean;
  nav?: "home" | "guidelines" | "start" | "none";
  showBottomNav?: boolean;
  backHref?: string;
  langBasePath?: string;
  children: React.ReactNode;
};

export function AppShell({
  lang,
  rtl = false,
  nav = "none",
  showBottomNav = false,
  backHref,
  langBasePath = "/",
  children,
}: AppShellProps) {
  return (
    <div dir={rtl ? "rtl" : "ltr"} className={cn("min-h-dvh bg-background", rtl && "urdu-text")}>
      <InstallPrompt lang={lang} />
      <header
        className="sticky top-0 z-[90] border-b border-border backdrop-blur-md"
        style={{ backgroundColor: "var(--header)" }}
      >
        <div className="mx-auto flex h-16 max-w-lg items-center justify-between gap-2 px-4 sm:px-5">
          <div className="flex min-w-0 items-center gap-1">
            {backHref ? (
              <Link
                href={backHref}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={t(lang, "back")}
              >
                ←
              </Link>
            ) : null}
            <Link href={withLang("/", lang)} className="min-w-0">
              <AppLogo lang={lang} size="sm" />
            </Link>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle lang={lang} />
            <LanguagePills lang={lang} basePath={langBasePath} />
          </div>
        </div>
      </header>
      {children}
      {showBottomNav && nav !== "none" ? <BottomNav lang={lang} active={nav} /> : null}
    </div>
  );
}

function LanguagePills({ lang, basePath }: { lang: Language; basePath: string }) {
  return (
    <div className="flex rounded-full bg-muted p-1">
      <Link
        href={withLang(basePath, "en")}
        className={cn(
          "rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-3",
          lang === "en"
            ? "bg-foreground text-background shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {t(lang, "english")}
      </Link>
      <Link
        href={withLang(basePath, "ur")}
        className={cn(
          "rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors urdu-text sm:px-3",
          lang === "ur"
            ? "bg-foreground text-background shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {t(lang, "urdu")}
      </Link>
    </div>
  );
}
