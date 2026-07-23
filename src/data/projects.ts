import type { Project } from "@/types/project";

export const projects = [
  {
    slug: "followoo",
    title: "Followoo",
    summary: "Progetto digitale con focus su esperienza utente, interfaccia e sviluppo frontend.",
    description:
      "Followoo is a privacy-focused tool that allows you to analyze your Instagram relationships directly in the browser using the ZIP file provided by Instagram's official data export.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/followoo/followoo-logo.svg",
    images: [
      "/projects/followoo/hero-page.png",
      "/projects/followoo/results-page.png",
      "/projects/followoo/search-page.png",
      "/projects/followoo/upload-page.png",
    ],
    profilePic: "/images/luigi-propic.jpeg",
    repositoryUrl: "https://github.com/daevel",
    liveUrl: "https://followoo.app",
    featured: true,
  },
  {
    slug: "culturando",
    title: "Culturando",
    summary:
      "Progetto frontend dedicato alla valorizzazione di contenuti culturali e percorsi digitali.",
    description:
      "Culturando è una web app geolocalizzata per condividere e scoprire patrimoni librari privati. Permette agli utenti di pubblicare libri, cercare volumi vicini su mappa 3D, richiedere consultazioni o prestiti e usare funzioni AI per catalogare libri da copertina, tutelando privacy e posizione.",
    technologies: ["Angular", "TypeScript", "RxJS"],
    image: "/projects/culturando/culturando-logo.svg",
    images: [],
    profilePic: "/images/luigi-propic.jpeg",
    repositoryUrl: "https://github.com/daevel",
    liveUrl: "https://daevel.me",
    featured: true,
  },
] satisfies Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
