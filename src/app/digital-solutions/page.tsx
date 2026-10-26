import type { Metadata } from "next";
import {
  Globe,
  AppWindow,
  Settings2,
  PenTool,
  ShoppingBag,
  RefreshCw,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";
import { MiniFaq } from "@/components/site/mini-faq";
import { QuoteStrip } from "@/components/site/quote-strip";
import {
  CheckList,
  FeatureGrid,
  RelatedServices,
  StepsRow,
} from "@/components/site/service-blocks";
import { Eyebrow, SectionHeading } from "@/components/site/section-heading";
import { Pill } from "@/components/site/pill";
import { Reveal } from "@/components/site/reveal";
import { TESTIMONIALS } from "@/lib/site";
import { ServiceIntent } from "@/components/site/service-intent";

export const metadata: Metadata = {
  title: "Business Software Development & Digital Solutions | Altagracia Technologies",
  description:
    "Professional websites, web applications and custom software developed around the way your business works. Discuss your digital project requirements with our team in Nigeria.",
  keywords: [
    "business software development Nigeria",
    "web application development Lagos",
    "custom software for businesses",
    "digital solutions company Nigeria",
  ],
  openGraph: {
    title: "Business Software Development & Digital Solutions | Altagracia Technologies",
    description:
      "Websites, web applications and custom software built around the way your business actually works.",
    type: "website",
    siteName: "Altagracia Technologies",
  },
};

const features = [
  {
    icon: Globe,
    title: "Business Websites",
    body: "Professional websites that present your business clearly and earn the trust of visitors.",
  },
  {
    icon: AppWindow,
    title: "Web Applications",
    body: "Portals, dashboards and tools your team or customers use daily — accessible from anywhere.",
  },
  {
    icon: Settings2,
    title: "Custom Business Software",
    body: "Software shaped around your operations, from records and inventory to internal workflows.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Booking Systems",
    body: "Sell online or take bookings with practical systems your customers can actually use.",
  },
  {
    icon: PenTool,
    title: "User Experience Design",
    body: "Interfaces designed for clarity and ease of use, not just appearance.",
  },
  {
    icon: RefreshCw,
    title: "Maintenance & Improvements",
    body: "Updates, fixes and improvements for the solutions we build — after launch, not just before.",
  },
];

const steps = [
  {
    title: "Understand the Requirements",
    body: "We start with how your business operates and what the solution must achieve.",
  },
  {
    title: "Propose the Solution",
    body: "You receive a clear proposal covering scope, functionality, timeline and cost.",
  },
  {
    title: "Build With Feedback",
    body: "We develop in stages and involve you along the way — no surprises at the end.",
  },
  {
    title: "Launch & Support",
    body: "We deploy, hand over properly and remain available for support and improvements.",
  },
];

const fit = [
  "You need a website that actually represents the quality of your business",
  "Your team manages important work in spreadsheets and repetitive manual steps",
  "Off-the-shelf software doesn't match how your operations run",
  "You want to sell or take bookings online",
  "You have an existing solution that needs improvement or proper support",
];

const faqs = [
  {
    question: "How much does a website or software project cost?",
    answer:
      "It depends on scope and requirements. After understanding what you need, we provide a clear proposal with itemized costs — so you can decide with the full picture.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A professional business website typically takes a few weeks; custom software depends on complexity. Your proposal includes an agreed timeline before work begins.",
  },
  {
    question: "Who owns the solution after delivery?",
    answer:
      "You do. We hand over the solution with the documentation and access you need, and we're available for ongoing support if you want it.",
  },
  {
    question: "Can you improve or fix our existing website or software?",
    answer:
      "In most cases, yes. Tell us about the current solution and what isn't working — we'll assess it honestly and tell you whether improvement or replacement makes more sense.",
  },
];

export default function DigitalSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Software & Digital Solutions"
        title={
          <>
            Technology that supports{" "}
            <em className="font-light italic">the way you work.</em>
          </>
        }
        lede="We build websites, web applications and custom software for businesses and organizations — designed around your real operations, not generic templates."
        image={{
          src: "/images/process-consultation.jpg",
          alt: "Altagracia developers working on a digital solution at their workstations",
        }}
        actions={
          <>
            <Pill href="/contact?service=digital-solutions" variant="ink">
              Discuss Your Project
            </Pill>
            <Pill href="#what-we-build" variant="outline">
              What We Build
            </Pill>
          </>
        }
      />

      {/* What we build */}
      <section
        id="what-we-build"
        className="relative isolate overflow-hidden bg-mist py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Build"
            title={
              <>
                Digital solutions with{" "}
                <em className="font-light italic">a practical purpose.</em>
              </>
            }
            lede="Every project starts with a business need. The technology is simply how we meet it."
          />
          <div className="mt-12">
            <FeatureGrid items={features} />
          </div>
        </div>
      </section>

      <ServiceIntent
        service="digital-solutions"
        layout="steps"
        eyebrow="Shape Your Project"
        title={
          <>
            Where should your{" "}
            <em className="font-light italic">digital project begin?</em>
          </>
        }
        lede="Pick a starting point and tell us what you want the solution to help you do."
        options={[
          {
            id: "website",
            label: "Business website",
            detail: "Plan a new website or refresh an existing one around your customers and goals.",
          },
          {
            id: "custom",
            label: "Software or web app",
            detail: "Discuss a business process that could benefit from a custom digital solution.",
          },
          {
            id: "improve",
            label: "Improve what I have",
            detail: "Review an existing website or software product and discuss the issues to solve.",
          },
        ]}
      />

      {/* Approach */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Development Approach"
            title={
              <>
                Built step by step,{" "}
                <em className="font-light italic">with you involved.</em>
              </>
            }
            lede="Clear scope, staged delivery and honest communication — so the final solution is the one you actually needed."
          />
          <div className="mt-12">
            <StepsRow steps={steps} />
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>When It Fits</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-balance text-3xl leading-[1.08] font-medium tracking-tight text-ink sm:text-4xl">
                  Is this the right time to{" "}
                  <em className="font-light italic">build?</em>
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-stone sm:text-lg">
                  If any of these sound familiar, a conversation about your
                  requirements is a sensible next step.
                </p>
              </Reveal>
              <div className="mt-9">
                <CheckList items={fit} />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Reveal delay={0.1}>
                <div className="rounded-[1.75rem] border border-haze bg-white p-8 sm:p-10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone">
                    Our Commitment
                  </p>
                  <p className="font-display mt-4 text-xl leading-snug text-ink sm:text-2xl">
                    We recommend building only when it{" "}
                    <em className="italic">genuinely serves the business.</em>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                    Sometimes the right answer is a simpler tool or an adjustment to
                    what you already have. If that&rsquo;s the case, we&rsquo;ll say so —
                    and explain why.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <QuoteStrip testimonial={TESTIMONIALS[2]} />
          <div className="mt-12">
            <RelatedServices current="digital-solutions" />
          </div>
        </div>
      </section>

      <MiniFaq
        title={
          <>
            Questions about{" "}
            <em className="font-light italic">digital projects.</em>
          </>
        }
        items={faqs}
      />

      <CtaBand
        contactHref="/contact?service=digital-solutions"
        eyebrow="Discuss Your Project"
        title={
          <>
            Let&rsquo;s build what&rsquo;s next for{" "}
            <em className="font-light italic">your business.</em>
          </>
        }
        lede="Describe what you need — even if it's just the problem, not the solution. We'll help you shape it into a clear project."
      />
    </>
  );
}
