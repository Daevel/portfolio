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
      <section className="relative min-h-svh overflow-hidden bg-primary">
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
              alt="Luigi Avitabile"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 900px"
              className="object-contain object-bottom"
            />
          </motion.div>
        </div>
      </section>

      {/* Works Section */}
      <ProjectsShowcase className="py-16 sm:py-20" />

      {/* Core Technologies Section */}
      <CoreTechnologies t={t} />

      {/* See all works CTA */}
      <section className="py-16 sm:py-20">
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
    <section className="py-16 sm:py-20">
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
                    className="group grid aspect-square w-full place-items-center border border-border bg-background p-3 transition-colors hover:bg-primary"
                    key={technology.name}
                    title={technology.name}
                  >
                    <Image
                      alt={`${technology.name} logo`}
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
