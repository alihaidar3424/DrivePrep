"use client";

import { useCallback, useRef, useState } from "react";

export function useBusyLock(cooldownMs = 300) {
  const [busy, setBusy] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const run = useCallback(
    (action: () => void) => {
      if (busy) return false;

      setBusy(true);
      action();

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setBusy(false);
        timerRef.current = null;
      }, cooldownMs);

      return true;
    },
    [busy, cooldownMs],
  );

  return { busy, run };
}
