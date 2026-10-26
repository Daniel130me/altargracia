"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { EASE } from "./reveal";
import { Logo } from "./logo";
import { Pill } from "./pill";
import { SERVICES } from "@/lib/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const aboutMenuRef = useRef<HTMLDivElement>(null);
  const aboutTriggerRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Hide when scrolling down past the hero top, reveal instantly on scroll up
      setHidden(
        y > lastY && y > 260 && !open && !dropdownOpen && !aboutDropdownOpen
      );
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, dropdownOpen, aboutDropdownOpen]);

  const linkCls = (href: string) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-mist hover:text-ink",
      pathname === href ? "bg-mist text-ink" : "text-ink/80"
    );

  return (
    <motion.header
      initial={reduce ? { opacity: 0 } : { y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-5",
          hidden
            ? "pointer-events-none -translate-y-[130%] opacity-0"
            : "translate-y-0 opacity-100",
          scrolled
            ? "border-haze bg-white/90 shadow-card backdrop-blur-xl"
            : "border-transparent bg-white/60 backdrop-blur-md"
        )}
      >
        <Link href="/" aria-label="Altagracia Technologies — home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex">
          {navLinks.slice(0, 1).map((link) => (
            <Link key={link.href} href={link.href} className={linkCls(link.href)}>
              {link.label}
            </Link>
          ))}

          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/services"
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-mist hover:text-ink",
                dropdownOpen || pathname === "/services"
                  ? "bg-mist text-ink"
                  : "text-ink/80"
              )}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen(false)}
            >
              Solutions
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-300",
                  dropdownOpen && "rotate-180"
                )}
              />
            </Link>
            <div
              className={cn(
                "absolute left-1/2 top-full z-40 -translate-x-1/2 pt-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top",
                dropdownOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-[0.96] opacity-0"
              )}
            >
              <div className="w-[24rem] rounded-3xl border border-haze bg-white p-2 shadow-soft">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    onClick={() => setDropdownOpen(false)}
                    className="group/item flex items-start gap-3.5 rounded-2xl px-4 py-3 transition-all duration-300 ease-out hover:bg-mist hover:pl-5"
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-royal text-white transition-transform duration-300 group-hover/item:scale-110">
                      <service.icon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">
                        {service.short}
                      </span>
                      <span className="mt-0.5 block text-xs text-stone">
                        {service.summary}
                      </span>
                    </span>
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setDropdownOpen(false)}
                  className="mt-1 flex items-center justify-between rounded-2xl border-t border-haze px-4 py-3 text-sm font-semibold text-royal transition-colors hover:text-ink"
                >
                  All Solutions Overview
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* About Us dropdown */}
          <div
            ref={aboutMenuRef}
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => {
              if (!aboutMenuRef.current?.contains(document.activeElement)) {
                setAboutDropdownOpen(false);
              }
            }}
            onBlur={(event) => {
              const nextTarget = event.relatedTarget;
              if (
                !(nextTarget instanceof Node) ||
                !event.currentTarget.contains(nextTarget)
              ) {
                setAboutDropdownOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setAboutDropdownOpen(false);
                aboutTriggerRef.current?.focus();
              } else if (
                event.key === "ArrowDown" &&
                event.target === aboutTriggerRef.current
              ) {
                event.preventDefault();
                setAboutDropdownOpen(true);
                requestAnimationFrame(() => {
                  aboutMenuRef.current?.querySelector("a")?.focus();
                });
              }
            }}
          >
            <button
              ref={aboutTriggerRef}
              type="button"
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-mist hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal",
                aboutDropdownOpen || pathname.startsWith("/about")
                  ? "bg-mist text-ink"
                  : "text-ink/80"
              )}
              aria-expanded={aboutDropdownOpen}
              aria-controls="about-navigation-menu"
              onClick={() => setAboutDropdownOpen((value) => !value)}
            >
              About Us
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-300",
                  aboutDropdownOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id="about-navigation-menu"
              className={cn(
                "absolute left-1/2 top-full z-40 w-72 -translate-x-1/2 pt-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top",
                aboutDropdownOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-[0.96] opacity-0"
              )}
            >
              <div className="rounded-3xl border border-haze bg-white p-2 shadow-soft">
                {[
                  { label: "About Altagracia", href: "/about" },
                  { label: "Mission, Vision & Values", href: "/about/mission" },
                  { label: "How We Work", href: "/about/approach" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setAboutDropdownOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="group/item flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-mist hover:text-royal"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="size-4 opacity-50 transition-all group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className={linkCls(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Pill href="/contact" variant="ink" className="hidden px-6 py-2.5 sm:inline-flex">
            Request a Quote
          </Pill>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="flex size-10 items-center justify-center rounded-full border border-haze bg-white text-ink transition-colors hover:bg-mist lg:hidden"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="top"
              data-lenis-prevent
              className="rounded-b-3xl border-haze bg-white px-6 pb-8 pt-5"
            >
              <SheetHeader className="p-0">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Altagracia Technologies site navigation links
                </SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="mt-2 flex flex-col gap-1">
                {[
                  { label: "Home", href: "/" },
                  { label: "Our Solutions", href: "/services" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 font-display text-2xl font-medium text-ink transition-colors hover:bg-mist"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 rounded-2xl bg-mist px-4 py-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone">
                    Services
                  </p>
                  <ul className="mt-2 space-y-2.5">
                    {SERVICES.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={service.href}
                          onClick={() => setOpen(false)}
                          className="text-sm font-semibold text-ink/75 transition-colors hover:text-royal"
                        >
                          {service.short}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <details className="mt-2 rounded-2xl bg-mist px-4 py-3">
                  <summary className="cursor-pointer list-none font-display text-2xl font-medium text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between">
                      About Us
                      <ChevronDown className="size-4" aria-hidden="true" />
                    </span>
                  </summary>
                  <ul className="mt-3 space-y-2.5 border-t border-haze pt-3">
                    {[
                      { label: "About Altagracia", href: "/about" },
                      { label: "Mission, Vision & Values", href: "/about/mission" },
                      { label: "How We Work", href: "/about/approach" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-sm font-semibold text-ink/75 transition-colors hover:text-royal"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
                <Pill href="/contact" variant="ink" className="mt-4 w-full" onClick={() => setOpen(false)}>
                  Request a Quote
                </Pill>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
