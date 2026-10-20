import { cn } from "@/lib/utils";
import { Asterisk } from "@/components/site/doodles";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-cream",
        className
      )}
      aria-hidden="true"
    >
      <Asterisk className="h-4 w-4" />
    </span>
  );
}

export function Logo({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <a
      href="#top"
      aria-label="Altagracia Technologies — back to top"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4 transition-colors",
          light
            ? "bg-cream text-ink"
            : "bg-transparent text-ink group-hover:bg-secondary"
        )}
      >
        <LogoMark className={cn(light && "bg-ink text-cream")} />
        <span className="leading-none">
          <span className="block font-display text-base font-bold tracking-tight">
            altagracia
          </span>
          <span
            className={cn(
              "block text-[9px] font-semibold uppercase tracking-[0.3em]",
              light ? "text-ink/60" : "text-ink/50"
            )}
          >
            Technologies
          </span>
        </span>
      </span>
    </a>
  );
}
