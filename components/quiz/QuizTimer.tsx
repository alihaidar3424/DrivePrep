import { Clock } from "lucide-react";
import { t } from "@/lib/translations";
import type { Language } from "@/lib/validations";
import { cn } from "@/lib/utils";

type QuizTimerProps = {
  remainingMs: number;
  language: Language;
};

export function formatQuizTime(remainingMs: number): string {
  const totalSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function QuizTimer({ remainingMs, language }: QuizTimerProps) {
  const urgent = remainingMs <= 60_000;
  const warning = remainingMs <= 180_000;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-medium tabular-nums",
        urgent
          ? "bg-destructive/10 text-destructive"
          : warning
            ? "bg-amber-500/10 text-amber-700 dark:text-amber-400"
            : "bg-muted text-muted-foreground",
      )}
      aria-live="polite"
      aria-label={`${t(language, "timeRemaining")}: ${formatQuizTime(remainingMs)}`}
    >
      <Clock className="size-3.5 shrink-0" aria-hidden />
      <span>{formatQuizTime(remainingMs)}</span>
    </div>
  );
}
