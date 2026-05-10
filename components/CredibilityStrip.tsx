import {
  MotionSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function CredibilityStrip() {
  return (
    <MotionSection className="px-5 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {siteContent.credibilityStrip.map((item) => (
            <StaggerItem key={item}>
              <div className="rounded-2xl border border-[#F1E6CF]/10 bg-[#181816]/60 px-4 py-4 text-center text-xs font-black uppercase tracking-[0.18em] text-[#CDBF9F] shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                {item}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </MotionSection>
  );
}