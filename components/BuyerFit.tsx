import {
  MotionSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function BuyerFit() {
  const { buyerFit } = siteContent;

  return (
    <MotionSection className="px-5 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#9B7A42]">
            {buyerFit.eyebrow}
          </p>
          <h2 className="max-w-3xl text-balance text-[clamp(2.35rem,10vw,4.25rem)] font-black uppercase leading-[0.96] tracking-[-0.035em] text-[#F1E6CF] lg:text-5xl">
            {buyerFit.heading}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#CDBF9F] sm:text-lg sm:leading-8">
            {buyerFit.intro}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          {/* Positive Fit */}
          <StaggerItem>
            <div className="h-full rounded-[1.75rem] border border-[#A33A2A]/30 bg-[linear-gradient(145deg,rgba(163,58,42,0.13),rgba(24,24,22,0.72))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.22)] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#CDBF9F]">
                Good fit
              </p>
              <StaggerGroup className="mt-6 space-y-3.5">
                {buyerFit.positives.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex gap-3 text-[0.95rem] font-bold leading-6 text-[#F1E6CF]">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A33A2A]" />
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </StaggerItem>

          {/* Negative Fit */}
          <StaggerItem>
            <div className="h-full rounded-[1.75rem] border border-[#F1E6CF]/12 bg-[#181816]/72 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#CDBF9F]">
                Less ideal
              </p>
              <StaggerGroup className="mt-6 space-y-3.5">
                {buyerFit.negatives.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex gap-3 text-[0.95rem] font-bold leading-6 text-[#CDBF9F]">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#5E6670]" />
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </StaggerItem>
        </div>

        <StaggerItem>
          <div className="mt-5 rounded-[1.75rem] border border-[#A33A2A]/30 bg-[#A33A2A]/8 px-6 py-6 text-center sm:px-8">
            <p className="text-lg font-bold leading-7 text-[#CDBF9F] sm:text-xl">
              {buyerFit.closingLine}
            </p>
          </div>
        </StaggerItem>
      </div>
    </MotionSection>
  );
}
