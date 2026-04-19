import { Check, Star } from "lucide-react";
import { CTAButtons } from "../CTAButtons";
import { cn } from "@/lib/utils";

const plans = [
  {
    price: "4,500",
    name: "Stay Only",
    meals: "No food included",
    features: ["Bed & accommodation", "All facilities", "Electricity included", "Washing machine"],
    popular: false,
  },
  {
    price: "7,500",
    name: "Full Meals",
    meals: "Lunch + Dinner",
    features: ["Bed & accommodation", "All facilities", "Lunch + Dinner included", "Best value for students"],
    popular: true,
  },
  {
    price: "6,000",
    name: "Single Meal",
    meals: "Lunch OR Dinner",
    features: ["Bed & accommodation", "All facilities", "One meal of your choice", "Flexible plan"],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Simple, all-inclusive monthly plans
          </h2>
          <p className="mt-4 text-muted-foreground">
            Transparent pricing. No hidden charges. Choose what works for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto overflow-visible">
          {plans.map((p, i) => (
            <article
              key={p.name}
              className={cn(
                "relative rounded-2xl p-6 sm:p-8 transition-all reveal flex flex-col",
                p.popular
                  ? "bg-gradient-primary text-primary-foreground shadow-elegant lg:scale-105 lg:-my-2 ring-4 ring-accent/30"
                  : "bg-card border border-border shadow-card hover:shadow-elegant"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-card">
                  <Star className="h-3 w-3 fill-current" />
                  MOST POPULAR
                </span>
              )}

              <div>
                <h3 className={cn("font-display text-xl font-bold", p.popular ? "text-primary-foreground" : "text-foreground")}>
                  {p.name}
                </h3>
                <p className={cn("text-sm mt-1", p.popular ? "text-primary-foreground/80" : "text-muted-foreground")}>
                  {p.meals}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className={cn("text-2xl font-display font-bold", p.popular ? "text-accent" : "text-primary")}>₹</span>
                  <span className={cn("text-5xl font-display font-extrabold", p.popular ? "text-primary-foreground" : "text-foreground")}>
                    {p.price}
                  </span>
                  <span className={cn("text-sm", p.popular ? "text-primary-foreground/70" : "text-muted-foreground")}>/month</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={cn("h-4 w-4 mt-0.5 shrink-0", p.popular ? "text-accent" : "text-whatsapp")} />
                      <span className={p.popular ? "text-primary-foreground/95" : "text-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-current/10">
                <CTAButtons size="sm" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
