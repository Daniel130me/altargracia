import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Megaphone,
  Monitor,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Pill } from "./pill";

const solutions = [
  {
    number: "01",
    icon: Monitor,
    title: "ICT Equipment & Technology Supply",
    tagline: "Equip your business with the technology it needs.",
    body: "Computers, laptops, office equipment, accessories and other ICT products for businesses, schools and organizations. Whether you need equipment for a new office, an upgrade or a larger procurement requirement, tell us what you're looking for.",
    link: "Explore ICT Supply",
  },
  {
    number: "02",
    icon: Code2,
    title: "Software & Digital Solutions",
    tagline: "Build technology around the way your business works.",
    body: "From professional websites and web applications to custom software and user experience design, we help businesses develop digital solutions that address their needs — with a focus on practical functionality and ease of use.",
    link: "Explore Digital Solutions",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Digital Marketing & Business Visibility",
    tagline: "Help more people find and connect with your business.",
    body: "Having a great product or service is only part of running a successful business — people also need to know you exist. We help businesses improve their online presence, connect with relevant audiences and communicate their value.",
    link: "Explore Digital Marketing",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "ICT Training & Capacity Development",
    tagline: "Build the skills your people need to do more.",
    body: "Technology becomes more valuable when people know how to use it effectively. We provide practical ICT training opportunities for individuals, employees and teams looking to build useful digital skills.",
    link: "Explore ICT Training",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Technical Support & ICT Maintenance",
    tagline: "Keep your technology working when it matters.",
    body: "Technology problems can interrupt important work. From device repairs and maintenance to technical assistance, our ICT support services help customers address technology challenges and keep their equipment in good working condition.",
    link: "Explore ICT Support",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                The right technology for{" "}
                <em className="font-light italic">every stage</em> of your
                business.
              </>
            }
            lede="From essential ICT equipment to digital transformation, we provide solutions designed around real business needs."
          />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <Reveal
              key={item.number}
              delay={(index % 3) * 0.08}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <article className="group flex h-full flex-col rounded-[1.75rem] border border-haze bg-white p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-ink hover:shadow-card sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl font-medium text-ink/15 transition-colors duration-300 group-hover:text-ink">
                    {item.number}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-full bg-mist-2 text-ink transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-6 group-hover:bg-royal group-hover:text-white">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="font-display mt-6 text-2xl leading-tight font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm font-semibold text-ink/70">
                  {item.tagline}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-stone">
                  {item.body}
                </p>
                <Link
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-ink/60"
                >
                  <span className="border-b border-ink/25 pb-0.5 transition-colors group-hover:border-ink/50">
                    {item.link}
                  </span>
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            </Reveal>
          ))}

          {/* CTA tile */}
          <Reveal delay={0.16}>
            <Link
              href="#contact"
              className="group flex h-full min-h-[16rem] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-ink p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-soft"
              aria-label="View all solutions and talk to our team"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-royal text-white transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-45 group-hover:scale-110">
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="font-display block text-2xl leading-tight font-medium text-white sm:text-[1.7rem]">
                  Not sure where to start?
                </span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sky">
                  <span className="border-b border-sky/40 pb-0.5">
                    View All Solutions
                  </span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Pill href="#contact" variant="ink">
              View All Solutions
            </Pill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
