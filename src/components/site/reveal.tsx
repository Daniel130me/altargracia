"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Gentle scroll-reveal that NEVER hides content:
 * - Animates position only (no opacity), so sections stay fully visible
 *   even if JavaScript animations never fire (e.g. full-page screenshots).
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
