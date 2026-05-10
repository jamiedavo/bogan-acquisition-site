import { siteContent } from "@/data/siteContent";

export default function CredibilityStrip() {
  return (
    <section className="border-y border-[#2A2823] bg-[#0E0E0C]/80 px-5 py-5 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-5">
        {siteContent.credibility.points.map((item) => (
          <div
            key={item}
            className="rounded-full border border-[#2A2823] bg-[#181816] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#CDBF9F]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}