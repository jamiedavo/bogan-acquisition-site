import { siteContent } from "@/data/siteContent";

export default function WhyItWorks() {
  const { why } = siteContent;

  return (
    <section className="section-shell section-spacing relative z-10">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div>
          <p className="eyebrow text-red">{why.eyebrow}</p>
          <h2 className="mt-4 max-w-xl text-4xl font-black leading-[0.95] text-cream md:text-6xl">
            {why.heading}
          </h2>
        </div>

        <div className="premium-card rounded-3xl p-7 md:p-10">
          <p className="text-3xl font-semibold leading-tight text-cream md:text-5xl">
            {why.lead}
          </p>

          <div className="mt-8 space-y-6">
            {why.body.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-base leading-8 text-bone md:text-lg md:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}