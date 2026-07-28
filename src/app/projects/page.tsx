import type { Metadata } from "next";

import { ProjectsContent } from "@/app/projects/projects-content";
import { siteConfig } from "@/config/site";

const description =
  "A selection of projects by Luigi Avitabile: frontend experiments, tools, and products built with React, Angular, and TypeScript.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
