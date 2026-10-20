"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { CornerDownRight, Phone, Star } from "lucide-react";
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

const HEADLINE_LINE_1 = ["Everything", "ICT."];
const HEADLINE_LINE_2 = ["One", "place", "you", "can", "trust."];

const wordVariants: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.7, delay: 0.08 + i * 0.055, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeVariants: Variants = {
  hidden: { y: 18 },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.65, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function StaggeredWords({
  words,
  offset,
  trustedWord = false,
}: {
  words: string[];
  offset: number;
  trustedWord?: boolean;
}) {
  return (
    <span className="block">
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        const globalIndex = offset + i;
        return (
          <span key={`${word}-${i}`} className="inline-block">
            <span
              className="inline-block overflow-hidden pb-[0.08em] align-bottom"
            >
              <motion.span
                className="inline-block"
                custom={globalIndex}
                variants={wordVariants}
                initial="hidden"
                animate="show"
              >
                {word}
              </motion.span>
            </span>
            {trustedWord && isLast ? (
              <motion.span
                className="inline-block align-bottom"
                custom={globalIndex + 1}
                variants={fadeVariants}
                initial="hidden"
                animate="show"
              >
                <AsteriskBadge
                  tone="sage"
                  className="ml-2 inline-flex h-[0.52em] w-[0.52em]"
                />
                <SquiggleArrow className="ml-2 inline-block h-[0.38em] w-auto text-ink/70" />
              </motion.span>
            ) : null}
            {isLast ? null : <span>&nbsp;</span>}
          </span>
        );
      })}
    </span>
  );
}

function TickerGroup() {
  return (
    <div className="flex shrink-0 items-center">
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
  const collageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: collageRef,
    offset: ["start end", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [36, -36]);
  const ySide = useTransform(scrollYProgress, [0, 1], [70, -50]);

  return (
    <section id="home" className="bg-grain relative overflow-hidden">
      {/* soft original background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-sage-light/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/2 h-[28rem] w-[28rem] rounded-full bg-blush/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-10">
          {/* Copy */}
          <div>
            <motion.p
              variants={fadeVariants}
              custom={0}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/50 sm:text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-sage" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
              </span>
              ICT Company · Lagos, Nigeria
            </motion.p>

            <h1 className="mt-5 font-display text-[clamp(2.7rem,7.4vw,6rem)] font-medium leading-[1.03] tracking-[-0.03em] text-ink">
              <StaggeredWords words={HEADLINE_LINE_1} offset={0} />
              <StaggeredWords words={HEADLINE_LINE_2} offset={2} trustedWord />
            </h1>

            <motion.p
              variants={fadeVariants}
              custom={1}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-md text-base leading-relaxed text-ink/60 sm:text-lg"
            >
              Altagracia is a registered ICT company helping homes and
              businesses in Lagos buy, fix, promote and learn — without stress.
            </motion.p>

            <motion.div
              variants={fadeVariants}
              custom={2}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-ink px-7 text-base font-medium text-cream hover:bg-forest"
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
            </motion.div>

            {/* Social proof with real customer photos */}
            <motion.div
              variants={fadeVariants}
              custom={3}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3"
            >
              <div className="flex -space-x-3">
                {[
                  { src: "/images/real/avatar-1.jpg", alt: "Smiling customer — a school administrator" },
                  { src: "/images/real/avatar-2.jpg", alt: "Smiling customer — a small business owner" },
                  { src: "/images/real/avatar-3.jpg", alt: "Smiling customer — a boutique owner" },
                ].map((a) => (
                  <Image
                    key={a.src}
                    src={a.src}
                    alt={a.alt}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-sand font-display text-[11px] font-bold text-ink">
                  50+
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1" aria-label="Rated 5 out of 5 by customers">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-0.5 text-xs font-medium text-ink/55">
                  Trusted by 50+ businesses &amp; schools in Lagos
                </p>
              </div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 transition-colors hover:text-ink/60 hover:underline"
              >
                <CornerDownRight className="h-4 w-4" aria-hidden="true" />
                Explore our services
              </a>
            </motion.div>
          </div>

          {/* Photo collage with parallax */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div ref={collageRef} className="relative mx-auto max-w-[34rem]">
              <motion.div style={{ y: yMain }} className="relative">
                <div className="overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_24px_60px_rgba(24,42,32,0.18)] sm:rounded-[2.75rem]">
                  <Image
                    src="/images/real/hero-main.jpg"
                    alt="Customers working on laptops inside Altagracia's modern computer showroom in Lagos"
                    width={1600}
                    height={679}
                    priority
                    sizes="(min-width: 1024px) 42rem, 100vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </motion.div>

              {/* floating secondary photo */}
              <motion.div
                style={{ y: ySide }}
                className="absolute -bottom-10 -left-2 w-36 sm:-left-8 sm:w-44 lg:-left-14"
              >
                <div className="animate-float overflow-hidden rounded-2xl border-4 border-background shadow-[0_18px_44px_rgba(24,42,32,0.22)]">
                  <Image
                    src="/images/real/hero-side.jpg"
                    alt="A complete office desk setup with a curved monitor, delivered and installed by Altagracia"
                    width={900}
                    height={900}
                    sizes="176px"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </motion.div>

              {/* same-day badge */}
              <div className="absolute -top-5 right-3 flex items-center gap-2.5 rounded-2xl bg-cream/95 py-2.5 pl-3 pr-4 shadow-[0_14px_36px_rgba(24,42,32,0.18)] backdrop-blur sm:right-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage">
                  <Asterisk className="h-4 w-4 text-ink" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold leading-tight text-ink">
                    We answer, same day
                  </p>
                  <p className="text-[11px] text-ink/55">{SITE.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee ticker on sand band */}
      <div
        className="marquee-hover relative mt-14 overflow-hidden border-y border-ink/10 bg-sand py-4"
        aria-hidden="true"
      >
        <div className="animate-marquee flex w-max">
          <TickerGroup />
          <TickerGroup />
        </div>
      </div>
    </section>
  );
}
