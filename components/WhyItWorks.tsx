import { siteContent } from "@/data/siteContent";

export default function WhyItWorks() {
  const why = siteContent.whyItWorks;

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div>
          <p className="eyebrow text-red">{why.eyebrow}</p>

          <h2 className="mt-4 max-w-xl text-4xl font-black leading-[0.95] text-cream md:text-6xl">
            {why.heading}
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-bone">
          {why.copy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}