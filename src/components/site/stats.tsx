"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { Reveal } from "./reveal";

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 250, suffix: "+", label: "Clients Supported" },
  { value: 480, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
];

/** Counts from 0 to `value` with spring easing when scrolled into view. */
function StatNumber({ value, suffix }: { value: number; suffix: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const spring = useSpring(0, { stiffness: 58, damping: 20 });

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      spring.jump(value);
    } else {
      spring.set(value);
    }
  }, [inView, reduce, spring, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(Math.round(v));
    });
    return unsubscribe;
  }, [spring]);

  return (
    <p className="font-display text-5xl font-medium tracking-tight text-white tabular-nums sm:text-6xl lg:text-[4.25rem]">
      <span ref={ref}>0</span>
      <span className="text-sky">{suffix}</span>
    </p>
  );
}

export function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-24">
      {/* faint white grid + centered royal glow, matching the Why-Us styling */}
      <div
        aria-hidden="true"
        className="bg-grid-white pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_75%_85%_at_50%_50%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/15 blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-sky">
            <span className="size-1.5 rotate-45 bg-royal ring-1 ring-white/25" />
            Altagracia in Numbers
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={0.1 + i * 0.08}
              className={i > 0 ? "lg:border-l lg:border-white/10" : ""}
            >
              <div className="flex flex-col items-center px-3 text-center sm:px-6 lg:px-8">
                <StatNumber value={stat.value} suffix={stat.suffix} />
                <p className="mt-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
