import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Logo } from "./logo";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Business Solutions", href: "#solutions" },
  { label: "Products & Supply", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const solutionLinks = [
  { label: "ICT Equipment & Supply", href: "#solutions" },
  { label: "Software & Digital Solutions", href: "#solutions" },
  { label: "Digital Marketing", href: "#solutions" },
  { label: "ICT Training", href: "#solutions" },
  { label: "Technical Support", href: "#solutions" },
];

const contactRows = [
  {
    icon: Phone,
    label: "Phone",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@altagracia.tech",
    href: "mailto:hello@altagracia.tech",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Lagos, Nigeria",
    href: "#contact",
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
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
                    className="text-sm text-white/60 transition-colors hover:text-sky"
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
                    className="text-sm text-white/60 transition-colors hover:text-sky"
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
            <Link href="#home" className="transition-colors hover:text-sky">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/25">
              |
            </span>
            <Link href="#home" className="transition-colors hover:text-sky">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
