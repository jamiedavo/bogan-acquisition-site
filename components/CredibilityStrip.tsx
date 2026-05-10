type CredibilityStripProps = {
  items: string[];
};

export function CredibilityStrip({ items }: CredibilityStripProps) {
  return (
    <section aria-label="Domain credibility markers" className="border-b border-neutral-800 py-6">
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}