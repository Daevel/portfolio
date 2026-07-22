import type { Project } from "@/types/project";

export const projects = [
  {
    slug: "followoo",
    title: "Followoo",
    summary: "Progetto digitale con focus su esperienza utente, interfaccia e sviluppo frontend.",
    description:
      "Followoo e un progetto pensato per raccontare decisioni di prodotto, sviluppo dell'interfaccia e qualita dell'esperienza frontend.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/followoo-logo.svg",
    profilePic: "/images/luigi-propic.jpeg",
    repositoryUrl: "https://github.com/daevel",
    liveUrl: "https://example.com/projects/followoo",
    featured: true,
  },
  {
    slug: "culturando",
    title: "Culturando",
    summary:
      "Progetto frontend dedicato alla valorizzazione di contenuti culturali e percorsi digitali.",
    description:
      "Culturando e un progetto orientato alla costruzione di un'esperienza digitale chiara, accessibile e scalabile per contenuti culturali.",
    technologies: ["Angular", "TypeScript", "RxJS"],
    image: "/projects/culturando-logo.svg",
    profilePic: "/images/luigi-propic.jpeg",
    repositoryUrl: "https://github.com/daevel",
    liveUrl: "https://example.com/projects/culturando",
    featured: true,
  },
] satisfies Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
