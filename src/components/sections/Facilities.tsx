import { UtensilsCrossed, WashingMachine, Refrigerator, Zap, Sparkles, ShieldCheck } from "lucide-react";

const facilities = [
  { icon: UtensilsCrossed, title: "Home-style Meals", desc: "Lunch & dinner available" },
  { icon: WashingMachine, title: "Washing Machine", desc: "Free to use, anytime" },
  { icon: Refrigerator, title: "Refrigerator", desc: "Shared kitchen access" },
  { icon: Zap, title: "Electricity Included", desc: "No surprise bills" },
  { icon: Sparkles, title: "Clean & Hygienic", desc: "Regularly maintained" },
  { icon: ShieldCheck, title: "Safe & Supervised", desc: "Trusted environment" },
];

export const Facilities = () => {
  return (
    <section id="facilities" className="py-16 sm:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Facilities</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Everything included, nothing to worry about
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {facilities.map((f, i) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card transition-all reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-base sm:text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
