import {
  MotionSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function SellerCredibility() {
  const { sellerCredibility } = siteContent;

  return (
    <MotionSection className="px-5 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#9B7A42]">
            {sellerCredibility.eyebrow}
          </p>
          <h2 className="max-w-3xl text-balance text-[clamp(2.35rem,10vw,4.25rem)] font-black uppercase leading-[0.98] tracking-[-0.02em] text-[#F1E6CF] lg:text-5xl heading-wordspace">
            {sellerCredibility.heading}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#CDBF9F] sm:text-lg sm:leading-8">
            {sellerCredibility.intro}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <StaggerItem>
            <div className="h-full rounded-[1.75rem] border border-[#F1E6CF]/10 bg-[#181816]/75 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.2)] sm:rounded-[2rem] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9B7A42]">
                {sellerCredibility.ownership.title}
              </p>

              <div className="mt-5 space-y-4">
                {sellerCredibility.ownership.copy.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-7 text-[#CDBF9F]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-[#A33A2A]/18 bg-[#A33A2A]/8 p-5">
                <p className="text-sm font-bold leading-7 text-[#F1E6CF]">
                  {sellerCredibility.ownership.note}
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="h-full rounded-[1.75rem] border border-[#A33A2A]/25 bg-[linear-gradient(145deg,rgba(163,58,42,0.14),rgba(24,24,22,0.72))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.22)] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#CDBF9F]">
                Buyer verification
              </p>

              <StaggerGroup className="mt-6 space-y-3.5">
                {sellerCredibility.verification.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex gap-3 text-sm font-bold leading-6 text-[#F1E6CF]">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A33A2A]" />
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <div className="mt-8 border-t border-[#A33A2A]/20 pt-6">
                <p className="text-sm leading-7 text-[#CDBF9F]">
                  {sellerCredibility.closingCopy}
                </p>
              </div>
            </div>
          </StaggerItem>
        </div>
      </div>
    </MotionSection>
  );
}
