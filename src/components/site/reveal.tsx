"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/** Shared signature easing — fast start, long soft settle. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "blur"
  | "fade";

const hiddenStates: Record<
  RevealVariant,
  { opacity: number; x?: number; y?: number; scale?: number; filter?: string }
> = {
  up: { opacity: 0, y: 34 },
  down: { opacity: 0, y: -34 },
  left: { opacity: 0, x: -44 },
  right: { opacity: 0, x: 44 },
  scale: { opacity: 0, scale: 0.9 },
  blur: { opacity: 0, y: 26, filter: "blur(12px)" },
  fade: { opacity: 0 },
};

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  variant?: RevealVariant;
  duration?: number;
};

export function Reveal({
  children,
  delay = 0,
  y,
  className,
  variant = "up",
  duration = 0.8,
}: RevealProps) {
  const reduce = useReducedMotion();
  const initial =
    reduce || y === undefined
      ? reduce
        ? { opacity: 0 }
        : hiddenStates[variant]
      : { opacity: 0, y: reduce ? 0 : y };

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: reduce ? 0.4 : duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ── Staggered group reveals ─────────────────────────────────────── */

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay before the first child starts (seconds). */
  delay?: number;
  /** Gap between each child (seconds). */
  stagger?: number;
};

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.09,
}: StaggerProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  duration?: number;
};

export function StaggerItem({
  children,
  className,
  variant = "up",
  duration = 0.75,
}: StaggerItemProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : hiddenStates[variant],
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: reduce ? 0.4 : duration, ease: EASE },
    },
  };

  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
}

/* ── One-off animated pieces ─────────────────────────────────────── */

/** Draws a horizontal line from left to right when scrolled into view. */
export function DrawLine({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={cn(className)}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.4, ease: EASE, delay: 0.15 }}
    />
  );
}

/** Word-by-word mask reveal for headlines — each word rises out of its own clip box. */
type MaskWord = { text: string; em?: boolean };

export function MaskWords({
  words,
  className,
  wordClassName,
  baseDelay = 0.1,
  step = 0.06,
}: {
  words: MaskWord[];
  className?: string;
  wordClassName?: string;
  baseDelay?: number;
  step?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word.text}-${i}`}
          aria-hidden="true"
          className="mr-[0.26em] inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom last:mr-0"
        >
          <motion.span
            className={cn(
              "inline-block will-change-transform",
              word.em && "font-light italic",
              wordClassName
            )}
            initial={reduce ? { opacity: 0 } : { y: "115%" }}
            animate={reduce ? { opacity: 1 } : { y: "0%" }}
            transition={{
              duration: reduce ? 0.4 : 0.9,
              delay: reduce ? 0 : baseDelay + i * step,
              ease: EASE,
            }}
          >
            {word.text}
          </motion.span>
        </span>
      ))}
      {/* Real text for screen readers / copy-paste */}
      <span className="sr-only">
        {words.map((w) => w.text).join(" ")}
      </span>
    </span>
  );
}
