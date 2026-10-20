import { Clock, Mail, MapPin, PhoneCall, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { SITE } from "@/lib/site-config";

const QUICK_LINKS = [
  { label: "Our Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Customer Reviews", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
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
    <footer className="mt-auto bg-emerald-950 text-emerald-200/75">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed">
              Your one trusted place for everything ICT in Lagos — genuine
              products, honest advice and support that never disappears.
            </p>
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-emerald-300/80">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
                aria-hidden="true"
              />
              {SITE.registration}
            </p>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-amber-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-amber-300"
                >
                  <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-2.5 break-all transition-colors hover:text-amber-300"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
                {SITE.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs sm:flex-row sm:px-6">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-emerald-300/70">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
