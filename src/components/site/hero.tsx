"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CornerDownRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Asterisk,
  AsteriskBadge,
  LongArrow,
  SquiggleArrow,
} from "@/components/site/doodles";
import { SITE } from "@/lib/site-config";

const TICKER_ITEMS = [
  "Computers & Laptops",
  "Phones & Accessories",
  "Repairs & Maintenance",
  "Digital Marketing",
  "ICT Training",
  "General Contracts",
];

function TickerGroup() {
  return (
    <div className="flex shrink-0 items-center">
      {/* repeat the set enough times to fill ultrawide screens */}
      {[0, 1, 2].map((set) =>
        TICKER_ITEMS.map((item, i) => (
          <span key={`${set}-${i}`} className="flex shrink-0 items-center">
            <span
              className={
                i % 2 === 0
                  ? "text-sm uppercase tracking-wide text-ink/45"
                  : "text-sm font-semibold uppercase tracking-wide text-ink"
              }
            >
              {item}
            </span>
            {i < TICKER_ITEMS.length - 1 ? (
              <LongArrow className="mx-6 text-ink/40" />
            ) : (
              <Asterisk className="mx-6 h-3.5 w-3.5 text-ink/40" />
            )}
          </span>
        ))
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:pt-16">
        <motion.div
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/50 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-sage" aria-hidden="true" />
            ICT Company · Lagos, Nigeria
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_290px] lg:items-end lg:gap-14">
            <h1 className="font-display text-[clamp(2.9rem,8.2vw,6.8rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
              <span className="block">Everything ICT.</span>
              <span className="block">
                One place you can{" "}
                <span className="relative inline-block">
                  trust
                  <AsteriskBadge
                    tone="sage"
                    className="absolute -right-[1.15em] bottom-[0.28em] hidden sm:inline-flex"
                  />
                </span>
                <SquiggleArrow className="ml-3 inline-block h-[0.42em] w-auto text-ink/70" />
              </span>
            </h1>

            <div className="hidden lg:block">
              <p className="text-xs font-medium uppercase leading-[1.9] tracking-[0.14em] text-ink/55">
                Altagracia is a registered ICT company helping homes and
                businesses in Lagos buy, fix, promote and learn — without
                stress.
              </p>
              <a
                href="#services"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 transition-colors hover:text-ink/60 hover:underline"
              >
                <CornerDownRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Explore our services
              </a>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-ink px-7 text-base font-medium text-cream hover:bg-ink/85"
            >
              <a href={SITE.phoneHref}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-ink/25 bg-transparent px-7 text-base font-medium text-ink hover:bg-secondary hover:text-ink"
            >
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div
        className="marquee-hover mt-12 overflow-hidden border-y border-ink/10 py-3.5"
        aria-hidden="true"
      >
        <div className="animate-marquee flex w-max">
          <TickerGroup />
          <TickerGroup />
        </div>
      </div>

      {/* Illustration */}
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:pb-24">
        <motion.div
          initial={{ y: 32 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 sm:rounded-[2.5rem]">
            <Image
              src="/images/hero-illustration.png"
              alt="Illustration of a technology workshop — a robotic arm placing a smartphone among computers, a server rack and office devices"
              width={1344}
              height={768}
              priority
              sizes="(min-width: 1280px) 80rem, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 flex animate-float items-center gap-3 rounded-2xl bg-cream p-4 shadow-[0_16px_40px_rgba(29,29,27,0.16)] sm:right-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage">
              <Asterisk className="h-4 w-4 text-ink" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-sm font-bold leading-tight text-ink">
                We answer, same day
              </p>
              <p className="text-xs text-ink/55">
                Mon – Sat · 8:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
