"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const { t } = useTranslation();

  return (
    <div className="md:hidden">
      <Button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
        size="sm"
        type="button"
        variant="outline"
      >
        <span aria-hidden="true" className="grid size-4 place-items-center gap-1">
          <span
            className={cn(
              "h-0.5 w-4 bg-current transition-transform",
              isOpen && "translate-y-1 rotate-45",
            )}
          />
          <span className={cn("h-0.5 w-4 bg-current transition-opacity", isOpen && "opacity-0")} />
          <span
            className={cn(
              "h-0.5 w-4 bg-current transition-transform",
              isOpen && "-translate-y-1 -rotate-45",
            )}
          />
        </span>
        {t.navigation.menu}
      </Button>
      <div
        className={cn(
          "absolute inset-x-5 top-20  border border-border bg-background/95 p-3 shadow-xl shadow-foreground/10 backdrop-blur md:hidden",
          !isOpen && "hidden",
        )}
        id={menuId}
      >
        <nav aria-label="Mobile navigation" className="grid gap-1">
          {siteConfig.navigation.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  " px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
                  isActive && "bg-secondary text-foreground",
                )}
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {t.navigation[item.key].toUpperCase()}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
