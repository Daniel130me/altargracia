"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "./reveal";

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  /** Maximum upward/downward travel in px while scrolling through the frame. */
  range?: number;
  /** Curtain-style clip-path unveil when the frame first enters the viewport. */
  unveil?: boolean;
};

/**
 * Image inside an overflow-hidden frame that drifts vertically as the
 * frame travels through the viewport — a subtle depth effect.
 * The inner track is oversized (2 × range) so no gaps are ever revealed.
 * Optionally unveils with a clip-path "curtain opening" animation.
 */
export function ParallaxImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  imgClassName,
  range = 48,
  unveil = false,
}: ParallaxImageProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [reduce ? 0 : -range, reduce ? 0 : range]
  );

  const frame = (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{ y, top: -range, bottom: -range }}
        className="absolute inset-x-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      </motion.div>
    </div>
  );

  if (!unveil) return frame;

  return (
    <motion.div
      className="h-full w-full"
      initial={
        reduce
          ? { opacity: 0 }
          : { clipPath: "inset(18% 10% 18% 10% round 3rem)" }
      }
      whileInView={
        reduce
          ? { opacity: 1 }
          : { clipPath: "inset(0% 0% 0% 0% round 2rem)" }
      }
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: reduce ? 0.5 : 1.15, ease: EASE }}
    >
      {frame}
    </motion.div>
  );
}
