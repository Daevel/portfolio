"use client";

import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionReveal } from "@/components/motion/section-reveal";
import { ContactSection } from "@/components/sections/contact-section";
import { DownloadCvButton } from "@/components/sections/download-cv-button";
import { experience } from "@/data/experience";
import { useTranslation } from "@/i18n/context";

export function ExperienceContent() {
  const { t } = useTranslation();

  return (
    <>
      <Container className="mt-20 max-w-none py-12 sm:py-16 lg:py-24" data-header-theme="light">
        <section>
          <Reveal>
            <h1 className="mt-4 max-w-6xl text-[clamp(2.75rem,10vw,6rem)] font-bold leading-[0.9] tracking-tighter">
              {t.experience.h1Title.toUpperCase()}
            </h1>
            <p className="mt-6 max-w-5xl text-[clamp(1.5rem,5vw,2.5rem)] font-bold leading-[1.05] tracking-tighter text-primary">
              {t.experience.introduction.toUpperCase()}
            </p>
            <DownloadCvButton className="mt-8" />
          </Reveal>
        </section>

        <ol className="mt-16 flex flex-col border-border border-t-2 sm:mt-20 lg:mt-24">
          {experience.map((entry) => (
            <li className="border-border border-b-2 py-10 sm:py-12" key={entry.key}>
              <SectionReveal className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-12">
                <div>
                  <p className="text-sm font-medium tracking-tight text-secondary sm:text-base">
                    {`${entry.startDate} – ${entry.endDate ?? t.experience.present}`.toUpperCase()}
                  </p>
                  <h2 className="mt-3 text-[clamp(1.75rem,5vw,2.75rem)] font-semibold leading-[1.05] tracking-tighter">
                    {entry.role.toUpperCase()}
                  </h2>
                  <a
                    aria-label={`${t.experience.visitCompanyWebsite}: ${entry.company}`}
                    className="mt-3 inline-flex items-center gap-1 text-[clamp(1.25rem,4vw,1.75rem)] font-bold tracking-tighter text-primary hover:underline hover:underline-offset-5"
                    href={entry.companyUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {entry.company.toUpperCase()}
                    <ArrowUpRight aria-hidden="true" className="size-[1em]" strokeWidth={2} />
                  </a>
                  <p className="mt-2 text-sm tracking-tight text-secondary sm:text-base">
                    {`${entry.location}${entry.remote ? ` · ${t.experience.remote}` : ""}`.toUpperCase()}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {entry.technologies.map((technology) => (
                      <li
                        className="border-2 border-border px-3 py-1 text-xs font-medium tracking-tight sm:text-sm"
                        key={technology}
                      >
                        {technology.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Highlights stay in sentence case: intentional exception to the uppercase
                    convention, since dense CV bullets are hard to read in all caps. */}
                <ul className="flex list-disc flex-col gap-3 pl-5 text-base leading-relaxed marker:text-primary sm:text-lg">
                  {t.experience.roles[entry.key].highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </SectionReveal>
            </li>
          ))}
        </ol>
      </Container>

      <ContactSection className="py-12 sm:py-16 lg:py-20" />
    </>
  );
}
