"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { AnimatedTitle } from "@/components/motion/animated-title";
import { Reveal } from "@/components/motion/reveal";
import { SectionReveal } from "@/components/motion/section-reveal";
import { ContactSection } from "@/components/sections/contact-section";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import motoImage from "../../../public/images/luigi-moto.jpeg";
import surfImage from "../../../public/images/luigi-surf.jpeg";

export default function AboutPage() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const technologyRows = [siteConfig.technologies.slice(0, 4), siteConfig.technologies.slice(4)];

  return (
    <>
      <section
        className="relative flex min-h-screen items-end overflow-hidden border-border border-b"
        data-header-theme="dark"
      >
        <div className="absolute inset-0 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <motion.div
            className="relative overflow-hidden"
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Image
              alt={siteConfig.name}
              className="scale-x-[-1] object-cover object-center"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              src={surfImage}
            />
          </motion.div>
          <motion.div
            className="relative overflow-hidden"
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
          >
            <Image
              alt={siteConfig.name}
              className="object-cover object-center"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              src={motoImage}
            />
          </motion.div>
        </div>
        <motion.div
          className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"
          initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
        />
        <Container className="relative z-10 w-full pb-12">
          <Reveal>
            <h1 className="mt-4 text-6xl font-medium text-white tracking-tighter sm:text-8xl">
              {t.about.h1Title.toUpperCase()}
            </h1>
            <p className="mt-6 text-3xl font-bold text-primary tracking-wide leading-tight">
              {t.about.introduction.toUpperCase()}
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-16 sm:py-24 max-w-none" data-header-theme="light">
        <h2 className="font-semibold tracking-tighter sm:text-4xl">
          {t.about.approachTitle.toUpperCase()}
        </h2>
        <div className="mt-12 flex flex-col">
          <AnimatedTitle index={1}>{t.about.frontendArchitecture.toUpperCase()}</AnimatedTitle>
          <p className="mt-6 text-3xl text-secondary">
            {t.about.frontendArchitectureDescription.toUpperCase()}
          </p>

          <AnimatedTitle className="mt-30" index={2}>
            {t.about.userExperience.toUpperCase()}
          </AnimatedTitle>
          <p className="mt-6 text-3xl text-secondary">
            {t.about.userExperienceDescription.toUpperCase()}
          </p>

          <AnimatedTitle className="mt-30" index={3}>
            {t.about.engineeringQuality.toUpperCase()}
          </AnimatedTitle>
          <p className="mt-6 text-3xl text-secondary">
            {t.about.engineeringQualityDescription.toUpperCase()}
          </p>
        </div>
      </Container>

      {/* Core Technologies Section */}
      <section className="py-16 sm:py-20" data-header-theme="light">
        <Container className="max-w-none">
          <SectionReveal>
            <h2 className="font-semibold tracking-tighter sm:text-4xl">
              {t.home.coreTechnologies.toUpperCase()}
            </h2>
            <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2">
              {technologyRows.map((row, rowIndex) => (
                <div
                  className={rowIndex === 0 ? "grid grid-cols-4" : "grid grid-cols-5"}
                  key={rowIndex}
                >
                  {row.map((technology) => (
                    <div
                      className="group grid aspect-square w-full place-items-center border-2 border-border bg-background p-3 transition-colors hover:bg-primary"
                      key={technology.name}
                      title={technology.name}
                    >
                      <Image
                        alt={`${technology.name} ${t.accessibility.logoAltSuffix}`}
                        className="size-10 object-contain transition group-hover:brightness-0 group-hover:invert sm:size-20 lg:size-32"
                        height={128}
                        src={technology.path}
                        width={128}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </SectionReveal>
        </Container>
      </section>

      <ContactSection className="py-16 sm:py-20" />
    </>
  );
}
