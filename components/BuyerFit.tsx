import {
  MotionSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function BuyerFit() {
  const { buyerFit } = siteContent;

  return (
    <MotionSection className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#9B7A42]">
            Buyer fit
          </p>
          <h2 className="text-balance text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#F1E6CF] sm:text-5xl">
            {buyerFit.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#CDBF9F]">
            {buyerFit.copy}
          </p>
        </div>

        <div>
          <StaggerGroup className="grid gap-3 sm:grid-cols-2">
            {buyerFit.buyers.map((buyer) => (
              <StaggerItem key={buyer}>
                <div className="h-full rounded-2xl border border-[#F1E6CF]/10 bg-[#181816]/70 p-5 text-sm font-bold leading-6 text-[#F1E6CF] shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
                  {buyer}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-5 rounded-2xl border border-[#A33A2A]/30 bg-[#A33A2A]/10 p-5 text-sm font-bold leading-6 text-[#F1E6CF]">
            {buyerFit.closingLine}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}