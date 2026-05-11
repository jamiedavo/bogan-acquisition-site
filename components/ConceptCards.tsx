import {
  MotionCard,
  MotionSection,
  StaggerGroup,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

const accentStyles = {
  supply: {
    wrapper:
      "from-[#181816] via-[#161513] to-[#0E0E0C] hover:border-[#A33A2A]/50",
    mark: "bg-[#A33A2A]",
    label: "text-[#CDBF9F]",
  },
  garage: {
    wrapper:
      "from-[#181816] via-[#151719] to-[#0E0E0C] hover:border-[#5E6670]/60",
    mark: "bg-[#5E6670]",
    label: "text-[#B8B1A3]",
  },
  fm: {
    wrapper:
      "from-[#21110F] via-[#181816] to-[#0E0E0C] hover:border-[#A33A2A]/60",
    mark: "bg-[#9B7A42]",
    label: "text-[#F1E6CF]",
  },
};

export default function ConceptCards() {
  const { commercialDirections } = siteContent;

  return (
    <MotionSection
      id="commercial-directions"
      className="scroll-mt-8 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-3xl sm:mb-10">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#9B7A42] sm:tracking-[0.24em]">
            Commercial directions
          </p>
          <h2 className="max-w-4xl text-balance text-[clamp(2.35rem,10vw,4.35rem)] font-black uppercase leading-[0.94] tracking-[-0.02em] text-[#F1E6CF] lg:text-5xl">
            {commercialDirections.heading}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#CDBF9F] sm:text-lg sm:leading-8">
            {commercialDirections.intro}
          </p>
        </div>

        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {commercialDirections.cards.map((card) => {
            const styles =
              accentStyles[card.accent as keyof typeof accentStyles];

            return (
              <MotionCard
                key={card.name}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-[#F1E6CF]/10 bg-gradient-to-br ${styles.wrapper} p-5 shadow-[0_30px_100px_rgba(0,0,0,0.28)] transition-colors duration-300 sm:rounded-[2rem] sm:p-7`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute right-5 top-5 h-3 w-3 rounded-full ${styles.mark} opacity-80 transition group-hover:scale-125`}
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1E6CF]/20 to-transparent"
                />

                <div className="relative">
                  <p
                    className={`mb-4 max-w-[85%] text-[0.68rem] font-black uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.2em] ${styles.label}`}
                  >
                    {card.category}
                  </p>

                  <h3 className="text-[clamp(2rem,10vw,3rem)] font-black uppercase leading-none tracking-[-0.055em] text-[#F1E6CF] lg:text-3xl">
                    {card.name}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#CDBF9F]">
                    {card.description}
                  </p>

                  <div className="mt-7">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#9B7A42]">
                      Possible uses
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {card.possibleUses.map((use) => (
                        <span
                          key={use}
                          className="rounded-full border border-[#F1E6CF]/10 bg-[#0E0E0C]/45 px-3 py-1.5 text-xs font-bold text-[#CDBF9F]"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 border-t border-[#F1E6CF]/10 pt-5">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#9B7A42]">
                      Visual cues
                    </p>
                    <ul className="grid gap-2 text-sm text-[#CDBF9F]">
                      {card.visualCues.map((cue) => (
                        <li key={cue} className="flex items-center gap-3">
                          <span
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${styles.mark}`}
                          />
                          <span>{cue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </StaggerGroup>
      </div>
    </MotionSection>
  );
}