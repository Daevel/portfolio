"use client";

import emailjs from "@emailjs/browser";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type CSSProperties, useRef, useState } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

const projects = [siteConfig.projects];
const technologyRows = [siteConfig.technologies.slice(0, 4), siteConfig.technologies.slice(4)];
const descriptionMaxLength = 200;
const contactLinks = [{ key: "email", label: siteConfig.email, value: siteConfig.email }] as const;

const socialLinks = [
  { key: "linkedin", label: "LinkedIn", href: siteConfig.links.linkedin },
  { key: "github", label: "Github", href: siteConfig.links.github },
] as const;

export default function HomePage() {
  const router = useRouter();
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [description, setDescription] = useState("");
  const [copiedContact, setCopiedContact] = useState<(typeof contactLinks)[number]["key"] | null>(
    null,
  );
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const copyContact = async (contact: (typeof contactLinks)[number]) => {
    await navigator.clipboard.writeText(contact.value);
    setCopiedContact(contact.key);
    setTimeout(() => setCopiedContact(null), 3000);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setFormStatus("idle");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
      );
      setFormStatus("success");
      formRef.current.reset();
      setDescription("");
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    } finally {
      setIsSending(false);
    }
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

      {/* Works Section */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-none">
          <SectionReveal>
            <h2 className="font-semibold tracking-tighter sm:text-4xl">
              {t.projects.sectionLabel.toUpperCase()}
            </h2>
            <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2">
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
            <h2 className="font-semibold tracking-tighter sm:text-2xl">
              {t.home.contacts.toUpperCase()}
            </h2>

            <div className="flex flex-row mt-6 gap-96">
              {/* Contact links and social links */}
              <div className="flex flex-col w-full gap-3">
                {contactLinks.map((contact) => (
                  <div className="flex flex-col" key={contact.key}>
                    {copiedContact === contact.key ? (
                      <p className="w-fit text-left font-medium text-6xl text-primary underline decoration-primary/40 underline-offset-8 transition-colors hover:text-secondary hover:decoration-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring tracking-tighter">
                        {t.home.contactCopiedSuccess.toUpperCase()}!
                      </p>
                    ) : (
                      <button
                        className="w-fit tracking-tighter text-left font-medium text-5xl text-primary underline decoration-primary/40 underline-offset-8 transition-colors hover:text-secondary hover:decoration-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                        onClick={() => copyContact(contact)}
                        type="button"
                      >
                        {contact.label.toUpperCase()}
                      </button>
                    )}
                  </div>
                ))}
                {socialLinks.map((link) => (
                  <a
                    className="w-fit tracking-tighter text-left font-medium text-5xl text-primary underline decoration-primary/40 underline-offset-8 transition-colors hover:text-secondary hover:decoration-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                    href={link.href}
                    key={link.key}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label.toUpperCase()}
                  </a>
                ))}
              </div>

              {/* Contact form */}
              <div className="flex flex-col w-full">
                <form ref={formRef} className="grid gap-6" onSubmit={sendEmail}>
                  <div className="grid gap-2">
                    <label
                      className="font-medium tracking-tighter text-lg text-primary text-primary"
                      htmlFor="full-name"
                    >
                      {t.home.contactForm.fullName.toUpperCase()}
                    </label>
                    <input
                      className="min-h-12 text-4xl font-medium bg-background outline-none transition-colors focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                      id="full-name"
                      name="name"
                      required
                      type="text"
                      placeholder={t.home.contactForm.placeholder.fullName}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      className="font-medium tracking-tighter text-lg text-primary"
                      htmlFor="email"
                    >
                      {t.home.contactForm.email.toUpperCase()}
                    </label>
                    <input
                      className="min-h-12 bg-background text-4xl font-medium outline-none transition-colors focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                      id="email"
                      name="email"
                      required
                      type="email"
                      placeholder={t.home.contactForm.placeholder.email}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      className="font-medium tracking-tighter text-lg text-primary"
                      htmlFor="description"
                    >
                      {t.home.contactForm.description.toUpperCase()}
                    </label>
                    <textarea
                      className="min-h-40 resize-y py-3 bg-background text-4xl font-medium  outline-none transition-colors focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                      id="description"
                      maxLength={descriptionMaxLength}
                      name="description"
                      onChange={(event) => setDescription(event.target.value)}
                      required
                      value={description}
                      placeholder={t.home.contactForm.placeholder.description}
                    />
                    <p className="text-right text-muted-foreground text-sm">
                      {description.length}/{descriptionMaxLength}
                    </p>
                  </div>
                  <Button
                    className="h-20 tracking-tighter w-full border-4 border-primary bg-white text-3xl text-primary transition-colors hover:bg-primary hover:text-white hover:underline hover:underline-offset-5"
                    disabled={isSending}
                    type="submit"
                  >
                    {isSending
                      ? t.home.contactForm.sending.toUpperCase()
                      : t.home.contactForm.submit.toUpperCase()}
                  </Button>
                  {formStatus === "success" && (
                    <p className="text-primary text-sm">
                      {t.home.contactForm.success.toUpperCase()}
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p className="text-destructive text-sm">
                      {t.home.contactForm.error.toUpperCase()}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>
    </>
  );
}
