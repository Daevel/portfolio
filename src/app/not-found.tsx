"use client";

import { useRouter } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/context";

export default function NotFound() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Container
      className="grid min-h-[60vh] place-items-center py-16 text-center"
      data-header-theme="light"
    >
      <section>
        <p className="font-bold text-muted-foreground text-6xl uppercase tracking-tighter">
          {t.notFound.code}
        </p>
        <h1 className="mt-4 text-8xl font-bold tracking-tighter">
          {t.notFound.title.toUpperCase()}
        </h1>
        <p className="mt-4 text-secondary text-6xl">{t.notFound.description.toUpperCase()}</p>
        <Button
          className="mt-8 h-50 w-full border-4 border-primary bg-white text-6xl text-primary tracking-tighter transition-colors hover:bg-primary hover:text-white hover:underline hover:underline-offset-10"
          onClick={() => router.push("/")}
          type="button"
        >
          {t.notFound.backHome.toUpperCase()}
        </Button>
      </section>
    </Container>
  );
}
