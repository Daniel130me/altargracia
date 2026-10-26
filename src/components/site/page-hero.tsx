import { Eyebrow } from "./section-heading";
import { Reveal } from "./reveal";
import { ParallaxImage } from "./parallax-image";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lede: React.ReactNode;
  /** Optional CTA pills rendered under the lede. */
  actions?: React.ReactNode;
  /** Optional supporting photo shown on the right. */
  image?: { src: string; alt: string };
  /** Rounded-corner treatment for the image frame, for variety between pages. */
  frame?: "tl" | "tr";
};

/**
 * Shared inner-page hero: fixed header clearance, faint grid fade,
 * display headline with the site's editorial styling.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  actions,
  image,
  frame = "tl",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-44">
      <div
        aria-hidden="true"
        className="bg-grid-royal pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_0%,transparent_70%)] opacity-80"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={
            image
              ? "grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-14 lg:pb-24"
              : "max-w-3xl pb-16 lg:pb-24"
          }
        >
          <div className={image ? "lg:col-span-7" : undefined}>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display mt-5 text-balance text-4xl leading-[1.06] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
                {lede}
              </p>
            </Reveal>
            {actions ? (
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap gap-3.5">{actions}</div>
              </Reveal>
            ) : null}
          </div>

          {image ? (
            <Reveal delay={0.14} y={32} className={image ? "lg:col-span-5" : undefined}>
              <div
                className={
                  frame === "tl"
                    ? "relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-tl-[4.5rem] shadow-soft sm:aspect-[16/11]"
                    : "relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-tr-[4.5rem] shadow-soft sm:aspect-[16/11]"
                }
              >
                <ParallaxImage
                  src={image.src}
                  alt={image.alt}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full"
                  range={36}
                />
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
