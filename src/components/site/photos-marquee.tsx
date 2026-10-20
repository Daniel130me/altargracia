"use client";

import Image from "next/image";

const MOMENTS = [
  {
    src: "/images/real/hero-main.jpg",
    label: "Our Lagos showroom",
    alt: "Customers testing laptops inside a bright modern computer showroom",
  },
  {
    src: "/images/real/repair.jpg",
    label: "Repairs done right",
    alt: "A technician repairing the inside of a laptop with precision tools",
  },
  {
    src: "/images/real/training.jpg",
    label: "Hands-on ICT training",
    alt: "A trainer teaching students in a computer classroom",
  },
  {
    src: "/images/real/support.jpg",
    label: "Support that answers",
    alt: "A support agent wearing a headset helping a customer",
  },
  {
    src: "/images/real/phones.jpg",
    label: "Genuine devices",
    alt: "A customer holding a brand-new smartphone",
  },
  {
    src: "/images/real/marketing.jpg",
    label: "Growth you can measure",
    alt: "A marketer reviewing analytics charts on a laptop and phone",
  },
  {
    src: "/images/real/contracts.jpg",
    label: "Bulk supply & setup",
    alt: "A team planning an ICT installation in a computer lab",
  },
  {
    src: "/images/real/team.jpg",
    label: "The Altagracia team",
    alt: "The Altagracia team smiling at the support desk",
  },
];

function MomentGroup() {
  return (
    <div className="flex shrink-0 items-stretch gap-4 pr-4">
      {MOMENTS.map((m, i) => (
        <figure
          key={`${m.src}-${i}`}
          className="group relative w-56 shrink-0 overflow-hidden rounded-2xl border border-ink/10 sm:w-64"
        >
          <Image
            src={m.src}
            alt={m.alt}
            width={640}
            height={440}
            sizes="256px"
            className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-44"
          />
          <figcaption className="absolute bottom-2.5 left-2.5 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold text-ink backdrop-blur">
            {m.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Full-width marquee of real photos from the business. */
export function PhotoMarquee() {
  return (
    <section aria-label="Photos of Altagracia at work" className="overflow-hidden py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
            Real people. Real ICT.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink/55">
            A peek inside our world — the showroom, the repair bench, the
            classroom and the support desk.
          </p>
        </div>
      </div>
      <div className="marquee-hover mt-8 overflow-hidden" aria-hidden="true">
        <div className="animate-marquee flex w-max">
          <MomentGroup />
          <MomentGroup />
        </div>
      </div>
    </section>
  );
}
