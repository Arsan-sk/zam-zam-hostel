import { HOSTEL } from "@/lib/hostel";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/90 pt-12 pb-24 lg:pb-12">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-9 w-9 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm">
                ZZ
              </span>
              <span className="font-display font-bold text-lg">{HOSTEL.name}</span>
            </div>
            <p className="mt-3 text-sm text-primary-foreground/70 max-w-xs">
              Safe, affordable student accommodation in Panvel — supervised by {HOSTEL.owner}.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-primary-foreground mb-3 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#rooms" className="hover:text-accent transition-colors">Rooms</a></li>
              <li><a href="#facilities" className="hover:text-accent transition-colors">Facilities</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-accent transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-primary-foreground mb-3 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📞 <a href={`tel:${HOSTEL.phoneIntl}`} className="hover:text-accent transition-colors">{HOSTEL.phone}</a></li>
              <li>📍 {HOSTEL.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/15 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {HOSTEL.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
