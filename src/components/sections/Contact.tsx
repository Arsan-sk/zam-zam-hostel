import { Phone, MessageCircle, MapPin } from "lucide-react";
import { HOSTEL, telHref, waHref } from "@/lib/hostel";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to book your bed?
          </h2>
          <p className="mt-4 text-primary-foreground/85 text-base sm:text-lg">
            Beds are filling up fast. Call or WhatsApp now to check availability and reserve your spot.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <a
              href={telHref}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-call text-call-foreground shadow-cta hover:scale-[1.03] transition-transform"
            >
              <div className="h-12 w-12 rounded-xl bg-white/15 grid place-items-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider opacity-80">Call us</p>
                <p className="font-display font-bold text-lg">{HOSTEL.phone}</p>
              </div>
            </a>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-whatsapp text-whatsapp-foreground shadow-cta hover:scale-[1.03] transition-transform"
            >
              <div className="h-12 w-12 rounded-xl bg-white/15 grid place-items-center shrink-0">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider opacity-90">WhatsApp</p>
                <p className="font-display font-bold text-lg">Chat now</p>
              </div>
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-primary-foreground/80 text-sm">
            <MapPin className="h-4 w-4 text-accent" />
            {HOSTEL.location}
          </div>
        </div>
      </div>
    </section>
  );
};
