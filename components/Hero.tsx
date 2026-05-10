import { siteContent } from "@/data/siteContent";

export function Hero() {
  return (
    <section className="border-b border-neutral-800 py-20">
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-400">
        {siteContent.hero.status}
      </p>

      <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
        {siteContent.hero.domain}
      </h1>

      <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-300">
        {siteContent.hero.placeholder}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#enquire"
          className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-5 py-3 text-sm font-semibold text-neutral-950"
        >
          Enquiry placeholder
        </a>

        <a
          href="#directions"
          className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100"
        >
          Directions placeholder
        </a>
      </div>
    </section>
  );
}