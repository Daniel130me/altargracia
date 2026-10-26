import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { StepsRow } from "@/components/site/service-blocks";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Work | Altagracia Technologies",
  description:
    "See how Altagracia Technologies approaches ICT requirements, from understanding the need through solution planning and delivery.",
};

const steps = [
  {
    title: "Understand the need",
    body: "Start with the goal, current setup and people who will use the technology.",
  },
  {
    title: "Shape a practical scope",
    body: "Identify the relevant equipment or service and clarify the work, options and next steps.",
  },
  {
    title: "Agree the way forward",
    body: "Review the proposed scope and quotation before deciding how to proceed.",
  },
  {
    title: "Deliver and support",
    body: "Complete the agreed work and discuss any training, maintenance or follow-up needs.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title={
          <>
            Clear thinking before{" "}
            <em className="font-light italic">the technology.</em>
          </>
        }
        lede="A good technology engagement begins with the work to be done. We help clarify the need, agree the scope and connect the right services where they belong."
        image={{
          src: "/images/process-consultation.jpg",
          alt: "Technology professionals discussing a project together",
        }}
        actions={
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal"
          >
            Discuss a requirement
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        }
      />

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
              A considered process
            </p>
            <h2 className="font-display mt-4 text-balance text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
              From a clear brief to{" "}
              <em className="font-light italic">a practical next step.</em>
            </h2>
          </div>
          <div className="mt-10">
            <StepsRow steps={steps} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                Connected capabilities
              </p>
              <h2 className="font-display mt-4 text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
                The right services,{" "}
                <em className="font-light italic">working together.</em>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone">
                Each service can stand on its own. When a requirement spans
                multiple needs, we can discuss how those parts fit together.
              </p>
            </div>
            <ul className="divide-y divide-haze border-y border-haze">
              {SERVICES.map((service, index) => (
                <Reveal key={service.slug} delay={index * 0.04}>
                  <li>
                    <Link
                      href={service.href}
                      className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 sm:gap-6"
                    >
                      <span className="flex size-11 items-center justify-center rounded-full bg-mist text-royal">
                        <service.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-display text-lg font-medium text-ink">
                          {service.name}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-stone">
                          {service.summary}
                        </span>
                      </span>
                      <ArrowUpRight className="size-5 text-stone transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-royal" aria-hidden="true" />
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Start a Conversation"
        title={
          <>
            Let&rsquo;s make the next step{" "}
            <em className="font-light italic">clear.</em>
          </>
        }
        lede="Share the outcome you need. You do not need to know which technology or service to ask for yet."
      />
    </>
  );
}
