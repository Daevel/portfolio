"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useTranslation } from "@/i18n/context";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-16 sm:py-24">
      <section className="max-w-4xl">
        <p className="font-medium text-muted-foreground text-sm uppercase tracking-[0.24em]">
          {t.projects.sectionLabel.toUpperCase()}
        </p>
        <h1 className="mt-4 text-6xl font-semibold tracking-tight">
          {t.projects.h1Title.toUpperCase()}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-8">
          {t.projects.introduction.toUpperCase()}
        </p>
      </section>
      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-label="Project list">
        {projects.map((project) => (
          <article
            className="flex flex-col  border border-border bg-background p-4"
            key={project.slug}
          >
            <Image
              alt={`Preview of ${project.title}`}
              className="aspect-video  border border-border object-cover"
              height={300}
              src={project.image}
              width={520}
            />
            <div className="flex flex-1 flex-col pt-5">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2 flex-1 text-muted-foreground leading-7">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    className=" bg-secondary px-3 py-1 text-secondary-foreground text-xs"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <Link
                className={buttonVariants({ variant: "outline", className: "mt-5" })}
                href={`/projects/${project.slug}`}
              >
                {t.projects.readCaseStudy.toUpperCase()}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </Container>
  );
}
