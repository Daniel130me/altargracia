import type { Metadata } from "next";
import {
  Search,
  Share2,
  PenLine,
  Megaphone,
  MapPin,
  BarChart3,
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

export const metadata: Metadata = {
  title: "Digital Marketing Services for Businesses | Altagracia Technologies",
  description:
    "Help customers find and connect with your business online — search visibility, social media presence, content and online campaigns for businesses in Nigeria.",
  keywords: [
    "digital marketing services Nigeria",
    "business visibility online",
    "social media management for businesses",
    "search visibility for businesses",
  ],
  openGraph: {
    title: "Digital Marketing Services for Businesses | Altagracia Technologies",
    description:
      "Help the right people find your business online and understand the value you offer.",
    type: "website",
    siteName: "Altagracia Technologies",
  },
};

const features = [
  {
    icon: Search,
    title: "Search Visibility",
    body: "Make it easier for customers searching for your kind of business to find you.",
  },
  {
    icon: Share2,
    title: "Social Media Presence",
    body: "Set up and manage business pages that present your brand professionally.",
  },
  {
    icon: PenLine,
    title: "Content & Communication",
    body: "Clear messaging and content that tells customers what you do and why it matters.",
  },
  {
    icon: Megaphone,
    title: "Online Campaigns",
    body: "Targeted campaigns that put your business in front of relevant audiences.",
  },
  {
    icon: MapPin,
    title: "Business Listings",
    body: "Accurate listings and maps presence, so customers can find — and reach — you.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Insight",
    body: "Straightforward reports on what's working, in language that doesn't need translating.",
  },
];

const steps = [
  {
    title: "Understand Your Business",
    body: "What you offer, who your customers are and how they currently find you.",
  },
  {
    title: "Plan the Approach",
    body: "We agree on channels, message and activities — with clear expectations.",
  },
  {
    title: "Execute",
    body: "We set up, publish and run the agreed activities consistently.",
  },
  {
    title: "Review & Adjust",
    body: "We report on results and adjust the approach based on what's working.",
  },
];

const fit = [
  "Customers search for your product or service online, but find competitors instead",
  "Your social media pages exist but don't reflect the quality of your work",
  "You rely entirely on word of mouth and want a dependable second channel",
  "You're launching something new and need people to know about it",
];

const faqs = [
  {
    question: "How quickly will we see results?",
    answer:
      "Some activities, like campaigns and listings, can bring visibility within weeks. Search visibility builds over months. We set realistic expectations upfront and report honestly along the way.",
  },
  {
    question: "Do you manage our social media accounts?",
    answer:
      "Yes, we can set up and manage business pages on an agreed basis. We discuss what to publish, and you approve the direction — your brand stays yours.",
  },
  {
    question: "Do we need a website first?",
    answer:
      "A website gives campaigns and search activity somewhere to lead, so we usually recommend one. If you don't have one yet, we can build it as part of the engagement.",
  },
  {
    question: "What does it cost?",
    answer:
      "It depends on the channels and level of activity. After understanding your goals, we propose a clear monthly plan — you decide what to start with.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Marketing & Business Visibility"
        title={
          <>
            Help the right customers{" "}
            <em className="font-light italic">find you.</em>
          </>
        }
        lede="A good business deserves to be visible. We help businesses improve their online presence, connect with relevant audiences and communicate their value clearly."
        image={{
          src: "/images/marketing-team.jpg",
          alt: "Altagracia digital marketing professional working on client visibility",
        }}
        frame="tr"
        actions={
          <>
            <Pill href="/contact" variant="ink">
              Discuss Your Visibility
            </Pill>
            <Pill href="#what-we-do" variant="outline">
              What We Do
            </Pill>
          </>
        }
      />

      {/* What we do */}
      <section
        id="what-we-do"
        className="relative isolate overflow-hidden bg-mist py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Visibility built on{" "}
                <em className="font-light italic">clear communication.</em>
              </>
            }
            lede="We focus on practical activities that help real customers find, understand and choose your business."
          />
          <div className="mt-12">
            <FeatureGrid items={features} />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title={
              <>
                An honest approach to{" "}
                <em className="font-light italic">growing visibility.</em>
              </>
            }
            lede="No inflated promises. We agree on the plan, execute it consistently and report what actually happened."
          />
          <div className="mt-12">
            <StepsRow steps={steps} />
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>Is This You?</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-balance text-3xl leading-[1.08] font-medium tracking-tight text-ink sm:text-4xl">
                  If people can&rsquo;t find you,{" "}
                  <em className="font-light italic">they can&rsquo;t choose you.</em>
                </h2>
              </Reveal>
              <div className="mt-9">
                <CheckList items={fit} />
              </div>
            </div>
            <div>
              <Reveal delay={0.1}>
                <div className="rounded-[1.75rem] border border-haze bg-white p-8 sm:p-10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone">
                    Our View
                  </p>
                  <p className="font-display mt-4 text-xl leading-snug text-ink sm:text-2xl">
                    Visibility only works when the{" "}
                    <em className="italic">message is clear.</em>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                    That&rsquo;s why we start with how your business communicates — what
                    you do, who it&rsquo;s for and why it matters — before spending on
                    any channel.
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
            <RelatedServices current="digital-marketing" />
          </div>
        </div>
      </section>

      <MiniFaq
        title={
          <>
            Questions about{" "}
            <em className="font-light italic">marketing.</em>
          </>
        }
        items={faqs}
      />

      <CtaBand
        eyebrow="Let's Talk Visibility"
        title={
          <>
            Ready to be found by the{" "}
            <em className="font-light italic">right customers?</em>
          </>
        }
        lede="Tell us about your business and who you're trying to reach. We'll propose a practical starting point."
      />
    </>
  );
}
