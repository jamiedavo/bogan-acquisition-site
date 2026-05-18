import { MotionSection } from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function WhyItWorks() {
  const { whyItWorks } = siteContent;

  return (
    <MotionSection
      id="why-it-works"
      className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#9B7A42]">
            Commercial logic
          </p>
          <h2 className="max-w-2xl text-balance text-[clamp(2.35rem,10vw,4.35rem)] font-black uppercase leading-[0.98] tracking-[-0.025em] text-[#F1E6CF] lg:text-5xl heading-wordspace">
            {whyItWorks.heading}
          </h2>
        </div>

        <div className="rounded-[2rem] border border-[#F1E6CF]/10 bg-[#181816]/65 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.22)] sm:p-8">
          <p className="text-2xl font-black tracking-[-0.03em] text-[#F1E6CF]">
            {whyItWorks.intro}
          </p>

          <div className="mt-6 space-y-5 text-base leading-8 text-[#CDBF9F]">
            {whyItWorks.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}