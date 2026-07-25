"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
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
    <Container className="py-16 sm:py-24 max-w-none" data-header-theme="light">
      <section>
        <Reveal>
          <h1 className="mt-4 text-6xl font-bold tracking-tighter sm:text-8xl">
            {t.privacyPolicy.h1Title.toUpperCase()}
          </h1>
          <p className="mt-6 text-3xl font-bold text-primary leading-8">
            {t.privacyPolicy.introduction.toUpperCase()}
          </p>
        </Reveal>
      </section>

      <Reveal className="mt-16 max-w-5xl space-y-12" staggerChildren={0.08}>
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-4xl font-bold tracking-tighter text-primary">
              {section.title.toUpperCase()}
            </h2>
            <p className="mt-4 text-2xl text-secondary leading-tighter">
              {section.description.toUpperCase()}
            </p>
          </section>
        ))}
      </Reveal>

      <Reveal className="mt-16 max-w-5xl">
        <h2 className="text-4xl font-bold tracking-tighter text-primary">
          {t.privacyPolicy.contactTitle.toUpperCase()}
        </h2>
        <p className="mt-4 text-2xl text-secondary leading-tighter">
          {t.privacyPolicy.contactDescription.toUpperCase()} {siteConfig.email.toUpperCase()}
        </p>
        <p className="mt-8 text-secondary text-xl tracking-wide">
          {t.privacyPolicy.lastUpdated.toUpperCase()}
        </p>
      </Reveal>
    </Container>
  );
}
