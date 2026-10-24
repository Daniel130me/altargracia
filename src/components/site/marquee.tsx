import { Asterisk } from "lucide-react";

const items = [
  "ICT Equipment & Supply",
  "Software & Digital Solutions",
  "Digital Marketing",
  "ICT Training",
  "Technical Support",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      aria-hidden="true"
      className="marquee-mask overflow-hidden border-y border-ink/10 bg-ink py-5"
    >
      <div className="animate-marquee flex w-max items-center gap-8 pr-8 hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="font-display whitespace-nowrap text-xl text-white/90 sm:text-2xl">
              {item}
            </span>
            <Asterisk className="size-6 shrink-0 text-sky" />
          </span>
        ))}
      </div>
    </div>
  );
}
