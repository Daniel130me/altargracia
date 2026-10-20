"use client";

import Image from "next/image";
import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Asterisk } from "@/components/site/doodles";

const SERVICES = [
  {
    title: "Computers & Office Equipment",
    desc: "Genuine laptops, desktops and printers for your home or office — no fakes, no long stories.",
    photo: "/images/real/hero-main.jpg",
    alt: "Laptops set up on wooden desks in a bright modern office",
  },
  {
    title: "Phones & Accessories",
    desc: "Original phones and accessories that last — chargers, earpieces, covers and more.",
    photo: "/images/real/phones.jpg",
    alt: "A customer's hand holding a brand-new smartphone",
  },
  {
    title: "Repairs & Maintenance",
    desc: "Slow or faulty device? We fix it fast — and we explain the problem in plain words.",
    photo: "/images/real/repair.jpg",
    alt: "A technician repairing the inside of a laptop with precision tools",
  },
  {
    title: "Digital Marketing",
    desc: "We help people find your business online — and turn them into paying customers.",
    photo: "/images/real/marketing.jpg",
    alt: "A marketer reviewing website analytics charts on a laptop and phone",
  },
  {
    title: "ICT Training",
    desc: "Practical, hands-on training for you or your team — from computer basics to digital skills.",
    photo: "/images/real/training.jpg",
    alt: "A trainer teaching students in a computer classroom",
  },
  {
    title: "General Contracts & Supply",
    desc: "Bulk supply and full ICT setup for offices, schools and organisations — delivered on time.",
    photo: "/images/real/contracts.jpg",
    alt: "A team planning an ICT installation in a computer lab",
  },
];

export function Services() {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  // The cursor-following preview is for mouse users; hide it on touch devices
  // (pointer: coarse). Headless/keyboard-only environments simply never hover.
  const showCursorPreview = useSyncExternalStore(
    useCallback((onChange: () => void) => {
      const mq = window.matchMedia("(pointer: coarse)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }, []),
    () => !window.matchMedia("(pointer: coarse)").matches,
    () => false
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  return (
    <section id="services" className="bg-lines py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/50 sm:text-xs">
              / Our Services /
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
              Everything ICT,
              <br />
              explained in plain words.
              <Asterisk
                className="ml-3 inline-block h-7 w-7 text-sage sm:h-9 sm:w-9"
                aria-hidden="true"
              />
            </h2>
          </motion.div>
          <motion.p
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-base leading-relaxed text-ink/60 lg:justify-self-end"
          >
            Whatever you need — buying, fixing, promoting or learning — just
            tell us in your own words. We handle the rest. Tap any service to
            ask about it.
          </motion.p>
        </div>

        <div
          ref={listRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActive(null)}
          className="relative mt-12 lg:mt-16"
        >
          {/* Floating photo preview that follows the cursor (desktop only) */}
          {showCursorPreview && (
            <AnimatePresence>
              {active !== null && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 3 }}
                  exit={{ opacity: 0, scale: 0.7, rotate: 6 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{ x: mx, y: my }}
                  className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
                  aria-hidden="true"
                >
                  <div className="-translate-x-1/2 -translate-y-[115%]">
                    <div className="w-64 overflow-hidden rounded-2xl border-2 border-ink/10 shadow-[0_24px_60px_rgba(24,42,32,0.28)]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={active}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.22 }}
                        >
                          <Image
                            src={SERVICES[active].photo}
                            alt=""
                            width={640}
                            height={480}
                            sizes="256px"
                            className="aspect-[4/3] w-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                      <p className="bg-ink px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-cream">
                        {SERVICES[active].title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {SERVICES.map((service, i) => (
            <motion.a
              key={service.title}
              href="#contact"
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-ink/12 py-6 transition-colors duration-300 last:border-b hover:bg-accent/50 sm:gap-8 sm:py-7"
            >
              <span className="w-8 text-sm font-medium text-ink/35 sm:w-12 sm:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg font-semibold uppercase tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl lg:text-[1.7rem]">
                  {service.title}
                </span>
                <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-ink/55">
                  {service.desc}
                </span>
              </span>
              <span className="flex items-center gap-3 sm:gap-4">
                {/* Always-visible thumbnail on touch / small screens */}
                <span className="block h-14 w-14 overflow-hidden rounded-xl border border-ink/10 sm:h-16 sm:w-16 lg:hidden">
                  <Image
                    src={service.photo}
                    alt={service.alt}
                    width={96}
                    height={96}
                    sizes="64px"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:border-transparent group-hover:bg-ink group-hover:text-cream sm:h-12 sm:w-12">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
