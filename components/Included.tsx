import { siteContent } from "@/data/siteContent";

export default function Included() {
  const { acquisition } = siteContent;

  return (
    <section className="relative overflow-hidden border-t border-[#2A2823] bg-[#121210] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(163,58,42,0.12),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(155,122,66,0.08),transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#A33A2A]">
            {acquisition.eyebrow}
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#F1E6CF] sm:text-5xl lg:text-6xl">
            {acquisition.heading}
          </h2>

          <p className="mt-6 text-base leading-7 text-[#CDBF9F] sm:text-lg">
            {acquisition.intro}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-3xl border border-[#332F28] bg-[#181816]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7A42]">
              Included
            </p>

            <ul className="space-y-4">
              {acquisition.included.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[#F1E6CF]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A33A2A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[#332F28] bg-[#0E0E0C] p-6 sm:p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7A42]">
              Scope
            </p>

            <h3 className="text-xl font-black uppercase tracking-[-0.03em] text-[#F1E6CF]">
              {acquisition.notIncluded.heading}
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#B8B1A3]">
              {acquisition.notIncluded.copy}
            </p>
          </article>

          <article className="rounded-3xl border border-[#332F28] bg-[#181816]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7A42]">
              Process
            </p>

            <h3 className="text-xl font-black uppercase tracking-[-0.03em] text-[#F1E6CF]">
              {acquisition.process.heading}
            </h3>

            <ol className="mt-5 space-y-4">
              {acquisition.process.steps.map((step, index) => (
                <li key={step} className="flex gap-4 text-sm leading-6 text-[#B8B1A3]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#A33A2A]/50 bg-[#A33A2A]/10 text-xs font-bold text-[#F1E6CF]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-[#332F28] bg-[#0E0E0C]/80 px-5 py-4 sm:px-6">
          <p className="text-sm leading-6 text-[#CDBF9F]">
            <span className="font-semibold text-[#F1E6CF]">Trust note:</span>{" "}
            {acquisition.trustNote}
          </p>
        </div>
      </div>
    </section>
  );
}