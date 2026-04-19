import { TopNav } from "@/components/TopNav";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { Rooms } from "@/components/sections/Rooms";
import { Facilities } from "@/components/sections/Facilities";
import { Pricing } from "@/components/sections/Pricing";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Rooms />
        <Facilities />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
};

export default Index;
