"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { MessagesSquare } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Pill } from "./pill";
import { ParallaxImage } from "./parallax-image";
import { EASE, Reveal } from "./reveal";

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
  const reduce = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);

  // 0 when the timeline enters ~3/4 down the viewport, 1 as its bottom
  // approaches mid-viewport. Spring-smoothed so the fill feels fluid.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.78", "end 0.55"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="relative isolate overflow-hidden bg-mist py-24 lg:py-32">
      {/* faint dot texture rising from the bottom */}
      <div
        aria-hidden="true"
        className="bg-dots-royal pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 [mask-image:linear-gradient(to_top,black_10%,transparent_80%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Left — heading, photo, CTA */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Process"
              align="left"
              title={
                <>
                  From your requirements to{" "}
                  <em className="font-light italic">the right solution.</em>
                </>
              }
              lede="Working with us starts with a conversation. We've kept the process simple so you can focus on what your business needs."
            />

            <Reveal delay={0.2} y={36}>
              <div className="relative mt-10 lg:mt-14">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-br-[4.5rem] shadow-soft">
                  <ParallaxImage
                    src="/images/process-consultation.jpg"
                    alt="ICT specialists collaborating in front of multiple monitors"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="h-full w-full"
                    range={44}
                    unveil
                  />
                </div>
                {/* floating reassurance card */}
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
                  className="absolute -bottom-7 left-5 flex items-center gap-3 rounded-2xl border border-haze bg-white px-5 py-4 shadow-card sm:left-8"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-royal text-white">
                    <MessagesSquare className="size-4.5" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-snug font-medium text-ink">
                    It starts with a conversation.
                  </p>
                </motion.div>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-16 lg:mt-16">
                <Pill href="/contact" variant="royal">
                  Start a Conversation
                </Pill>
              </div>
            </Reveal>
          </div>

          {/* Right — vertical timeline with scroll-driven fill */}
          <div className="lg:col-span-7 lg:pt-2">
            <div ref={timelineRef} className="relative">
              {/* track + scroll-lit fill (aligned to node centers) */}
              <div
                aria-hidden="true"
                className="absolute top-7 bottom-7 left-6 w-px bg-haze sm:left-7"
              />
              <motion.div
                aria-hidden="true"
                style={reduce ? { scaleY: 1 } : { scaleY: fill }}
                className="absolute top-7 bottom-7 left-6 w-px origin-top bg-linear-to-b from-royal to-sky sm:left-7"
              />

              <ol className="space-y-10 sm:space-y-14">
                {steps.map((step, index) => (
                  <li key={step.number}>
                    <Reveal delay={index * 0.06}>
                      <div className="relative flex items-start gap-5 sm:gap-8">
                        <NodeBadge number={step.number} reduce={!!reduce} />
                        <div className="pt-1 sm:pt-2">
                          <h3 className="font-display text-xl leading-snug font-medium text-ink sm:text-2xl">
                            {step.title}
                          </h3>
                          <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Numbered node that "lights up" — a royal disc scales out behind the
 * numeral and the numeral flips to white — as it scrolls into view.
 */
function NodeBadge({ number, reduce }: { number: string; reduce: boolean }) {
  return (
    <motion.span
      initial={reduce ? "active" : "rest"}
      whileInView={reduce ? undefined : "active"}
      viewport={{ once: true, margin: "-110px" }}
      className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-haze bg-white shadow-card sm:size-14"
    >
      <motion.span
        aria-hidden="true"
        variants={{ rest: { scale: 0, rotate: -30 }, active: { scale: 1, rotate: 0 } }}
        transition={{ duration: 0.55, ease: EASE }}
        className="absolute inset-0 rounded-full bg-royal"
      />
      <motion.span
        variants={{
          rest: { color: "#0a0d12" },
          active: { color: "#ffffff" },
        }}
        transition={{ duration: 0.45, delay: 0.12, ease: EASE }}
        className="font-display relative z-10 text-base font-semibold sm:text-lg"
      >
        {number}
      </motion.span>
    </motion.span>
  );
}
