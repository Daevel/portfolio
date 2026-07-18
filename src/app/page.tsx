import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <section className="border-border border-b py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <p className="mb-4 font-medium text-muted-foreground text-sm uppercase tracking-[0.24em]">
              {siteConfig.role}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Creo interfacce web solide, accessibili e orientate al prodotto.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-8">
              Sono {siteConfig.name}, Frontend Software Engineer. Lavoro su esperienze React e
              Angular con attenzione a performance, manutenibilita e qualita del codice.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className={buttonVariants({ size: "lg" })} href="/projects">
                View projects
              </Link>
              <Link className={buttonVariants({ variant: "outline", size: "lg" })} href="/contacts">
                Contact me
              </Link>
            </div>
          </Reveal>
          <Reveal className="rounded-[2rem] border border-border bg-muted p-6" delay={0.1}>
            <div className="rounded-[1.5rem] bg-background p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">Current focus</p>
              <p className="mt-3 text-2xl font-semibold">Modern frontend architecture</p>
              <p className="mt-4 text-muted-foreground leading-7">
                Design system, componenti accessibili, performance e workflow scalabili per prodotti
                web.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Core technologies</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {siteConfig.technologies.map((technology) => (
                <span
                  className="rounded-full border border-border px-4 py-2 text-sm"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-muted py-16 sm:py-20">
        <Container>
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Featured projects
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Alcuni progetti placeholder che verranno sostituiti con case study reali.
              </p>
            </div>
            <Link className={buttonVariants({ variant: "outline" })} href="/projects">
              All projects
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Reveal
                className="rounded-3xl border border-border bg-background p-4"
                delay={index * 0.08}
                key={project.slug}
              >
                <Image
                  alt={`Preview of ${project.title}`}
                  className="aspect-video rounded-2xl border border-border object-cover"
                  height={360}
                  src={project.image}
                  width={640}
                />
                <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.summary}</p>
                <Link
                  className="mt-4 inline-flex font-medium text-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                  href={`/projects/${project.slug}`}
                >
                  Read case study
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-10">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
              Hai un prodotto frontend da progettare, rifinire o scalare?
            </h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/80">
              La sezione contatti e pronta per essere collegata ai canali reali e a una futura
              strategia di lead generation.
            </p>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg", className: "mt-6" })}
              href="/contacts"
            >
              Let us talk
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
