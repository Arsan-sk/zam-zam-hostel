import heroImg from "@/assets/hero-hostel.jpg";
import { CTAButtons } from "../CTAButtons";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Zam Zam Hostel building exterior in Panvel — modern student accommodation"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container relative z-10 pb-12 pt-28 sm:pb-20 sm:pt-32">
        <div className="max-w-2xl space-y-5 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/95 text-accent-foreground text-xs sm:text-sm font-semibold shadow-card">
            <Sparkles className="h-3.5 w-3.5" />
            Limited beds available — Contact now
          </span>

          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Your Student Home <br />
            <span className="text-accent">in Panvel</span>
          </h1>

          <p className="text-white/90 text-base sm:text-lg max-w-xl">
            Safe, affordable and comfortable hostel for students. Home-cooked meals, supervised
            environment, and everything you need to focus on studies.
          </p>

          <CTAButtons size="lg" pulse className="pt-2" />

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-white/85 text-xs sm:text-sm">
            <span>✓ Owner-supervised</span>
            <span>✓ Meals included</span>
            <span>✓ From ₹4,500/month</span>
          </div>
        </div>
      </div>
    </section>
  );
};
