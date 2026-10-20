import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("h-10 w-10 shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="altagracia-mark-gradient"
          x1="0"
          y1="0"
          x2="48"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#047857" />
          <stop offset="1" stopColor="#064E3B" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#altagracia-mark-gradient)" />
      <path
        d="M14 35L24 13L34 35"
        stroke="white"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4 27.4H29.6"
        stroke="white"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="24" cy="13" r="3" fill="#FBBF24" />
      <circle cx="14" cy="35" r="2.6" fill="white" />
      <circle cx="34" cy="35" r="2.6" fill="white" />
    </svg>
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
      className={cn("flex items-center gap-2.5", className)}
    >
      <LogoMark />
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-lg font-bold tracking-tight",
            light ? "text-white" : "text-emerald-950"
          )}
        >
          ALTAGRACIA
        </span>
        <span
          className={cn(
            "block text-[10px] font-semibold uppercase tracking-[0.32em]",
            light ? "text-emerald-300" : "text-emerald-600"
          )}
        >
          Technologies
        </span>
      </span>
    </a>
  );
}
