import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { Reveal } from "./reveal";

/* ── Feature grid: "what we provide" cards on service pages ─────── */

export type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: Feature[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={
        columns === 3
          ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          : "grid gap-5 sm:grid-cols-2"
      }
    >
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.06} className="h-full">
          <div className="group h-full rounded-[1.75rem] border border-haze bg-white p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-soft">
            <span className="flex size-12 items-center justify-center rounded-full bg-mist-2 text-royal transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-royal group-hover:text-white">
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="font-display mt-5 text-lg font-medium tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-stone">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Engagement steps: how a requirement becomes a delivery ──────── */

export type Step = { title: string; body: string };

export function StepsRow({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.08} className="h-full">
          <li className="flex h-full flex-col rounded-[1.75rem] border border-haze bg-white p-7">
            <span className="font-display text-3xl font-medium text-royal tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display mt-4 text-lg font-medium tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-stone">{step.body}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

/* ── Checklist: bullets with royal checks ────────────────────────── */

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item} delay={i * 0.04}>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-royal/10 text-royal">
              <Check className="size-3" strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="text-sm leading-relaxed text-ink/80 sm:text-base">
              {item}
            </span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

/* ── Related services: cross-links between the five service pages ── */

export function RelatedServices({ current }: { current: string }) {
  const others = SERVICES.filter((s) => s.slug !== current);
  return (
    <Reveal>
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="mr-1 text-xs font-bold uppercase tracking-[0.2em] text-stone">
          Related services
        </span>
        {others.map((service) => (
          <Link
            key={service.slug}
            href={service.href}
            className="group inline-flex items-center gap-1.5 rounded-full border border-haze bg-white px-4 py-2 text-sm font-medium text-ink/80 transition-all duration-300 hover:border-royal hover:bg-royal hover:text-white"
          >
            {service.short}
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </Reveal>
  );
}
