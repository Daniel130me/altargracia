"use client";

import { useEffect, useState } from "react";
import {
  Home,
  LayoutGrid,
  MessageSquareQuote,
  Phone,
  Repeat,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const DOCK_ITEMS = [
  { label: "Home", short: "Home", href: "#home", icon: Home, id: "home" },
  {
    label: "Services",
    short: "Services",
    href: "#services",
    icon: LayoutGrid,
    id: "services",
  },
  { label: "Why Us", short: "Why Us", href: "#why-us", icon: ShieldCheck, id: "why-us" },
  {
    label: "Process",
    short: "Process",
    href: "#how-it-works",
    icon: Repeat,
    id: "how-it-works",
  },
  {
    label: "Reviews",
    short: "Reviews",
    href: "#testimonials",
    icon: MessageSquareQuote,
    id: "testimonials",
  },
  { label: "Contact", short: "Contact", href: "#contact", icon: Phone, id: "contact" },
];

export function DockNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // thin horizontal band around the middle of the viewport
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    DOCK_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 pb-[env(safe-area-inset-bottom)]"
    >
      <div className="flex items-center gap-0.5 rounded-full border border-ink/10 bg-cream/95 p-1.5 shadow-[0_12px_32px_rgba(29,29,27,0.18)] backdrop-blur-md">
        {DOCK_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              aria-current={isActive ? "true" : undefined}
              title={item.label}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-auto sm:px-4 md:gap-1.5",
                isActive
                  ? "bg-ink text-cream shadow-sm"
                  : "text-ink/60 hover:bg-ink/5 hover:text-ink"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="hidden text-sm font-medium md:inline">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
