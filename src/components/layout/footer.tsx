"use client";

import Link from "next/link";
import Script from "next/script";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-border border-t bg-primary py-8 sm:py-10">
      <Container className="grid max-w-none gap-8 text-white md:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.8fr)]">
        {/* Left column */}
        <div className="flex min-h-0 flex-col gap-8 md:min-h-72 md:justify-between">
          <div className="flex flex-col gap-5">
            <p className="text-[clamp(3rem,13vw,6rem)] font-medium leading-none tracking-tighter">
              {siteConfig.name.toUpperCase()}
            </p>

            <Link
              className="w-fit text-[clamp(1.75rem,7vw,2.5rem)] leading-none tracking-tighter underline underline-offset-5"
              href="/privacy-policy"
            >
              {t.footer.privacyPolicy.toUpperCase()}
            </Link>
          </div>

          <p className="hidden text-[clamp(1.25rem,3vw,1.875rem)] leading-none tracking-tighter md:block">
            © {new Date().getFullYear()} {t.footer.allRightsReserved.toUpperCase()}
          </p>
        </div>

        {/* Right column */}
        <div className="flex min-w-0 flex-col gap-8 md:items-end md:text-right">
          <div className="w-full max-w-full md:max-w-xl">
            <div id="JFWebsiteWidget-019f9f3668f8700088d5250844421e2d59d6" />
            <Script
              src="https://www.jotform.com/website-widgets/embed/019f9f3668f8700088d5250844421e2d59d6"
              strategy="afterInteractive"
            />
          </div>

          <p className="text-[clamp(1.25rem,5vw,1.875rem)] font-medium leading-none tracking-tighter">
            {t.footer.location.toUpperCase()}
          </p>

          <p className="text-[clamp(1.25rem,5vw,1.875rem)] leading-none tracking-tighter md:hidden">
            © {new Date().getFullYear()} {t.footer.allRightsReserved.toUpperCase()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
