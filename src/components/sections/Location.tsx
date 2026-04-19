import { MapPin, Navigation } from "lucide-react";

const mapEmbed = "https://www.google.com/maps?q=Panvel,Navi+Mumbai,Maharashtra&output=embed";
const directionsLink = "https://www.google.com/maps/dir/?api=1&destination=Panvel,Navi+Mumbai,Maharashtra";

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
            <MapPin className="h-4 w-4 text-accent" /> Panvel, Navi Mumbai, Maharashtra
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-elegant border border-border reveal">
          <iframe
            src={mapEmbed}
            title="Zam Zam Hostel location in Panvel"
            className="w-full h-[320px] sm:h-[440px] block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 flex justify-center reveal">
          <a
            href={directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold shadow-cta hover:bg-primary-glow transition-all hover:scale-[1.02]"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};
