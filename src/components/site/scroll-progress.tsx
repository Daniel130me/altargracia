"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gradient progress bar pinned to the very top of the viewport.
 * Fills left → right as the page scrolls, smoothed with a spring so it
 * glides rather than snaps.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-linear-to-r from-royal via-sky to-royal"
    />
  );
}
