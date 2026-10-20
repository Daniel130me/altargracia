"use client";

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
    <section id="why-us" className="border-y border-ink/10 bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/50 sm:text-xs">
              / Why Altagracia /
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
              The ICT partner you
              <br />
              can actually rely on.
              <Sparkle
                className="ml-3 inline-block h-7 w-7 text-mauve sm:h-9 sm:w-9"
                aria-hidden="true"
              />
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-ink/60 lg:justify-self-end">
              Anyone can sell you a device. Here is what makes us different —
              and why our customers keep coming back.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[1.75rem] border border-ink/10 bg-background sm:grid-cols-2 sm:rounded-[2.5rem] lg:mt-16">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={
                "group p-7 transition-colors duration-300 hover:bg-accent/40 sm:p-9 " +
                (i % 2 === 1 ? "border-l border-ink/10 " : "") +
                (i >= 2 ? "border-t border-ink/10 " : "") +
                (i === 1 ? "max-sm:border-t max-sm:border-ink/10 " : "") +
                (i === 3 ? "max-sm:border-t max-sm:border-ink/10" : "")
              }
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream">
                  <reason.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-medium text-ink/30">
                  ({String(i + 1).padStart(2, "0")})
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {reason.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/60">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-base font-medium text-cream transition-colors hover:bg-ink/85"
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              Call us today
            </a>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/25 px-7 text-base font-medium text-ink transition-colors hover:bg-secondary"
            >
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
