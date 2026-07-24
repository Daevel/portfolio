"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the route change trigger
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
