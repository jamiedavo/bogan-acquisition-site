import { siteContent } from "@/data/siteContent";

export function BuyerFit() {
  return (
    <section className="border-b border-neutral-800 py-16">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
        Buyer fit placeholder
      </p>

      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {siteContent.buyerFit.heading}
      </h2>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {siteContent.buyerFit.placeholderList.map((item) => (
          <li key={item} className="rounded-lg border border-neutral-800 p-4">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}