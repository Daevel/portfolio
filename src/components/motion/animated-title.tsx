"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AnimatedTitleProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedTitle({ index, children, className }: AnimatedTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px" });

  return (
    <div ref={ref} className={className}>
      <motion.h1
        className="text-[clamp(3rem,15vw,10rem)] leading-[0.95] tracking-tighter"
        initial={{ color: "var(--color-secondary)" }}
        animate={isInView ? { color: "var(--color-primary)" } : { color: "var(--color-secondary)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {index}. {children}
      </motion.h1>
      <motion.svg
        className="mt-6 h-1.5 w-full sm:mt-7"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.45 }}
      >
        <rect className="fill-primary" height="100%" width="100%" />
      </motion.svg>
    </div>
  );
}
