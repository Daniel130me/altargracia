"use client";

import { useEffect, useState } from "react";
import { Clock, Mail, MapPin, Menu, Phone } from "lucide-react";
import type { MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo, LogoMark } from "@/components/site/logo";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Radix sheet locks body scroll while open, which cancels anchor
  // navigation — so we close the sheet first, then scroll manually.
  function handleMobileNav(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="hidden bg-emerald-950 text-emerald-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-amber-300"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.emailHref}
              className="flex items-center gap-1.5 transition-colors hover:text-amber-300"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {SITE.address}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {SITE.hours}
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={cn(
          "border-b bg-white/90 backdrop-blur-md transition-all",
          scrolled
            ? "border-emerald-900/10 shadow-sm"
            : "border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Logo />

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-emerald-950/80 transition-colors hover:text-emerald-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-amber-400 font-semibold text-emerald-950 hover:bg-amber-300"
            >
              <a href={SITE.phoneHref}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </a>
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              asChild
              size="sm"
              className="hidden bg-amber-400 font-semibold text-emerald-950 hover:bg-amber-300 sm:inline-flex"
            >
              <a href={SITE.phoneHref}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 border-emerald-900/10">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Site navigation links
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-2 flex flex-col">
                  <div className="flex items-center gap-2.5 border-b border-emerald-900/10 pb-4">
                    <LogoMark />
                    <span className="leading-none">
                      <span className="block font-display text-base font-bold text-emerald-950">
                        ALTAGRACIA
                      </span>
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.32em] text-emerald-600">
                        Technologies
                      </span>
                    </span>
                  </div>
                  <nav aria-label="Mobile navigation" className="mt-4 flex flex-col gap-1">
                    {NAV.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleMobileNav(e, item.href)}
                        className="rounded-lg px-3 py-2.5 text-sm font-medium text-emerald-950 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-6 grid gap-2">
                    <Button
                      asChild
                      className="bg-amber-400 font-semibold text-emerald-950 hover:bg-amber-300"
                    >
                      <a href={SITE.phoneHref} onClick={() => setOpen(false)}>
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        Call {SITE.phoneDisplay}
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a
                        href={SITE.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                    {SITE.address}
                    <br />
                    {SITE.hours}
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
