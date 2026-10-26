import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  royal: "bg-royal text-white hover:bg-ink hover:text-white",
  ink: "bg-ink text-white hover:bg-royal hover:text-white",
  white: "bg-white text-ink hover:bg-ink hover:text-white",
  outline:
    "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white",
  outlineLight:
    "border border-white/25 bg-transparent text-white hover:border-sky hover:text-sky",
} as const;

type PillProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
};

export function Pill({
  href,
  children,
  variant = "royal",
  className,
  arrow = true,
  onClick,
}: PillProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group/pill relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        "before:pointer-events-none before:absolute before:inset-0 before:-translate-x-[130%] before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-[130%]",
        variants[variant],
        className
      )}
    >
      {children}
      {arrow ? (
        <ArrowUpRight className="size-4 shrink-0 transition-transform duration-300 group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5" />
      ) : null}
    </Link>
  );
}
