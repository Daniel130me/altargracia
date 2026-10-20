import { SITE } from "@/lib/site-config";

const QUICK_LINKS = [
  { label: "Our Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Customer Reviews", href: "#testimonials" },
];

const SERVICES = [
  "Computers & Office Equipment",
  "Phones & Accessories",
  "Repairs & Maintenance",
  "Digital Marketing",
  "ICT Training",
  "General Contracts",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto px-2 pb-24 sm:px-4 sm:pb-4">
      <div className="rounded-[2rem] bg-ink px-6 py-12 text-cream/70 sm:rounded-[3rem] sm:px-10 lg:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-cream">
              altagracia
              <span className="text-sage">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Your one trusted place for everything ICT in Lagos — genuine
              products, honest advice and support that never disappears.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-cream/45">
              {SITE.registration}
            </p>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-sage"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="transition-colors hover:text-sage"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="break-all transition-colors hover:text-sage"
                >
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.address}</li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-cream/10 pt-6 text-xs sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-cream/45">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
