const conceptDirections = [
  {
    number: "01",
    name: "Bogan Supply Co.",
    category: "Apparel / merch / lifestyle goods",
    lane: "Capsule drops, workwear-adjacent merch, local pride, garage culture, and self-aware NZ identity.",
    description:
      "A sharp DTC merch lane with enough attitude to sell product, without forcing the buyer into a full fashion label from day one.",
    uses: [
      "T-shirts",
      "Caps",
      "Hoodies",
      "Stickers",
      "Patches",
      "Garage signs",
      "Limited drops",
    ],
    cues: [
      "Black cotton",
      "Cream ink",
      "Faded red",
      "Worn labels",
      "Patch details",
      "Workshop stamps",
    ],
    marker: "SUPPLY",
    accent: "bg-[#A33A2A]",
    borderHover: "hover:border-[#A33A2A]/70",
    shadowHover: "hover:shadow-[0_28px_90px_rgba(163,58,42,0.16)]",
    background:
      "radial-gradient(circle at 90% 0%, rgba(163,58,42,0.20), transparent 34%), linear-gradient(145deg, rgba(24,24,22,0.98), rgba(14,14,12,1))",
    pattern:
      "linear-gradient(90deg, rgba(241,230,207,0.055) 1px, transparent 1px), linear-gradient(180deg, rgba(241,230,207,0.035) 1px, transparent 1px)",
    patternSize: "26px 26px",
  },
  {
    number: "02",
    name: "Bogan Garage",
    category: "Automotive / ute / grassroots motorsport culture",
    lane: "Events, sponsors, community content, ute culture, burnout audiences, and garage-led activations.",
    description:
      "A commercially useful automotive lane for promoters, sponsors, and content operators who already understand the audience.",
    uses: [
      "Event microsite",
      "Ticketing campaign",
      "Sponsor activation",
      "User rides",
      "Merch drops",
      "Community content",
    ],
    cues: [
      "Industrial type",
      "Chrome edge",
      "Worn enamel",
      "Petrol tones",
      "Workshop badges",
      "Event graphics",
    ],
    marker: "GARAGE",
    accent: "bg-[#5E6670]",
    borderHover: "hover:border-[#5E6670]/80",
    shadowHover: "hover:shadow-[0_28px_90px_rgba(94,102,112,0.18)]",
    background:
      "radial-gradient(circle at 85% 12%, rgba(94,102,112,0.26), transparent 32%), linear-gradient(145deg, rgba(19,20,20,1), rgba(14,14,12,1))",
    pattern:
      "linear-gradient(135deg, rgba(184,177,163,0.12) 0 1px, transparent 1px 18px)",
    patternSize: "22px 22px",
  },
  {
    number: "03",
    name: "Bogan FM",
    category: "Media / humour / campaign property",
    lane: "Radio, social clips, competitions, sponsored bits, audience submissions, and campaignable content.",
    description:
      "A media-friendly lane with strong recall, simple campaign language, and enough edge to cut through without becoming an amateur meme page.",
    uses: [
      "Promo campaigns",
      "Video shorts",
      "Radio segments",
      "Social competitions",
      "Audience submissions",
      "Event tie-ins",
    ],
    cues: [
      "Bold headlines",
      "Tabloid rhythm",
      "Red accents",
      "High contrast",
      "Sharp copy",
      "Campaign energy",
    ],
    marker: "FM",
    accent: "bg-[#9B7A42]",
    borderHover: "hover:border-[#9B7A42]/75",
    shadowHover: "hover:shadow-[0_28px_90px_rgba(155,122,66,0.16)]",
    background:
      "radial-gradient(circle at 88% 4%, rgba(155,122,66,0.20), transparent 31%), radial-gradient(circle at 15% 88%, rgba(163,58,42,0.16), transparent 28%), linear-gradient(145deg, rgba(22,20,17,1), rgba(14,14,12,1))",
    pattern:
      "linear-gradient(180deg, rgba(241,230,207,0.08) 0 1px, transparent 1px 14px)",
    patternSize: "100% 18px",
  },
];

export default function ConceptCards() {
  return (
    <section
      id="directions"
      className="relative border-t border-[#2A2925]/80 px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#A33A2A]">
            Commercial directions
          </p>

          <h2 className="max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#F1E6CF] sm:text-5xl lg:text-6xl">
            Three obvious ways to use it
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#CDBF9F] sm:text-lg">
            The domain is not locked to one finished brand. These directions
            show the kind of commercial territory a buyer could own.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {conceptDirections.map((card) => (
            <article
              key={card.name}
              className={`group relative flex min-h-[560px] flex-col overflow-hidden rounded-[2rem] border border-[#2A2925] p-5 transition duration-300 ease-out hover:-translate-y-1 sm:p-6 ${card.borderHover} ${card.shadowHover}`}
              style={{ background: card.background }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-45 transition duration-300 group-hover:opacity-65"
                style={{
                  backgroundImage: card.pattern,
                  backgroundSize: card.patternSize,
                }}
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1E6CF]/35 to-transparent" />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#CDBF9F]/70">
                    Direction {card.number}
                  </p>
                  <p className="mt-2 max-w-[15rem] text-sm leading-5 text-[#CDBF9F]">
                    {card.category}
                  </p>
                </div>

                <div className="rounded-full border border-[#F1E6CF]/15 bg-[#0E0E0C]/50 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#F1E6CF]/75 shadow-[inset_0_1px_0_rgba(241,230,207,0.08)]">
                  {card.marker}
                </div>
              </div>

              <div className="relative z-10 mt-10">
                <div className={`mb-5 h-1 w-12 rounded-full ${card.accent}`} />

                <h3 className="text-4xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#F1E6CF] sm:text-5xl">
                  {card.name}
                </h3>

                <p className="mt-6 text-lg font-semibold leading-7 text-[#F1E6CF]">
                  {card.lane}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#CDBF9F]">
                  {card.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 grid gap-5">
                <div>
                  <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#F1E6CF]/55">
                    Possible uses
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {card.uses.map((use) => (
                      <span
                        key={use}
                        className="rounded-full border border-[#F1E6CF]/12 bg-[#0E0E0C]/45 px-3 py-1.5 text-xs font-medium text-[#F1E6CF]/82 transition duration-300 group-hover:border-[#F1E6CF]/20"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#F1E6CF]/55">
                    Visual cues
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {card.cues.map((cue) => (
                      <span
                        key={cue}
                        className="border-l border-[#F1E6CF]/12 pl-3 text-xs leading-5 text-[#CDBF9F]/85 transition duration-300 group-hover:text-[#F1E6CF]/80"
                      >
                        {cue}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-auto pt-8">
                <div className="flex items-center justify-between gap-4 border-t border-[#F1E6CF]/10 pt-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#CDBF9F]/60">
                    Directional concept
                  </p>

                  <span className="text-lg text-[#F1E6CF]/45 transition duration-300 group-hover:translate-x-1 group-hover:text-[#F1E6CF]/80">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#F1E6CF]/10 bg-[#181816]/55 p-5 sm:mt-10 sm:p-6">
          <p className="max-w-3xl text-sm leading-6 text-[#CDBF9F]">
            These are not finished businesses or fixed brand systems. They are
            public-facing commercial signals designed to show range while
            keeping the buyer free to acquire bogan.co.nz and take it their way.
          </p>
        </div>
      </div>
    </section>
  );
}