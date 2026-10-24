import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export function Eyebrow({ children, className, light = false }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em]",
        light ? "text-sky" : "text-ink",
        className
      )}
    >
      <span className={cn("size-1.5 rotate-45", light ? "bg-sky" : "bg-royal ring-1 ring-ink/10")} />
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <Eyebrow light={light} className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display mt-5 text-balance text-4xl leading-[1.06] font-medium tracking-tight sm:text-5xl lg:text-[3.4rem]",
            light ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lede ? (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-6 text-base leading-relaxed sm:text-lg",
              light ? "text-white/60" : "text-stone"
            )}
          >
            {lede}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
