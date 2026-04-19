import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { HOSTEL } from "@/lib/hostel";

export const Location = () => {
  return (
    <section id="location" className="py-16 sm:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Location</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Located in Panvel — close to colleges
          </h2>
          <p className="mt-4 text-muted-foreground inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" /> {HOSTEL.location}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-elegant border border-border reveal">
          <a
            href={HOSTEL.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <iframe
              src={`https://www.google.com/maps?q=Zam+Zam+Hostel+Panvel&output=embed`}
              title="Zam Zam Hostel location in Panvel"
              className="w-full h-[280px] sm:h-[380px] lg:h-[440px] block pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-cta">
                <ExternalLink className="h-4 w-4" />
                Open in Google Maps
              </span>
            </div>
          </a>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 reveal">
          <a
            href={HOSTEL.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold shadow-cta hover:bg-primary-glow transition-all hover:scale-[1.02]"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
          <a
            href={HOSTEL.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-card border border-border text-foreground font-semibold shadow-card hover:shadow-elegant transition-all hover:scale-[1.02]"
          >
            <MapPin className="h-4 w-4 text-accent" />
            View on Maps
          </a>
        </div>
      </div>
    </section>
  );
};
