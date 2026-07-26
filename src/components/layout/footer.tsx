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
        <div className="contents sm:flex sm:flex-col sm:justify-between">
          <p className="order-1 text-5xl font-medium leading-none tracking-tighter sm:order-none sm:text-7xl lg:text-8xl">
            {siteConfig.name.toUpperCase()}
          </p>

          <p className="order-4 text-xl leading-none tracking-tighter sm:order-none sm:text-2xl lg:text-3xl">
            © {new Date().getFullYear()} {t.footer.allRightsReserved.toUpperCase()}
          </p>
        </div>

        {/* Right column */}
        <div className="contents sm:flex sm:flex-col sm:items-end sm:justify-between sm:text-right">
          <Link
            className="order-2 text-2xl leading-none tracking-tighter underline underline-offset-5 sm:order-none sm:text-3xl"
            href="/privacy-policy"
          >
            {t.footer.privacyPolicy.toUpperCase()}
          </Link>

          <p className="order-3 mt-8 text-xl font-medium leading-none tracking-tighter sm:order-none sm:mt-0 sm:text-2xl lg:text-3xl">
            {t.footer.location.toUpperCase()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
