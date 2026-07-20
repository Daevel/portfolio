"use client";

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

export default function ContactsPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="font-medium text-muted-foreground text-sm uppercase tracking-[0.24em]">
          {t.contacts.sectionLabel.toUpperCase()}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.contacts.h1Title.toUpperCase()}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-8">
          {t.contacts.introduction.toUpperCase()}
        </p>
      </section>
      <section className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Contact links">
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href={`mailto:${siteConfig.email}`}
        >
          {t.contacts.email.toUpperCase()}
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href={siteConfig.links.github}
        >
          {t.contacts.github.toUpperCase()}
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href={siteConfig.links.linkedin}
        >
          {t.contacts.linkedin.toUpperCase()}
        </Link>
      </section>
    </Container>
  );
}
