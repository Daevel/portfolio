import { usePathname } from "next/navigation";
import { type RefObject, useEffect, useState } from "react";

export type HeaderTheme = "dark" | "light";

export function useHeaderTheme(targetRef: RefObject<HTMLElement | null>) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<HeaderTheme>("light");

  useEffect(() => {
    void pathname;

    let frameId = 0;
    let timeoutId = 0;
    let lateTimeoutId = 0;

    const updateTheme = () => {
      const target = targetRef.current;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const themedElement = document
        .elementsFromPoint(x, y)
        .find((element) => !target.contains(element) && element.closest("[data-header-theme]"));
      const nextTheme =
        themedElement?.closest<HTMLElement>("[data-header-theme]")?.dataset.headerTheme;

      if (nextTheme === "dark" || nextTheme === "light") {
        setTheme(nextTheme);
      }
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      window.clearTimeout(lateTimeoutId);
      frameId = requestAnimationFrame(updateTheme);
      timeoutId = window.setTimeout(updateTheme, 80);
      lateTimeoutId = window.setTimeout(updateTheme, 240);
    };

    const observer = new MutationObserver(scheduleUpdate);

    scheduleUpdate();
    observer.observe(document.body, {
      attributeFilter: ["data-header-theme"],
      attributes: true,
      childList: true,
      subtree: true,
    });
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      window.clearTimeout(lateTimeoutId);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [targetRef, pathname]);

  return theme;
}
