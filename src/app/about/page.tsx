"use client";

import { Container } from "@/components/layout/container";
import { Reveal, RevealChild } from "@/components/motion/reveal";
import { useTranslation } from "@/i18n/context";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-16 sm:py-24">
      <section className="max-w-3xl">
        <Reveal>
          <p className="font-medium text-muted-foreground text-sm uppercase tracking-[0.24em]">
            {t.about.sectionLabel.toUpperCase()}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.about.h1Title.toUpperCase()}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-8">
            {t.about.introduction.toUpperCase()}
          </p>
        </Reveal>
      </section>
      <Reveal className="mt-12 grid gap-5 md:grid-cols-3" staggerChildren={0.1}>
        {[
          [t.about.frontendArchitecture, t.about.frontendArchitectureDescription],
          [t.about.userExperience, t.about.userExperienceDescription],
          [t.about.engineeringQuality, t.about.engineeringQualityDescription],
        ].map(([title, description]) => (
          <RevealChild className="border border-border p-6" key={title} variant="fade-up">
            <h2 className="text-xl font-semibold">{title.toUpperCase()}</h2>
            <p className="mt-3 text-muted-foreground leading-7">{description.toUpperCase()}</p>
          </RevealChild>
        ))}
      </Reveal>
    </Container>
  );
}
