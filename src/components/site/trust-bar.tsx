import { BadgeCheck, Laptop, PhoneCall, Users } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const STATS = [
  { icon: BadgeCheck, value: "2020", label: "Registered with the CAC" },
  { icon: Laptop, value: "1,000+", label: "Devices & gadgets delivered" },
  { icon: Users, value: "50+", label: "Businesses & schools served" },
  { icon: PhoneCall, value: "Same-day", label: "Response to every message" },
];

export function TrustBar() {
  return (
    <section aria-label="Company highlights" className="relative z-10 -mt-14 pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100">
                  <stat.icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-2xl font-bold text-emerald-950">
                    {stat.value}
                  </p>
                  <p className="text-xs leading-snug text-emerald-900/60 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
