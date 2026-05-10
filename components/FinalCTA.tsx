import {
  MotionLink,
  MotionSection,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function FinalCTA() {
  const { finalCta } = siteContent;

  return (
    <MotionSection
      id="enquire"
      className="px-5 pb-12 pt-20 sm:px-6 lg:px-8 lg:pb-16 lg:pt-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#F1E6CF]/10 bg-[#181816]/80 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.36)] sm:p-10 lg:p-12">
          <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[#A33A2A]/20 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-120px] h-72 w-72 rounded-full bg-[#9B7A42]/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <StaggerItem>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#9B7A42]">
                  Next step
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-balance text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#F1E6CF] sm:text-5xl lg:text-6xl">
                  {finalCta.heading}
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#CDBF9F]">
                  {finalCta.copy}
                </p>
              </StaggerItem>
            </div>

            <div>
              <MotionLink
                href={finalCta.primaryCta.href}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#A33A2A]/70 bg-[#A33A2A] px-6 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-[#F1E6CF] shadow-[0_18px_60px_rgba(163,58,42,0.24)] transition hover:bg-[#732B22] sm:w-auto"
              >
                {finalCta.primaryCta.label}
              </MotionLink>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#CDBF9F]">
                {finalCta.trustNote}
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-8 flex flex-col gap-3 border-t border-[#F1E6CF]/10 pt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#CDBF9F] sm:flex-row sm:items-center sm:justify-between">
          <span>bogan.co.nz</span>
          <span>Premium NZ domain for acquisition</span>
        </footer>
      </div>
    </MotionSection>
  );
}