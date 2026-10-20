"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "It's now easy to get genuine laptops for our school — Altagracia supplied everything and even helped us set it all up. Very honest people.",
    name: "Mrs. Adaeze Okafor",
    role: "School Administrator, Surulere",
    photo: "/images/real/avatar-1.jpg",
  },
  {
    quote:
      "My laptop stopped working and they fixed it the same day. They explained the problem in a way I could understand. I have found my tech people.",
    name: "Kunle Adeyemi",
    role: "Small Business Owner, Lagos Island",
    photo: "/images/real/avatar-2.jpg",
  },
  {
    quote:
      "They manage our social media adverts, and now we get customer calls every single week. Reliable and professional from day one.",
    name: "Chiamaka Nwosu",
    role: "Boutique Owner, Ikeja",
    photo: "/images/real/avatar-3.jpg",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const t = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="bg-grain border-y border-ink/10 bg-sand py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/50 sm:text-xs">
              / Testimonials /
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
              Here&apos;s what
              <br />
              others say
            </h2>
            <span className="mt-8 hidden h-14 w-14 items-center justify-center rounded-full bg-ink text-sand lg:flex">
              <Quote className="h-6 w-6" aria-hidden="true" />
            </span>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col justify-between"
          >
            <div
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="font-display text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3">
                    <span className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-ink/10">
                      <Image
                        src={t.photo}
                        alt={`Portrait of ${t.name}`}
                        width={96}
                        height={96}
                        sizes="48px"
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">
                        {t.name}
                      </span>
                      <span className="block text-xs text-ink/50">{t.role}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-ink/10 pt-6">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Show review from ${item.name}`}
                    onClick={() => {
                      setIndex(i);
                      setPaused(true);
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === index ? "w-8 bg-ink" : "w-2 bg-ink/20 hover:bg-ink/40"
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => {
                  setIndex((i) => (i + 1) % TESTIMONIALS.length);
                  setPaused(true);
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream transition-colors hover:bg-forest"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
