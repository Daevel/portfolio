"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedTitle({ index, children, className }: AnimatedTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px" });

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.h1
        className="text-[160px] tracking-tighter"
        initial={{ color: "var(--color-secondary)" }}
        animate={isInView ? { color: "var(--color-primary)" } : { color: "var(--color-secondary)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {index}. {children}
      </motion.h1>
      <motion.svg
        className="absolute right-0 bottom-0 left-0 h-1 w-full"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      >
        <rect className="fill-primary" height="100%" width="100%" />
      </motion.svg>
    </div>
  );
}
