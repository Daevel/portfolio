import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = siteConfig.navigation.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: item.href === "/" ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const privacyPolicy = {
    url: `${siteConfig.url}/privacy-policy`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  };

  return [...staticRoutes, ...projectRoutes, privacyPolicy];
}
