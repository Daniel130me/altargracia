import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { COMPANY_MISSION, COMPANY_VALUES, COMPANY_VISION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mission, Vision & Values | Altagracia Technologies",
  description:
    "Learn about the mission, vision and working values that guide Altagracia Technologies.",
};

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Mission & Values"
        title={
          <>
            Technology should make{" "}
            <em className="font-light italic">progress possible.</em>
          </>
        }
        lede="Our mission and values express what we work toward and how we approach technology needs with the people who rely on it."
        image={{
          src: "/images/team.png",
          alt: "Altagracia Technologies team working together",
        }}
        actions={
          <Link
            href="/about/approach"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal"
          >
            How We Work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        }
      />

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <article className="h-full rounded-[2rem] bg-ink p-8 text-white sm:p-10 lg:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky">
                Mission
              </p>
              <h2 className="font-display mt-6 text-2xl leading-snug font-medium sm:text-3xl">
                {COMPANY_MISSION}
              </h2>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full rounded-[2rem] border border-haze bg-white p-8 sm:p-10 lg:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                Vision
              </p>
              <h2 className="font-display mt-6 text-2xl leading-snug font-medium text-ink sm:text-3xl">
                {COMPANY_VISION}
              </h2>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
              Core values
            </p>
            <h2 className="font-display mt-4 text-balance text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
              Principles that guide{" "}
              <em className="font-light italic">every engagement.</em>
            </h2>
          </div>
          <ol className="mt-10 divide-y divide-haze border-y border-haze">
            {COMPANY_VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.04}>
                <li className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr_2fr] sm:items-baseline sm:gap-6">
                  <span className="font-display text-lg font-medium text-royal tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-medium text-ink">
                    {value.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-stone sm:text-base">
                    {value.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-8">
            <Link
              href="/about/approach"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-royal"
            >
              See how these values shape our work
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work With Us"
        title={
          <>
            Bring us the challenge.{" "}
            <em className="font-light italic">Let&rsquo;s find a way forward.</em>
          </>
        }
        lede="Tell us what you are working toward, and we can discuss a practical next step."
      />
    </>
  );
}
