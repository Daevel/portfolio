import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contatti e link professionali di Luigi Avitabile.",
  alternates: {
    canonical: "/contacts",
  },
};

export default function ContactsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="font-medium text-muted-foreground text-sm uppercase tracking-[0.24em]">
          Contacts
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Parliamo di frontend, prodotto e nuove opportunita.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-8">
          Sostituisci questi riferimenti con i canali definitivi quando saranno pronti dominio,
          email professionale e profili aggiornati.
        </p>
      </section>
      <section className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Contact links">
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href={`mailto:${siteConfig.email}`}
        >
          Email
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href={siteConfig.links.github}
        >
          GitHub
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href={siteConfig.links.linkedin}
        >
          LinkedIn
        </Link>
      </section>
    </Container>
  );
}
