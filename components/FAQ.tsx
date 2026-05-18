"use client";

import { useState } from "react";
import {
  MotionSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteContent } from "@/data/siteContent";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const { faq } = siteContent;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <MotionSection className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-9 sm:mb-12">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#9B7A42]">
            {faq.eyebrow}
          </p>
          <h2 className="max-w-3xl text-balance text-[clamp(2.45rem,11vw,4.5rem)] font-black uppercase leading-[0.95] tracking-[-0.055em] text-[#F1E6CF] lg:text-5xl heading-wordspace">
            {faq.heading}
          </h2>
        </div>

        <StaggerGroup className="space-y-4">
          {faq.categories.map((category, catIndex) => (
            <StaggerItem key={category.title}>
              <div className="rounded-[1.75rem] border border-[#F1E6CF]/10 overflow-hidden bg-[#181816]/60 sm:rounded-[2rem]">
                {/* Category Header */}
                <div className="border-b border-[#F1E6CF]/10 bg-[#0E0E0C]/40 px-5 py-5 sm:px-7 sm:py-6">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#A33A2A]">
                    {category.title}
                  </p>
                </div>

                {/* Questions */}
                <div className="divide-y divide-[#F1E6CF]/10">
                  {category.questions.map((item, qIndex) => {
                    const itemId = `faq-${catIndex}-${qIndex}`;
                    const isExpanded = expandedId === itemId;

                    return (
                      <div key={itemId}>
                        <button
                          onClick={() => toggleExpanded(itemId)}
                          className="w-full px-5 py-5 sm:px-7 sm:py-6 text-left transition hover:bg-[#22211E]/40"
                          aria-expanded={isExpanded}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="max-w-2xl text-sm font-bold leading-6 text-[#F1E6CF] sm:text-base">
                              {item.q}
                            </h3>
                            <div className="mt-0.5 shrink-0">
                              <motion.div
                                animate={{
                                  rotate: isExpanded ? 180 : 0,
                                }}
                                transition={{
                                  duration: 0.22,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="h-5 w-5 flex items-center justify-center"
                              >
                                <svg
                                  className="h-4 w-4 text-[#A33A2A]"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                  />
                                </svg>
                              </motion.div>
                            </div>
                          </div>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                            >
                              <div className="border-t border-[#F1E6CF]/10 bg-[#0E0E0C]/30 px-5 py-5 sm:px-7 sm:py-6">
                                <p className="text-sm leading-7 text-[#CDBF9F] sm:text-base sm:leading-8">
                                  {item.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Still Have Questions Section */}
        <StaggerItem>
          <div className="mt-12 rounded-[1.75rem] border border-[#F1E6CF]/10 bg-[#181816]/60 p-6 text-center sm:rounded-[2rem] sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9B7A42]">
              Still have questions?
            </p>
            <p className="mt-4 text-base leading-7 text-[#CDBF9F] sm:text-lg">
              Shoot me an email at{" "}
              <a
                href="mailto:hello@bogan.co.nz"
                className="font-bold text-[#A33A2A] hover:text-[#C44A38] transition"
              >
                hello@bogan.co.nz
              </a>
            </p>
            <p className="mt-3 text-sm text-[#CDBF9F]">
              Include who you are, how you'd use the domain, your timeline, and
              any specific questions.
            </p>
          </div>
        </StaggerItem>
      </div>
    </MotionSection>
  );
}
