import { MotionSection } from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function WhyItWorks() {
  const { whyItWorks } = siteContent;

  return (
    <MotionSection
      id="why-it-works"
      className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#9B7A42] sm:tracking-[0.24em]">
            Commercial logic
          </p>
          <h2 className="max-w-2xl text-balance text-[clamp(2.45rem,11vw,4.5rem)] font-black uppercase leading-[0.95] tracking-[-0.055em] text-[#F1E6CF] lg:text-5xl">
            {whyItWorks.heading}
          </h2>
        </div>

        <div className="rounded-[1.75rem] border border-[#F1E6CF]/10 bg-[#181816]/65 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.22)] sm:rounded-[2rem] sm:p-8">
          <p className="text-xl font-black tracking-[-0.03em] text-[#F1E6CF] sm:text-2xl">
            {whyItWorks.intro}
          </p>

          <div className="mt-6 space-y-5 text-base leading-7 text-[#CDBF9F] sm:leading-8">
            {whyItWorks.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}