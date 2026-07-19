import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-16 sm:py-24">
      <article>
        <Link
          className="text-muted-foreground text-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
          href="/projects"
        >
          Back to projects
        </Link>
        <header className="mt-8 max-w-3xl">
          <p className="font-medium text-muted-foreground text-sm uppercase tracking-[0.24em]">
            Case study
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
            <h2 className="text-2xl font-semibold">Case study structure</h2>
            <p className="mt-4 text-muted-foreground leading-8">
              Questa pagina e predisposta per raccontare contesto, problema, processo, decisioni
              tecniche, risultati e metriche del progetto.
            </p>
          </div>
          <aside className=" border border-border p-6">
            <h2 className="text-lg font-semibold">Technologies</h2>
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
                Repository
              </a>
              <a className={buttonVariants()} href={project.liveUrl}>
                Live preview
              </a>
            </div>
          </aside>
        </section>
      </article>
    </Container>
  );
}
