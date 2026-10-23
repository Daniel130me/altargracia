"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/site/reveal";

const STATS = [
  { value: 2020, format: (n: number) => `${n}`, label: "Registered with the CAC", animate: true },
  { value: 1000, format: (n: number) => `${n.toLocaleString()}+`, label: "Devices & gadgets delivered", animate: true },
  { value: 50, format: (n: number) => `${n}+`, label: "Businesses & schools served", animate: true },
  { value: 0, format: () => "Same-day", label: "Response to every message", animate: false },
];

/**
 * Shows the final value by default (content is never hidden or blanked),
 * and plays a count-up animation the first time it scrolls into view.
 */
function StatValue({
  value,
  format,
  animate,
  start,
}: {
  value: number;
  format: (n: number) => string;
  animate: boolean;
  start: boolean;
}) {
  const [display, setDisplay] = useState(value);
  const played = useRef(false);

  useEffect(() => {
    if (!animate || !start || played.current) return;
    played.current = true;
    let raf = 0;
    const t0 = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animate, start, value]);

  return <>{animate ? format(display) : format(value)}</>;
}

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section aria-label="Company highlights" className="border-b border-ink/10 bg-gradient-to-r from-sage-light/30 via-background to-sky-light/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div
            ref={ref}
            className="grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:gap-y-0"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={
                  "px-2 sm:px-6 " +
                  (i > 0 ? "lg:border-l lg:border-ink/10 " : "") +
                  (i % 2 === 1 ? "border-l border-ink/10 lg:border-l" : "")
                }
              >
                <p className="font-display text-3xl font-bold tracking-tight text-forest sm:text-4xl">
                  <StatValue
                    value={stat.value}
                    format={stat.format}
                    animate={stat.animate}
                    start={inView}
                  />
                </p>
                <p className="mt-1.5 text-[11px] font-medium uppercase leading-snug tracking-[0.14em] text-ink/50 sm:text-xs">
                  {stat.label}
                </p>
                <span className="mt-2 block h-px w-10 bg-sage" aria-hidden="true" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
