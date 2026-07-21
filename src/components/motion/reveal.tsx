"use client";

import {
  type HTMLMotionProps,
  motion,
  type TargetAndTransition,
  useReducedMotion,
  type Variants,
} from "motion/react";

import { cn } from "@/lib/utils";

type RevealVariant = "fade-up" | "fade-in" | "scale";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  variant?: RevealVariant;
  staggerChildren?: number;
};

type VariantPair = { hidden: TargetAndTransition; visible: TargetAndTransition };

const variantMap: Record<RevealVariant, VariantPair> = {
  "fade-up": {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

function buildVariants(revealVariant: RevealVariant, staggerChildren?: number): Variants {
  const { hidden, visible } = variantMap[revealVariant];
  return {
    hidden,
    visible: staggerChildren ? { ...visible, transition: { staggerChildren } } : visible,
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  staggerChildren,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = buildVariants(variant, staggerChildren);

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      variants={variants}
      viewport={{ once: true, margin: "0px 0px -80px" }}
      whileInView="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealChild({
  children,
  className,
  variant = "fade-up",
  ...props
}: Omit<RevealProps, "delay" | "staggerChildren">) {
  const shouldReduceMotion = useReducedMotion();
  const { hidden, visible } = variantMap[variant];

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? visible : hidden}
      transition={{ duration: 0.35, ease: "easeOut" }}
      variants={{ hidden, visible }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
