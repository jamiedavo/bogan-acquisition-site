import { siteContent } from "@/data/siteContent";

type HeroProps = {
  domain: string;
  publicPriceLine: string;
  enquiryHref: string;
  hero: typeof siteContent.hero;
};

export function Hero({
  domain,
  publicPriceLine,
  enquiryHref,
  hero,
}: HeroProps) {
  return (
    <section className="flex min-h-[72vh] flex-col justify-center border-b border-neutral-800 py-20 sm:py-24 lg:py-28">
      <div className="max-w-4xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-red-400">
          {hero.eyebrow}
        </p>

        <p className="mb-6 text-lg font-medium text-neutral-300 sm:text-xl">
          {domain}
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {hero.headline}
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
          {hero.subheadline}
        </p>

        <p className="mt-5 max-w-2xl text-base font-medium text-neutral-400">
          {hero.supportingLine}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={enquiryHref}
            className="inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-600"
          >
            {hero.primaryCta}
          </a>

          <a
            href="#commercial-directions"
            className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-6 py-3 text-sm font-bold text-neutral-100 transition hover:border-neutral-500 hover:bg-neutral-900"
          >
            {hero.secondaryCta}
          </a>
        </div>

        <p className="mt-8 max-w-xl text-sm leading-6 text-neutral-500">
          {publicPriceLine}
        </p>
      </div>
    </section>
  );
}