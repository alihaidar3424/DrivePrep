import { LinkButton } from "@/components/ui/Button";
import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/ui/PageContainer";
import { mutedTextClassName } from "@/components/ui/Card";
import { resolveLanguage } from "@/lib/resolve-language";
import { dirForLanguage, t } from "@/lib/translations";
import { withLang } from "@/lib/language";

export default async function NotFound() {
  const lang = await resolveLanguage(undefined);
  const rtl = dirForLanguage(lang) === "rtl";

  return (
    <AppShell lang={lang} rtl={rtl} nav="home" showBottomNav>
      <PageContainer withBottomNav className="py-16 text-center">
        <p className="text-6xl font-black text-muted">404</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">{t(lang, "pageNotFound")}</h1>
        <p className={mutedTextClassName("mt-3")}>{t(lang, "pageNotFoundHint")}</p>
        <LinkButton href={withLang("/", lang)} className="mt-8" fullWidth>
          {t(lang, "navHome")}
        </LinkButton>
      </PageContainer>
    </AppShell>
  );
}
