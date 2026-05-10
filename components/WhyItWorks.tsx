import { siteContent } from "@/data/siteContent";

type WhyItWorksProps = {
  content: typeof siteContent.whyItWorks;
};

export function WhyItWorks({ content }: WhyItWorksProps) {
  return (
    <section className="grid gap-10 border-b border-neutral-800 py-20 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-red-400">
          {content.eyebrow}
        </p>

        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          {content.heading}
        </h2>
      </div>

      <div className="space-y-6 text-lg leading-8 text-neutral-300">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}