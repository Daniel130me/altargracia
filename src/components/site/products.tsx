import Image from "next/image";
import { CircuitBoard, Monitor, Printer, Smartphone } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Pill } from "./pill";
import { Reveal } from "./reveal";

const categories = [
  {
    icon: Monitor,
    title: "Computers & Laptops",
    body: "Desktops, laptops and workstations for every scale of work.",
  },
  {
    icon: Printer,
    title: "Office Equipment & Peripherals",
    body: "Printers, scanners, projectors and everyday office hardware.",
  },
  {
    icon: Smartphone,
    title: "Phones & Accessories",
    body: "Mobile devices, chargers, storage and essential add-ons.",
  },
  {
    icon: CircuitBoard,
    title: "Other ICT Equipment",
    body: "Networking gear, power solutions and specialized technology.",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-mist pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* image */}
          <Reveal y={36}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] rounded-tr-[6rem] rounded-bl-[6rem] shadow-soft">
                <Image
                  src="/images/products-desk.png"
                  alt="Modern workspace with laptop, monitor and office technology in cool blue light"
                  width={1344}
                  height={768}
                  className="h-[20rem] w-full object-cover sm:h-[26rem]"
                />
              </div>
              <div className="absolute -bottom-6 left-6 flex max-w-xs items-start gap-3 rounded-2xl border border-haze bg-white p-4 shadow-card sm:left-10">
                <span className="mt-0.5 block size-2 shrink-0 rotate-45 bg-royal ring-1 ring-ink/10" />
                <p className="text-xs leading-relaxed text-stone">
                  Products and availability are subject to confirmation.
                </p>
              </div>
            </div>
          </Reveal>

          {/* content */}
          <div>
            <SectionHeading
              eyebrow="ICT Products & Procurement"
              title={
                <>
                  The right equipment for{" "}
                  <em className="font-light italic">work and everyday life.</em>
                </>
              }
              lede="Looking for computers, devices, office equipment or technology accessories? Altagracia Technologies provides ICT products for businesses, institutions and individuals — whether you're sourcing for your organization or purchasing a device for personal use."
            />

            <ul className="mt-10 divide-y divide-haze border-y border-haze">
              {categories.map((category, index) => (
                <Reveal key={category.title} delay={index * 0.06}>
                  <li className="group flex items-center gap-5 py-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-sm transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:bg-royal group-hover:text-white">
                      <category.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-medium text-ink">
                        {category.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-stone">
                        {category.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <Pill href="#contact" variant="ink">
                  Explore Products & Supply
                </Pill>
                <Pill href="#contact" variant="outline">
                  Request Product Availability
                </Pill>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
