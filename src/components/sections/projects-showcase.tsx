import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion/section-reveal";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

const allProjects = [siteConfig.projects];

interface ProjectsShowcaseProps {
  className?: string;
  showTitle?: boolean;
  title?: string;
  excludeSlug?: string;
  fullWidth?: boolean;
}

export function ProjectsShowcase({
  className,
  showTitle = true,
  title,
  excludeSlug,
  fullWidth = true,
}: ProjectsShowcaseProps) {
  const { t } = useTranslation();

  const projects = excludeSlug
    ? allProjects.map((row) => row.filter((p) => !p.href.endsWith(excludeSlug)))
    : allProjects;

  return (
    <section className={className} data-header-theme="light">
      <Container className="max-w-none">
        <SectionReveal>
          {showTitle && (
            <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] font-semibold tracking-tighter">
              {(title ?? t.projects.sectionLabel).toUpperCase()}
            </h2>
          )}
          <div
            className={fullWidth ? "relative left-1/2 mt-6 w-[100dvw] -translate-x-1/2" : "mt-6"}
          >
            {projects.map((row, rowIndex) => (
              <div className="grid grid-cols-1 sm:grid-cols-2" key={rowIndex}>
                {row.map((project) => (
                  <Link
                    className="group relative grid aspect-video w-full place-items-center overflow-hidden border border-border bg-[var(--project-background)] p-6 transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:p-8"
                    href={project.href}
                    key={project.name}
                    style={
                      {
                        "--project-background": project.backgroundColor,
                      } as CSSProperties
                    }
                    title={project.name}
                  >
                    <Image
                      alt={`${project.name} ${t.accessibility.logoAltSuffix}`}
                      className="h-auto w-[clamp(6rem,32vw,12rem)] object-contain transition group-hover:brightness-0 group-hover:invert"
                      height={128}
                      src={project.path}
                      width={128}
                    />
                    <span className="absolute bottom-4 left-4 translate-y-0 font-semibold text-[clamp(2rem,8vw,2.25rem)] tracking-tighter text-white opacity-100 transition-all duration-300 ease-out sm:bottom-6 sm:left-6 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100">
                      {project.name.toUpperCase()}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
