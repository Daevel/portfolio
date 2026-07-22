"use client";

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-border border-t py-8 bg-primary">
      <Container className="flex flex-col gap-4 text-sm text-white sm:flex-row sm:items-center sm:justify-between max-w-none">
        <div className="flex flex-col">
          <h1 className="text-8xl tracking-tighter">{siteConfig.name.toUpperCase()}</h1>
          <p className="text-4xl tracking-tighter">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>

        <div className="flex flex-col">TODO</div>
      </Container>
    </footer>
  );
}
