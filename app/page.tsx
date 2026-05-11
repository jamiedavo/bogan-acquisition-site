import BuyerFit from "@/components/BuyerFit";
import ConceptCards from "@/components/ConceptCards";
import CredibilityStrip from "@/components/CredibilityStrip";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import Included from "@/components/Included";
import SellerCredibility from "@/components/SellerCredibility";
import SiteShell from "@/components/SiteShell";
import WhyItWorks from "@/components/WhyItWorks";

export default function Home() {
  return (
    <SiteShell>
      {/* Hero Section */}
      <Hero />

      {/* Trust & Credibility Strip */}
      <CredibilityStrip />

      {/* Why It Works */}
      <WhyItWorks />

      {/* Commercial Directions / Concepts */}
      <ConceptCards />

      {/* Buyer Fit */}
      <BuyerFit />

      {/* Seller Credibility */}
      <SellerCredibility />

      {/* What's Included */}
      <Included />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <FinalCTA />
    </SiteShell>
  );
}
