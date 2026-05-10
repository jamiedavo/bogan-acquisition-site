import {
  MotionSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function Included() {
  const { included } = siteContent;

  return (
    <MotionSection className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#9B7A42]">
            Acquisition detail
          </p>
          <h2 className="text-balance text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#F1E6CF] sm:text-5xl">
            {included.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#CDBF9F]">
            {included.copy}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <StaggerGroup className="grid gap-3 sm:grid-cols-2">
            {included.points.map((point) => (
              <StaggerItem key={point}>
                <div className="h-full rounded-2xl border border-[#F1E6CF]/10 bg-[#181816]/70 p-5 text-sm font-bold leading-6 text-[#F1E6CF] shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
                  {point}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="rounded-[2rem] border border-[#F1E6CF]/10 bg-[#181816]/65 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.22)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9B7A42]">
              Clarification
            </p>
            <h3 className="mt-4 text-2xl font-black uppercase tracking-[-0.04em] text-[#F1E6CF]">
              {included.whatThisIsNot.heading}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#CDBF9F]">
              {included.whatThisIsNot.copy}
            </p>
          </div>
        </div>

        <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {included.process.map((step, index) => (
            <StaggerItem key={step}>
              <div className="rounded-2xl border border-[#F1E6CF]/10 bg-[#0E0E0C]/55 p-5">
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