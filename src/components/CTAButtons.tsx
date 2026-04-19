import { Phone, MessageCircle } from "lucide-react";
import { telHref, waHref } from "@/lib/hostel";
import { cn } from "@/lib/utils";

interface CTAButtonsProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  variant?: "default" | "light";
}

export const CTAButtons = ({ className, size = "md", pulse = false, variant = "default" }: CTAButtonsProps) => {
  const sizeClass = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-5 text-base",
    lg: "h-14 px-7 text-base sm:text-lg",
  }[size];

  return (
    <div className={cn("flex flex-col sm:flex-row gap-3", className)}>
      <a
        href={telHref}
        aria-label="Call Zam Zam Hostel now"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
          "bg-call text-call-foreground hover:bg-call/90 shadow-cta",
          pulse && "pulse-cta",
          sizeClass
        )}
      >
        <Phone className="h-5 w-5" />
        <span>Call Now</span>
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Zam Zam Hostel on WhatsApp"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
          "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90",
          variant === "light" ? "shadow-card" : "shadow-cta",
          sizeClass
        )}
      >
        <MessageCircle className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
