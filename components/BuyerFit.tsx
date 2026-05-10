import { siteContent } from "@/data/siteContent";

export default function BuyerFit() {
  const { buyerFit } = siteContent;

  return (
    <section className="section-shell section-spacing relative z-10">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow text-red">{buyerFit.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-black leading-[0.95] text-cream md:text-6xl">
            {buyerFit.heading}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-bone">
            {buyerFit.copy}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {buyerFit.buyers.map((buyer) => (
            <div
              key={buyer}
              className="border fine-border bg-graphite/70 p-5 text-base font-semibold leading-7 text-cream/88"
            >
              {buyer}
            </div>
          ))}

          <div className="sm:col-span-2 border border-red/25 bg-red/10 p-5">
            <p className="font-label text-sm font-bold uppercase tracking-[0.13em] text-cream/78">
              {buyerFit.closingLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}