import type { Metadata } from "next";
import {
  HardDrive,
  Wrench,
  ShieldCheck,
  Wifi,
  LifeBuoy,
  CalendarClock,
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
  title: "Technical Support & ICT Maintenance | Altagracia Technologies",
  description:
    "ICT technical support, device repairs and preventive maintenance for businesses, schools and organizations in Nigeria. Keep your technology working when it matters.",
  keywords: [
    "ICT technical support Nigeria",
    "computer maintenance services",
    "device repairs for businesses",
    "IT support Lagos",
  ],
  openGraph: {
    title: "Technical Support & ICT Maintenance | Altagracia Technologies",
    description:
      "Repairs, maintenance and dependable technical assistance that keeps your equipment working.",
    type: "website",
    siteName: "Altagracia Technologies",
  },
};

const features = [
  {
    icon: HardDrive,
    title: "Device Repairs & Servicing",
    body: "Diagnosis and repair of computers, laptops and everyday office equipment.",
  },
  {
    icon: Wrench,
    title: "Software Support",
    body: "Installation, updates, configuration and fixes for the software your work depends on.",
  },
  {
    icon: Wifi,
    title: "Network & Connectivity",
    body: "Troubleshooting for internet, Wi-Fi and office networks — get back online, properly.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Maintenance",
    body: "Scheduled servicing that catches small problems before they interrupt important work.",
  },
  {
    icon: LifeBuoy,
    title: "Technical Assistance",
    body: "Straight answers to everyday technology questions, explained without jargon.",
  },
  {
    icon: CalendarClock,
    title: "Arranged Maintenance Plans",
    body: "Regular service visits for organizations — like the termly lab servicing we handle for schools.",
  },
];

const steps = [
  {
    title: "Contact Us",
    body: "Describe the problem — call, email or the enquiry form. Photos or error messages help.",
  },
  {
    title: "We Diagnose",
    body: "We assess the issue and explain what's wrong, what's involved and what it will cost.",
  },
  {
    title: "We Fix or Service",
    body: "Repairs, configuration or maintenance are carried out as agreed, with clear communication.",
  },
  {
    title: "Follow-Up",
    body: "We confirm the problem is properly resolved — and advise how to avoid a repeat.",
  },
];

const trust = [
  "Problems explained in plain language, before any work starts",
  "Costs agreed upfront — you approve before we proceed",
  "We support equipment we supply, and equipment you already own",
  "Organizations can arrange regular maintenance instead of waiting for failures",
  "The same team that supplies and installs your technology can maintain it",
];

const faqs = [
  {
    question: "Do you repair equipment you didn't supply?",
    answer:
      "Yes. Our technical support covers computers and ICT equipment from any supplier. Tell us what the equipment is and what's wrong.",
  },
  {
    question: "How fast can you respond to a support request?",
    answer:
      "It depends on the issue and current schedule, but we treat response time seriously — our clients will tell you the same. Organizations with arranged maintenance get priority scheduling.",
  },
  {
    question: "Can we set up ongoing maintenance for our office or school?",
    answer:
      "Yes. We arrange scheduled maintenance visits — for example, termly servicing of a school's computer laboratory — so problems are caught early.",
  },
  {
    question: "What if the equipment isn't worth repairing?",
    answer:
      "We'll tell you honestly. If a repair doesn't make sense, we'll say so and — if you want — advise on a sensible replacement.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical Support & ICT Maintenance"
        title={
          <>
            Keep your technology{" "}
            <em className="font-light italic">working when it matters.</em>
          </>
        }
        lede="Technology problems interrupt important work. Our support services fix problems properly, maintain equipment before it fails and give your team somewhere to turn."
        image={{
          src: "/images/products-service.jpg",
          alt: "Altagracia ICT technician servicing desktop computer hardware",
        }}
        actions={
          <>
            <Pill href="/contact?service=support" variant="ink">
              Request Support
            </Pill>
            <Pill href="#support-coverage" variant="outline">
              What We Cover
            </Pill>
          </>
        }
      />

      {/* What we cover */}
      <section
        id="support-coverage"
        className="relative isolate overflow-hidden bg-mist py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Cover"
            title={
              <>
                One place to turn for{" "}
                <em className="font-light italic">every technology problem.</em>
              </>
            }
            lede="From a single faulty laptop to the ongoing health of an organization's equipment."
          />
          <div className="mt-12">
            <FeatureGrid items={features} />
          </div>
        </div>
      </section>

      <ServiceIntent
        service="support"
        layout="triage"
        eyebrow="Tell Us What You Need"
        title={
          <>
            Is it a fault,{" "}
            <em className="font-light italic">maintenance or setup?</em>
          </>
        }
        lede="Choose the closest match. Add the equipment type and what is happening when you contact us."
        options={[
          {
            id: "repair",
            label: "Repair a fault",
            detail: "Describe the device, the issue and when it started so we can understand the problem.",
          },
          {
            id: "maintenance",
            label: "Plan maintenance",
            detail: "Discuss scheduled servicing for the computers and technology your team depends on.",
          },
          {
            id: "setup",
            label: "Setup or configuration",
            detail: "Get help installing or configuring ICT equipment for your workplace or organization.",
          },
        ]}
      />

      {/* How support works */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How Support Works"
            title={
              <>
                Straightforward, from{" "}
                <em className="font-light italic">report to resolution.</em>
              </>
            }
            lede="No black boxes. You'll understand what's wrong, what we're doing about it and what it costs."
          />
          <div className="mt-12">
            <StepsRow steps={steps} />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>Why Customers Rely on Us</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-balance text-3xl leading-[1.08] font-medium tracking-tight text-ink sm:text-4xl">
                  Support you don&rsquo;t have to{" "}
                  <em className="font-light italic">chase.</em>
                </h2>
              </Reveal>
              <div className="mt-9">
                <CheckList items={trust} />
              </div>
            </div>
            <div>
              <Reveal delay={0.1}>
                <div className="rounded-[1.75rem] border border-haze bg-white p-8 sm:p-10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone">
                    A Practical Example
                  </p>
                  <p className="font-display mt-4 text-xl leading-snug text-ink sm:text-2xl">
                    Downtime that used to delay dispatches is{" "}
                    <em className="italic">now practically zero.</em>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                    That&rsquo;s what {TESTIMONIALS[0].name} said after an ICT
                    overhaul and ongoing support across three depots — read the
                    full story below.
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
          <QuoteStrip testimonial={TESTIMONIALS[0]} />
          <div className="mt-12">
            <RelatedServices current="support" />
          </div>
        </div>
      </section>

      <MiniFaq
        title={
          <>
            Questions about{" "}
            <em className="font-light italic">support.</em>
          </>
        }
        items={faqs}
      />

      <CtaBand
        contactHref="/contact?service=support"
        eyebrow="Request Support"
        title={
          <>
            Got a technology problem?{" "}
            <em className="font-light italic">Let&rsquo;s fix it.</em>
          </>
        }
        lede="Describe the issue — or arrange ongoing maintenance for your organization. We'll respond with clear next steps."
      />
    </>
  );
}
