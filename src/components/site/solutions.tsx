"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Megaphone,
  Monitor,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Pill } from "./pill";

const solutions = [
  {
    icon: Monitor,
    title: "ICT Equipment & Technology Supply",
    tagline: "Equip your business with the technology it needs.",
    body: "Computers, laptops, office equipment, accessories and other ICT products for businesses, schools and organizations. Whether you need equipment for a new office, an upgrade or a larger procurement requirement, tell us what you're looking for.",
    link: "Explore ICT Supply",
    href: "/procurement",
  },
  {
    icon: Code2,
    title: "Software & Digital Solutions",
    tagline: "Build technology around the way your business works.",
    body: "From professional websites and web applications to custom software and user experience design, we help businesses develop digital solutions that address their needs — with a focus on practical functionality and ease of use.",
    link: "Explore Digital Solutions",
    href: "/digital-solutions",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Business Visibility",
    tagline: "Help more people find and connect with your business.",
    body: "Having a great product or service is only part of running a successful business — people also need to know you exist. We help businesses improve their online presence, connect with relevant audiences and communicate their value.",
    link: "Explore Digital Marketing",
    href: "/digital-marketing",
  },
  {
    icon: GraduationCap,
    title: "ICT Training & Capacity Development",
    tagline: "Build the skills your people need to do more.",
    body: "Technology becomes more valuable when people know how to use it effectively. We provide practical ICT training opportunities for individuals, employees and teams looking to build useful digital skills.",
    link: "Explore ICT Training",
    href: "/training",
  },
  {
    icon: Wrench,
    title: "Technical Support & ICT Maintenance",
    tagline: "Keep your technology working when it matters.",
    body: "Technology problems can interrupt important work. From device repairs and maintenance to technical assistance, our ICT support services help customers address technology challenges and keep their equipment in good working condition.",
    link: "Explore ICT Support",
    href: "/support",
  },
];

const TOTAL = solutions.length + 1; // services + closing CTA card

export function Solutions() {
  const reduce = useReducedMotion();
  const stackRef = useRef<HTMLDivElement>(null);

  // 0 → container top reaches the viewport top, 1 → container bottom
  // reaches the viewport bottom. Drives the per-card settle scale.
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="solutions" className="relative isolate bg-mist py-24 lg:py-32">
      {/* faint blueprint grid, fading down from the top (no overflow-hidden
          here on purpose — an unclipped ancestor keeps position:sticky working) */}
      <div
        aria-hidden="true"
        className="bg-grid-royal pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_5%,transparent_65%)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              The right technology for{" "}
              <em className="font-light italic">every stage</em> of your
              business.
            </>
          }
          lede="From essential ICT equipment to digital transformation, we provide solutions designed around real business needs."
        />

        {/* sticky deck — each card pins in place and the next slides over it */}
        <div ref={stackRef} className="mt-14 lg:mt-20">
          {solutions.map((item, index) => (
            <StackCard
              key={item.title}
              index={index}
              progress={reduce ? undefined : scrollYProgress}
            >
              <ServiceCardBody item={item} />
            </StackCard>
          ))}

          <StackCard
            index={TOTAL - 1}
            progress={reduce ? undefined : scrollYProgress}
          >
            <CtaCardBody />
          </StackCard>

          {/* runway — lets the fully assembled deck hold for a beat
              before the whole stack scrolls away */}
          <div aria-hidden="true" className="h-[38vh]" />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Pill href="/services" variant="ink">
              View All Solutions
            </Pill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── One card of the sticky deck ─────────────────────────────────── */

type StackCardProps = {
  index: number;
  progress?: MotionValue<number>;
  children: React.ReactNode;
};

function StackCard({ index, progress, children }: StackCardProps) {
  // While later cards slide over this one it settles back: a gentle
  // scale-down plus a soft ink veil — depth without gimmicks.
  const fallback = useMotionValue(0);
  const p = progress ?? fallback;

  const range: [number, number] = [index / TOTAL, 1];
  const targetScale = 1 - (TOTAL - 1 - index) * 0.028;
  const scale = useTransform(p, range, [1, targetScale]);
  const veil = useTransform(
    p,
    range,
    [0, index === TOTAL - 1 ? 0 : 0.28]
  );

  return (
    <div
      className="stack-item sticky pb-6 sm:pb-8"
      style={{ "--stack-i": index } as React.CSSProperties}
    >
      <motion.article
        style={{ scale, transformOrigin: "center top" }}
        className="group relative flex min-h-[19rem] overflow-hidden rounded-[2rem] bg-white shadow-soft will-change-transform sm:min-h-[20rem] lg:min-h-[23rem]"
      >
        {children}
        {/* soft dim layer as the card gets covered */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: veil }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-ink"
        />
      </motion.article>
    </div>
  );
}

/* ── Card bodies ─────────────────────────────────────────────────── */

function ServiceCardBody({
  item,
}: {
  item: (typeof solutions)[number];
}) {
  return (
    <Link
      href={item.href}
      aria-label={`${item.link}: ${item.title}`}
      className="relative z-10 grid w-full gap-7 p-8 outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-royal sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12 lg:p-14"
    >
      <span className="flex size-14 items-center justify-center rounded-full bg-mist-2 text-ink transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-6 group-hover:bg-royal group-hover:text-white lg:size-16">
        <item.icon className="size-6 lg:size-7" aria-hidden="true" />
      </span>

      <div>
        <h3 className="font-display text-2xl leading-tight font-medium text-ink sm:text-3xl">
          {item.title}
        </h3>
        <p className="mt-2.5 text-sm font-semibold text-ink/70 sm:text-base">
          {item.tagline}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone sm:text-base">
          {item.body}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-royal">
          <span className="border-b border-ink/25 pb-0.5">{item.link}</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>

      <span className="hidden size-16 shrink-0 items-center justify-center rounded-full border border-haze text-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-royal group-hover:bg-royal group-hover:text-white group-hover:shadow-card lg:flex">
        <ArrowUpRight
          className="size-5 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-45"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

function CtaCardBody() {
  return (
    <div className="relative flex w-full flex-col justify-between gap-8 bg-ink p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-12 lg:p-14">
      {/* faint grid texture on the dark closer card */}
      <div
        aria-hidden="true"
        className="bg-grid-white pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_80%_at_75%_25%,black,transparent)]"
      />
      <div className="relative flex items-start gap-6 lg:items-center">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-royal text-white transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-45 lg:size-16">
          <ArrowUpRight className="size-6 lg:size-7" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-2xl leading-tight font-medium text-white sm:text-3xl">
            Not sure where to start?
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            Tell us what you&rsquo;re trying to achieve and we&rsquo;ll help you
            find the right mix of equipment, digital services and support.
          </p>
        </div>
      </div>
      <Link
        href="/contact"
        className="relative inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-semibold text-sky transition-colors hover:text-white lg:self-center"
      >
        <span className="border-b border-sky/40 pb-0.5">Talk to Our Team</span>
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
