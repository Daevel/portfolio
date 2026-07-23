"use client";

import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionReveal } from "@/components/motion/section-reveal";
import { ContactSection } from "@/components/sections/contact-section";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

const technologyRows = [siteConfig.technologies.slice(0, 4), siteConfig.technologies.slice(4)];

export default function HomePage() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden border-border border-b pt-16">
        <Container className="relative z-10 w-full">
          <Reveal>
            <h1 className="text-9xl text-center justify-center font-bold text-primary tracking-tighter">
              {siteConfig.role.toUpperCase()}
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* Works Section */}
      <ProjectsShowcase className="py-16 sm:py-20" />

      {/* Core Technologies Section */}
      <section className="py-16 sm:py-20">
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
          </SectionReveal>
        </Container>
      </section>

      {/* Works section */}
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
