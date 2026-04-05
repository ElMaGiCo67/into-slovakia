/* =============================================================
   INTO Slovakia – Home Page
   Design: Dark Tech Authority – navy/slate base, amber accents
   Sections: Hero → Buyback → Toners → Service → How It Works → Contact → Footer
   ============================================================= */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BuybackSection from "@/components/BuybackSection";
import TonersSection from "@/components/TonersSection";
import ServiceSection from "@/components/ServiceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.18_0.04_250)]">
      <Navbar />
      <HeroSection />
      <BuybackSection />
      <TonersSection />
      <ServiceSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
