"use client";

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-border border-t py-8">
      <Container className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. {t.footer.builtWith.toUpperCase()}
        </p>
        <nav aria-label="Social links" className="flex gap-4">
          <Link
            className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
            href={siteConfig.links.github}
          >
            GitHub
          </Link>
          <Link
            className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
            href={siteConfig.links.linkedin}
          >
            LinkedIn
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
