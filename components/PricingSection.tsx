import {
  MotionSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function PricingSection() {
  const { pricing } = siteContent;

  return (
    <MotionSection className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-3xl sm:mb-10">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#9B7A42]">
            {pricing.eyebrow}
          </p>
          <h2 className="max-w-3xl text-balance text-[clamp(2.45rem,11vw,4.5rem)] font-black uppercase leading-[0.98] tracking-[-0.02em] text-[#F1E6CF] lg:text-5xl">
            {pricing.heading}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#CDBF9F] sm:text-lg sm:leading-8">
            {pricing.intro}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-start">
          <StaggerItem>
            <div className="h-full rounded-[1.75rem] border border-[#F1E6CF]/10 bg-[#181816]/75 p-6 sm:rounded-[2rem] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9B7A42]">
                Acquisition terms
              </p>
              <ul className="mt-5 space-y-3.5">
                {pricing.standardTerms.map((term) => (
                  <li
                    key={term}
                    className="flex gap-3 text-sm font-bold leading-6 text-[#F1E6CF]"
                  >
                    <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A33A2A]" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="h-full rounded-[1.75rem] border border-[#A33A2A]/25 bg-[#A33A2A]/10 p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#A33A2A]">
                Private discussion
              </p>
              <StaggerGroup className="mt-5 space-y-3.5">
                {pricing.flexibleOptions.map((option) => (
                  <StaggerItem key={option}>
                    <div className="flex gap-3 text-sm font-bold leading-6 text-[#F1E6CF]">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A33A2A]" />
                      <span>{option}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <div className="mt-8 border-t border-[#A33A2A]/20 pt-6">
                <p className="text-sm leading-7 text-[#CDBF9F]">
                  {pricing.closingCopy}
                </p>
              </div>
            </div>
          </StaggerItem>
        </div>
      </div>
    </MotionSection>
  );
}
