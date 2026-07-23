"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { useTranslation } from "@/i18n/context";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-16 sm:py-24 max-w-none">
      <section>
        <Reveal>
          <h1 className="mt-4 text-6xl font-semibold tracking-tight">
            {t.projects.h1Title.toUpperCase()}
          </h1>
          <p className="mt-6 text-xl font-bold text-primary leading-8">
            {t.projects.introduction.toUpperCase()}
          </p>
        </Reveal>
      </section>
      <ProjectsShowcase className="mt-12" />
    </Container>
  );
}
