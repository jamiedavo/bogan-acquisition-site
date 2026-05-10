import { siteContent } from "@/data/siteContent";

export function ConceptCards() {
  return (
    <section id="directions" className="border-b border-neutral-800 py-16">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
        Direction placeholders
      </p>

      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Commercial direction cards
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {siteContent.concepts.map((concept) => (
          <article
            key={concept.name}
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
          >
            <p className="text-sm text-neutral-500">{concept.category}</p>
            <h3 className="mt-3 text-2xl font-semibold">{concept.name}</h3>
            <p className="mt-4 text-sm leading-6 text-neutral-300">
              {concept.placeholder}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}