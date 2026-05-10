import {
  MotionSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function BuyerFit() {
  const { buyerFit } = siteContent;

  return (
    <MotionSection className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#9B7A42] sm:tracking-[0.24em]">
            Buyer fit
          </p>
          <h2 className="max-w-2xl text-balance text-[clamp(2.45rem,11vw,4.5rem)] font-black uppercase leading-[0.95] tracking-[-0.055em] text-[#F1E6CF] lg:text-5xl">
            {buyerFit.heading}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#CDBF9F] sm:text-lg sm:leading-8">
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