"use client";

import { useTranslation } from "@/i18n/context";

export function SkipToContent() {
  const { t } = useTranslation();

  return (
    <a
      className="sr-only z-50  bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
      href="#main-content"
    >
      {t.skipToContent}
    </a>
  );
}
