import { HOSTEL } from "@/lib/hostel";

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            A trusted home away from home
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Zam Zam Hostel offers thoughtfully managed student accommodation across multiple
            properties in Panvel. We focus on what matters most for students — a safe space, clean
            rooms, hearty meals, and a respectful environment to focus on studies.
          </p>

          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-2xl bg-secondary border border-border">
            <span className="text-sm text-muted-foreground">Personally supervised by</span>
            <span className="font-display font-semibold text-primary text-lg">{HOSTEL.owner}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
