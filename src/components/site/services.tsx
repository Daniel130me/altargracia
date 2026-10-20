import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Laptop,
  Megaphone,
  Smartphone,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const SERVICES = [
  {
    icon: Laptop,
    title: "Buy Computers & Office Equipment",
    desc: "Genuine laptops, desktops and printers for your home or office — no fakes, no long stories.",
    points: ["Laptops & desktops", "Printers & office equipment"],
  },
  {
    icon: Smartphone,
    title: "Phones & Accessories",
    desc: "Original phones and accessories that last — chargers, earpieces, covers and more.",
    points: ["Latest smartphones", "Original accessories"],
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    desc: "Slow or faulty device? We fix it fast — and we explain the problem in plain words.",
    points: ["Fast diagnosis & fixes", "Office maintenance plans"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "We help people find your business online — and turn them into paying customers.",
    points: ["Social media management", "Ads, websites & SEO"],
  },
  {
    icon: GraduationCap,
    title: "ICT Training",
    desc: "Practical, hands-on training for you or your team — from computer basics to digital skills.",
    points: ["One-on-one & group classes", "Corporate training"],
  },
  {
    icon: Briefcase,
    title: "General Contracts & Supply",
    desc: "Bulk supply and full ICT setup for offices, schools and organisations — delivered on time.",
    points: ["Bulk device supply", "Office & school setups"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Our Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-emerald-950 sm:text-4xl">
            Everything ICT, explained in plain words.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whatever you need — buying, fixing, promoting or learning — just
            tell us in your own words. We handle the rest.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 0.1}
              className="h-full"
            >
              <article className="group flex h-full flex-col rounded-2xl border border-emerald-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-600/40 hover:shadow-xl hover:shadow-emerald-950/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                  <service.icon
                    className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-emerald-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-emerald-900/80"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
                >
                  Ask about this
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
