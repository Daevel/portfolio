"use client";

import Link from "next/link";
import { useRef } from "react";

import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Navigation } from "@/components/layout/navigation";
import { siteConfig } from "@/config/site";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import { cn } from "@/lib/utils";

export function Header() {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const headerTheme = useHeaderTheme(logoRef);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <Container className="pointer-events-auto relative flex min-h-16 max-w-none items-start justify-between gap-4 p-5">
        <Link
          className={cn(
            "text-4xl font-bold tracking-tighter transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring",
            headerTheme === "dark" ? "text-background" : "text-primary",
          )}
          href="/"
          ref={logoRef}
        >
          {siteConfig.name.toUpperCase()}
        </Link>

        <Navigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}
