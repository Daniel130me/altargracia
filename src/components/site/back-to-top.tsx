"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE } from "./reveal";
import { scrollToTarget } from "./smooth-scroll";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.4,
  });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => scrollToTarget(0, { duration: 1.6 })}
      initial={false}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 18, scale: 0.85 }
      }
      transition={{ duration: reduce ? 0.2 : 0.5, ease: EASE }}
      className={cn(
        "group fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full bg-royal text-white shadow-card transition-colors duration-300 hover:bg-ink hover:shadow-soft",
        !visible && "pointer-events-none"
      )}
    >
      {/* scroll progress ring */}
      <svg
        viewBox="0 0 44 44"
        aria-hidden="true"
        className="absolute inset-0 size-full -rotate-90"
      >
        <circle
          cx="22"
          cy="22"
          r="19.5"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2.5"
        />
        <motion.circle
          cx="22"
          cy="22"
          r="19.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />
      </svg>
      <ArrowUp
        className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </motion.button>
  );
}
