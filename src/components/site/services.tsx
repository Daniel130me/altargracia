"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Asterisk } from "@/components/site/doodles";

const SERVICES = [
  {
    title: "Computers & Office Equipment",
    desc: "Genuine laptops, desktops and printers for your home or office — no fakes, no long stories.",
  },
  {
    title: "Phones & Accessories",
    desc: "Original phones and accessories that last — chargers, earpieces, covers and more.",
  },
  {
    title: "Repairs & Maintenance",
    desc: "Slow or faulty device? We fix it fast — and we explain the problem in plain words.",
  },
  {
    title: "Digital Marketing",
    desc: "We help people find your business online — and turn them into paying customers.",
  },
  {
    title: "ICT Training",
    desc: "Practical, hands-on training for you or your team — from computer basics to digital skills.",
  },
  {
    title: "General Contracts & Supply",
    desc: "Bulk supply and full ICT setup for offices, schools and organisations — delivered on time.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/50 sm:text-xs">
              / Our Services /
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
              Everything ICT,
              <br />
              explained in plain words.
              <Asterisk
                className="ml-3 inline-block h-7 w-7 text-sage sm:h-9 sm:w-9"
                aria-hidden="true"
              />
            </h2>
          </motion.div>
          <motion.p
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-base leading-relaxed text-ink/60 lg:justify-self-end"
          >
            Whatever you need — buying, fixing, promoting or learning — just
            tell us in your own words. We handle the rest. Tap any service to
            ask about it.
          </motion.p>
        </div>

        <div className="mt-12 lg:mt-16">
          {SERVICES.map((service, i) => (
            <motion.a
              key={service.title}
              href="#contact"
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-ink/12 py-6 transition-colors duration-300 last:border-b hover:bg-accent/50 sm:gap-8 sm:py-7"
            >
              <span className="w-8 text-sm font-medium text-ink/35 sm:w-12 sm:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg font-semibold uppercase tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl lg:text-[1.7rem]">
                  {service.title}
                </span>
                <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-ink/55">
                  {service.desc}
                </span>
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:border-transparent group-hover:bg-ink group-hover:text-cream sm:h-12 sm:w-12">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 sm:h-5 sm:w-5" aria-hidden="true" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
