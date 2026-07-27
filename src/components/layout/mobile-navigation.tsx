"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import type { HeaderTheme } from "@/hooks/useHeaderTheme";
import { useTranslation } from "@/i18n/context";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  headerTheme: HeaderTheme;
}

export function MobileNavigation({ headerTheme }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="md:hidden">
      <Button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={
          isOpen ? t.accessibility.closeNavigationMenu : t.accessibility.openNavigationMenu
        }
        onClick={() => setIsOpen((current) => !current)}
        className={cn(
          "size-11 border-2 p-0 transition-colors",
          headerTheme === "dark"
            ? "border-background text-background hover:bg-background/10"
            : "border-primary text-primary hover:bg-primary/10",
        )}
        size="sm"
        type="button"
        variant="outline"
      >
        <span aria-hidden="true" className="relative size-5">
          <span
            className={cn(
              "absolute top-1/2 left-0 h-0.75 w-5 -translate-y-[7px] bg-current transition-transform",
              isOpen && "translate-y-0 rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute top-1/2 left-0 h-0.75 w-5 -translate-y-1/2 bg-current transition-opacity",
              isOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute top-1/2 left-0 h-0.75 w-5 translate-y-[5px] bg-current transition-transform",
              isOpen && "translate-y-0 -rotate-45",
            )}
          />
        </span>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            className="absolute inset-x-5 top-20 border border-border bg-background/95 p-3 shadow-xl shadow-foreground/10 backdrop-blur md:hidden"
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: -8 }}
            id={menuId}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav aria-label={t.accessibility.mobileNavigation} className="grid gap-1">
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      " px-4 py-3 text-3xl font-bold text-secondary hover:bg-primary hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
                      isActive && "bg-primary text-background",
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
