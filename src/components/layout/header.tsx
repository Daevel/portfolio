import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Navigation } from "@/components/layout/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-border/70 border-b bg-background/85 backdrop-blur">
      <Container className="relative flex min-h-16 items-center justify-between gap-4 py-3">
        <Link
          className="rounded-full font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
          href="/"
        >
          {siteConfig.name}
        </Link>
        <Navigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}
