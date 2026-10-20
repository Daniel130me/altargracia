"use client";

import { useEffect, useState } from "react";
import { CornerDownRight, Menu, Phone } from "lucide-react";
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
import { Logo } from "@/components/site/logo";
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

  // Radix sheet locks body scroll and restores focus while closing, which
  // can interrupt anchor navigation — so we close the sheet first, then
  // scroll on a delay, and re-issue the scroll once more for safety.
  function handleMobileNav(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const scrollTo = () =>
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(scrollTo, 450);
    window.setTimeout(scrollTo, 950);
  }

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b bg-background/85 backdrop-blur-md transition-all duration-300",
          scrolled ? "border-ink/10 shadow-[0_1px_0_rgba(29,29,27,0.04)]" : "border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Logo />

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              asChild
              variant="outline"
              className="hidden rounded-full border-ink/20 bg-cream px-5 font-medium text-ink hover:bg-secondary hover:text-ink sm:inline-flex"
            >
              <a href={SITE.phoneHref}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Book a call
              </a>
            </Button>
            <Button
              asChild
              className="rounded-full bg-ink px-5 font-medium text-cream hover:bg-ink/85"
            >
              <a href="#contact">
                <CornerDownRight className="h-4 w-4" aria-hidden="true" />
                Let&apos;s talk
              </a>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open menu"
                  className="rounded-full border-ink/20 bg-cream lg:hidden"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 border-ink/10">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Site navigation links
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-2 flex flex-col">
                  <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                    {NAV.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleMobileNav(e, item.href)}
                        className="rounded-xl px-3 py-3 font-display text-lg font-medium tracking-tight text-ink transition-colors hover:bg-secondary"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-6 grid gap-2">
                    <Button
                      asChild
                      className="rounded-full bg-ink font-medium text-cream hover:bg-ink/85"
                    >
                      <a href={SITE.phoneHref} onClick={() => setOpen(false)}>
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        Call {SITE.phoneDisplay}
                      </a>
                    </Button>
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                      {SITE.address}
                      <br />
                      {SITE.hours}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
