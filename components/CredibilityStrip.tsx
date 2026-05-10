import { siteContent } from "@/data/siteContent";

export default function CredibilityStrip() {
  return (
    <section className="section-shell relative z-10">
      <div className="grid gap-px overflow-hidden border fine-border bg-concrete/10 md:grid-cols-5">
        {siteContent.credibility.map((item) => (
          <div
            key={item}
            className="bg-graphite/78 px-5 py-5 text-center font-label text-xs font-bold uppercase tracking-[0.16em] text-cream/78 md:py-6"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}