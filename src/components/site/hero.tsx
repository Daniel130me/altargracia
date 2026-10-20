"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

const TRUST_CHIPS = [
  "Registered with CAC",
  "100% genuine products",
  "Real office in Surulere",
  "Same-day response",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-emerald-950">
      <Image
        src="/images/hero.png"
        alt="Inside the Altagracia Technologies store — laptops and phones on display"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-950/85 to-emerald-900/60"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-28 pt-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-36 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-900/50 px-4 py-1.5 text-xs font-medium text-emerald-100 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-amber-300" aria-hidden="true" />
            Registered ICT Company · Lagos, Nigeria
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl xl:text-[3.5rem]">
            Everything ICT.{" "}
            <span className="text-amber-300">One place you can trust.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-emerald-50/90">
            Computers, phones, repairs, digital marketing and training — we
            handle the technology side of your home or business, so you never
            have to stress.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 bg-amber-400 px-7 text-base font-semibold text-emerald-950 hover:bg-amber-300"
            >
              <a href={SITE.phoneHref}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Us Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/30 bg-white/5 px-7 text-base text-white hover:bg-white/15 hover:text-white"
            >
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <a
            href={SITE.emailHref}
            className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-100/80 underline-offset-4 transition-colors hover:text-amber-300 hover:underline"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Prefer email? Write to us — we reply fast.
          </a>

          <ul className="mt-9 grid max-w-lg grid-cols-1 gap-2.5 sm:grid-cols-2">
            {TRUST_CHIPS.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-2 text-sm font-medium text-emerald-50"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-amber-300"
                  aria-hidden="true"
                />
                {chip}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
            <Image
              src="/images/team.png"
              alt="Altagracia Technologies team leading a practical ICT training session"
              width={1152}
              height={864}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="absolute -left-6 top-8 animate-float rounded-2xl bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                <BadgeCheck className="h-5 w-5 text-emerald-700" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-emerald-950">
                  Trusted since 2020
                </p>
                <p className="text-xs text-emerald-900/60">
                  Registered ICT company
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-6 right-6 animate-float rounded-2xl bg-white p-4 shadow-xl"
            style={{ animationDelay: "1.6s" }}
          >
            <div className="flex items-center gap-0.5 pb-1" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm font-bold text-emerald-950">
              1,000+ happy customers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
