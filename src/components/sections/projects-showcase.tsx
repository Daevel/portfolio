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
    <section className={className}>
      <Container className="max-w-none">
        <SectionReveal>
          {showTitle && (
            <h2 className="font-semibold tracking-tighter sm:text-4xl">
              {(title ?? t.projects.sectionLabel).toUpperCase()}
            </h2>
          )}
          <div className={fullWidth ? "relative left-1/2 mt-6 w-screen -translate-x-1/2" : "mt-6"}>
            {projects.map((row, rowIndex) => (
              <div className="grid grid-cols-2" key={rowIndex}>
                {row.map((project) => (
                  <Link
                    className="group relative grid aspect-video w-full place-items-center overflow-hidden border border-border bg-[var(--project-background)] p-3 transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
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
                      alt={`${project.name} logo`}
                      className="object-contain transition group-hover:brightness-0 group-hover:invert"
                      height={128}
                      src={project.path}
                      width={128}
                    />
                    <span className="absolute bottom-6 left-6 translate-y-3 font-semibold text-4xl text-white opacity-0 tracking-tighter transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
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
