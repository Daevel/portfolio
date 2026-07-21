"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

import en from "@/i18n/en.json";
import it from "@/i18n/it.json";
import type { Locale, Translation } from "@/i18n/types";

const translations: Record<Locale, Translation> = { it, en };

type TranslationContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

export function TranslationProvider({
  children,
  initialLocale = "en",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const t = useMemo(() => translations[locale], [locale]);

  const handleSetLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale: handleSetLocale, t }),
    [locale, handleSetLocale, t],
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }

  return context;
}
