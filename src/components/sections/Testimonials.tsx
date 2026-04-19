import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Affordable and comfortable stay for students. The food tastes home-cooked and the rooms are kept clean.",
    name: "Aarav P.",
    role: "Engineering Student",
  },
  {
    text: "Safe environment and the owner is genuinely caring. As a parent, I have peace of mind that my son is staying here.",
    name: "Mrs. Sharma",
    role: "Parent",
  },
  {
    text: "Close to college and very convenient. Washing machine and fridge are a big plus. Highly recommended for students.",
    name: "Rohan K.",
    role: "B.Com Student",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            What students & parents say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="bg-card p-6 rounded-2xl shadow-card border border-border reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="h-8 w-8 text-accent mb-3" />
              <blockquote className="text-foreground/90 text-sm sm:text-base leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <p className="font-display font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
