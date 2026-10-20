import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const TESTIMONIALS = [
  {
    quote:
      "Altagracia supplied all the laptops for our school. Everything was genuine, and they even helped us set everything up. Very honest people.",
    name: "Mrs. Adaeze Okafor",
    role: "School Administrator, Surulere",
    initials: "AO",
  },
  {
    quote:
      "My laptop stopped working and they fixed it the same day. They explained the problem in a way I could understand. I have found my tech people.",
    name: "Kunle Adeyemi",
    role: "Small Business Owner, Lagos Island",
    initials: "KA",
  },
  {
    quote:
      "They manage our social media adverts, and now we get customer calls every single week. Reliable and professional from day one.",
    name: "Chiamaka Nwosu",
    role: "Boutique Owner, Ikeja",
    initials: "CN",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-emerald-950 sm:text-4xl">
            What our customers say.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real feedback from real people across Lagos who trusted us with
            their technology.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/5">
                <Quote
                  className="h-8 w-8 text-emerald-200"
                  aria-hidden="true"
                />
                <div
                  className="mt-3 flex items-center gap-0.5"
                  aria-label="Rated 5 out of 5"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-emerald-900/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-emerald-900/10 pt-4">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-emerald-950">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
