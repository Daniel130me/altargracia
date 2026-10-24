"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { useRef } from "react";
import { Asterisk } from "lucide-react";

const items = [
  "ICT Equipment & Supply",
  "Software & Digital Solutions",
  "Digital Marketing",
  "ICT Training",
  "Technical Support",
];

/** Base drift, percent of one track-half per second (leftward). */
const BASE_VELOCITY = -1.35;

/**
 * Scroll-reactive marquee: drifts on its own, but scroll velocity
 * amplifies it — scroll up and it reverses, scroll fast and it rushes
 * (with a slight skew for a sense of momentum). Pauses on hover.
 */
export function Marquee() {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 320,
  });
  const velocityFactor = useTransform(smoothVelocity, [-2000, 2000], [-3, 3], {
    clamp: false,
  });
  const skewY = useTransform(smoothVelocity, [-2000, 2000], [-3.5, 3.5]);

  const direction = useRef(1);
  const paused = useRef(false);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (paused.current || reduce) return;
    const dt = Math.min(delta, 50) / 1000; // clamp tab-switch jumps
    let moveBy = direction.current * BASE_VELOCITY * dt;
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  const half = (
    <div className="flex items-center gap-8 pr-8">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="font-display whitespace-nowrap text-xl text-white/90 sm:text-2xl">
            {item}
          </span>
          <Asterisk className="size-6 shrink-0 text-sky" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden="true"
      className="marquee-mask overflow-hidden border-y border-ink/10 bg-ink py-5"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {reduce ? (
        <div className="flex w-max">{half}</div>
      ) : (
        <motion.div
          className="flex w-max will-change-transform"
          style={{ x, skewY }}
        >
          {half}
          {half}
        </motion.div>
      )}
    </div>
  );
}
