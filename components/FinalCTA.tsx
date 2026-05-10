import { siteContent } from "@/data/siteContent";

export default function FinalCTA() {
  const { finalCta } = siteContent;

  return (
    <section id="enquire" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(163,58,42,0.18),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-[#3A332B] bg-[#181816] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.4)] sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#A33A2A]">
                {finalCta.eyebrow}
              </p>

              <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#F1E6CF] sm:text-6xl lg:text-7xl">
                {finalCta.heading}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#CDBF9F] sm:text-lg">
                {finalCta.copy}
              </p>
            </div>

            <div className="rounded-3xl border border-[#332F28] bg-[#0E0E0C]/80 p-5 sm:p-6">
              <p className="text-sm leading-6 text-[#CDBF9F]">
                {finalCta.note}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={finalCta.primaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#B74B39]/40 bg-[#A33A2A] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#F1E6CF] transition duration-300 hover:-translate-y-0.5 hover:bg-[#732B22] hover:shadow-[0_18px_45px_rgba(163,58,42,0.28)]"
                >
                  {finalCta.primaryCta.label}
                </a>

                <a
                  href={finalCta.secondaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#3A332B] bg-[#181816] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#F1E6CF] transition duration-300 hover:-translate-y-0.5 hover:border-[#A33A2A]/60 hover:bg-[#201D1A]"
                >
                  {finalCta.secondaryCta.label}
                </a>
              </div>

              <div className="mt-6 border-t border-[#2A2823] pt-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#9B7A42]">
                  Domain acquisition · Secure transfer · Concept deck on request
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}