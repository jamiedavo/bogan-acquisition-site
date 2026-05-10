import { siteContent } from "@/data/siteContent";

type FinalCTAProps = {
  content: typeof siteContent.finalCta;
  enquiryHref: string;
};

export function FinalCTA({ content, enquiryHref }: FinalCTAProps) {
  return (
    <section id="enquire" className="py-20 sm:py-24">
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8 sm:p-10 lg:p-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-red-400">
          {content.eyebrow}
        </p>

        <h2 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          {content.heading}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          {content.copy}
        </p>

        <div className="mt-8">
          <a
            href={enquiryHref}
            className="inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-600"
          >
            {content.button}
          </a>
        </div>

        <p className="mt-6 text-sm text-neutral-500">{content.trustNote}</p>
      </div>
    </section>
  );
}