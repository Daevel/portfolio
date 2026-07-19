import type { Metadata } from "next";

import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "About",
  description: "Profilo professionale di Luigi Avitabile, Frontend Software Engineer.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="font-medium text-muted-foreground text-sm uppercase tracking-[0.24em]">
          About
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Frontend engineering con attenzione a prodotto, accessibilita e qualita.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-8">
          Sono Luigi Avitabile, Frontend Software Engineer. Costruisco interfacce moderne usando
          React, Angular e TypeScript, con un approccio pragmatico alla scalabilita del codice.
        </p>
      </section>
      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          [
            "Frontend architecture",
            "Strutture chiare, componenti riutilizzabili e confini tecnici comprensibili.",
          ],
          [
            "User experience",
            "Interfacce responsive, accessibili e coerenti con gli obiettivi del prodotto.",
          ],
          [
            "Engineering quality",
            "Type safety, linting, performance e attenzione alla manutenzione nel tempo.",
          ],
        ].map(([title, description]) => (
          <article className="border border-border p-6" key={title}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-muted-foreground leading-7">{description}</p>
          </article>
        ))}
      </section>
    </Container>
  );
}
