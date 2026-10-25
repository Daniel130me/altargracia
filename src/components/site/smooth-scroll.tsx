"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type LenisWindow = Window & { __lenis?: Lenis };

/** Smoothly scroll to an element / position, preferring Lenis when active. */
export function scrollToTarget(
  target: number | string | HTMLElement,
  options?: { offset?: number; duration?: number }
) {
  const lenis = (window as LenisWindow).__lenis;
  if (lenis) {
    lenis.scrollTo(target, {
      duration: options?.duration ?? 1.25,
      offset: options?.offset,
    });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
    return;
  }
  const el =
    typeof target === "string" ? document.querySelector(target) : target;
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Lenis-powered smooth scrolling for wheel/trackpad users — the "buttery"
 * feel, applied with restraint:
 *  - touch devices keep fully native scrolling (no artificial lag)
 *  - disabled when the user prefers reduced motion
 *  - in-page anchor links are intercepted and eased through the same curve,
 *    with a fixed-header offset matching `scroll-padding-top`
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.11, // smoothing strength — silky but still responsive
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });
    (window as LenisWindow).__lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Route in-page anchor clicks through Lenis so section jumps keep the
    // same eased feel (capture phase runs before Next <Link> handlers).
    let pendingTarget: HTMLElement | null = null;
    const performScroll = (el: HTMLElement, pushHash: boolean) => {
      lenis.scrollTo(el, {
        offset: 0, // clearance comes from CSS scroll-padding-top (header room)
        duration: 1.3,
      });
      if (pushHash && el.id) window.history.pushState(null, "", `#${el.id}`);
    };
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey)
        return;
      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();

      // If a menu/sheet is open, close it first (Escape) and scroll once
      // its scroll-lock releases — otherwise the scroll would be swallowed.
      if (document.body.hasAttribute("data-scroll-locked")) {
        pendingTarget = target as HTMLElement;
        document.dispatchEvent(
          new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
        );
        return;
      }
      event.stopPropagation();
      performScroll(target as HTMLElement, true);
    };
    document.addEventListener("click", onClick, true);

    // Pause Lenis while a modal/sheet locks body scroll (Radix dialogs),
    // so wheel input can't scroll the page behind an open menu.
    const body = document.body;
    const syncLock = () => {
      const locked =
        body.hasAttribute("data-scroll-locked") ||
        getComputedStyle(body).overflow === "hidden";
      if (locked) {
        lenis.stop();
      } else {
        lenis.start();
        if (pendingTarget) {
          const el = pendingTarget;
          pendingTarget = null;
          performScroll(el, true);
        }
      }
    };
    const lockObserver = new MutationObserver(syncLock);
    lockObserver.observe(body, {
      attributes: true,
      attributeFilter: ["style", "class", "data-scroll-locked"],
    });
    syncLock();

    return () => {
      document.removeEventListener("click", onClick, true);
      lockObserver.disconnect();
      cancelAnimationFrame(raf);
      delete (window as LenisWindow).__lenis;
      lenis.destroy();
    };
  }, []);

  return null;
}
