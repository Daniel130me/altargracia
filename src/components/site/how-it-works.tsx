import { MessageSquareText, PackageCheck, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site-config";

const STEPS = [
  {
    icon: PhoneCall,
    title: "Reach out to us",
    desc: "Call, WhatsApp or email. Tell us what you need in your own words — no technical grammar required.",
  },
  {
    icon: MessageSquareText,
    title: "Get clear answers & a fair price",
    desc: "We explain your options in simple English and agree on the price upfront. No hidden charges.",
  },
  {
    icon: PackageCheck,
    title: "We deliver & stay with you",
    desc: "Quick delivery or service, plus support after you pay. That is our promise to you.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-emerald-950 sm:text-4xl">
            Getting what you need is easy.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three simple steps — that is all it takes to sort out your
            technology.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-emerald-900/15 md:block"
          />
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="relative flex flex-col items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-emerald-700/20">
                    <step.icon
                      className="h-7 w-7 text-primary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-emerald-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <h3 className="font-display text-2xl font-semibold text-emerald-950">
            Ready to get started?
          </h3>
          <p className="mt-2 text-muted-foreground">
            No forms, no stress — just a friendly conversation.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 h-12 bg-amber-400 px-8 text-base font-semibold text-emerald-950 hover:bg-amber-300"
          >
            <a href={SITE.phoneHref}>
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              Call Us Now — {SITE.phoneDisplay}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
