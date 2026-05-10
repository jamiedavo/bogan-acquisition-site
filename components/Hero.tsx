import {
  HeroMotion,
  MotionLink,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <HeroMotion className="relative px-5 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#F1E6CF]/10 pb-5 sm:mb-10">
          <StaggerItem>
            <a
              href="#top"
              className="text-sm font-black uppercase tracking-[0.2em] text-[#F1E6CF] sm:text-base sm:tracking-[0.22em]"
            >
              bogan.co.nz
            </a>
          </StaggerItem>

          <StaggerItem>
            <a
              href="#enquire"
              className="hidden rounded-full border border-[#F1E6CF]/15 bg-[#181816]/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#CDBF9F] transition hover:border-[#A33A2A]/60 hover:text-[#F1E6CF] sm:inline-flex"
            >
              Enquire
            </a>
          </StaggerItem>
        </div>

        <div className="grid gap-9 xl:min-h-[calc(100svh-150px)] xl:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.68fr)] xl:items-center xl:gap-14">
          <div className="max-w-4xl">
            <StaggerItem>
              <div className="mb-5 inline-flex rounded-full border border-[#A33A2A]/40 bg-[#A33A2A]/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#F1E6CF] shadow-[0_0_40px_rgba(163,58,42,0.14)] sm:text-xs sm:tracking-[0.2em]">
                {hero.status}
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="mb-5 max-w-md text-xs font-bold uppercase tracking-[0.2em] text-[#9B7A42] sm:text-sm sm:tracking-[0.22em]">
                {hero.eyebrow}
              </p>
            </StaggerItem>

            <StaggerItem>
              <h1 className="max-w-[11ch] text-balance text-[clamp(3.4rem,15vw,5.6rem)] font-black uppercase leading-[0.86] tracking-[-0.07em] text-[#F1E6CF] sm:text-[clamp(4.5rem,10vw,6.7rem)] lg:text-[clamp(5.6rem,7vw,7.7rem)]">
                {hero.headline}
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#CDBF9F] sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl">
                {hero.subheadline}
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MotionLink
                  href={hero.primaryCta.href}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#A33A2A]/70 bg-[#A33A2A] px-6 py-3 text-center text-xs font-black uppercase tracking-[0.13em] text-[#F1E6CF] shadow-[0_18px_60px_rgba(163,58,42,0.24)] transition hover:bg-[#732B22] sm:w-auto sm:text-sm sm:tracking-[0.14em]"
                >
                  {hero.primaryCta.label}
                </MotionLink>

                <MotionLink
                  href={hero.secondaryCta.href}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#F1E6CF]/15 bg-[#181816]/80 px-6 py-3 text-center text-xs font-black uppercase tracking-[0.13em] text-[#F1E6CF] transition hover:border-[#F1E6CF]/30 hover:bg-[#22211E] sm:w-auto sm:text-sm sm:tracking-[0.14em]"
                >
                  {hero.secondaryCta.label}
                </MotionLink>
              </div>
            </StaggerItem>
          </div>

          <StaggerItem>
            <aside className="relative overflow-hidden rounded-[1.75rem] border border-[#F1E6CF]/10 bg-[#181816]/75 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur sm:rounded-[2rem] sm:p-6 xl:self-center">
              <div className="absolute right-[-80px] top-[-80px] h-44 w-44 rounded-full bg-[#A33A2A]/20 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9B7A42]">
                  Domain asset
                </p>

                <div className="mt-6 border-y border-[#F1E6CF]/10 py-6 sm:mt-7 sm:py-7">
                  <p className="break-words text-[clamp(2.55rem,12vw,4.7rem)] font-black leading-none tracking-[-0.07em] text-[#F1E6CF] lg:text-[clamp(3.45rem,5vw,5.35rem)]">
                    {hero.domain}
                  </p>

                  <p className="mt-5 max-w-md text-sm leading-6 text-[#CDBF9F] sm:text-base sm:leading-7">
                    {hero.supportingLine}
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {hero.markers.map((marker) => (
                    <div
                      key={marker}
                      className="rounded-2xl border border-[#F1E6CF]/10 bg-[#0E0E0C]/50 px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#CDBF9F]"
                    >
                      {marker}
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-[#A33A2A]/25 bg-[#A33A2A]/10 px-4 py-4 sm:mt-6">
                  <p className="text-xs font-black uppercase tracking-[0.17em] text-[#F1E6CF]">
                    Serious acquisition enquiries invited
                  </p>
                </div>
              </div>
            </aside>
          </StaggerItem>
        </div>
      </div>
    </HeroMotion>
  );
}