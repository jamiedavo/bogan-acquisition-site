import BuyerFit from "@/components/BuyerFit";
import ConceptCards from "@/components/ConceptCards";
import CredibilityStrip from "@/components/CredibilityStrip";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import Included from "@/components/Included";
import SiteShell from "@/components/SiteShell";
import WhyItWorks from "@/components/WhyItWorks";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <CredibilityStrip />
      <WhyItWorks />
      <ConceptCards />
      <BuyerFit />
      <Included />
      <FinalCTA />
    </SiteShell>
  );
}