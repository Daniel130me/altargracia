import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";
import { QuoteStrip } from "@/components/site/quote-strip";
import { SectionHeading } from "@/components/site/section-heading";
import { Eyebrow } from "@/components/site/section-heading";
import { CountUp } from "@/components/site/stats";
import { Pill } from "@/components/site/pill";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import {
  COMPANY_MISSION,
  COMPANY_VISION,
  NUMBERS,
  SERVICES,
  TESTIMONIALS,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About Altagracia Technologies | Corporate ICT Solutions in Nigeria",
  description:
    "Altagracia Technologies is a corporate ICT solutions company in Nigeria — technology supply, digital solutions, ICT training and technical support for businesses and organizations.",
  keywords: [
    "Altagracia Technologies",
    "corporate ICT solutions Nigeria",
    "ICT company Lagos",
    "business technology solutions",
    "ICT services for organizations",
  ],
  openGraph: {
    title: "About Altagracia Technologies | Corporate ICT Solutions in Nigeria",
    description:
      "A corporate ICT solutions company helping businesses and organizations meet their technology needs.",
    type: "website",
    siteName: "Altagracia Technologies",
  },
};

const pillars = [
  {
    number: "01",
    title: "Understanding Your Needs",
    body: "We begin by listening to what you want to achieve, not simply recommending products or services.",
  },
  {
    number: "02",
    title: "Practical Solutions",
    body: "We focus on technology that fits your requirements, rather than introducing unnecessary complexity.",
  },
  {
    number: "03",
    title: "Clear Communication",
    body: "We believe customers should understand what they're getting, what it involves and what happens next.",
  },
  {
    number: "04",
    title: "Professional Engagement",
    body: "Every enquiry is handled in an organized, transparent and straightforward way.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Technology that moves{" "}
            <em className="font-light italic">business forward.</em>
          </>
        }
        lede="Altagracia Technologies is a corporate ICT solutions company helping businesses, schools and organizations across Nigeria meet their everyday and long-term technology needs."
        image={{
          src: "/images/process-consultation.jpg",
          alt: "Two Altagracia ICT professionals reviewing work on computer monitors",
        }}
        actions={
          <>
            <Pill href="/services" variant="ink">
              Explore Our Solutions
            </Pill>
            <Pill href="/about/mission" variant="outline">
              Our Mission &amp; Values
            </Pill>
          </>
        }
      />

      {/* Who we are */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Who We Are</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-balance text-3xl leading-[1.08] font-medium tracking-tight text-ink sm:text-4xl">
                  One partner for equipment, digital services and support.
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-stone sm:text-lg">
                  <p>
                    We bring together ICT products, digital services and practical
                    technology solutions under one roof. That means you don&rsquo;t
                    have to coordinate different vendors for the equipment you buy,
                    the software you run and the support you need afterwards.
                  </p>
                  <p>
                    Our work covers ICT Equipment &amp; Procurement, Software &amp;
                    Digital Solutions, Digital Marketing, Professional ICT Training
                    and Technical Support &amp; Maintenance. Each service stands on
                    its own — and works even better together.
                  </p>
                  <p>
                    Whether you&rsquo;re equipping a new office, improving your digital
                    presence or building your team&rsquo;s ICT skills, we work to make
                    the process clear and straightforward from the first conversation.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Pill href="/contact" variant="royal">
                    Talk to Our Team
                  </Pill>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.16}>
                <blockquote className="relative rounded-[1.75rem] border border-haze bg-mist p-8 sm:p-10">
                  <p className="font-display text-xl leading-snug text-ink sm:text-[1.45rem]">
                    &ldquo;We believe technology should make work easier,{" "}
                    <em className="italic">not more complicated.</em>&rdquo;
                  </p>
                  <footer className="mt-6 flex items-center gap-3">
                    <span className="h-px w-10 bg-ink/20" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
                      The Altagracia Belief
                    </span>
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <article className="h-full rounded-[2rem] bg-ink p-8 text-white sm:p-10 lg:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky">
                Our mission
              </p>
              <p className="font-display mt-6 max-w-xl text-2xl leading-snug font-medium sm:text-3xl">
                {COMPANY_MISSION}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col justify-between rounded-[2rem] border border-haze bg-white p-8 sm:p-10 lg:p-12">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                  Our vision
                </p>
                <p className="font-display mt-6 max-w-xl text-2xl leading-snug font-medium text-ink sm:text-3xl">
                  {COMPANY_VISION}
                </p>
              </div>
              <Link
                href="/about/mission"
                className="group mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-ink transition-colors hover:text-royal"
              >
                Explore our mission and values
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Numbers */}
      <section className="relative isolate overflow-hidden bg-mist py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="bg-dots-royal pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-ink">
              <span className="size-1.5 rotate-45 bg-royal ring-1 ring-ink/10" />
              Altagracia in Numbers
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-y-12 lg:grid-cols-4">
            {NUMBERS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={0.1 + i * 0.08}
                className={i > 0 ? "lg:border-l lg:border-haze" : ""}
              >
                <div className="flex flex-col items-center px-3 text-center sm:px-6 lg:px-8">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    valueClassName="text-ink"
                    suffixClassName="text-royal"
                  />
                  <p className="mt-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative isolate overflow-hidden bg-ink py-24 text-white lg:py-32">
        <div
          aria-hidden="true"
          className="bg-grid-white pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_75%_65%_at_65%_15%,black,transparent)]"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            eyebrow="The Altagracia Approach"
            title={
              <>
                How we work says as much as{" "}
                <em className="font-light italic">what we deliver.</em>
              </>
            }
            lede="The same four principles guide every engagement, whether it's a single device purchase or a multi-part ICT project."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.number}>
                <div className="group h-full rounded-[1.75rem] border border-white/10 bg-white/5 p-7 transition-colors duration-500 hover:bg-white/10">
                  <span className="font-display text-3xl font-medium text-sky tabular-nums">
                    {pillar.number}
                  </span>
                  <h3 className="font-display mt-4 text-lg font-medium tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                    {pillar.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What we do — internal links to service pages */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Five services.{" "}
                <em className="font-light italic">One standard of delivery.</em>
              </>
            }
            lede="Each service has its own page with details on what we provide and how engagements work."
          />
          <ul className="mt-12 divide-y divide-haze border-y border-haze">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.05}>
                <li>
                  <Link
                    href={service.href}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-7 sm:gap-7"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mist-2 text-royal transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-royal group-hover:text-white sm:size-14">
                      <service.icon className="size-5 sm:size-6" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-medium text-ink sm:text-xl">
                        {service.name}
                      </h3>
                      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-stone">
                        {service.summary}
                      </p>
                    </div>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-mist-2 text-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-royal group-hover:text-white sm:size-12">
                      <ArrowUpRight
                        className="size-4.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Client evidence */}
      <section className="bg-mist pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <QuoteStrip testimonial={TESTIMONIALS[0]} />
          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-stone">
              {TESTIMONIALS[1].name} and {TESTIMONIALS[2].name} also share their
              experience on the{" "}
              <Link
                href="/#testimonials"
                className="font-semibold text-royal underline decoration-royal/30 underline-offset-4 transition-colors hover:text-ink"
              >
                homepage
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Let&rsquo;s discuss your{" "}
            <em className="font-light italic">technology requirements.</em>
          </>
        }
      />
    </>
  );
}
