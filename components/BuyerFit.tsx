import { siteContent } from "@/data/siteContent";

export default function BuyerFit() {
  const { buyerFit } = siteContent;

  return (
    <section id="buyer-fit" className="relative border-t border-[#2A2823] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A33A2A]">
            {buyerFit.eyebrow}
          </p>

          <h2 className="max-w-2xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#F1E6CF] sm:text-5xl lg:text-6xl">
            {buyerFit.heading}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#CDBF9F] sm:text-lg">
            {buyerFit.intro}
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {buyerFit.buyers.map((buyer) => (
              <div
                key={buyer}
                className="group rounded-2xl border border-[#2A2823] bg-[#181816]/80 px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#A33A2A]/60 hover:bg-[#1F1D1A]"
              >
                <p className="text-sm font-semibold leading-6 text-[#F1E6CF]">
                  {buyer}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {buyerFit.signals.map((signal) => (
              <article
                key={signal.title}
                className="rounded-2xl border border-[#332F28] bg-[#0E0E0C] p-5"
              >
                <div className="mb-4 h-px w-10 bg-[#A33A2A]" />
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F1E6CF]">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#B8B1A3]">
                  {signal.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}