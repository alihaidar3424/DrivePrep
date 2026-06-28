import { ExternalLink } from "lucide-react";
import type { Language } from "@/lib/validations";
import { t } from "@/lib/translations";

export type GuidelineSourceLinkView = {
  label: string;
  url: string;
};

type GuidelineSourceFooterProps = {
  lang: Language;
  source: string | null;
  links: GuidelineSourceLinkView[];
};

export function GuidelineSourceFooter({ lang, source, links }: GuidelineSourceFooterProps) {
  if (!source && links.length === 0) return null;

  return (
    <aside className="rounded-xl border border-border bg-muted/30 px-4 py-4">
      <h2 className="text-sm font-semibold text-foreground">{t(lang, "guidelineSources")}</h2>

      {source ? (
        <p className="mt-2 text-xs leading-5 text-muted-foreground">{source}</p>
      ) : null}

      {links.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                {link.label}
                <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                <span className="sr-only">{t(lang, "opensInNewTab")}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}
