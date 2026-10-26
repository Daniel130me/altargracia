"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";
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

/* ── Scroll-linked effects ───────────────────────────────────────── */

type ScrollWordsProps = {
  words: MaskWord[];
  className?: string;
  /** Progress start point: element top vs viewport, e.g. ["start 0.9", "start 0.4"]. */
  offset?: [string, string];
};

/**
 * Apple-style scroll-linked text: each word fades up from a faint ghost
 * to full strength as the user scrolls, staggered across the block.
 * Progress is tied to scroll position, so scrolling back re-dims the text.
 */
export function ScrollWords({ words, className, offset }: ScrollWordsProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset ?? ["start 0.92", "start 0.42"],
  });

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <ScrollWord
          key={`${word.text}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          em={word.em}
          reduce={reduce}
        >
          {word.text}
        </ScrollWord>
      ))}
    </p>
  );
}

function ScrollWord({
  children,
  progress,
  range,
  em,
  reduce,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  em?: boolean;
  reduce: boolean | null;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);

  return (
    <span className="mr-[0.28em] inline-block">
      <motion.span
        style={reduce ? { opacity: 1 } : { opacity }}
        className={cn(em && "font-light italic text-sky")}
      >
        {children}
      </motion.span>
    </span>
  );
}

type ScrollRotateProps = {
  children: React.ReactNode;
  className?: string;
  /** Total rotation (degrees) across the element's journey through the viewport. */
  deg?: number;
};

/** Rotates its child continuously as it travels through the viewport. */
export function ScrollRotate({ children, className, deg = 120 }: ScrollRotateProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : deg]);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={reduce ? undefined : { rotate }}
    >
      {children}
    </motion.div>
  );
}
