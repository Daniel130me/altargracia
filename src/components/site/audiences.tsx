import { Building2, GraduationCap, Landmark, Rocket } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Pill } from "./pill";
import { Reveal, Stagger, StaggerItem } from "./reveal";

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
          <SectionHeading
            eyebrow="Built Around Your Business"
            align="center"
            title={
              <>
                Different businesses. Different challenges.{" "}
                <em className="font-light italic">The right approach.</em>
              </>
            }
            lede="Every organization has its own goals, systems and technology requirements. We work to understand those differences before recommending a solution."
          />

          <Stagger
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.1}
          >
            {audiences.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <article className="group h-full rounded-[1.5rem] border border-haze bg-mist p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-soft">
                  <span className="flex size-12 items-center justify-center rounded-full bg-royal text-white transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-110">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-6 text-xl leading-snug font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {item.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.12}>
            <div className="mt-12 flex justify-center">
              <Pill href="#contact" variant="ink">
                Talk to Us About Your Organization
              </Pill>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
