import { ShieldCheck, Building2, GraduationCap, UtensilsCrossed } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Owner-supervised" },
  { icon: Building2, label: "Multiple properties" },
  { icon: GraduationCap, label: "Student-friendly" },
  { icon: UtensilsCrossed, label: "Meals included" },
];

export const TrustStrip = () => {
  return (
    <section aria-label="Why students trust us" className="bg-primary text-primary-foreground">
      <div className="container py-6 sm:py-8">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it) => (
            <li key={it.label} className="flex items-center gap-3 justify-center sm:justify-start">
              <it.icon className="h-5 w-5 text-accent shrink-0" />
              <span className="text-sm sm:text-base font-medium">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
