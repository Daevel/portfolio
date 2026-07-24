import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Navigation } from "@/components/layout/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <Container className="pointer-events-auto relative flex min-h-16 max-w-none items-start justify-between gap-4 p-5">
        <Link
          className="text-4xl font-bold tracking-tighter text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
          href="/"
        >
          {siteConfig.name.toUpperCase()}
        </Link>

        <Navigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}
