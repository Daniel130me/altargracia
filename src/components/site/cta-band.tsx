import { Phone } from "lucide-react";
import { Pill } from "./pill";
import { Reveal } from "./reveal";
import { PHONE_NUMBERS, SITE } from "@/lib/site";

type CtaBandProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  lede?: string;
  contactHref?: string;
};

/**
 * Shared closing call-to-action band used at the end of every page.
 * Keeps the engagement step consistent: request a quotation or call.
 */
export function CtaBand({
  eyebrow = "Let's Discuss Your Requirements",
  contactHref = "/contact",
  title = (
    <>
      Tell us what you need. We&rsquo;ll help you{" "}
      <em className="font-light italic">get it done.</em>
    </>
  ),
  lede = "Share your requirements and we'll respond with clear next steps — no obligations, no pressure.",
}: CtaBandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-royal py-20 lg:py-28">
      {/* faint white dot texture */}
      <div
        aria-hidden="true"
        className="bg-dots-white pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_80%_75%_at_50%_45%,black,transparent)]"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            <span className="size-1.5 rotate-45 bg-white" />
            {eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display mt-6 text-balance text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.05] font-medium tracking-tight text-white">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {lede}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <Pill href={contactHref} variant="ink">
              Request a Quotation
            </Pill>
            {PHONE_NUMBERS.map((phone, index) => (
              <a
                key={phone.href}
                href={phone.href}
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 py-3 pl-4 pr-7 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-white/50 hover:bg-white/20"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-royal transition-transform duration-300 group-hover:scale-105">
                  <Phone className="size-4.5" aria-hidden="true" />
                </span>
                <span className="text-left">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">
                    {index === 0 ? "Call Us" : "Alternate Number"}
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    {phone.label}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 text-xs font-medium tracking-wide text-white/60">
            {SITE.responseNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
