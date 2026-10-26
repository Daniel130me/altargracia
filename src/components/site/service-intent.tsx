"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export type ServiceIntentOption = {
  id: string;
  label: string;
  detail: string;
};

type ServiceIntentProps = {
  service: string;
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  options: ServiceIntentOption[];
  layout: "tiles" | "steps" | "pills" | "triage";
};

export function ServiceIntent({
  service,
  eyebrow,
  title,
  lede,
  options,
  layout,
}: ServiceIntentProps) {
  const [selectedId, setSelectedId] = useState(options[0]?.id ?? "");
  const selected = options.find((option) => option.id === selectedId);

  if (!selected) {
    return null;
  }

  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 -z-10 size-[34rem] rounded-full bg-royal/30 blur-[110px]"
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky">
            {eyebrow}
          </p>
          <h2 className="font-display mt-4 text-balance text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
            {lede}
          </p>
        </div>

        <div className="lg:col-span-7">
          <div
            role="group"
            aria-label="Choose the option that best describes your need"
            className={
              layout === "pills"
                ? "flex flex-wrap gap-2"
                : layout === "steps"
                  ? "grid gap-2 sm:grid-cols-3"
                  : layout === "triage"
                    ? "grid gap-2"
                    : "grid gap-2 sm:grid-cols-3"
            }
          >
            {options.map((option, index) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={selectedId === option.id}
                onClick={() => setSelectedId(option.id)}
                className={`${
                  layout === "pills"
                    ? "rounded-full px-5 py-3"
                    : layout === "steps"
                      ? "min-h-24 rounded-xl px-4 py-4"
                      : "min-h-14 rounded-xl px-4 py-3"
                } border text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky ${
                  selectedId === option.id
                    ? "border-sky bg-sky text-ink"
                    : "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10"
                }`}
              >
                {layout === "steps" ? (
                  <span className="mb-2 block text-xs font-bold tracking-[0.14em] opacity-70">
                    STEP 0{index + 1}
                  </span>
                ) : null}
                {layout === "triage" ? (
                  <span className="mr-2 text-xs font-bold text-sky">
                    0{index + 1}
                  </span>
                ) : null}
                {option.label}
              </button>
            ))}
          </div>

          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex flex-col gap-5 rounded-2xl border border-white/15 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
          >
            <p className="flex max-w-xl items-start gap-3 text-sm leading-relaxed text-white/80 sm:text-base">
              <Check className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
              {selected.detail}
            </p>
            <Link
              href={`/contact?service=${encodeURIComponent(service)}&focus=${encodeURIComponent(selected.id)}`}
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-sky sm:self-auto"
            >
              Discuss this need
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
