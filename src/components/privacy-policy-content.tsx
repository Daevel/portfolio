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
    <Container className="max-w-none py-12 sm:py-16 lg:py-24" data-header-theme="light">
      <section>
        <Reveal className="mt-12">
          <h1 className="mt-4 max-w-[13ch] text-[clamp(3.75rem,14vw,6rem)] font-bold leading-[0.9] tracking-tighter lg:max-w-[16ch]">
            {t.privacyPolicy.h1Title.toUpperCase()}
          </h1>
          <p className="mt-6 max-w-5xl text-[clamp(1.75rem,6vw,3rem)] font-bold leading-[1.05] tracking-tighter text-primary">
            {t.privacyPolicy.introduction.toUpperCase()}
          </p>
        </Reveal>
      </section>

      <Reveal className="mt-12 max-w-5xl space-y-10 sm:mt-16 sm:space-y-12" staggerChildren={0.08}>
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[clamp(2rem,7vw,2.5rem)] font-bold leading-none tracking-tighter text-primary">
              {section.title.toUpperCase()}
            </h2>
            <p className="mt-4 text-[clamp(1.35rem,5vw,1.5rem)] leading-[1.08] tracking-tighter text-secondary">
              {section.description.toUpperCase()}
            </p>
          </section>
        ))}
      </Reveal>

      <Reveal className="mt-12 max-w-5xl sm:mt-16">
        <h2 className="text-[clamp(2rem,7vw,2.5rem)] font-bold leading-none tracking-tighter text-primary">
          {t.privacyPolicy.contactTitle.toUpperCase()}
        </h2>
        <p className="mt-4 text-[clamp(1.35rem,5vw,1.5rem)] leading-[1.08] tracking-tighter text-secondary">
          {t.privacyPolicy.contactDescription.toUpperCase()} {siteConfig.email.toUpperCase()}
        </p>
        <p className="mt-8 text-[clamp(1.125rem,4vw,1.25rem)] tracking-tighter text-secondary">
          {t.privacyPolicy.lastUpdated.toUpperCase()}
        </p>
      </Reveal>
    </Container>
  );
}
