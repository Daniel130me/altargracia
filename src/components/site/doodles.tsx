import { cn } from "@/lib/utils";

/**
 * Hand-drawn style doodles & shapes from the design language:
 * asterisk marks, sparkles, squiggly arrows and long thin arrows.
 * All inherit color via currentColor.
 */

export function Asterisk({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("h-4 w-4", className)}
      aria-hidden="true"
    >
      <path
        d="M12 2.5v19M2.5 12h19M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4", className)}
      aria-hidden="true"
    >
      <path
        d="M12 1.5c.9 5.9 4.6 9.6 10.5 10.5-5.9.9-9.6 4.6-10.5 10.5C11.1 16.6 7.4 12.9 1.5 12 7.4 11.1 11.1 7.4 12 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SquiggleArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 36"
      fill="none"
      className={cn("h-6 w-12", className)}
      aria-hidden="true"
    >
      <path
        d="M2 27C12 5 22 5 30 15c7 9 15 9 24-1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M48 8l8 5-7 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LongArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 12"
      fill="none"
      className={cn("h-3 w-14", className)}
      aria-hidden="true"
    >
      <path
        d="M0 6h51M45 1l7 5-7 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Rotating asterisk inside a pastel circle — signature badge of the style. */
export function AsteriskBadge({
  className,
  tone = "sage",
}: {
  className?: string;
  tone?: "sage" | "mauve" | "mist";
}) {
  const tones: Record<string, string> = {
    sage: "bg-sage text-ink",
    mauve: "bg-mauve text-ink",
    mist: "bg-mist text-ink",
  };
  return (
    <span
      className={cn(
        "inline-flex h-[0.9em] w-[0.9em] items-center justify-center rounded-full align-middle",
        tones[tone],
        className
      )}
      aria-hidden="true"
    >
      <Asterisk className="h-[55%] w-[55%] animate-spin-slow" />
    </span>
  );
}
