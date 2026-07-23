"use client";

import Image from "next/image";

import { Container } from "@/components/layout/container";
import { AnimatedTitle } from "@/components/motion/animated-title";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import profileImage from "../../../public/images/luigi-propic.jpeg";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden border-border border-b pt-16">
        <Image
          alt={siteConfig.name}
          className="object-cover object-[center_28%] scale-100"
          fill
          priority
          src={profileImage}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <Container className="relative z-10 w-full pb-12">
          <Reveal>
            <h1 className="mt-4 text-6xl font-medium text-white tracking-tighter sm:text-8xl">
              {t.about.h1Title.toUpperCase()}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 leading-8">
              {t.about.introduction.toUpperCase()}
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-16 sm:py-24 max-w-none">
        <h2 className="font-semibold tracking-tighter sm:text-4xl">
          {t.about.approachTitle.toUpperCase()}
        </h2>
        <div className="mt-12 flex flex-col">
          <AnimatedTitle index={1}>{t.about.frontendArchitecture.toUpperCase()}</AnimatedTitle>
          <p className="mt-6 text-3xl text-secondary/50">
            {t.about.frontendArchitectureDescription.toUpperCase()}
          </p>

          <AnimatedTitle className="mt-30" index={2}>
            {t.about.userExperience.toUpperCase()}
          </AnimatedTitle>
          <p className="mt-6 text-3xl text-secondary/50">
            {t.about.userExperienceDescription.toUpperCase()}
          </p>

          <AnimatedTitle className="mt-30" index={3}>
            {t.about.engineeringQuality.toUpperCase()}
          </AnimatedTitle>
          <p className="mt-6 text-3xl text-secondary/50">
            {t.about.engineeringQualityDescription.toUpperCase()}
          </p>
        </div>
      </Container>
    </>
  );
}
