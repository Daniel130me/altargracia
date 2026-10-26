import type { Metadata } from "next";
import {
  Laptop,
  Printer,
  Network,
  BatteryCharging,
  Mouse,
  KeyRound,
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
  title: "ICT Equipment & Procurement for Organizations | Altagracia Technologies",
  description:
    "Computers, laptops, office equipment, networking gear and ICT accessories for businesses, schools and organizations in Nigeria. Request a quotation for your technology supply requirements.",
  keywords: [
    "ICT equipment procurement Nigeria",
    "computer supply for businesses",
    "technology supply for organizations",
    "ICT equipment supplier Lagos",
  ],
  openGraph: {
    title: "ICT Equipment & Procurement | Altagracia Technologies",
    description:
      "Technology supply for organizations — computers, office equipment, networking and accessories, sourced to your requirements.",
    type: "website",
    siteName: "Altagracia Technologies",
  },
};

const features = [
  {
    icon: Laptop,
    title: "Computers & Laptops",
    body: "Desktops, laptops and workstations specified for the work your team actually does.",
  },
  {
    icon: Printer,
    title: "Office Equipment & Peripherals",
    body: "Printers, scanners, projectors and the everyday hardware offices run on.",
  },
  {
    icon: Network,
    title: "Networking Equipment",
    body: "Routers, switches, access points and cabling to connect your workspace reliably.",
  },
  {
    icon: BatteryCharging,
    title: "Power & Backup Solutions",
    body: "UPS units and power protection to keep equipment safe and work uninterrupted.",
  },
  {
    icon: Mouse,
    title: "Accessories & Consumables",
    body: "Keyboards, storage, chargers and the accessories that keep workstations complete.",
  },
  {
    icon: KeyRound,
    title: "Software & Licenses",
    body: "Operating systems, productivity software and licenses configured for your devices.",
  },
];

const steps = [
  {
    title: "Share Your Requirements",
    body: "Send us your list or describe your needs — a new office, an upgrade or a single purchase.",
  },
  {
    title: "Availability & Quotation",
    body: "We confirm availability and send a clear quotation with specifications and pricing.",
  },
  {
    title: "Supply & Delivery",
    body: "Once confirmed, we supply and deliver the equipment as agreed, with documentation.",
  },
  {
    title: "Setup & After-Sales",
    body: "Where required, we install, configure and support what we supply — so it works from day one.",
  },
];

const audiences = [
  {
    title: "Businesses & Corporate Offices",
    body: "Workstations and equipment for daily operations, new offices and team expansion.",
  },
  {
    title: "Schools & Institutions",
    body: "Computer laboratories, staff systems and teaching equipment — supplied and installed.",
  },
  {
    title: "Startups & Growing Teams",
    body: "Practical setups that match your stage and budget, with room to grow.",
  },
  {
    title: "Individuals",
    body: "While our focus is corporate ICT supply, individuals are welcome to enquire about available products.",
  },
];

const faqs = [
  {
    question: "Can you source equipment that isn't listed on the website?",
    answer:
      "Yes. The website shows the categories we commonly supply, not our full inventory. Send us your specific requirements and we'll confirm availability.",
  },
  {
    question: "How do quotations work?",
    answer:
      "Share your list of requirements and we respond with specifications, pricing and availability. Quotations are clear and itemized, so you know exactly what you're paying for.",
  },
  {
    question: "Do you supply one item or only bulk orders?",
    answer:
      "Both. We handle everything from a single laptop to full office setups and computer laboratories.",
  },
  {
    question: "What happens if equipment develops a fault?",
    answer:
      "We stand by what we supply. Warranty terms depend on the manufacturer, and we support you through warranty claims — or repair through our technical support service.",
  },
];

export default function ProcurementPage() {
  return (
    <>
      <PageHero
        eyebrow="ICT Equipment & Procurement"
        title={
          <>
            The right equipment for{" "}
            <em className="font-light italic">the work ahead.</em>
          </>
        }
        lede="Tell us what your organization needs and we'll source it properly — specified to your requirements, quoted clearly and delivered ready to work."
        image={{
          src: "/images/procurement-supply.jpg",
          alt: "Altagracia team preparing ICT equipment for delivery",
        }}
        frame="tr"
        actions={
          <>
            <Pill href="/contact" variant="ink">
              Request a Quotation
            </Pill>
            <Pill href="#supply-categories" variant="outline">
              What We Supply
            </Pill>
          </>
        }
      />

      {/* What we supply */}
      <section
        id="supply-categories"
        className="relative isolate overflow-hidden bg-mist py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Supply"
            title={
              <>
                Everything your organization runs on,{" "}
                <em className="font-light italic">in one request.</em>
              </>
            }
            lede="From a single laptop to a full office setup, we supply the technology organizations depend on daily."
          />
          <div className="mt-12">
            <FeatureGrid items={features} />
          </div>
          <Reveal delay={0.15}>
            <p className="mt-8 rounded-2xl border border-haze bg-white px-5 py-4 text-sm leading-relaxed text-stone">
              <strong className="font-semibold text-ink">
                Products and availability are subject to confirmation.
              </strong>{" "}
              Models and stock vary — send us your requirements and we&rsquo;ll confirm
              what&rsquo;s available and propose the best options.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How procurement works */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How Procurement Works"
            title={
              <>
                A clear process from{" "}
                <em className="font-light italic">list to delivery.</em>
              </>
            }
            lede="Procurement should feel organized, not uncertain. Here's exactly how it works."
          />
          <div className="mt-12">
            <StepsRow steps={steps} />
          </div>
        </div>
      </section>

      {/* Who we supply + why */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>Who We Supply</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-balance text-3xl leading-[1.08] font-medium tracking-tight text-ink sm:text-4xl">
                  Equipping organizations of{" "}
                  <em className="font-light italic">every size.</em>
                </h2>
              </Reveal>
              <ul className="mt-9 space-y-5">
                {audiences.map((a, i) => (
                  <Reveal key={a.title} delay={i * 0.06}>
                    <li className="border-l-2 border-royal/30 pl-5">
                      <h3 className="font-display text-lg font-medium text-ink">
                        {a.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone">
                        {a.body}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <Reveal>
                <Eyebrow>Why Altagracia</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-balance text-3xl leading-[1.08] font-medium tracking-tight text-ink sm:text-4xl">
                  Advice first.{" "}
                  <em className="font-light italic">Sales second.</em>
                </h2>
              </Reveal>
              <div className="mt-9">
                <CheckList
                  items={[
                    "Guidance on the right specifications before you buy, so you don't pay for capability you don't need",
                    "Sourcing through reputable suppliers, with genuine products",
                    "One partner for supply, installation, training and support — no vendor coordination on your side",
                    "Clear, itemized quotations with confirmed availability",
                    "After-sales support for everything we deliver",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <QuoteStrip testimonial={TESTIMONIALS[0]} />
          <div className="mt-12">
            <RelatedServices current="procurement" />
          </div>
        </div>
      </section>

      <MiniFaq
        title={
          <>
            Questions about{" "}
            <em className="font-light italic">ordering.</em>
          </>
        }
        items={faqs}
      />

      <CtaBand
        eyebrow="Request a Quotation"
        title={
          <>
            Ready to equip your{" "}
            <em className="font-light italic">organization?</em>
          </>
        }
        lede="Send us your requirements — a detailed list or a simple description — and we'll respond with availability and a clear quotation."
      />
    </>
  );
}
