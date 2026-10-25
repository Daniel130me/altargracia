import { SectionHeading } from "./section-heading";
import { Pill } from "./pill";
import { Reveal } from "./reveal";
import { ParallaxImage } from "./parallax-image";

const projects = [
  {
    tag: "ICT Supply",
    title: "Office ICT Equipment Rollout",
    meta: "Corporate Office — 2025",
    body: "A growing corporate office needed a full technology refresh across departments. Altagracia sourced, configured and delivered the complete ICT setup on schedule, keeping the client working without disruption.",
    image: "/images/project-network.png",
    alt: "Abstract visualization of a connected network of glowing blue nodes",
    aspect: "aspect-[4/5]",
  },
  {
    tag: "Digital Solutions",
    title: "Business Website & Digital Presence",
    meta: "Growing Business — 2025",
    body: "A rising business needed a professional online home to reach more customers. We designed and launched a fast, practical website that presents their services clearly and supports day-to-day enquiries.",
    image: "/images/project-software.png",
    alt: "Abstract render of floating glass interface panels with blue glow",
    aspect: "aspect-[3/4]",
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="relative isolate overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* faint dot texture on the right half */}
      <div
        aria-hidden="true"
        className="bg-dots-royal pointer-events-none absolute inset-y-0 right-0 -z-10 w-3/5 [mask-image:radial-gradient(ellipse_75%_70%_at_75%_35%,black,transparent)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Experience"
            title={
              <>
                Our capabilities are best seen in{" "}
                <em className="font-light italic">the work we do.</em>
              </>
            }
            lede="Every technology requirement presents an opportunity to solve a real problem. From supplying ICT equipment to developing digital solutions and supporting technology users, our work is guided by practical customer needs."
            className="lg:max-w-2xl"
          />
          <Reveal delay={0.2}>
            <Pill href="#contact" variant="outline" className="shrink-0">
              Explore Our Work
            </Pill>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-14">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.1}
              className={index === 1 ? "md:mt-24" : ""}
            >
              <article className="group">
                <div
                  className={`relative ${project.aspect} overflow-hidden rounded-[2rem] bg-ink-2 shadow-card`}
                >
                  <ParallaxImage
                    src={project.image}
                    alt={project.alt}
                    sizes="(min-width: 1024px) 40rem, 100vw"
                    className="h-full w-full"
                    range={64}
                    unveil
                    imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-ink/85 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                    {project.tag}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-medium text-ink sm:text-[1.7rem]">
                    {project.title}
                  </h3>
                  <span className="text-sm text-stone">{project.meta}</span>
                </div>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone sm:text-base">
                  {project.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
