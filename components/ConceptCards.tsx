import type { CommercialDirection } from "@/data/siteContent";
import { siteContent } from "@/data/siteContent";

type ConceptCardsProps = {
  content: typeof siteContent.commercialDirections;
};

function ConceptCard({ card }: { card: CommercialDirection }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
        {card.category}
      </p>

      <h3 className="text-2xl font-black tracking-tight text-white">
        {card.name}
      </h3>

      <p className="mt-5 leading-7 text-neutral-300">{card.description}</p>

      <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-neutral-500">
            Potential uses
          </h4>

          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            {card.potentialUses.map((use) => (
              <li key={use}>• {use}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-neutral-500">
            Visual cues
          </h4>

          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            {card.visualCues.map((cue) => (
              <li key={cue}>• {cue}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function ConceptCards({ content }: ConceptCardsProps) {
  return (
    <section
      id="commercial-directions"
      className="border-b border-neutral-800 py-20"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-red-400">
          {content.eyebrow}
        </p>

        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          {content.heading}
        </h2>

        <p className="mt-5 text-lg leading-8 text-neutral-300">
          {content.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {content.cards.map((card) => (
          <ConceptCard key={card.name} card={card} />
        ))}
      </div>
    </section>
  );
}