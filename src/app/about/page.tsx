import type { Metadata } from "next";

import { AboutContent } from "@/app/about/about-content";
import { siteConfig } from "@/config/site";

const description =
  "Learn more about Luigi Avitabile, Frontend Software Engineer specializing in React, Angular, and TypeScript. Frontend architecture, user experience, and engineering quality.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
