import Image from "next/image";
import { BadgeCheck, HeartHandshake, PhoneCall, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-config";

const REASONS = [
  {
    icon: BadgeCheck,
    title: "Registered & verified",
    desc: "Fully registered with the Corporate Affairs Commission (BN 3143241). We are a real, accountable business — not a random online seller.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine products only",
    desc: "No fakes and no 'tokunbo' surprises. Everything we sell is original and covered by warranty.",
  },
  {
    icon: PhoneCall,
    title: "We answer our calls",
    desc: "Call, WhatsApp or email — a real person picks up and responds the same day. You are never left wondering.",
  },
  {
    icon: HeartHandshake,
    title: "Support after you buy",
    desc: "We do not disappear after payment. Whenever you need help, we are right here.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-emerald-950 py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-800/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/images/support.png"
                alt="Altagracia technician handing a repaired laptop to a happy customer"
                width={1152}
                height={864}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-4 shadow-xl sm:left-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100">
                  <ShieldCheck
                    className="h-6 w-6 text-amber-600"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="font-display text-lg font-bold leading-tight text-emerald-950">
                    5+ years
                  </p>
                  <p className="text-xs text-emerald-900/60">
                    Serving Lagos with trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              The ICT partner you can actually rely on.
            </h2>
            <p className="mt-4 leading-relaxed text-emerald-100/80">
              Anyone can sell you a device. Here is what makes us different —
              and why our customers keep coming back.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors duration-300 hover:border-emerald-400/30 hover:bg-white/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15">
                    <reason.icon
                      className="h-5 w-5 text-amber-300"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-emerald-100/70">
                    {reason.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-amber-400 font-semibold text-emerald-950 hover:bg-amber-300"
              >
                <a href={SITE.phoneHref}>
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  Call Us Today
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
