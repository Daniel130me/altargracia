import { SectionHeading } from "./section-heading";
import { Pill } from "./pill";
import { Reveal } from "./reveal";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    body: "Share your business challenge, equipment requirement or project idea with our team.",
  },
  {
    number: "02",
    title: "Let's Explore the Options",
    body: "We review your requirements, discuss suitable solutions and clarify the scope of work.",
  },
  {
    number: "03",
    title: "Receive a Proposal or Quotation",
    body: "We provide the relevant information, recommendations and pricing for your consideration.",
  },
  {
    number: "04",
    title: "Move Forward with Confidence",
    body: "Once the scope and terms are agreed, we proceed with delivery according to the project requirements.",
  },
];

export function Process() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          align="center"
          title={
            <>
              From your requirements to{" "}
              <em className="font-light italic">the right solution.</em>
            </>
          }
          lede="Working with us starts with a conversation. We've kept the process simple so you can focus on what your business needs."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-ink/15 lg:block"
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <li className="group relative">
                  <span className="relative z-10 flex size-16 items-center justify-center rounded-full border border-haze bg-royal font-display text-xl font-semibold text-white shadow-card transition-transform duration-300 group-hover:-translate-y-1">
                    {step.number}
                  </span>
                  <h3 className="font-display mt-6 text-xl leading-snug font-medium text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 flex justify-center">
            <Pill href="#contact" variant="royal">
              Start a Conversation
            </Pill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
