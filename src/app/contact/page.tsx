import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { MiniFaq } from "@/components/site/mini-faq";
import { CheckList } from "@/components/site/service-blocks";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { Reveal } from "@/components/site/reveal";
import { Eyebrow } from "@/components/site/section-heading";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Request a Quotation | Altagracia Technologies",
  description:
    "Request a quotation or discuss your ICT requirements with Altagracia Technologies. Call, email or complete our enquiry form — we respond within one business day.",
  keywords: [
    "request a quotation ICT",
    "contact Altagracia Technologies",
    "ICT company Lagos contact",
    "technology quotation Nigeria",
  ],
  openGraph: {
    title: "Contact Us — Request a Quotation | Altagracia Technologies",
    description:
      "Tell us about your ICT requirements. We respond to enquiries within one business day.",
    type: "website",
    siteName: "Altagracia Technologies",
  },
};

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: SITE.phone.label,
    href: SITE.phone.href,
    note: "Mon – Fri, 9:00am – 5:00pm",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: SITE.email.label,
    href: SITE.email.href,
    note: "Attach your equipment list or project brief",
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE.location,
    note: "Serving organizations across Nigeria",
  },
];

const includeItems = [
  "What your organization does and what you're trying to achieve",
  "The equipment list, project idea or problem you need solved",
  "Your timeline, if there is one",
  "Any questions you already have about the process",
];

const faqs = [
  {
    question: "What happens after I send an enquiry?",
    answer:
      "We review your requirements and respond within one business day — usually with follow-up questions where needed, then a clear proposal or quotation.",
  },
  {
    question: "Can I request a quotation for a business project?",
    answer:
      "Yes. Share your requirements and we can discuss the scope, available solutions and quotation process. Quotations are clear and itemized.",
  },
  {
    question: "What if I need an ICT service that isn't listed?",
    answer:
      "You can still contact us. Describe what you need, and we'll let you know whether it's something we can assist with.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s discuss your{" "}
            <em className="font-light italic">technology requirements.</em>
          </>
        }
        lede="Whether you're planning an ICT project, sourcing equipment or exploring digital solutions, the right conversation is a good place to start."
      />

      {/* Form + info */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* form */}
            <div className="lg:col-span-7">
              <Reveal>
                <EnquiryForm />
              </Reveal>
            </div>

            {/* info column */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="space-y-4">
                  {contactCards.map((card) => (
                    <a
                      key={card.label}
                      href={card.href}
                      className="group flex items-center gap-4 rounded-[1.5rem] border border-haze bg-mist p-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-card"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-royal shadow-sm transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-royal group-hover:text-white">
                        <card.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-stone">
                          {card.label}
                        </span>
                        <span className="block truncate text-sm font-semibold text-ink">
                          {card.value}
                        </span>
                        {card.note ? (
                          <span className="mt-0.5 block text-xs text-stone">
                            {card.note}
                          </span>
                        ) : null}
                      </span>
                    </a>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-8 rounded-[1.5rem] border border-haze bg-mist p-7">
                  <Eyebrow>Help Us Help You</Eyebrow>
                  <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                    The more you share, the more useful our first response will be.
                    It&rsquo;s enough to start with:
                  </p>
                  <div className="mt-5">
                    <CheckList items={includeItems} />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-8 flex items-start gap-4 rounded-[1.5rem] bg-ink p-7 text-white">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky">
                    <Clock className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-medium">
                      {SITE.responseNote}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                      Urgent requirement? A phone call is the fastest way to reach
                      us.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.26}>
                <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-haze bg-white px-4 py-2 text-xs font-medium text-ink">
                  <ShieldCheck className="size-4 text-royal" aria-hidden="true" />
                  Corporate Affairs Commission — Registered Business
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <MiniFaq
        title={
          <>
            Before you <em className="font-light italic">write to us.</em>
          </>
        }
        items={faqs}
      />
    </>
  );
}
