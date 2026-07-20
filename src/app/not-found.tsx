"use client";

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { useTranslation } from "@/i18n/context";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Container className="grid min-h-[60vh] place-items-center py-16 text-center">
      <section>
        <p className="font-medium text-muted-foreground text-sm uppercase tracking-[0.24em]">
          {t.notFound.code}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          {t.notFound.title.toUpperCase()}
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          {t.notFound.description.toUpperCase()}
        </p>
        <Link className={buttonVariants({ className: "mt-6" })} href="/">
          {t.notFound.backHome.toUpperCase()}
        </Link>
      </section>
    </Container>
  );
}
