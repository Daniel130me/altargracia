"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    tab: "/01/",
    title: "Reach out to us",
    bold: "Call, WhatsApp or email — tell us what you need in your own words.",
    desc: "No technical grammar required. If you can say it in plain English, we can handle it.",
    needs: [
      "Buy a laptop, phone or office device",
      "Fix something that stopped working",
      "Promote your business online",
    ],
    photo: "/images/real/support.jpg",
    alt: "A friendly Altagracia agent taking a customer's call",
    progress: 33,
  },
  {
    tab: "/02/",
    title: "Get clear answers & a fair price",
    bold: "We explain your options in simple English and agree the price upfront.",
    desc: "No hidden charges, no surprises. You decide only when you fully understand.",
    needs: [
      "Plain-English explanations",
      "Transparent, upfront pricing",
      "Genuine products with warranty",
    ],
    photo: "/images/real/repair.jpg",
    alt: "A technician diagnosing a laptop before quoting the repair",
    progress: 66,
  },
  {
    tab: "/03/",
    title: "We deliver & stay with you",
    bold: "Quick delivery or service — plus support after you pay.",
    desc: "That is our promise. We are still here long after the receipt is printed.",
    needs: [
      "Same-day response to messages",
      "Delivery & installation support",
      "Help whenever you need it later",
    ],
    photo: "/images/real/contracts.jpg",
    alt: "A team working on an ICT installation in a computer lab",
    progress: 100,
  },
];

export function HowItWorks() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setStep((s) => (s + 1) % STEPS.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const current = STEPS[step];

  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/50 sm:text-xs">
            / How It Works /
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
            Three easy steps. That is all it takes.
          </h2>
        </Reveal>

        {/* Step title + progress bar */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-14">
          <AnimatePresence mode="wait">
            <motion.h3
              key={current.title}
              initial={{ y: 14 }}
              animate={{ y: 0 }}
              exit={{ y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl"
            >
              {current.title}
            </motion.h3>
          </AnimatePresence>

          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider sm:gap-2 sm:text-sm">
                {STEPS.map((s, i) => (
                  <button
                    key={s.tab}
                    type="button"
                    onClick={() => {
                      setStep(i);
                      setPaused(true);
                    }}
                    aria-label={`Show step ${i + 1}`}
                    className={cn(
                      "rounded px-1 py-0.5 transition-colors",
                      i === step
                        ? "text-ink underline underline-offset-4"
                        : "text-ink/35 hover:text-ink/70"
                    )}
                  >
                    {s.tab}
                  </button>
                ))}
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-ink/40">
                Progress{" "}
                <span className="font-display text-sm font-bold text-ink">
                  {current.progress}%
                </span>
              </p>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-ink/10">
              <motion.div
                className="h-full rounded-full bg-forest"
                animate={{ width: `${current.progress}%` }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>

        {/* Step content */}
        <div
          className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between rounded-[1.75rem] bg-sand/80 p-7 sm:p-9"
            >
              <div>
                <p className="font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
                  {current.bold}
                  <span className="text-ink/45"> {current.desc}</span>
                </p>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  Perfect if you need to:
                </p>
                <ul className="mt-3">
                  {current.needs.map((need) => (
                    <li
                      key={need}
                      className="border-b border-dashed border-ink/20 py-2.5 text-sm text-ink/70 last:border-0"
                    >
                      {need}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest"
              >
                Start step {step + 1} now — talk to us
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Photo panel: all steps stacked, crossfade + slow zoom */}
          <Reveal className="h-full">
            <div className="relative h-full min-h-72 overflow-hidden rounded-[1.75rem] border border-ink/10 sm:min-h-96 lg:min-h-[30rem]">
              {STEPS.map((s, i) => (
                <div
                  key={s.tab}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700",
                    i === step ? "opacity-100" : "opacity-0"
                  )}
                  aria-hidden={i !== step}
                >
                  <Image
                    src={s.photo}
                    alt={s.alt}
                    width={1400}
                    height={900}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={cn(
                      "h-full w-full object-cover",
                      i === step && "animate-kenburns"
                    )}
                    priority={i === 0}
                  />
                </div>
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-cream/95 px-4 py-2 shadow-sm">
                <span className="font-display text-sm font-bold text-ink">
                  {current.tab}
                </span>
                <span className="text-xs font-medium text-ink/60">
                  {current.title}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
