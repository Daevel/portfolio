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
        className="relative flex min-h-svh items-end overflow-hidden border-border border-b"
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
        <Container className="relative z-10 w-full pb-10 sm:pb-12">
          <Reveal>
            <h1 className="mt-4 max-w-[12ch] text-[clamp(3.5rem,13vw,6rem)] font-medium leading-[0.9] tracking-tighter text-white lg:max-w-[16ch]">
              {t.about.h1Title.toUpperCase()}
            </h1>
            <p className="mt-6 max-w-5xl text-[clamp(1.75rem,6vw,3rem)] font-bold leading-[1.05] tracking-tighter text-primary">
              {t.about.introduction.toUpperCase()}
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="max-w-none py-12 sm:py-16 lg:py-24" data-header-theme="light">
        <h2 className="max-w-5xl text-[clamp(1.5rem,5vw,2.25rem)] font-semibold tracking-tighter">
          {t.about.approachTitle.toUpperCase()}
        </h2>
        <div className="mt-10 flex flex-col sm:mt-12">
          <AnimatedTitle index={1}>{t.about.frontendArchitecture.toUpperCase()}</AnimatedTitle>
          <p className="mt-5 max-w-5xl text-[clamp(1.75rem,6vw,3rem)] leading-[1.05] tracking-tighter text-secondary sm:mt-6">
            {t.about.frontendArchitectureDescription.toUpperCase()}
          </p>

          <AnimatedTitle className="mt-16 sm:mt-24 lg:mt-30" index={2}>
            {t.about.userExperience.toUpperCase()}
          </AnimatedTitle>
          <p className="mt-5 max-w-5xl text-[clamp(1.75rem,6vw,3rem)] leading-[1.05] tracking-tighter text-secondary sm:mt-6">
            {t.about.userExperienceDescription.toUpperCase()}
          </p>

          <AnimatedTitle className="mt-16 sm:mt-24 lg:mt-30" index={3}>
            {t.about.engineeringQuality.toUpperCase()}
          </AnimatedTitle>
          <p className="mt-5 max-w-5xl text-[clamp(1.75rem,6vw,3rem)] leading-[1.05] tracking-tighter text-secondary sm:mt-6">
            {t.about.engineeringQualityDescription.toUpperCase()}
          </p>
        </div>
      </Container>

      {/* Core Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20" data-header-theme="light">
        <Container className="max-w-none">
          <SectionReveal>
            <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] font-semibold tracking-tighter">
              {t.home.coreTechnologies.toUpperCase()}
            </h2>
            <div className="relative left-1/2 mt-6 w-[100dvw] -translate-x-1/2">
              {technologyRows.map((row, rowIndex) => (
                <div
                  className={
                    rowIndex === 0
                      ? "grid grid-cols-2 sm:grid-cols-4"
                      : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                  }
                  key={rowIndex}
                >
                  {row.map((technology) => (
                    <div
                      className="group grid aspect-square w-full place-items-center border-2 border-border bg-background p-4 transition-colors hover:bg-primary sm:p-6"
                      key={technology.name}
                      title={technology.name}
                    >
                      <Image
                        alt={`${technology.name} ${t.accessibility.logoAltSuffix}`}
                        className="size-[clamp(3rem,14vw,8rem)] object-contain transition group-hover:brightness-0 group-hover:invert"
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

      <ContactSection className="py-12 sm:py-16 lg:py-20" />
    </>
  );
}
