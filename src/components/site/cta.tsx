"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
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
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const driftUp = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -110]);
  const driftDown = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative isolate overflow-hidden bg-royal py-24 lg:py-32"
    >
      {/* faint white dot texture */}
      <div
        aria-hidden="true"
        className="bg-dots-white pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_80%_75%_at_50%_45%,black,transparent)]"
      />
      {/* pulsing glow, drifts down with scroll */}
      <motion.div
        style={{ y: driftDown }}
        aria-hidden="true"
        className="absolute -bottom-40 left-1/2 -z-10"
      >
        <div className="animate-pulse-glow size-[42rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </motion.div>
      {/* spinning asterisks that drift with scroll */}
      <motion.div
        style={{ y: driftUp }}
        aria-hidden="true"
        className="absolute left-[6%] top-16 hidden lg:block"
      >
        <Asterisk className="animate-spin-slow size-14 text-white/25" />
      </motion.div>
      <motion.div
        style={{ y: driftDown }}
        aria-hidden="true"
        className="absolute bottom-14 right-[8%] hidden lg:block"
      >
        <Asterisk className="animate-spin-slow size-20 text-white/25 [animation-direction:reverse] [animation-duration:22s]" />
      </motion.div>
      {/* floating rings, drift in opposite directions */}
      <motion.div
        style={{ y: driftUp }}
        aria-hidden="true"
        className="absolute -right-24 -top-24"
      >
        <div className="animate-float-slow size-72 rounded-full border-[22px] border-white/15" />
      </motion.div>
      <motion.div
        style={{ y: driftDown }}
        aria-hidden="true"
        className="absolute -left-16 bottom-24 hidden lg:block"
      >
        <div className="animate-float size-40 rounded-full border-[14px] border-white/10" />
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            <span className="animate-pulse size-1.5 rotate-45 bg-white" />
            Let&rsquo;s Work Together
            <span className="animate-pulse size-1.5 rotate-45 bg-white [animation-delay:1s]" />
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
                className="group flex items-center gap-4 rounded-full border border-white/25 bg-white/10 py-3 pl-4 pr-7 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-white/50 hover:bg-white/20"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-royal transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-6">
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
