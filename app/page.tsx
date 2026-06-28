import { BookOpen, PlayCircle, ShieldCheck } from "lucide-react";
import { AppLogo } from "@/components/brand/AppLogo";
import { AppShell } from "@/components/layout/AppShell";
import { LinkButton } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { Card, mutedTextClassName } from "@/components/ui/Card";
import { withLang } from "@/lib/language";
import { resolveLanguage } from "@/lib/resolve-language";
import { dirForLanguage, t } from "@/lib/translations";

type HomePageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const lang = await resolveLanguage(params.lang);
  const rtl = dirForLanguage(lang) === "rtl";

  return (
    <AppShell lang={lang} rtl={rtl} nav="home" showBottomNav langBasePath="/">
      <PageContainer withBottomNav className="page-stack">
        <section className="text-center">
          <div className="relative mb-6 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-800 px-6 py-10 shadow-sm dark:from-emerald-950 dark:via-teal-950 dark:to-emerald-900">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.06)_50%,transparent_51%)] bg-[length:36px_100%]" />
            <div className="relative flex flex-col items-center">
              <AppLogo lang={lang} size="hero" showTagline variant="onDark" className="flex-col items-center gap-4 text-center" />
            </div>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-foreground">{t(lang, "homeTitle")}</h1>
          <p className={mutedTextClassName("mx-auto mt-3 max-w-sm text-base leading-7")}>
            {t(lang, "homeSubtitle")}
          </p>
        </section>

        <section className="section-stack">
          <LinkButton href={withLang("/start", lang)} fullWidth size="lg">
            <PlayCircle className="h-5 w-5" />
            {t(lang, "startPractice")}
          </LinkButton>
          <LinkButton href={withLang("/guidelines", lang)} fullWidth size="lg" variant="secondary">
            <BookOpen className="h-5 w-5" />
            {t(lang, "readGuidelines")}
          </LinkButton>
          <p className="pt-1 text-center text-xs text-muted-foreground">{t(lang, "trustLine")}</p>
        </section>

        <section className="grid grid-cols-2 gap-3">
          <Card accent="primary" className="col-span-2">
            <div className="mb-2 flex items-start justify-between">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                Official
              </span>
            </div>
            <h3 className="font-semibold text-card-foreground">
              {lang === "ur" ? "ٹریفک سائنز" : "Traffic Signs"}
            </h3>
            <p className={mutedTextClassName("mt-1")}>
              {lang === "ur"
                ? "247+ سوالات کے ساتھ پاکستان کے قوانین کی مشق"
                : "Practice Pakistan road rules with 247+ questions"}
            </p>
          </Card>
          <Card>
            <p className="text-sm font-bold text-foreground">70%</p>
            <p className="text-xs text-muted-foreground">
              {lang === "ur" ? "پاس اسکور" : "Pass score"}
            </p>
          </Card>
          <Card>
            <p className="text-sm font-bold text-foreground">20</p>
            <p className="text-xs text-muted-foreground">
              {lang === "ur" ? "سوالات" : "Questions"}
            </p>
          </Card>
        </section>
      </PageContainer>
    </AppShell>
  );
}
