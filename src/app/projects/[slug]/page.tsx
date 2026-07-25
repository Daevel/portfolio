"use client";

import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionReveal } from "@/components/motion/section-reveal";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/data/projects";
import { useTranslation } from "@/i18n/context";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);
  const { t } = useTranslation();
  const router = useRouter();

  if (!project) {
    return (
      <Container className="py-16 sm:py-24">
        <p>{t.projectDetail.projectNotFound.toUpperCase()}</p>
      </Container>
    );
  }

  const projectContent =
    t.projectDetail.projects[project.slug as keyof typeof t.projectDetail.projects];
  const hasVideoHero = project.image.endsWith(".mp4");

  return (
    <>
      <section
        className="relative flex min-h-screen items-end overflow-hidden border-border border-b pt-16"
        data-header-theme="dark"
      >
        {hasVideoHero ? (
          <video
            autoPlay
            className="absolute inset-0 size-full object-cover"
            loop
            muted
            playsInline
          >
            <source src={project.image} type="video/mp4" />
          </video>
        ) : (
          <Image
            alt={`${project.title} ${t.accessibility.logoAltSuffix}`}
            className="object-cover"
            fill
            priority
            src={project.image}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <Container className="relative m-0 z-10 w-full pb-12">
          <Reveal>
            <h1 className="text-6xl font-medium text-white tracking-tighter sm:text-8xl">
              {project.title.toUpperCase()}
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* Project Description */}
      <section className="py-16 sm:py-24" data-header-theme="light">
        <Container className="max-w-none">
          <Reveal>
            <p className="text-7xl text-secondary leading-tight tracking-tighter">
              {projectContent.description.toUpperCase()}
            </p>
          </Reveal>
        </Container>
      </section>

      {project.videos && project.videos.length > 0 && (
        <section className="py-16 sm:py-24" data-header-theme="light">
          <Container className="max-w-none">
            <SectionReveal>
              <h2 className="font-semibold tracking-tighter sm:text-4xl">
                {t.projectDetail.videoPresentations.toUpperCase()}
              </h2>
              <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2">
                <div className="grid gap-1">
                  {project.videos.map((video, index) => (
                    <div className="aspect-video overflow-hidden bg-primary" key={video.src}>
                      <video
                        aria-label={`${project.title} ${t.projectDetail.videoPresentationLabel} ${index + 1}`}
                        autoPlay
                        className="size-full object-cover"
                        loop
                        muted
                        playsInline
                        preload="metadata"
                      >
                        <source src={video.src} type="video/mp4" />
                        <track
                          default
                          kind="captions"
                          label={t.projectDetail.videoCaptionsLabel}
                          src={video.captions}
                          srcLang="en"
                        />
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </Container>
        </section>
      )}

      {/* Grid Images */}
      {project.images.length > 0 && (
        <section className="py-16 sm:py-24" data-header-theme="light">
          <Container className="max-w-none">
            <SectionReveal>
              <h2 className="font-semibold tracking-tighter sm:text-4xl">
                {t.projectDetail.gallery.toUpperCase()}
              </h2>
              <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2">
                <div className="grid grid-cols-2 gap-1">
                  {project.images.map((image, index) => (
                    <div
                      className="group relative grid aspect-video w-full place-items-center overflow-hidden border border-border"
                      key={index}
                    >
                      <Image
                        alt={`${project.title} ${t.accessibility.screenshotAlt} ${index + 1}`}
                        className="object-contain transition"
                        height={720}
                        src={image}
                        width={1280}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </Container>
        </section>
      )}

      {/* Visit Website CTA */}
      <section className="py-16 sm:py-24" data-header-theme="light">
        <Container className="max-w-none text-center">
          <Button
            className="h-50 tracking-tighter w-full border-4 border-primary bg-white text-6xl text-primary transition-colors hover:bg-primary hover:text-white hover:underline hover:underline-offset-10"
            onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
            type="button"
          >
            {t.projectDetail.visitWebsite.toUpperCase()}
            <ArrowDownRight aria-hidden="true" className="size-[1em]" strokeWidth={2} />
          </Button>
        </Container>
      </section>

      {/* Other Works section */}
      <section className="py-16 sm:py-24" data-header-theme="light">
        <ProjectsShowcase
          className="max-w-none"
          excludeSlug={slug}
          fullWidth={false}
          showTitle={true}
          title={t.projectDetail.otherProjects}
        />
        <Container className="max-w-none">
          <Button
            className="mt-10 h-50 tracking-tighter w-full border-4 border-primary bg-white text-6xl text-primary transition-colors hover:bg-primary hover:text-white hover:underline hover:underline-offset-10"
            onClick={() => router.push("/projects")}
            type="button"
          >
            {t.projectDetail.seeAllProjects.toUpperCase()}
            <ArrowDownRight aria-hidden="true" className="size-[1.5em]" strokeWidth={2} />
          </Button>
        </Container>
      </section>
    </>
  );
}
