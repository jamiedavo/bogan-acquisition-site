import { siteContent } from "@/data/siteContent";

export function FinalCTA() {
  return (
    <section id="enquire" className="py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
        Final CTA placeholder
      </p>

      <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
        {siteContent.finalCta.heading}
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
        {siteContent.finalCta.placeholder}
      </p>

      <a
        href="mailto:hello@example.com?subject=bogan.co.nz%20enquiry"
        className="mt-8 inline-flex rounded-full bg-neutral-100 px-5 py-3 text-sm font-semibold text-neutral-950"
      >
        Email placeholder
      </a>
    </section>
  );
}