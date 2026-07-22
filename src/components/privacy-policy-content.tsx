"use client";

import { Container } from "@/components/layout/container";
import { Reveal, RevealChild } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

export function PrivacyPolicyContent() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t.privacyPolicy.dataControllerTitle,
      description: t.privacyPolicy.dataControllerDescription,
    },
    {
      title: t.privacyPolicy.dataProcessedTitle,
      description: t.privacyPolicy.dataProcessedDescription,
    },
    {
      title: t.privacyPolicy.purposeTitle,
      description: t.privacyPolicy.purposeDescription,
    },
    {
      title: t.privacyPolicy.cookiesTitle,
      description: t.privacyPolicy.cookiesDescription,
    },
    {
      title: t.privacyPolicy.thirdPartiesTitle,
      description: t.privacyPolicy.thirdPartiesDescription,
    },
    {
      title: t.privacyPolicy.rightsTitle,
      description: t.privacyPolicy.rightsDescription,
    },
  ];

  return (
    <Container className="py-16 sm:py-24">
      <section className="max-w-4xl">
        <Reveal>
          <p className="font-medium text-muted-foreground text-sm uppercase tracking-[0.24em]">
            {t.privacyPolicy.sectionLabel.toUpperCase()}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            {t.privacyPolicy.h1Title.toUpperCase()}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-8">
            {t.privacyPolicy.introduction.toUpperCase()}
          </p>
        </Reveal>
      </section>

      <Reveal className="mt-12 grid gap-5 lg:grid-cols-2" staggerChildren={0.08}>
        {sections.map((section) => (
          <RevealChild className="border border-border p-6" key={section.title} variant="fade-up">
            <h2 className="text-xl font-semibold">{section.title.toUpperCase()}</h2>
            <p className="mt-3 text-muted-foreground leading-7">
              {section.description.toUpperCase()}
            </p>
          </RevealChild>
        ))}
      </Reveal>

      <Reveal className="mt-10 border border-border bg-secondary p-6">
        <h2 className="text-xl font-semibold">{t.privacyPolicy.contactTitle.toUpperCase()}</h2>
        <p className="mt-3 text-muted-foreground leading-7">
          {t.privacyPolicy.contactDescription.toUpperCase()} {siteConfig.email.toUpperCase()}
        </p>
        <p className="mt-4 text-muted-foreground text-sm">
          {t.privacyPolicy.lastUpdated.toUpperCase()}
        </p>
      </Reveal>
    </Container>
  );
}
