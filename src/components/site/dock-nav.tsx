import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";

export function DockNav() {
  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Call Altagracia Technologies at ${SITE.phoneDisplay}`}
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-4 z-50 inline-flex h-12 items-center gap-2.5 rounded-full bg-ink px-5 text-sm font-semibold text-cream shadow-[0_12px_32px_rgba(29,29,27,0.22)] transition-colors hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      Call us
    </a>
  );
}
