"use client";

import { useActionState } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, inputClassName, labelClassName, mutedTextClassName } from "@/components/ui/Card";
import { createAttemptFormAction } from "@/lib/quiz";
import type { Language } from "@/lib/validations";
import { t } from "@/lib/translations";

type StartFormProps = {
  lang: Language;
};

function errorMessage(lang: Language, code?: string): string | null {
  if (!code) return null;
  if (code === "INSUFFICIENT_QUESTIONS") return t(lang, "errorInsufficientQuestions");
  return code;
}

export function StartForm({ lang }: StartFormProps) {
  const [state, formAction, pending] = useActionState(createAttemptFormAction, null);

  return (
    <form action={formAction} className="section-stack" aria-busy={pending || undefined}>
      <input type="hidden" name="language" value={lang} />

      {state?.error ? (
        <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive-muted p-4 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMessage(lang, state.error)}</span>
        </div>
      ) : null}

      <label className="block space-y-2">
        <span className={labelClassName()}>{t(lang, "name")}</span>
        <input
          name="name"
          required
          minLength={2}
          maxLength={100}
          disabled={pending}
          placeholder={t(lang, "namePlaceholder")}
          className={inputClassName()}
        />
      </label>

      <label className="block space-y-2">
        <span className={labelClassName()}>{t(lang, "phone")}</span>
        <input
          name="phone"
          required
          minLength={10}
          maxLength={20}
          inputMode="tel"
          disabled={pending}
          placeholder={t(lang, "phonePlaceholder")}
          className={inputClassName()}
        />
      </label>

      <Card>
        <p className={mutedTextClassName("leading-6")}>{t(lang, "privacyNote")}</p>
      </Card>

      <Button type="submit" fullWidth size="lg" loading={pending} disabled={pending}>
        {t(lang, "startTest")}
      </Button>
    </form>
  );
}
