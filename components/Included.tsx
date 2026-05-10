import { siteContent } from "@/data/siteContent";

export default function Included() {
  const { included } = siteContent;

  return (
    <section className="section-shell section-spacing relative z-10">
      <div className="premium-card rounded-[2rem] p-7 md:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow text-red">{included.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-[0.95] text-cream md:text-6xl">
              {included.heading}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-bone">
              {included.copy}
            </p>
          </div>

          <div className="grid gap-3">
            {included.points.map((point) => (
              <div
                key={point}
                className="flex gap-4 border fine-border bg-ink/38 p-5"
              >
                <span className="mt-2 h-2 w-2 shrink-0 bg-red" />
                <p className="font-label text-sm font-bold uppercase tracking-[0.12em] text-cream/86">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}