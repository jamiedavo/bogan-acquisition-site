import { siteContent } from "@/data/siteContent";

type BuyerFitProps = {
  content: typeof siteContent.buyerFit;
};

export function BuyerFit({ content }: BuyerFitProps) {
  return (
    <section className="grid gap-10 border-b border-neutral-800 py-20 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-red-400">
          {content.eyebrow}
        </p>

        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          {content.heading}
        </h2>

        <p className="mt-5 text-lg leading-8 text-neutral-300">
          {content.copy}
        </p>
      </div>

      <div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {content.buyers.map((buyer) => (
            <li
              key={buyer}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4 text-neutral-300"
            >
              {buyer}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-base font-medium text-neutral-400">
          {content.closingLine}
        </p>
      </div>
    </section>
  );
}