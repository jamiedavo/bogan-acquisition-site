import { siteContent } from "@/data/siteContent";

export default function FinalCTA() {
  const { finalCta } = siteContent;

  return (
    <section id="enquire" className="section-shell section-spacing relative z-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-red/25 bg-red/10 p-7 shadow-premium md:p-12 lg:p-16">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-red/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-red via-cream/20 to-transparent" />

        <div className="relative max-w-4xl">
          <p className="eyebrow text-red">{finalCta.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-black leading-[0.95] text-cream md:text-6xl lg:text-7xl">
            {finalCta.heading}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-bone md:text-xl md:leading-9">
            {finalCta.copy}
          </p>

          <div className="mt-9">
            <a className="primary-button" href={finalCta.href}>
              {finalCta.button}
            </a>
          </div>

          <p className="mt-6 max-w-xl font-label text-xs font-bold uppercase tracking-[0.15em] text-cream/58">
            {finalCta.trustNote}
          </p>
        </div>
      </div>
    </section>
  );
}