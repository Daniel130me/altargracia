import { Asterisk, Mail, Phone } from "lucide-react";
import { Pill } from "./pill";
import { Reveal } from "./reveal";

const contactOptions = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@altagracia.tech",
    href: "mailto:hello@altagracia.tech",
  },
];

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-royal py-24 lg:py-32">
      <Asterisk
        aria-hidden="true"
        className="animate-spin-slow absolute left-[6%] top-16 hidden size-14 text-white/25 lg:block"
      />
      <Asterisk
        aria-hidden="true"
        className="animate-spin-slow absolute bottom-14 right-[8%] hidden size-20 text-white/25 lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 size-72 rounded-full border-[22px] border-white/15"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            <span className="size-1.5 rotate-45 bg-white" />
            Let&rsquo;s Work Together
            <span className="size-1.5 rotate-45 bg-white" />
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display mt-6 text-balance text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.02] font-medium tracking-tight text-white">
            Let&rsquo;s build what&rsquo;s next for{" "}
            <em className="font-light italic">your business.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Whether you&rsquo;re planning an ICT project, sourcing equipment or
            exploring new digital solutions, the right conversation is a good
            place to start. Tell us about your requirements.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <Pill href="#contact" variant="ink">
              Request a Quote
            </Pill>
            <Pill href="#contact" variant="white">
              Talk to Our Team
            </Pill>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {contactOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                className="group flex items-center gap-4 rounded-full border border-white/25 bg-white/10 py-3 pl-4 pr-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-royal transition-transform duration-300 group-hover:scale-110">
                  <option.icon className="size-4.5" aria-hidden="true" />
                </span>
                <span className="text-left">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">
                    {option.label}
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    {option.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
