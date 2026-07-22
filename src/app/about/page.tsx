"use client";

import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import profileImage from "../../../public/images/luigi-propic.jpeg";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-16 sm:py-24 max-w-none">
      <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
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

        <Reveal className="relative overflow-hidden border border-border bg-secondary">
          <Image
            alt={siteConfig.name}
            className="aspect-4/5 w-full object-cover"
            height={900}
            priority
            src={profileImage}
            width={720}
          />
        </Reveal>
      </section>

      <Reveal className="mt-12 w-full flex flex-col gap-20">
        <div className="flex flex-col items-start">
          <h2 className="text-8xl">1. {t.about.frontendArchitecture.toUpperCase()}</h2>
          <p className="text-3xl text-secondary/50">
            {t.about.frontendArchitectureDescription.toUpperCase()}
          </p>
        </div>

        <div className="flex flex-col text-right justify-end">
          <h2 className="text-8xl">2. {t.about.userExperience.toUpperCase()}</h2>
          <p className="text-3xl text-secondary/50">
            {t.about.userExperienceDescription.toUpperCase()}
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-8xl">3. {t.about.engineeringQuality.toUpperCase()}</h2>
          <p className="text-3xl text-secondary/50">
            {t.about.engineeringQualityDescription.toUpperCase()}
          </p>
        </div>
      </Reveal>
    </Container>
  );
}
