import { Asterisk } from "lucide-react";
import { Eyebrow } from "./section-heading";
import { Pill } from "./pill";
import { Reveal } from "./reveal";
import { ParallaxImage } from "./parallax-image";

export function Intro() {
  return (
    <section id="about" className="bg-white pb-24 pt-24 lg:pb-32 lg:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Who We Are</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-balance text-4xl leading-[1.06] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                Your business deserves technology that{" "}
                <em className="font-light italic">works.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-16">
            <Reveal delay={0.14}>
              <p className="text-base leading-relaxed text-stone sm:text-lg">
                Technology plays an important role in how businesses operate,
                communicate and grow. Having the right technology partner can
                make all the difference.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-base leading-relaxed text-stone sm:text-lg">
                At <strong className="font-semibold text-ink">Altagracia Technologies</strong>, we
                bring together ICT products, digital services and practical
                technology solutions to help organizations meet their everyday
                and long-term needs.
              </p>
              <p className="mt-5 text-base leading-relaxed text-stone sm:text-lg">
                Whether you&rsquo;re equipping a new office, improving your digital
                presence, developing a software solution or building your
                team&rsquo;s ICT skills, we work to make the process clear and
                straightforward.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-9">
                <Pill href="/about" variant="ink">
                  Get to Know Us
                </Pill>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.16}>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] rounded-tr-[4.5rem] shadow-soft">
                  <ParallaxImage
                    src="/images/intro-professional.jpg"
                    alt="African business professional reviewing documents at her desk"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="h-full w-full"
                    range={44}
                  />
                </div>
                {/* belief card overlapping the photo */}
                <blockquote className="relative z-10 -mt-24 ml-5 mr-5 rounded-[1.5rem] border border-haze bg-white p-7 shadow-card sm:ml-8 sm:mr-8 sm:p-8 lg:ml-6 lg:mr-[-1.25rem]">
                  <Asterisk
                    className="animate-spin-slow absolute right-7 top-7 size-7 text-royal"
                    aria-hidden="true"
                  />
                  <p className="font-display text-xl leading-snug text-ink sm:text-[1.45rem]">
                    &ldquo;We believe technology should make work easier,{" "}
                    <em className="italic">not more complicated.</em>&rdquo;
                  </p>
                  <footer className="mt-5 flex items-center gap-3">
                    <span className="h-px w-10 bg-ink/20" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
                      The Altagracia Belief
                    </span>
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
