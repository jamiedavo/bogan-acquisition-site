import { siteContent } from "@/data/siteContent";

export function WhyItWorks() {
  return (
    <section className="border-b border-neutral-800 py-16">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
        Section placeholder
      </p>

      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {siteContent.why.heading}
      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
        {siteContent.why.placeholder}
      </p>
    </section>
  );
}