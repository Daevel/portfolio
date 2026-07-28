import type { Metadata } from "next";

import { ProjectDetailContent } from "@/app/projects/[slug]/project-detail-content";
import { siteConfig } from "@/config/site";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  const description = `${project.title} — a project by ${siteConfig.name}. Built with ${project.technologies.join(", ")}.`;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [
        {
          url: `${siteConfig.url}${project.image}`,
          alt: `${project.title} project image`,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  return <ProjectDetailContent slug={slug} />;
}
