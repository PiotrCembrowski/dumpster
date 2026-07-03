import Link from "next/link";
import { Phone } from "lucide-react";

// Sticky mobile call/quote bar for money pages. Hidden on md+ where the header
// CTA and in-page buttons are already visible. Pure links — no client state.
export function StickyCallBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      role="region"
      aria-label="Contact quick actions"
    >
      <div className="grid grid-cols-2 gap-2 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <a
          href="tel:+18005553867"
          className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
        >
          <Phone className="h-4 w-4" />
          Call now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-md border border-primary px-4 py-3 text-sm font-semibold text-primary"
        >
          Free quote
        </Link>
      </div>
    </div>
  );
}
