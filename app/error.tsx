"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button, LinkButton } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { mutedTextClassName } from "@/components/ui/Card";
import { LANG_COOKIE } from "@/lib/constants";
import { withLang } from "@/lib/language";
import { dirForLanguage, t } from "@/lib/translations";
import type { Language } from "@/lib/validations";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const lang: Language =
    typeof document !== "undefined" && document.cookie.includes(`${LANG_COOKIE}=ur`)
      ? "ur"
      : "en";
  const rtl = dirForLanguage(lang) === "rtl";
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    console.error(error);
  }, [error]);

  function handleReset() {
    if (resetting) return;
    setResetting(true);
    reset();
  }

  return (
    <AppShell lang={lang} rtl={rtl} nav="home" showBottomNav>
      <PageContainer withBottomNav className="py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">{t(lang, "errorTitle")}</h1>
        <p className={mutedTextClassName("mt-3")}>{t(lang, "errorHint")}</p>
        <div className="mt-8 flex flex-col gap-3">
          <Button
            type="button"
            fullWidth
            loading={resetting}
            disabled={resetting}
            onClick={handleReset}
          >
            {t(lang, "tryAgainAction")}
          </Button>
          <LinkButton href={withLang("/", lang)} variant="secondary" fullWidth>
            {t(lang, "navHome")}
          </LinkButton>
        </div>
      </PageContainer>
    </AppShell>
  );
}
