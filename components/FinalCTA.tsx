"use client";

import { motion } from "framer-motion";

const enquiryEmail = "hello@bogan.co.nz";

const primarySubject = "Acquisition enquiry — bogan.co.nz";

const primaryBody = `Hi Jamie,

I'm interested in bogan.co.nz.

Name / organisation:
Website or profile:
Intended use:
Acquisition type: Domain only / Domain + private opportunity deck / Not sure yet
Indicative timing:

A few lines on why the name could be a fit:

Thanks,`;

const deckSubject = "Request deck — bogan.co.nz";

const deckBody = `Hi Jamie,

I'm interested in bogan.co.nz and would like to see the private opportunity deck.

Name / organisation:
Website or profile:
Relevant category: Apparel / automotive / media / events / agency / other
How we may use it:

Thanks,`;

function buildMailto(subject: string, body: string) {
  return `mailto:${enquiryEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

const enquiryHref = buildMailto(primarySubject, primaryBody);
const deckHref = buildMailto(deckSubject, deckBody);

const detailItems = [
  "Who you are",
  "How you might use the name",
  "Whether you want the domain only or the short concept deck",
  "Indicative timing if relevant",
];

const trustNotes = [
  "This is a domain acquisition opportunity, not a finished operating business.",
  "Concept work is directional only and can be shared privately with serious buyers.",
  "Transfer can be completed through a secure registrar process or escrow service by agreement.",
];

export default function FinalCTA() {
  return (
    <section
      id="enquire"
      className="relative isolate overflow-hidden border-t border-[#F1E6CF]/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(163,58,42,0.18),transparent_42%),linear-gradient(180deg,rgba(24,24,22,0.96),rgba(14,14,12,1))]" />
      <div className="absolute left-1/2 top-8 -z-10 h-40 w-[80%] -translate-x-1/2 rounded-full bg-[#A33A2A]/10 blur-3xl" />

      <motion.div
        className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-[#F1E6CF]/12 bg-[#181816]/80 p-6 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
          <div className="absolute right-6 top-6 hidden rounded-full border border-[#A33A2A]/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#CDBF9F] sm:block">
            Available
          </div>

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#A33A2A]">
            Acquisition enquiry
          </p>

          <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#F1E6CF] sm:text-5xl md:text-6xl">
            Serious acquisition enquiries invited.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#CDBF9F] sm:text-lg">
            Tell me who you are, how you would use the name, and whether you are
            interested in a straight domain acquisition or the short private
            opportunity deck first.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={enquiryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#A33A2A]/70 bg-[#A33A2A] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#F1E6CF] shadow-lg shadow-[#A33A2A]/20 transition hover:border-[#C44A38] hover:bg-[#8F3328] focus:outline-none focus:ring-2 focus:ring-[#A33A2A] focus:ring-offset-2 focus:ring-offset-[#181816]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Enquire about bogan.co.nz
            </motion.a>

            <motion.a
              href={deckHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#F1E6CF]/16 bg-[#0E0E0C]/50 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#F1E6CF] transition hover:border-[#F1E6CF]/30 hover:bg-[#F1E6CF]/8 focus:outline-none focus:ring-2 focus:ring-[#F1E6CF]/30 focus:ring-offset-2 focus:ring-offset-[#181816]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Request the private deck
            </motion.a>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-[#CDBF9F]/75">
            Premium one-word .co.nz domain. Serious acquisition enquiries
            invited.
          </p>
        </div>

        <aside className="grid gap-4">
          <div className="rounded-[1.5rem] border border-[#F1E6CF]/10 bg-[#0E0E0C]/65 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9B7A42]">
              What to include
            </p>

            <ul className="mt-5 space-y-3">
              {detailItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-[#CDBF9F]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A33A2A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-[#A33A2A]/20 bg-[#181816]/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A33A2A]">
              Transfer and trust
            </p>

            <div className="mt-5 space-y-4">
              {trustNotes.map((note) => (
                <p key={note} className="text-sm leading-6 text-[#CDBF9F]">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </aside>
      </motion.div>
    </section>
  );
}