import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { telHref, HOSTEL } from "@/lib/hostel";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#rooms", label: "Rooms" },
  { href: "#facilities", label: "Facilities" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

export const TopNav = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/90 border-b border-border/60">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 group" aria-label="Zam Zam Hostel home" onClick={closeMenu}>
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-primary text-primary-foreground font-display font-bold text-sm shadow-card shrink-0">
              ZZ
            </span>
            <span className="font-display font-bold text-base sm:text-lg leading-none">
              {HOSTEL.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <a
              href={telHref}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-call text-call-foreground font-semibold text-sm shadow-cta hover:bg-call/90 transition-all hover:scale-[1.03]"
              aria-label="Call now"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>

            {/* Hamburger toggle — mobile/tablet only */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav-menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-nav-menu"
        className={cn(
          "lg:hidden fixed inset-0 z-30 transition-all duration-300",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Slide-in panel — fully opaque so text is always crisp */}
        <nav
          className={cn(
            "absolute top-16 inset-x-0 bg-background border-b border-border shadow-elegant transition-transform duration-300",
            open ? "translate-y-0" : "-translate-y-4"
          )}
          aria-label="Mobile navigation"
        >
          <ul className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold text-foreground hover:bg-primary/8 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-border mt-2">
              <a
                href={telHref}
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 h-12 rounded-full bg-call text-call-foreground font-semibold shadow-cta mx-4"
              >
                <Phone className="h-4 w-4" />
                Call Now — {HOSTEL.phone}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
