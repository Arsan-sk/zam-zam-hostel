import { Phone, MessageCircle } from "lucide-react";
import { telHref, waHref } from "@/lib/hostel";

export const StickyMobileBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-8px_30px_-10px_hsl(230_50%_20%/0.2)]">
      <div className="grid grid-cols-2 gap-2 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <a
          href={telHref}
          aria-label="Call now"
          className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-call text-call-foreground font-semibold text-sm shadow-cta active:scale-95 transition-transform"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold text-sm shadow-cta active:scale-95 transition-transform"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};
