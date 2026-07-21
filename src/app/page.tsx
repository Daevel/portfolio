"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionReveal } from "@/components/motion/section-reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { featuredProjects } from "@/data/projects";
import { useTranslation } from "@/i18n/context";

const technologyRows = [siteConfig.technologies.slice(0, 4), siteConfig.technologies.slice(4)];

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden border-border border-b pt-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          src="/videos/hero-landing-video.mp4"
        />
        <div className="absolute inset-0 bg-black/60" />
        <Container className="relative z-10 w-full">
          <Reveal>
            <h1 className="text-8xl font-medium text-primary">{siteConfig.role.toUpperCase()}</h1>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-none">
          <SectionReveal>
            <h2 className="font-semibold tracking-tight sm:text-4xl">
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

      <section className="bg-muted py-16 sm:py-20">
        <Container>
          <Reveal
            className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
            staggerChildren={0.08}
          >
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.home.featuredProjects.toUpperCase()}
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {t.home.featuredProjectsDescription.toUpperCase()}
              </p>
            </div>
            <Link className={buttonVariants({ variant: "outline" })} href="/projects">
              {t.home.allProjects.toUpperCase()}
            </Link>
          </Reveal>
          <Reveal className="mt-8 grid gap-5 md:grid-cols-2" staggerChildren={0.08}>
            {featuredProjects.map((project) => (
              <Reveal
                className="border border-border bg-background p-4"
                key={project.slug}
                variant="scale"
              >
                <Image
                  alt={`Preview of ${project.title}`}
                  className="aspect-video border border-border object-cover"
                  height={360}
                  src={project.image}
                  width={640}
                />
                <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.summary}</p>
                <Link
                  className="mt-4 inline-flex font-medium text-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                  href={`/projects/${project.slug}`}
                >
                  {t.home.readCaseStudy.toUpperCase()}
                </Link>
              </Reveal>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="bg-primary p-8 text-primary-foreground sm:p-10">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
              {t.home.ctaTitle.toUpperCase()}
            </h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/80">
              {t.home.ctaDescription.toUpperCase()}
            </p>
            <Link
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "mt-6",
              })}
              href="/contacts"
            >
              {t.home.letsTalk.toUpperCase()}
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
