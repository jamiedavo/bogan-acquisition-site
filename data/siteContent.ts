const enquirySubject = encodeURIComponent("Acquisition enquiry for bogan.co.nz");

const enquiryBody = encodeURIComponent(`Hi Jamie,

I'm interested in bogan.co.nz.

Buyer / company:
Intended use:
Interested in:
- Domain acquisition
- Short concept pack
- Both

Message:

Thanks,`);

export const siteContent = {
  site: {
    domain: "bogan.co.nz",
    title: "bogan.co.nz is for acquisition",
    publicPriceLine:
      "Premium one-word .co.nz domain. Serious acquisition enquiries invited.",
    enquiryHref: `mailto:hello@bogan.co.nz?subject=${enquirySubject}&body=${enquiryBody}`,
  },

  hero: {
    eyebrow: "Available for acquisition",
    headline: "A rare one-word NZ domain with cultural punch",
    subheadline:
      "bogan.co.nz is a memorable, commercially usable .co.nz domain with clear fit across apparel, automotive culture, media, events, merch, and humour-led NZ lifestyle branding.",
    supportingLine: "Available for acquisition by the right buyer.",
    primaryCta: "Start an acquisition enquiry",
    secondaryCta: "See commercial directions",
  },

  credibility: [
    "One-word .co.nz",
    "NZ-relevant",
    "Brandable",
    "High recall",
    "Available now",
  ],

  whyItWorks: {
    eyebrow: "Why it works",
    heading: "Why bogan.co.nz works",
    paragraphs: [
      "Some names need explaining. This one does not.",
      "bogan.co.nz carries instant recognition, tone, and cultural signal. It is short, easy to remember, easy to say, and flexible enough to support multiple commercial paths — from merch and events to media campaigns, automotive culture, and humour-led ecommerce.",
      "The strength of the name is not that it suits everyone. It is that it suits the right buyers very clearly.",
    ],
  },

  commercialDirections: {
    eyebrow: "Commercial directions",
    heading: "Three obvious ways to use it",
    intro:
      "The domain is not locked to one finished brand. These directions show the kind of commercial territory a buyer could own.",
    cards: [
      {
        name: "Bogan Supply Co.",
        category: "Apparel / merch / lifestyle goods",
        description:
          "A direct-to-consumer label or capsule range built around workwear humour, local pride, garage culture, and self-aware NZ identity.",
        potentialUses: [
          "T-shirts",
          "Caps",
          "Hoodies",
          "Stickers",
          "Patches",
          "Garage signs",
          "Limited drops",
        ],
        visualCues: [
          "Black cotton",
          "Cream ink",
          "Faded red",
          "Worn labels",
          "Workshop stamps",
          "Understated streetwear",
        ],
      },
      {
        name: "Bogan Garage",
        category: "Automotive / ute / grassroots motorsport culture",
        description:
          "A community-facing brand for car culture, burnout events, ute meets, content, sponsors, and event merch.",
        potentialUses: [
          "Event microsite",
          "Ticketing campaign",
          "Sponsor activation",
          "User-submitted rides",
          "Merch drops",
          "Community content",
        ],
        visualCues: [
          "Industrial type",
          "Chrome accents",
          "Worn enamel",
          "Petrol tones",
          "Workshop badges",
          "Event graphics",
        ],
      },
      {
        name: "Bogan FM",
        category: "Media / humour / campaign property",
        description:
          "A campaignable content property for radio, digital media, comedy, social clips, audience submissions, countdowns, and sponsored bits.",
        potentialUses: [
          "Promo campaigns",
          "Video shorts",
          "Radio segments",
          "Social competitions",
          "Merch",
          "Event tie-ins",
        ],
        visualCues: [
          "Bold headlines",
          "Tabloid energy",
          "Meme-native layout",
          "Red accents",
          "High contrast",
          "Sharp copy",
        ],
      },
    ],
  },

  buyerFit: {
    eyebrow: "Buyer fit",
    heading: "Who this domain suits",
    copy:
      "bogan.co.nz is strongest for buyers who can turn cultural recognition into audience, products, content, tickets, or campaign attention.",
    buyers: [
      "Automotive and event promoters",
      "Media and radio brands",
      "Apparel and merch operators",
      "Humour-led ecommerce brands",
      "Campaign and experiential agencies",
      "Existing bogan-branded operators wanting NZ control",
    ],
    closingLine:
      "It is not designed for conservative corporate use. That is part of the point.",
  },

  included: {
    eyebrow: "Acquisition",
    heading: "What is included",
    points: [
      "bogan.co.nz domain name",
      "Clean transfer via preferred secure process",
      "Optional concept deck available for serious buyers",
      "Buyer-specific mockups available on request",
    ],
    copy:
      "This is a domain acquisition opportunity, not a sale of a finished operating business. The concept work exists to show commercial potential and possible directions only.",
  },

  finalCta: {
    eyebrow: "Next step",
    heading: "Serious acquisition enquiries invited",
    copy:
      "Tell me who you are, how you would use the name, and whether you are interested in a straight domain acquisition or a short concept pack showing how bogan.co.nz could work for your brand.",
    button: "Enquire about bogan.co.nz",
    trustNote:
      "Transfer can be completed through a secure registrar or escrow process.",
  },
};

export type SiteContent = typeof siteContent;
export type CommercialDirection =
  (typeof siteContent.commercialDirections.cards)[number];