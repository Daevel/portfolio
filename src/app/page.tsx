"use client";

import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

const technologyRows = [siteConfig.technologies.slice(0, 4), siteConfig.technologies.slice(4)];
const descriptionMaxLength = 500;
const contactLinks = [
  { key: "email", label: siteConfig.email, value: siteConfig.email },
  { key: "linkedin", label: "LinkedIn", value: siteConfig.links.linkedin },
  { key: "github", label: "Github", value: siteConfig.links.github },
] as const;

export default function HomePage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [description, setDescription] = useState("");
  const [copiedContact, setCopiedContact] = useState<(typeof contactLinks)[number]["key"] | null>(
    null,
  );

  const copyContact = async (contact: (typeof contactLinks)[number]) => {
    await navigator.clipboard.writeText(contact.value);
    setCopiedContact(contact.key);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden border-border border-b pt-16">
        <Container className="relative z-10 w-full">
          <Reveal>
            <h1 className="text-8xl font-medium text-primary">{siteConfig.role.toUpperCase()}</h1>
          </Reveal>
        </Container>
      </section>

      {/* Core Technologies Section */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-none">
          <SectionReveal>
            <h2 className="font-semibold tracking-tighter sm:text-4xl">
              {t.home.coreTechnologies.toUpperCase()}
            </h2>
            <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2">
              {technologyRows.map((row, rowIndex) => (
                <div
                  className={rowIndex === 0 ? "grid grid-cols-4" : "grid grid-cols-5"}
                  key={rowIndex}
                >
                  {row.map((technology) => (
                    <div
                      className="group grid aspect-square w-full place-items-center border border-border bg-background p-3 transition-colors hover:bg-primary"
                      key={technology.name}
                      title={technology.name}
                    >
                      <Image
                        alt={`${technology.name} logo`}
                        className="size-10 object-contain transition group-hover:brightness-0 group-hover:invert sm:size-20 lg:size-32"
                        height={128}
                        src={technology.path}
                        width={128}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* Works section */}
      <section className="py-16 sm:py-20">
        <Container className="h-auto w-full max-w-none text-center align-bottom">
          <Button
            className="h-50 tracking-tighter w-full border-4 border-primary bg-white text-6xl text-primary transition-colors hover:bg-primary hover:text-white hover:underline hover:underline-offset-10"
            onClick={() => router.push("/projects")}
            type="button"
          >
            {t.home.seeMyWorks.toUpperCase()}
            <ArrowDownRight aria-hidden="true" className="size-[1em]" strokeWidth={2} />
          </Button>
        </Container>
      </section>

      {/* Contacts section */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-none">
          <SectionReveal>
            <h2 className="font-semibold tracking-tighter sm:text-4xl">
              {t.home.contacts.toUpperCase()}
            </h2>

            <div className="flex flex-row">
              <div className="flex flex-col w-full">
                {contactLinks.map((contact) => (
                  <div className="flex flex-col" key={contact.key}>
                    <button
                      className="w-fit text-left font-medium text-4xl text-primary underline decoration-primary/40 underline-offset-8 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                      onClick={() => copyContact(contact)}
                      type="button"
                    >
                      {contact.label}
                    </button>
                    {copiedContact === contact.key ? (
                      <p className="mt-4 text-muted-foreground text-sm">
                        {t.home.contactCopiedSuccess.toUpperCase()}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
              <form
                action={`mailto:${siteConfig.email}`}
                className="grid gap-6 p-5 sm:p-8"
                encType="text/plain"
                method="post"
              >
                <div className="grid gap-2">
                  <label className="font-medium tracking-tighter text-lg" htmlFor="full-name">
                    {t.home.contactForm.fullName.toUpperCase()}
                  </label>
                  <input
                    className="min-h-12 bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    id="full-name"
                    name="fullName"
                    required
                    type="text"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="font-medium tracking-tighter text-lg" htmlFor="email">
                    {t.home.contactForm.email.toUpperCase()}
                  </label>
                  <input
                    className="min-h-12 bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    id="email"
                    name="email"
                    required
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="font-medium tracking-tighter text-l" htmlFor="description">
                    {t.home.contactForm.description.toUpperCase()}
                  </label>
                  <textarea
                    className="min-h-40 resize-y bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    id="description"
                    maxLength={descriptionMaxLength}
                    name="description"
                    onChange={(event) => setDescription(event.target.value)}
                    required
                    value={description}
                  />
                  <p className="text-right text-muted-foreground text-sm">
                    {description.length}/{descriptionMaxLength}
                  </p>
                </div>
                <Button className="justify-self-start" type="submit">
                  {t.home.contactForm.submit.toUpperCase()}
                </Button>
              </form>
            </div>
          </SectionReveal>
        </Container>
      </section>
    </>
  );
}
