"use client";

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-border border-t py-8 bg-primary">
      <Container className="flex items-start gap-4 text-sm text-white sm:flex-row sm:justify-between max-w-none">
        <div className="flex flex-col gap-y-50">
          <h1 className="text-8xl font-medium tracking-tighter">{siteConfig.name.toUpperCase()}</h1>
          <p className="text-lg tracking-tighter">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <div className="flex flex-col">
          <Link
            className="tracking-tighter w-full border-4 border-primary text-3xl text-background transition-colors hover:bg-primary hover:underline hover:underline-offset-5"
            href="/privacy-policy"
          >
            {t.footer.privacyPolicy.toUpperCase()}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
