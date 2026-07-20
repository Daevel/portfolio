"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
      {siteConfig.navigation.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "text-2xl  px-4 py-2 font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
              isActive && "bg-primary text-foreground",
            )}
            href={item.href}
            key={item.href}
          >
            {t.navigation[item.key].toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
