"use client";

import Image from "next/image";
import { BadgeCheck, HeartHandshake, PhoneCall, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/reveal";
import { Sparkle } from "@/components/site/doodles";
import { SITE } from "@/lib/site-config";

const REASONS = [
  {
    icon: BadgeCheck,
    title: "Registered & verified",
    desc: "Fully registered with the Corporate Affairs Commission (BN 3143241). A real, accountable business — not a random online seller.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine products only",
    desc: "No fakes and no “tokunbo” surprises. Everything we sell is original and covered by warranty.",
  },
  {
    icon: PhoneCall,
    title: "We answer our calls",
    desc: "Call, WhatsApp or email — a real person picks up and responds the same day. You are never left wondering.",
  },
  {
    icon: HeartHandshake,
    title: "Support after you buy",
    desc: "We do not disappear after payment. Whenever you need help, we are right here.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-grain bg-dots-dark relative overflow-hidden bg-forest py-20 text-cream lg:py-28"
    >
      {/* soft glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-moss/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-sage/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/50 sm:text-xs">
              / Why Altagracia /
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-cream sm:text-5xl">
              The ICT partner you
              <br />
              can actually rely on.
              <Sparkle
                className="ml-3 inline-block h-7 w-7 text-sage sm:h-9 sm:w-9"
                aria-hidden="true"
              />
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-cream/65 lg:justify-self-end">
              Anyone can sell you a device. Here is what makes us different —
              and why our customers keep coming back.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1fr_1.25fr]">
          {/* Real photo of the team answering calls */}
          <Reveal className="h-full">
            <div className="group relative h-full min-h-72 overflow-hidden rounded-[1.75rem] border border-cream/15 sm:min-h-80 lg:min-h-full">
              <Image
                src="/images/real/support.jpg"
                alt="A member of the Altagracia support team taking a customer call"
                width={1400}
                height={785}
                sizes="(min-width: 1024px) 36rem, 100vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display text-lg font-semibold text-cream">
                  A real person picks up.
                </p>
                <p className="mt-1 text-sm text-cream/70">
                  Mon – Sat · 8:00 AM – 6:00 PM — same-day replies, every time.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 2×2 reasons */}
          <div className="grid overflow-hidden rounded-[1.75rem] border border-cream/15 bg-forest-2 sm:grid-cols-2">
            {REASONS.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ y: 16 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={
                  "group p-7 transition-colors duration-300 hover:bg-moss/40 sm:p-9 " +
                  (i % 2 === 1 ? "border-l border-cream/10 " : "") +
                  (i >= 2 ? "border-t border-cream/10 " : "") +
                  (i === 1 ? "max-sm:border-t max-sm:border-cream/10 " : "") +
                  (i === 3 ? "max-sm:border-t max-sm:border-cream/10" : "")
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-ink transition-transform duration-300 group-hover:-rotate-12">
                    <reason.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-medium text-cream/30">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream/60">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-cream px-7 text-base font-medium text-ink transition-colors hover:bg-white"
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              Call us today
            </a>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/30 px-7 text-base font-medium text-cream transition-colors hover:bg-cream/10"
            >
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
