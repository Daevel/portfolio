import type { Project } from "@/types/project";

export const projects = [
  {
    slug: "followoo",
    title: "Followoo",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/followoo/followoo-mockup-presentation.png",
    images: [
      "/projects/followoo/hero-page.png",
      "/projects/followoo/results-page.png",
      "/projects/followoo/search-page.png",
      "/projects/followoo/upload-page.png",
    ],
    videos: [
      {
        src: "/projects/followoo/followoo-video-presentation.mp4",
        captions: "/projects/followoo/followoo-presentation-captions.vtt",
      },
    ],
    repositoryUrl: "https://github.com/daevel",
    liveUrl: "https://followoo.app",
    featured: true,
  },
  {
    slug: "culturando",
    title: "Culturando",
    technologies: ["Angular", "TypeScript", "RxJS"],
    image: "/projects/culturando/culturando-logo.svg",
    images: [],
    repositoryUrl: "https://github.com/daevel",
    liveUrl: "https://daevel.me",
    featured: true,
  },
] satisfies Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
