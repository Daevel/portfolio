import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="grid min-h-[60vh] place-items-center py-16 text-center">
      <section>
        <p className="font-medium text-muted-foreground text-sm uppercase tracking-[0.24em]">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          La pagina richiesta non esiste o non e ancora stata pubblicata.
        </p>
        <Link className={buttonVariants({ className: "mt-6" })} href="/">
          Back home
        </Link>
      </section>
    </Container>
  );
}
