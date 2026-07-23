import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Navigation } from "@/components/layout/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="pointer-events-none fixed top-0 right-0 bottom-0 left-0 z-40">
      <Container className="pointer-events-auto relative flex min-h-16 max-w-none items-start justify-between gap-4 p-5">
        <Link
          className="text-primary text-4xl font-bold tracking-tighter [-webkit-text-stroke:0.5px_white] [paint-order:stroke_fill] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
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
