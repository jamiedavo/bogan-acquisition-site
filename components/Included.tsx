import { siteContent } from "@/data/siteContent";

export function Included() {
  return (
    <section className="border-b border-neutral-800 py-16">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
        Acquisition placeholder
      </p>

      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {siteContent.included.heading}
      </h2>

      <ul className="mt-6 space-y-3 text-neutral-300">
        {siteContent.included.placeholderList.map((item) => (
          <li key={item}>— {item}</li>
        ))}
      </ul>
    </section>
  );
}