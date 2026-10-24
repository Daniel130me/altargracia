"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  GraduationCap,
  Megaphone,
  Menu,
  Monitor,
  Wrench,
} from "lucide-react";
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

const solutionItems = [
  {
    icon: Monitor,
    label: "ICT Equipment & Supply",
    hint: "Computers, laptops & office equipment",
  },
  {
    icon: Code2,
    label: "Software & Digital Solutions",
    hint: "Websites, apps & custom software",
  },
  {
    icon: Megaphone,
    label: "Digital Marketing",
    hint: "Visibility, reach & engagement",
  },
  {
    icon: GraduationCap,
    label: "ICT Training",
    hint: "Practical digital skills for teams",
  },
  {
    icon: Wrench,
    label: "Technical Support",
    hint: "Repairs, maintenance & assistance",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products & Supply", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Hide when scrolling down past the hero top, reveal instantly on scroll up
      setHidden(y > lastY && y > 260 && !open && !dropdownOpen);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, dropdownOpen]);

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
        <Link href="#home" aria-label="Altagracia Technologies — home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex">
          <Link
            href="#home"
            className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-mist hover:text-ink"
          >
            Home
          </Link>

          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="#solutions"
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-mist hover:text-ink",
                dropdownOpen ? "bg-mist text-ink" : "text-ink/80"
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
              <div className="w-[22rem] rounded-3xl border border-haze bg-white p-2 shadow-soft">
                {solutionItems.map((item) => (
                  <Link
                    key={item.label}
                    href="#solutions"
                    onClick={() => setDropdownOpen(false)}
                    className="group/item flex items-start gap-3.5 rounded-2xl px-4 py-3 transition-all duration-300 ease-out hover:bg-mist hover:pl-5"
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-royal text-white transition-transform duration-300 group-hover/item:scale-110">
                      <item.icon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{item.label}</span>
                      <span className="mt-0.5 block text-xs text-stone">{item.hint}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-mist hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Pill href="#contact" variant="ink" className="hidden px-6 py-2.5 sm:inline-flex">
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
              className="rounded-b-3xl border-haze bg-white px-6 pb-8 pt-5"
            >
              <SheetHeader className="p-0">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Altagracia Technologies site navigation links
                </SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="mt-2 flex flex-col gap-1">
                <Link
                  href="#home"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-display text-2xl font-medium text-ink transition-colors hover:bg-mist"
                >
                  Home
                </Link>
                <Link
                  href="#solutions"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-display text-2xl font-medium text-ink transition-colors hover:bg-mist"
                >
                  Solutions
                </Link>
                {navLinks.slice(1, 3).map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 font-display text-2xl font-medium text-ink transition-colors hover:bg-mist"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-display text-2xl font-medium text-ink transition-colors hover:bg-mist"
                >
                  Contact
                </Link>
                <Pill href="#contact" variant="ink" className="mt-4 w-full" onClick={() => setOpen(false)}>
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
