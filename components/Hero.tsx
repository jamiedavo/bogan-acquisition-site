import { siteContent } from "@/data/siteContent";

const assetSignals = [
  {
    label: "Asset",
    value: "One-word .co.nz",
  },
  {
    label: "Market",
    value: "New Zealand",
  },
  {
    label: "Use",
    value: "Brand / campaign / culture",
  },
];

export default function Hero() {
  const { hero } = siteContent;
  const heroMarkers = siteContent.credibility.points.slice(0, 4);

  return (
    <section className="section-shell relative z-10 pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12">
      <div className="hero-glow-panel relative overflow-hidden rounded-[1.75rem] border fine-border px-5 py-10 shadow-premium sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(163,58,42,0.22),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(155,122,66,0.11),transparent_28%)]" />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(241,230,207,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(241,230,207,0.55) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="max-w-4xl">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-red/35 bg-red/10 px-3.5 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red" />
                <span className="font-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cream">
                  {hero.eyebrow}
                </span>
              </div>

              <div className="hidden rounded-full border fine-border bg-graphite/70 px-3.5 py-2 sm:inline-flex">
                <span className="font-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-bone">
                  Premium NZ domain asset
                </span>
              </div>
            </div>

            <p className="mb-4 font-label text-sm font-bold uppercase tracking-[0.28em] text-red sm:text-base">
              {hero.domain}
            </p>

            <h1 className="max-w-4xl text-[2.9rem] font-black uppercase leading-[0.92] tracking-[-0.065em] text-cream sm:text-[4.4rem] md:text-[5.4rem] lg:text-[5.9rem] xl:text-[6.4rem]">
              {hero.headline}
            </h1>

            <div className="mt-7 max-w-2xl border-l border-red/50 pl-5">
              <p className="text-base leading-8 text-bone sm:text-lg sm:leading-8 md:text-xl md:leading-9">
                {hero.subheadline}
              </p>

              <p className="mt-4 font-label text-xs font-bold uppercase tracking-[0.18em] text-brass sm:text-sm">
                {hero.supportingLine}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={hero.primaryCta.href} className="primary-button">
                {hero.primaryCta.label}
              </a>

              <a href={hero.secondaryCta.href} className="secondary-button">
                {hero.secondaryCta.label}
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {heroMarkers.map((marker) => (
                <div
                  key={marker}
                  className="rounded-full border fine-border bg-cream/[0.035] px-3 py-2 text-center font-label text-[0.66rem] font-bold uppercase tracking-[0.14em] text-bone sm:px-4"
                >
                  {marker}
                </div>
              ))}
            </div>
          </div>

          <aside className="premium-card relative overflow-hidden rounded-[1.5rem] p-5 sm:p-6 lg:p-7">
            <div className="absolute right-4 top-4 h-16 w-16 rounded-full border border-red/25" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-brass/15" />

            <div className="relative">
              <div className="flex items-start justify-between gap-5 border-b fine-border pb-5">
                <div>
                  <p className="eyebrow text-brass">Domain asset</p>
                  <p className="mt-3 font-label text-3xl font-black tracking-[-0.08em] text-cream sm:text-4xl">
                    {hero.domain}
                  </p>
                </div>

                <div className="rounded-full border border-red/35 bg-red/10 px-3 py-1.5 font-label text-[0.62rem] font-bold uppercase tracking-[0.18em] text-cream">
                  Open
                </div>
              </div>

              <div className="grid gap-3 py-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {assetSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-2xl border fine-border bg-ink/40 p-4"
                  >
                    <p className="font-label text-[0.62rem] font-bold uppercase tracking-[0.2em] text-steel">
                      {signal.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-5 text-cream">
                      {signal.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-red/25 bg-red/[0.075] p-5">
                <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.22em] text-red">
                  Commercial territory
                </p>
                <p className="mt-3 text-lg font-semibold leading-7 text-cream">
                  Apparel. Automotive culture. Media. Events. Merch. Campaigns.
                </p>
              </div>

              <div className="mt-5 border-t fine-border pt-5">
                <p className="font-label text-xs font-bold uppercase tracking-[0.17em] text-bone/62">
                  The buyer defines the direction.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}