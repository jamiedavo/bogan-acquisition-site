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
      className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#9B7A42]">
            Commercial directions
          </p>
          <h2 className="text-balance text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#F1E6CF] sm:text-5xl">
            {commercialDirections.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#CDBF9F]">
            {commercialDirections.intro}
          </p>
        </div>

        <StaggerGroup className="grid gap-5 lg:grid-cols-3">
          {commercialDirections.cards.map((card) => {
            const styles =
              accentStyles[card.accent as keyof typeof accentStyles];

            return (
              <MotionCard
                key={card.name}
                className={`group relative overflow-hidden rounded-[2rem] border border-[#F1E6CF]/10 bg-gradient-to-br ${styles.wrapper} p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] transition-colors duration-300 sm:p-7`}
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
                    className={`mb-4 text-xs font-black uppercase tracking-[0.2em] ${styles.label}`}
                  >
                    {card.category}
                  </p>

                  <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#F1E6CF]">
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
                          <span className={`h-1.5 w-1.5 rounded-full ${styles.mark}`} />
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