"use client";

import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

export function Footer() {
  const { t } = useTranslation();
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setHasCopiedEmail(true);
    setTimeout(() => setHasCopiedEmail(false), 3000);
  };

  return (
    <footer className="border-border border-t bg-primary pt-8 pb-[calc(2rem+env(safe-area-inset-bottom))] sm:pt-10 sm:pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
      <Container className="grid max-w-none gap-8 pr-[max(1.25rem,env(safe-area-inset-right))] pl-[max(1.25rem,env(safe-area-inset-left))] text-white sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pl-[max(1.5rem,env(safe-area-inset-left))] lg:pr-[max(2rem,env(safe-area-inset-right))] lg:pl-[max(2rem,env(safe-area-inset-left))] md:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.8fr)]">
        {/* Left column */}
        <div className="flex min-h-0 flex-col gap-8 md:min-h-72 md:justify-between sm:gap-y-20">
          <div className="flex flex-col">
            <h1 className="text-[clamp(4rem,13vw,7rem)] font-bold leading-none tracking-tighter">
              {siteConfig.name.toUpperCase()}
            </h1>
          </div>
          {/* Links */}
          <div className="flex min-w-0 flex-col gap-5">
            <Link
              className="w-fit max-w-full text-[clamp(1.75rem,7vw,2.5rem)] leading-none tracking-tighter underline underline-offset-5"
              href="/privacy-policy"
            >
              {t.footer.privacyPolicy.toUpperCase()}
            </Link>

            <a
              className="w-fit max-w-full text-left text-[clamp(1.75rem,7vw,2.5rem)] leading-none tracking-tighter underline underline-offset-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
              href={siteConfig.links.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t.contactSection.linkedin.toUpperCase()}
            </a>

            {hasCopiedEmail ? (
              <p className="w-fit max-w-full text-left text-[clamp(1.75rem,7vw,2.5rem)] leading-none tracking-tighter underline underline-offset-5">
                {t.home.contactCopiedSuccess.toUpperCase()}!
              </p>
            ) : (
              <button
                className="w-fit max-w-full cursor-pointer break-all text-left text-[clamp(1.75rem,7vw,2.5rem)] leading-none tracking-tighter underline underline-offset-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                onClick={copyEmail}
                type="button"
              >
                {siteConfig.email.toUpperCase()}
              </button>
            )}
          </div>

          <div className="hidden flex-col gap-2 md:flex">
            <p className="text-[clamp(1.25rem,5vw,1.875rem)] font-medium leading-none tracking-tighter">
              {t.footer.location.toUpperCase()}
            </p>
            <p className="text-[clamp(1.25rem,3vw,1.875rem)] leading-none tracking-tighter">
              © {new Date().getFullYear()} {t.footer.allRightsReserved.toUpperCase()}
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex min-w-0 flex-col gap-8 md:items-end md:text-right justify-center">
          <div className="flex w-full max-w-full min-w-0 flex-col md:max-w-xl">
            <iframe
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              data-testid="embed-iframe"
              frameBorder="0"
              height="352"
              loading="lazy"
              src="https://open.spotify.com/embed/playlist/7JEXyy5FfrXh7rrMH4sXr4?utm_source=generator&si=3dcbb71e11984802"
              style={{ borderRadius: "12px" }}
              title="Spotify playlist"
              width="100%"
            />
          </div>

          <div className="flex flex-col gap-2 md:hidden">
            <p className="text-[clamp(1rem,5vw,1.25rem)] font-medium leading-none tracking-tighter">
              {t.footer.location.toUpperCase()}
            </p>
            <p className="text-[clamp(1rem,5vw,1.25rem)] leading-none tracking-tighter">
              © {new Date().getFullYear()} {t.footer.allRightsReserved.toUpperCase()}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
