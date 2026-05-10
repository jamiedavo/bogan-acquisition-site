import { BuyerFit } from "@/components/BuyerFit";
import { ConceptCards } from "@/components/ConceptCards";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { Included } from "@/components/Included";
import { SiteShell } from "@/components/SiteShell";
import { WhyItWorks } from "@/components/WhyItWorks";
import { siteContent } from "@/data/siteContent";

export default function Home() {
  return (
    <SiteShell>
      <Hero
        domain={siteContent.site.domain}
        publicPriceLine={siteContent.site.publicPriceLine}
        enquiryHref={siteContent.site.enquiryHref}
        hero={siteContent.hero}
      />

      <CredibilityStrip items={siteContent.credibility} />

      <WhyItWorks content={siteContent.whyItWorks} />

      <ConceptCards content={siteContent.commercialDirections} />

      <BuyerFit content={siteContent.buyerFit} />

      <Included content={siteContent.included} />

      <FinalCTA
        content={siteContent.finalCta}
        enquiryHref={siteContent.site.enquiryHref}
      />
    </SiteShell>
  );
}