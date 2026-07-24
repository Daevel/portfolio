"use client";

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-border border-t bg-primary py-8">
      <Container className="grid min-h-50 max-w-none grid-cols-1 gap-8 text-white sm:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col justify-between">
          <p className="text-5xl font-medium leading-none tracking-tighter sm:text-7xl lg:text-8xl">
            {siteConfig.name.toUpperCase()}
          </p>

          <p className="text-xl leading-none tracking-tighter sm:text-2xl lg:text-3xl">
            © {new Date().getFullYear()} {t.footer.allRightsReserved}
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col items-start justify-between sm:items-end sm:text-right">
          <Link
            className="text-2xl leading-none tracking-tighter hover:underline hover:underline-offset-5 sm:text-3xl"
            href="/privacy-policy"
          >
            {t.footer.privacyPolicy.toUpperCase()}
          </Link>

          <p className="text-xl font-medium leading-none tracking-tighter sm:text-2xl lg:text-3xl">
            {t.footer.location}
          </p>
        </div>
      </Container>
    </footer>
  );
}
