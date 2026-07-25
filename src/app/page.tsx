"use client";

import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ContactSection } from "@/components/sections/contact-section";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

export default function HomePage() {
  const router = useRouter();
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-svh overflow-hidden bg-primary" data-header-theme="dark">
        {/* Title positioning layer */}
        <div className="absolute inset-x-0 top-[7svh] z-10 flex justify-center px-4">
          <motion.h1
            className="whitespace-nowrap text-center font-bold leading-[0.8] tracking-tighter text-secondary select-none"
            style={{
              fontSize: "clamp(4.5rem, 11.5vw, 13rem)",
            }}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t.home.heroTitle.toUpperCase()}
          </motion.h1>
        </div>

        {/* Side descriptions */}
        <div className="pointer-events-none absolute inset-x-0 top-[46%] z-30 hidden -translate-y-1/4 xl:block">
          <Container className="grid max-w-none grid-cols-[minmax(240px,1fr)_minmax(640px,52vw)_minmax(240px,1fr)] items-center px-8 2xl:px-12">
            {/* Left description */}
            <motion.div
              className="justify-self-start text-background"
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.25,
                ease: "easeOut",
              }}
            >
              <h2 className="mb-3 text-6xl font-bold uppercase tracking-tighter">
                {t.home.heroSide.leftTitle.toUpperCase()}
              </h2>

              <p className="text-5xl font-bold leading-tight tracking-tighter">
                {t.home.heroSide.leftDescription.toUpperCase()}
              </p>
            </motion.div>

            {/* Empty central column reserved for portrait */}
            <div aria-hidden="true" />

            {/* Right description */}
            <motion.div
              className="justify-self-end text-right text-background"
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.35,
                ease: "easeOut",
              }}
            >
              <h2 className="mb-3 text-6xl font-bold uppercase tracking-tighter">
                {t.home.heroSide.rightTitle.toUpperCase()}
              </h2>

              <ul className="space-y-1 text-5xl font-bold leading-tight tracking-tighter">
                {t.home.heroSide.focusItems.map((item) => (
                  <li key={item}>{item.toUpperCase()}</li>
                ))}
              </ul>
            </motion.div>
          </Container>
        </div>

        {/* Portrait positioning layer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center">
          <motion.div
            className="relative h-[95svh] w-[min(96vw,1050px)] origin-bottom"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <Image
              src="/images/luigi-propic-cutout.png"
              alt={siteConfig.name}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 900px"
              className="object-contain object-bottom"
            />
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex h-40 items-end justify-center bg-linear-to-t from-black/70 via-black/20 to-transparent pb-8">
          <motion.p
            className="text-8xl font-bold uppercase tracking-tighter leading-tight text-background"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            {t.home.heroAlias}
          </motion.p>
        </div>
      </section>

      {/* Works Section */}
      <ProjectsShowcase className="py-16 sm:py-20" />

      {/* Core Technologies Section */}
      <CoreTechnologies t={t} />

      {/* See all works CTA */}
      <section className="py-16 sm:py-20" data-header-theme="light">
        <Container className="h-auto w-full max-w-none text-center align-bottom">
          <Button
            className="h-50 tracking-tighter w-full border-4 border-primary bg-white text-6xl text-primary transition-colors hover:bg-primary hover:text-white hover:underline hover:underline-offset-10"
            onClick={() => router.push("/projects")}
            type="button"
          >
            {t.home.seeMyWorks.toUpperCase()}
            <ArrowDownRight aria-hidden="true" className="size-[1.5em]" strokeWidth={2} />
          </Button>
        </Container>
      </section>

      {/* Contacts section */}
      <ContactSection className="py-16 sm:py-20" />
    </>
  );
}

function CoreTechnologies({ t }: { t: ReturnType<typeof useTranslation>["t"] }) {
  const technologyRows = [siteConfig.technologies.slice(0, 4), siteConfig.technologies.slice(4)];

  return (
    <section className="py-16 sm:py-20" data-header-theme="light">
      <Container className="max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
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
        </motion.div>
      </Container>
    </section>
  );
}
