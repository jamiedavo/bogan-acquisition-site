import { siteContent } from "@/data/siteContent";

export default function ConceptCards() {
  const { directions } = siteContent;

  return (
    <section
      id="directions"
      className="section-shell section-spacing relative z-10 border-y fine-border"
    >
      <div className="mb-12 max-w-3xl md:mb-16">
        <p className="eyebrow text-red">{directions.eyebrow}</p>
        <h2 className="mt-4 text-4xl font-black leading-[0.95] text-cream md:text-6xl">
          {directions.heading}
        </h2>
        <p className="mt-6 text-lg leading-8 text-bone">{directions.intro}</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {directions.cards.map((card, index) => (
          <article
            key={card.name}
            className="premium-card group relative flex min-h-full flex-col overflow-hidden rounded-3xl p-6 transition duration-200 hover:-translate-y-1 hover:border-red/35 md:p-7"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red via-brass/70 to-transparent opacity-80" />

            <div className="flex items-start justify-between gap-5">
              <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-red">
                0{index + 1}
              </p>
              <p className="max-w-[12rem] text-right font-label text-[0.68rem] font-bold uppercase tracking-[0.15em] text-bone/58">
                {card.category}
              </p>
            </div>

            <h3 className="mt-8 text-3xl font-black leading-none text-cream md:text-4xl">
              {card.name}
            </h3>

            <p className="mt-5 flex-1 text-base leading-7 text-bone">
              {card.description}
            </p>

            <div className="mt-8">
              <p className="eyebrow text-cream/52">Potential uses</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {card.potentialUses.map((use) => (
                  <span
                    key={use}
                    className="border border-concrete/15 bg-ink/45 px-3 py-1.5 text-xs font-medium text-bone"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 border-t fine-border pt-5">
              <p className="eyebrow text-cream/52">Visual cues</p>
              <p className="mt-3 text-sm leading-6 text-bone/75">
                {card.visualCues.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}