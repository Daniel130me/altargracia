import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";
import { MiniFaq } from "@/components/site/mini-faq";
import { StepsRow } from "@/components/site/service-blocks";
import { Eyebrow } from "@/components/site/section-heading";
import { Pill } from "@/components/site/pill";
import { Reveal } from "@/components/site/reveal";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "ICT Solutions for Businesses & Organizations | Altagracia Technologies",
  description:
    "Corporate ICT solutions for businesses, schools and organizations in Nigeria — equipment supply, software and digital solutions, digital marketing, ICT training and technical support.",
  keywords: [
    "ICT solutions for businesses",
    "corporate technology services Nigeria",
    "business technology solutions",
    "ICT services for organizations",
  ],
  openGraph: {
    title: "ICT Solutions for Businesses & Organizations | Altagracia Technologies",
    description:
      "Equipment supply, digital solutions, digital marketing, ICT training and technical support for organizations.",
    type: "website",
    siteName: "Altagracia Technologies",
  },
};

const steps = [
  {
    title: "Share Your Requirements",
    body: "Tell us what you need — by phone, email or the enquiry form. A short description of your goals is enough to start.",
  },
  {
    title: "We Assess and Recommend",
    body: "We review your requirements and recommend the right mix of equipment, digital services and support. No unnecessary extras.",
  },
  {
    title: "Quotation and Scope",
    body: "You receive a clear quotation with the agreed scope, so you know exactly what you're getting and what it involves.",
  },
  {
    title: "Delivery and Support",
    body: "We supply, build or deliver as agreed — and remain available for support after the work is done.",
  },
];

const faqs = [
  {
    question: "What kind of organizations do you work with?",
    answer:
      "Our solutions are structured around businesses, corporate offices, schools, startups and institutions. We also attend to individuals purchasing technology products.",
  },
  {
    question: "Can you handle different services within one project?",
    answer:
      "Yes. Many engagements combine equipment supply with installation, training and support. Tell us the full picture and we'll organize it as one coordinated project.",
  },
  {
    question: "Do you only serve organizations in Lagos?",
    answer:
      "We are based in Lagos and serve organizations across Nigeria. Location and delivery details are confirmed per requirement.",
  },
  {
    question: "How do I know which service I need?",
    answer:
      "You don't have to decide upfront. Describe what you're trying to achieve and we'll help you find the right starting point.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title={
          <>
            Solutions built around{" "}
            <em className="font-light italic">your business.</em>
          </>
        }
        lede="Altagracia Technologies provides five core services for businesses, schools and organizations. Each one can be engaged on its own — or combined into a single, coordinated project."
        actions={
          <Pill href="/contact" variant="ink">
            Request a Quotation
          </Pill>
        }
      />

      {/* Service cards */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {SERVICES.map((service, i) => (
              <Reveal
                key={service.slug}
                delay={i * 0.06}
                className={i === 0 ? "md:col-span-2" : "h-full"}
              >
                <article
                  className={
                    i === 0
                      ? "group relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-soft sm:p-10 lg:p-12"
                      : "group flex h-full flex-col rounded-[2rem] border border-haze bg-mist p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:bg-white hover:shadow-soft sm:p-9"
                  }
                >
                  {i === 0 ? (
                    <div
                      aria-hidden="true"
                      className="bg-grid-white pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_75%_80%_at_80%_20%,black,transparent)]"
                    />
                  ) : null}
                  <div className="relative flex items-start justify-between gap-5">
                    <span
                      className={
                        i === 0
                          ? "flex size-14 items-center justify-center rounded-full bg-royal text-white"
                          : "flex size-14 items-center justify-center rounded-full bg-white text-royal shadow-sm transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-royal group-hover:text-white"
                      }
                    >
                      <service.icon className="size-6" aria-hidden="true" />
                    </span>
                    <span
                      className={
                        i === 0
                          ? "text-[11px] font-bold uppercase tracking-[0.2em] text-sky"
                          : "text-[11px] font-bold uppercase tracking-[0.2em] text-stone"
                      }
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <h2
                    className={
                      i === 0
                        ? "font-display relative mt-6 text-2xl font-medium tracking-tight sm:text-3xl"
                        : "font-display mt-6 text-xl font-medium tracking-tight text-ink sm:text-2xl"
                    }
                  >
                    {service.name}
                  </h2>
                  <p
                    className={
                      i === 0
                        ? "relative mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base"
                        : "mt-3.5 text-sm leading-relaxed text-stone sm:text-base"
                    }
                  >
                    {service.summary}
                  </p>
                  <Link
                    href={service.href}
                    className={
                      i === 0
                        ? "relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-sky transition-colors hover:text-white"
                        : "mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-ink transition-colors hover:text-royal"
                    }
                  >
                    <span className="border-b border-current/30 pb-0.5">
                      Learn more
                    </span>
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}

            {/* not-sure card */}
            <Reveal delay={0.3} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-[2rem] bg-royal p-8 text-white sm:p-9">
                <div>
                  <h2 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                    Not sure which service you need?
                  </h2>
                  <p className="mt-3.5 text-sm leading-relaxed text-white/75 sm:text-base">
                    Describe what you&rsquo;re trying to achieve. We&rsquo;ll help you find
                    the right starting point — even if you&rsquo;re still exploring.
                  </p>
                </div>
                <div className="mt-7">
                  <Pill href="/contact" variant="white">
                    Talk to Our Team
                  </Pill>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How engagements work */}
      <section className="relative isolate overflow-hidden bg-mist py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="bg-dots-royal pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_65%_75%_at_50%_50%,black,transparent)]"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>How Engagements Work</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-balance text-3xl leading-[1.08] font-medium tracking-tight text-ink sm:text-4xl">
                From your requirements to{" "}
                <em className="font-light italic">the right solution.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-base leading-relaxed text-stone sm:text-lg">
                Every service follows the same four-step engagement, so you always
                know what happens next.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <StepsRow steps={steps} />
          </div>
        </div>
      </section>

      <MiniFaq
        title={
          <>
            Before you <em className="font-light italic">reach out.</em>
          </>
        }
        items={faqs}
      />

      <CtaBand
        title={
          <>
            Ready to discuss your{" "}
            <em className="font-light italic">requirements?</em>
          </>
        }
      />
    </>
  );
}
