import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Logo } from "./logo";
import { SERVICES, SITE } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Solutions", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const solutionLinks = SERVICES.map((s) => ({ label: s.short, href: s.href }));

const contactRows = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone.label,
    href: SITE.phone.href,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email.label,
    href: SITE.email.href,
  },
  {
    icon: MapPin,
    label: "Office",
    value: SITE.location,
    href: "/contact",
  },
];

export function Footer() {
  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-ink text-white">
      {/* faint grid texture, strongest at the top */}
      <div
        aria-hidden="true"
        className="bg-grid-white pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:linear-gradient(to_bottom,black_5%,transparent_55%)]"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Helping businesses and organizations meet their technology needs
              through practical ICT solutions, digital services, equipment
              supply and training.
            </p>
            <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/12 px-4 py-2 text-xs font-medium text-white/70">
              <ShieldCheck className="size-4 text-sky" aria-hidden="true" />
              Corporate Affairs Commission — Registered Business
            </p>
          </div>

          {/* quick links */}
          <nav aria-label="Quick links" className="lg:col-span-2">
            <h3 className="font-display text-xl font-medium text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-sky"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* solutions */}
          <nav aria-label="Our solutions" className="lg:col-span-3">
            <h3 className="font-display text-xl font-medium text-white">
              Our Solutions
            </h3>
            <ul className="mt-5 space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-sky"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xl font-medium text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              {contactRows.map((row) => (
                <li key={row.label}>
                  <a
                    href={row.href}
                    className="group flex items-center gap-3.5 text-sm text-white/60 transition-colors hover:text-sky"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-sky transition-colors group-hover:bg-sky group-hover:text-ink">
                      <row.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                        {row.label}
                      </span>
                      {row.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-7 text-xs text-white/45 sm:px-6 md:flex-row lg:px-8">
          <p>© 2026 Altagracia Technologies. All rights reserved.</p>
          <p className="flex items-center gap-5">
            <Link href="/contact" className="transition-colors hover:text-sky">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/25">
              |
            </span>
            <Link href="/contact" className="transition-colors hover:text-sky">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
