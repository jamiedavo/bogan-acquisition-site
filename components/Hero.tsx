import { siteContent } from "@/data/siteContent";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="section-shell relative z-10 py-6 sm:py-8 lg:py-10">
      <div className="hero-glow-panel relative overflow-hidden rounded-[1.75rem] border fine-border px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-red/10 blur-3xl" />
        <div className="absolute left-0 top-28 -z-10 h-px w-full bg-gradient-to-r from-transparent via-cream/20 to-transparent" />

        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-3 border fine-border bg-graphite/70 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-red" />
              <span className="eyebrow">{hero.eyebrow}</span>
            </div>

            <p className="mb-5 font-label text-sm font-bold uppercase tracking-[0.24em] text-red sm:text-base">
              {hero.domain}
            </p>

            <h1 className="max-w-4xl text-[3.1rem] font-black leading-[0.9] tracking-tight text-cream sm:text-6xl lg:text-7xl xl:text-[5.9rem]">
              {hero.headline}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-bone sm:text-xl sm:leading-9">
              {hero.subheadline}
            </p>

            <p className="mt-5 max-w-xl font-label text-sm font-semibold uppercase tracking-[0.14em] text-cream/68">
              {hero.supportingLine}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={hero.primaryCta.href} className="primary-button">
                {hero.primaryCta.label}
              </a>

              <a href={hero.secondaryCta.href} className="secondary-button">
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <aside className="premium-card relative overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-red/25" />
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-brass/15" />

            <p className="eyebrow text-red/90">Acquisition note</p>

            <p className="mt-7 text-2xl font-semibold leading-tight text-cream md:text-3xl">
              A name with built-in audience signal before a logo exists.
            </p>

            <p className="mt-5 leading-7 text-bone">
              Short, memorable, culturally loaded, and flexible enough for the
              right buyer to take in their own direction.
            </p>

            <div className="mt-8 border-t fine-border pt-5">
              <p className="font-label text-xs font-bold uppercase tracking-[0.18em] text-bone/60">
                Not a finished business. Not a parked page. A commercial domain
                asset with direction.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}