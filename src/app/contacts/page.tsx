"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ContactSection } from "@/components/sections/contact-section";
import { useTranslation } from "@/i18n/context";

export default function ContactsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Container className="mt-20 py-16 sm:py-24 max-w-none" data-header-theme="light">
        <section>
          <Reveal>
            <h1 className="mt-4 text-8xl font-bold tracking-tighter">
              {t.contacts.h1Title.toUpperCase()}
            </h1>
            <p className="mt-6 text-3xl font-bold text-primary leading-8">
              {t.contacts.introduction.toUpperCase()}
            </p>
          </Reveal>
        </section>
      </Container>
      <ContactSection className="pb-16 sm:pb-20" />
    </>
  );
}
