"use client";

import Image from "next/image";
import Link from "next/link";

import { use } from "react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { getProjectBySlug } from "@/data/projects";
import { useTranslation } from "@/i18n/context";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);
  const { t } = useTranslation();

  if (!project) {
    return (
      <Container className="py-16 sm:py-24">
        <p>{t.projectDetail.projectNotFound.toUpperCase()}</p>
      </Container>
    );
  }

  return (
    <Container className="py-16 sm:py-24">
      <article>
        <Link
          className="text-muted-foreground text-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
          href="/projects"
        >
          {t.projectDetail.backToProjects.toUpperCase()}
        </Link>
        <header className="mt-8 max-w-3xl">
          <p className="font-medium text-muted-foreground text-sm uppercase tracking-[0.24em]">
            {t.projectDetail.caseStudyLabel.toUpperCase()}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-8">{project.description}</p>
        </header>
        <Image
          alt={`Preview of ${project.title}`}
          className="mt-10 aspect-video border border-border object-cover"
          height={720}
          priority
          src={project.image}
          width={1280}
        />
        <section className="mt-12 grid gap-6 lg:grid-cols-[0.7fr_0.3fr]">
          <div className=" border border-border p-6">
            <h2 className="text-2xl font-semibold">
              {t.projectDetail.caseStudyStructure.toUpperCase()}
            </h2>
            <p className="mt-4 text-muted-foreground leading-8">
              {t.projectDetail.caseStudyStructureDescription.toUpperCase()}
            </p>
          </div>
          <aside className=" border border-border p-6">
            <h2 className="text-lg font-semibold">{t.projectDetail.technologies.toUpperCase()}</h2>
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
            <div className="mt-6 grid gap-3">
              <a className={buttonVariants({ variant: "outline" })} href={project.repositoryUrl}>
                {t.projectDetail.repository.toUpperCase()}
              </a>
              <a className={buttonVariants()} href={project.liveUrl}>
                {t.projectDetail.livePreview.toUpperCase()}
              </a>
            </div>
          </aside>
        </section>
      </article>
    </Container>
  );
}
