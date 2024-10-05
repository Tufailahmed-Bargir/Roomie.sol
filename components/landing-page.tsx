"use client";
import { useState } from "react";
import { Header } from "./Header";
import { HeroSection } from "./Hero";
import { FeaturesSection } from "./Features";
import { HowItWorksSection } from "./HowitWork";
import { CTASection } from "./CTA";
import { Footer } from "./Footer";
import { MobileMenu } from "./MobileMenu";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
