"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { useTranslation } from "@/i18n/context";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <Container className="mt-20 max-w-none py-12 sm:py-16 lg:py-24" data-header-theme="light">
      <section>
        <Reveal>
          <h1 className="mt-4 text-[clamp(3.75rem,14vw,6rem)] font-bold leading-[0.9] tracking-tighter">
            {t.projects.h1Title.toUpperCase()}
          </h1>
          <p className="mt-6 text-[clamp(1.75rem,6vw,3rem)] font-bold leading-[1.05] tracking-tighter text-primary">
            {t.projects.introduction.toUpperCase()}
          </p>
        </Reveal>
      </section>
      <ProjectsShowcase className="mt-10 sm:mt-12 lg:mt-16" />
    </Container>
  );
}
