import type { Metadata } from "next";

import { ExperienceContent } from "@/app/experience/experience-content";
import { siteConfig } from "@/config/site";

const description =
  "Career timeline of Luigi Avitabile: companies, roles, and technologies across frontend and full-stack engineering.";

export const metadata: Metadata = {
  title: "Experience",
  description,
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: `Experience | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
