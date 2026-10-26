import { cn } from "@/lib/utils";

type LogoProps = {
  light?: boolean;
  className?: string;
};

export function Logo({ light = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex flex-col items-start leading-none", className)}>
      <span className="flex items-center gap-2">
        <svg
          viewBox="0 0 28 28"
          aria-hidden="true"
          className={cn("size-7 shrink-0", light ? "text-royal" : "text-ink")}
        >
          <rect x="2" y="2" width="24" height="24" rx="8" fill="currentColor" />
          <path
            d="M9 20 14 8l5 12"
            stroke={light ? "#0A0D12" : "#FFFFFF"}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="14" cy="16.4" r="1.9" fill={light ? "#0A0D12" : "#2563EB"} />
        </svg>
        <span
          className={cn(
            "font-display text-[1.35rem] font-semibold tracking-tight",
            light ? "text-white" : "text-ink"
          )}
        >
          altagracia
        </span>
      </span>
      <span
        className={cn(
          "mt-1 pl-9 text-[0.55rem] font-bold uppercase tracking-[0.34em]",
          light ? "text-white/50" : "text-stone"
        )}
      >
        Technologies
      </span>
    </span>
  );
}
