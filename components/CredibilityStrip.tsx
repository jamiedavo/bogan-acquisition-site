import { siteContent } from "@/data/siteContent";

export function CredibilityStrip() {
  return (
    <section className="border-b border-neutral-800 py-6">
      <ul className="grid gap-3 text-sm text-neutral-400 sm:grid-cols-2 md:grid-cols-5">
        {siteContent.credibility.map((item) => (
          <li key={item} className="rounded-lg border border-neutral-800 p-3">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}