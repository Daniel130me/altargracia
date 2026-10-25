"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, Asterisk } from "lucide-react";
import { Pill } from "./pill";
import { EASE, MaskWords, Reveal } from "./reveal";

const railWords = ["Corporate ICT", "Digital Services", "Technology Supply"];

const headlineWords = [
  { text: "Technology" },
  { text: "solutions" },
  { text: "that" },
  { text: "move", em: true },
  { text: "business", em: true },
  { text: "forward." },
];

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 96]);
  const circleY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -130]);
  const ringY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 110]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 180]);
  // content gently recedes as the hero scrolls away
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -36]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* faint 3D perspective grid floor — drifts away as you scroll */}
      <motion.div
        style={{ y: gridY }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-80 [perspective:900px]"
      >
        <div className="bg-grid-royal absolute inset-0 origin-top opacity-80 [mask-image:linear-gradient(to_top,black_15%,transparent_78%)] [transform:rotateX(58deg)_scale(1.5)]" />
      </motion.div>

      {/* decorative shapes — float loop + scroll parallax */}
      <motion.div
        style={{ y: circleY }}
        aria-hidden="true"
        className="absolute -top-24 right-[8%] sm:size-72"
      >
        <div className="animate-float size-56 rounded-full bg-royal/80 blur-[2px] sm:size-72" />
      </motion.div>
      <motion.div
        style={{ y: ringY }}
        aria-hidden="true"
        className="absolute bottom-16 left-[38%] hidden lg:block"
      >
        <div className="animate-float-slow size-24 rounded-full border-[10px] border-ink/5" />
      </motion.div>
      <motion.div
        style={{ y: circleY }}
        aria-hidden="true"
        className="absolute left-[45%] top-28 hidden lg:block"
      >
        <Asterisk className="animate-spin-slow size-10 text-ink/15" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-44"
      >
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* left rail */}
          <div className="hidden lg:col-span-2 lg:block">
            <ul className="space-y-2.5">
              {railWords.map((word, i) => (
                <li
                  key={word}
                  className="font-display text-lg leading-snug text-ink/70"
                >
                  <Reveal delay={0.35 + i * 0.08} variant="left" y={undefined}>
                    {word}
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal delay={0.6} variant="fade" y={undefined}>
              <ArrowDown
                className="animate-bounce-soft mt-10 size-6 text-ink/30"
                aria-hidden="true"
              />
            </Reveal>
          </div>

          {/* headline + copy + CTAs */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink">
                <span className="mr-2.5 inline-block size-1.5 rotate-45 bg-royal ring-1 ring-ink/10" />
                Corporate ICT Solutions · Digital Services · Technology Supply
              </p>
            </Reveal>

            <h1 className="font-display mt-7 text-[clamp(2.9rem,6.4vw,5.2rem)] leading-[1.0] font-medium tracking-tight text-ink">
              <MaskWords words={headlineWords} baseDelay={0.2} step={0.065} />
            </h1>

            <Reveal delay={0.55}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
                We help businesses and organizations meet their technology needs
                through ICT solutions, equipment supply, digital services and
                professional training.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
                From your first enquiry to project delivery, our focus is on
                understanding what you need and finding the right solution.
              </p>
            </Reveal>

            <Reveal delay={0.68}>
              <div className="mt-10 flex flex-wrap items-center gap-3.5">
                <Pill href="#solutions" variant="royal">
                  Explore Our Solutions
                </Pill>
                <Pill href="#contact" variant="outline">
                  Discuss Your Requirements
                </Pill>
              </div>
            </Reveal>
          </div>

          {/* image */}
          <div className="relative lg:col-span-4">
            <Reveal delay={0.3} y={40}>
              <div className="relative h-[22rem] overflow-hidden rounded-[2rem] rounded-tl-[6rem] rounded-br-[6rem] shadow-soft sm:h-[26rem] lg:h-[30rem]">
                <motion.div
                  className="absolute inset-x-0 -top-24 h-[calc(100%+12rem)]"
                  style={{ y: imageY }}
                  initial={
                    reduce ? { opacity: 0 } : { opacity: 0, scale: 1.12 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: EASE, delay: 0.25 }}
                >
                  <Image
                    src="/images/hero-team-focus.jpg"
                    alt="African business professionals collaborating on laptops in a modern office"
                    fill
                    priority
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-[50%_38%]"
                  />
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* supporting card */}
        <Reveal delay={0.55}>
          <div className="mt-12 inline-flex max-w-sm items-center gap-5 rounded-[1.75rem] border border-haze bg-white p-6 shadow-card transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-soft lg:ml-2">
            <Asterisk
              className="animate-spin-slow size-8 shrink-0 text-ink"
              aria-hidden="true"
            />
            <div>
              <p className="font-display text-lg leading-snug text-ink">
                Technology for businesses. Solutions for progress.
              </p>
              <span
                className="mt-2 block h-px w-16 bg-ink/20"
                aria-hidden="true"
              />
            </div>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
