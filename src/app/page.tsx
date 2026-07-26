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
      <section className="relative h-svh overflow-hidden bg-primary" data-header-theme="dark">
        {/* Title positioning layer */}
        <div className="absolute inset-x-0 top-[18svh] z-10 flex justify-center px-4 sm:top-[12svh] xl:top-[7svh]">
          <motion.h1
            className="max-w-[12ch] text-center font-bold leading-[0.9] tracking-tighter text-secondary select-none sm:max-w-[10ch] sm:leading-[0.88] xl:max-w-none xl:whitespace-nowrap xl:leading-[0.82]"
            style={{
              fontSize: "clamp(4rem, 16vw, 13rem)",
            }}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t.home.heroTitle.toUpperCase()}
          </motion.h1>
        </div>

        {/* Side descriptions */}
        <div className="pointer-events-none absolute inset-x-0 top-[42%] z-30 hidden -translate-y-1/6 xl:block">
          <Container className="grid max-w-none grid-cols-[minmax(320px,1fr)_minmax(520px,45vw)_minmax(220px,0.8fr)] items-center px-8 2xl:grid-cols-[minmax(380px,1fr)_minmax(560px,45vw)_minmax(260px,0.8fr)] 2xl:px-12">
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
              <h2 className="mb-3 text-[clamp(2.75rem,3.6vw,4rem)] font-bold uppercase tracking-tighter">
                {t.home.heroSide.leftTitle.toUpperCase()}
              </h2>

              <p className="max-w-[18ch] text-[clamp(2.25rem,3vw,3.5rem)] font-bold leading-tight tracking-tighter 2xl:max-w-[22ch]">
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
              <h2 className="mb-3 text-[clamp(2.75rem,3.6vw,4rem)] font-bold uppercase tracking-tighter">
                {t.home.heroSide.rightTitle.toUpperCase()}
              </h2>

              <ul className="space-y-1 text-[clamp(2.25rem,3vw,3.5rem)] font-bold leading-tight tracking-tighter">
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
            className="relative h-[84svh] w-[min(150vw,680px)] origin-bottom sm:h-[88svh] sm:w-[min(108vw,900px)] xl:h-[95svh] xl:w-[min(96vw,1050px)]"
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

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex h-36 items-end justify-center bg-linear-to-t from-black/70 via-black/20 to-transparent px-5 pb-7 sm:h-40 sm:pb-8">
          <motion.p
            className="text-[clamp(4rem,18vw,6rem)] font-bold leading-tight tracking-tighter text-background uppercase"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            {t.home.heroAlias}
          </motion.p>
        </div>
      </section>

      <MobileHeroContext shouldReduceMotion={shouldReduceMotion} t={t} />

      {/* Works Section */}
      <ProjectsShowcase className="py-12 sm:py-16 lg:py-20" />

      {/* Core Technologies Section */}
      <CoreTechnologies t={t} />

      {/* See all works CTA */}
      <section className="py-12 sm:py-16 lg:py-20" data-header-theme="light">
        <Container className="h-auto w-full max-w-none text-center align-bottom">
          <Button
            className="h-auto min-h-28 w-full whitespace-normal border-4 border-primary bg-white px-4 py-6 text-center text-[clamp(2.5rem,9vw,4rem)] leading-[0.95] tracking-tighter text-primary transition-colors hover:bg-primary hover:text-white hover:underline hover:underline-offset-10 sm:min-h-40 lg:min-h-50"
            onClick={() => router.push("/projects")}
            type="button"
          >
            {t.home.seeMyWorks.toUpperCase()}
            <ArrowDownRight aria-hidden="true" className="size-[1.5em]" strokeWidth={2} />
          </Button>
        </Container>
      </section>

      {/* Contacts section */}
      <ContactSection className="py-12 sm:py-16 lg:py-20" />
    </>
  );
}

function MobileHeroContext({
  shouldReduceMotion,
  t,
}: {
  shouldReduceMotion: boolean | null;
  t: ReturnType<typeof useTranslation>["t"];
}) {
  return (
    <section className="bg-secondary py-10 text-background xl:hidden" data-header-theme="dark">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="mb-3 text-[clamp(2rem,9vw,3rem)] font-bold tracking-tighter uppercase">
              {t.home.heroSide.leftTitle.toUpperCase()}
            </h2>
            <p className="text-[clamp(1.5rem,6vw,2.25rem)] font-bold leading-tight tracking-tighter">
              {t.home.heroSide.leftDescription.toUpperCase()}
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          >
            <h2 className="mb-3 text-[clamp(2rem,9vw,3rem)] font-bold tracking-tighter uppercase">
              {t.home.heroSide.rightTitle.toUpperCase()}
            </h2>
            <ul className="space-y-1 text-[clamp(1.5rem,6vw,2.25rem)] font-bold leading-tight tracking-tighter">
              {t.home.heroSide.focusItems.map((item) => (
                <li key={item}>{item.toUpperCase()}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function CoreTechnologies({ t }: { t: ReturnType<typeof useTranslation>["t"] }) {
  const technologyRows = [siteConfig.technologies.slice(0, 4), siteConfig.technologies.slice(4)];

  return (
    <section className="py-12 sm:py-16 lg:py-20" data-header-theme="light">
      <Container className="max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
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
        </motion.div>
      </Container>
    </section>
  );
}
