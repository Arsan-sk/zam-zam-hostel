import { Phone } from "lucide-react";
import { telHref, HOSTEL } from "@/lib/hostel";

export const TopNav = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 group" aria-label="Zam Zam Hostel home">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-primary text-primary-foreground font-display font-bold text-sm shadow-card">
            ZZ
          </span>
          <span className="font-display font-bold text-base sm:text-lg leading-none">
            {HOSTEL.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <a href="#rooms" className="hover:text-foreground transition-colors">Rooms</a>
          <a href="#facilities" className="hover:text-foreground transition-colors">Facilities</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a>
          <a href="#location" className="hover:text-foreground transition-colors">Location</a>
        </nav>

        <a
          href={telHref}
          className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-call text-call-foreground font-semibold text-sm shadow-cta hover:bg-call/90 transition-all hover:scale-[1.03]"
          aria-label="Call now"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </header>
  );
};
