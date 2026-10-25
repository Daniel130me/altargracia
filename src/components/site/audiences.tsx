import { ArrowRight, Building2, GraduationCap, Landmark, Rocket } from "lucide-react";
import { Eyebrow } from "./section-heading";
import { Pill } from "./pill";
import { DrawLine, Reveal } from "./reveal";

const audiences = [
  {
    icon: Building2,
    title: "Businesses & Corporate Offices",
    body: "Technology equipment, digital solutions and ICT services to support daily operations and business growth.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Educational Institutions",
    body: "Computers, ICT equipment, training and relevant technology solutions for teaching, learning and administration.",
  },
  {
    icon: Rocket,
    title: "Startups & Growing Businesses",
    body: "Practical digital services and technology solutions to help growing businesses establish and improve their operations.",
  },
  {
    icon: Landmark,
    title: "Institutions & Organizations",
    body: "ICT procurement, technology services and project-based requirements for organizations with specific operational needs.",
  },
];

export function Audiences() {
  return (
    <section className="bg-mist pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20 xl:gap-24">
            {/* Pinned intro column — stays put while the rows scroll past it */}
            <div className="self-start lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow>Built Around Your Business</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-balance text-4xl leading-[1.06] font-medium tracking-tight text-ink sm:text-5xl">
                  Different businesses. Different challenges.{" "}
                  <em className="font-light italic">The right approach.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-stone sm:text-lg">
                  Every organization has its own goals, systems and technology
                  requirements. We work to understand those differences before
                  recommending a solution.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9">
                  <Pill href="#contact" variant="ink">
                    Talk to Us About Your Organization
                  </Pill>
                </div>
              </Reveal>
            </div>

            {/* Scrolling rows — each enters as it arrives in the viewport */}
            <div className="flex flex-col">
              {audiences.map((item, i) => (
                <Reveal key={item.title} variant="up" delay={i * 0.05}>
                  <div className="relative">
                    {i > 0 ? (
                      <DrawLine className="h-px w-full origin-left bg-haze" />
                    ) : null}
                    <article className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-10 sm:gap-7 sm:py-11 lg:py-12">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mist-2 text-royal transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-royal group-hover:text-white sm:size-14">
                        <item.icon
                          className="size-5 sm:size-6"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <h3 className="font-display text-lg leading-snug font-medium text-ink sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone">
                          {item.body}
                        </p>
                      </div>
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-mist-2 text-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-royal group-hover:text-white sm:size-12">
                        <ArrowRight
                          className="size-4.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 sm:size-5"
                          aria-hidden="true"
                        />
                      </span>
                    </article>
                  </div>
                </Reveal>
              ))}
              <DrawLine className="h-px w-full origin-left bg-haze" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
