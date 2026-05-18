import {
  MotionSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function Included() {
  const { included } = siteContent;

  return (
    <MotionSection className="px-5 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#9B7A42] sm:tracking-[0.24em]">
            Acquisition detail
          </p>
          <h2 className="max-w-3xl text-balance text-[clamp(2.35rem,10vw,4.25rem)] font-black uppercase leading-[0.96] tracking-[-0.035em] text-[#F1E6CF] lg:text-5xl heading-wordspace">
            {included.heading}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#CDBF9F] sm:text-lg sm:leading-8">
            {included.copy}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <StaggerGroup className="grid gap-3 sm:grid-cols-2">
            {included.points.map((point) => (
              <StaggerItem key={point}>
                <div className="h-full rounded-2xl border border-[#F1E6CF]/10 bg-[#181816]/70 p-5 text-sm font-bold leading-6 text-[#F1E6CF] shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
                  {point}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="rounded-[1.75rem] border border-[#A33A2A]/25 bg-[linear-gradient(145deg,rgba(163,58,42,0.12),rgba(24,24,22,0.72))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.22)] sm:rounded-[2rem] sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#CDBF9F]">
              Clarification
            </p>
            <h3 className="mt-4 max-w-2xl text-balance text-[clamp(1.65rem,7vw,2.6rem)] font-black uppercase leading-[1.02] tracking-[-0.02em] text-[#F1E6CF] heading-wordspace">
              {included.whatThisIsNot.heading}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#CDBF9F]">
              {included.whatThisIsNot.copy}
            </p>
          </div>
        </div>

        <StaggerGroup className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 lg:grid-cols-4">
          {included.process.map((step, index) => (
            <StaggerItem key={step}>
              <div className="h-full rounded-2xl border border-[#F1E6CF]/10 bg-[#0E0E0C]/55 p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9B7A42]">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-sm font-bold leading-6 text-[#F1E6CF]">
                  {step}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </MotionSection>
  );
}
