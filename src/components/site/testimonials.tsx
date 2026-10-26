import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { DrawLine, Reveal } from "./reveal";

const testimonials = [
  {
    quote:
      "Altagracia handled the ICT overhaul across our three depots — new workstations, networking, CCTV, the lot. What won us over is the after-sales support: response times are measured in hours, not days. Downtime that used to delay our dispatches is now practically zero.",
    name: "Emeka Nwosu",
    role: "Operations Director, SwiftHaul Logistics — Lagos",
    img: "/images/testimonial-emeka.jpg",
    alt: "Portrait of Emeka Nwosu, Operations Director at SwiftHaul Logistics, at his office desk",
  },
  {
    quote:
      "They equipped our computer laboratory with forty systems, installed the learning software and trained our teachers. Two years on, they still come in every term to service the lab. Any school looking for a technology partner that keeps its word should talk to them first.",
    name: "Mrs. Aisha Bello-Abubakar",
    role: "Administrator, Noble Steps Academy — Kaduna",
    img: "/images/testimonial-aisha.jpg",
    alt: "Portrait of Mrs. Aisha Bello-Abubakar, Administrator of Noble Steps Academy, in the school classroom",
  },
  {
    quote:
      "As a young company we couldn't afford trial and error. They took time to understand how we actually operate before recommending anything, then delivered our POS and inventory setup on schedule and on budget. It feels less like a vendor and more like a technical co-founder.",
    name: "Tomilola Alabi",
    role: "Co-founder & CEO, ShopLinc — Yaba, Lagos",
    img: "/images/testimonial-tomilola.jpg",
    alt: "Portrait of Tomilola Alabi, Co-founder and CEO of ShopLinc, smiling with a laptop",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-royal text-royal" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative isolate overflow-hidden bg-white py-24 lg:py-32">
      {/* faint texture + corner glow, matching the Why-Us treatment */}
      <div
        aria-hidden="true"
        className="bg-grid-royal pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 size-[26rem] rounded-full bg-royal/8 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Client Stories"
            title={
              <>
                Trusted by businesses, schools and founders{" "}
                <em className="font-light italic">across Nigeria.</em>
              </>
            }
            lede="Real words from the organizations we serve — on the equipment we supply, the solutions we build and the support that follows long after delivery."
          />

          {/* rating summary chip */}
          <Reveal delay={0.2} className="shrink-0">
            <div className="inline-flex flex-col gap-2 rounded-[1.75rem] bg-mist px-7 py-6">
              <Stars />
              <p className="font-display text-2xl font-medium tracking-tight text-ink">
                4.9<span className="text-stone">/5</span>
              </p>
              <p className="text-xs font-medium tracking-wide text-stone">
                Average rating across 250+ client engagements
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} variant="up" delay={0.1 + i * 0.09} className="h-full">
              <figure className="group relative flex h-full flex-col rounded-[2rem] bg-mist p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:bg-white hover:shadow-soft sm:p-9">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-8 top-7 select-none font-display text-7xl leading-none text-royal/10 transition-colors duration-500 group-hover:text-royal/20"
                >
                  &ldquo;
                </span>

                <Stars />

                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/85">
                  {t.quote}
                </blockquote>

                <DrawLine className="mt-8 h-px w-full origin-left bg-haze" />

                <figcaption className="mt-6 flex items-center gap-4">
                  <span className="relative size-14 shrink-0 overflow-hidden rounded-full ring-1 ring-haze transition-all duration-500 group-hover:ring-royal/40">
                    <Image
                      src={t.img}
                      alt={t.alt}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 font-display text-[15px] font-medium tracking-tight text-ink">
                      <span className="truncate">{t.name}</span>
                      <BadgeCheck
                        className="size-4 shrink-0 text-royal"
                        aria-label="Verified client"
                      />
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-stone">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
