import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/site";
import { Reveal } from "./reveal";

type QuoteStripProps = {
  testimonial: Testimonial;
};

/**
 * Single-testimonial highlight used on inner pages as evidence
 * close to the service it relates to.
 */
export function QuoteStrip({ testimonial: t }: QuoteStripProps) {
  return (
    <Reveal>
      <figure className="relative overflow-hidden rounded-[2rem] bg-ink p-8 sm:p-10 lg:p-12">
        <div
          aria-hidden="true"
          className="bg-grid-white pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_80%_at_80%_20%,black,transparent)]"
        />
        <Quote
          className="absolute right-8 top-8 size-10 text-white/15 sm:size-12"
          aria-hidden="true"
        />
        <blockquote className="relative max-w-3xl">
          <p className="font-display text-lg leading-snug text-white sm:text-[1.35rem]">
            &ldquo;{t.quote}&rdquo;
          </p>
          <figcaption className="mt-7 flex items-center gap-4">
            <span className="relative size-13 shrink-0 overflow-hidden rounded-full ring-1 ring-white/25">
              <Image src={t.img} alt={t.alt} fill sizes="52px" className="object-cover" />
            </span>
            <span>
              <span className="block font-display text-base font-medium text-white">
                {t.name}
              </span>
              <span className="mt-0.5 block text-xs text-white/55">
                {t.role}
              </span>
            </span>
          </figcaption>
        </blockquote>
      </figure>
    </Reveal>
  );
}
