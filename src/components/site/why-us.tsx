import { Asterisk } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, Stagger, StaggerItem } from "./reveal";

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
    body: "Whether it's an equipment enquiry or a larger ICT project, we aim to make every engagement organized, transparent and straightforward.",
  },
];

export function WhyUs() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white lg:py-32">
      {/* faint grid + blue depth glows */}
      <div
        aria-hidden="true"
        className="bg-grid-white pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_75%_65%_at_65%_15%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[5%] -z-10 size-[28rem] rounded-full bg-royal/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-8%] -z-10 size-96 rounded-full bg-sky/10 blur-[130px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              light
              eyebrow="The Altagracia Approach"
              title={
                <>
                  More than technology. A focus on{" "}
                  <em className="font-light italic text-sky">
                    what matters to you.
                  </em>
                </>
              }
              lede="Good technology is important. Understanding the people and businesses using it is just as important. Our approach focuses on four things."
            />
          </div>
          <div className="flex items-end lg:col-span-6 lg:justify-end">
            <Reveal delay={0.2}>
              <Asterisk
                className="animate-spin-slow size-20 text-sky/70 lg:size-28"
                aria-hidden="true"
              />
            </Reveal>
          </div>
        </div>

        <Stagger
          className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2"
          stagger={0.1}
        >
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.number} className="h-full">
              <article className="group h-full bg-ink p-8 transition-colors duration-500 hover:bg-ink-2 sm:p-10">
                <span className="font-display text-5xl font-medium text-sky transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-1 group-hover:scale-110">
                  {pillar.number}
                </span>
                <h3 className="font-display mt-6 text-2xl leading-snug font-medium text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white/80 sm:text-base">
                  {pillar.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <p className="font-display mx-auto mt-16 max-w-3xl text-center text-balance text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
            &ldquo;Your requirements come first.{" "}
            <em className="font-light italic text-sky">
              The technology follows.
            </em>
            &rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
