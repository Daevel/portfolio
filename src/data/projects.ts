import type { Project } from "@/types/project";

export const projects = [
  {
    slug: "frontend-platform-starter",
    title: "Frontend Platform Starter",
    summary: "Starter kit per applicazioni frontend scalabili e accessibili.",
    description:
      "Una base tecnica pensata per team frontend che vogliono standard condivisi, performance misurabili e una developer experience solida.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Biome"],
    image: "/projects/frontend-platform-starter.svg",
    repositoryUrl: "https://github.com/luigiavitabile/frontend-platform-starter",
    liveUrl: "https://example.com/projects/frontend-platform-starter",
    featured: true,
  },
  {
    slug: "design-system-lab",
    title: "Design System Lab",
    summary: "Esperimenti su componenti UI riutilizzabili e design token.",
    description:
      "Un laboratorio per esplorare componenti accessibili, varianti tipizzate e integrazione tra design token e interfacce React.",
    technologies: ["React", "TypeScript", "shadcn/ui", "CSS Variables"],
    image: "/projects/design-system-lab.svg",
    repositoryUrl: "https://github.com/luigiavitabile/design-system-lab",
    liveUrl: "https://example.com/projects/design-system-lab",
    featured: true,
  },
  {
    slug: "angular-dashboard-concept",
    title: "Angular Dashboard Concept",
    summary: "Concept dashboard con focus su dati, routing e modularita.",
    description:
      "Un progetto dimostrativo per organizzare viste complesse, componenti riutilizzabili e stati applicativi in un contesto Angular moderno.",
    technologies: ["Angular", "TypeScript", "RxJS", "Accessibility"],
    image: "/projects/angular-dashboard-concept.svg",
    repositoryUrl: "https://github.com/luigiavitabile/angular-dashboard-concept",
    liveUrl: "https://example.com/projects/angular-dashboard-concept",
    featured: false,
  },
] satisfies Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
