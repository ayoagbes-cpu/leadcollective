export type Product = {
  slug: string;
  stage: "Pre-launch" | "Year 1" | "Scaling" | "Any stage";
  category: "Company" | "Clients" | "People";
  title: string;
  price: number;
  blurb: string;
  preview: string;
  format: string;
  licence: string;
  delivery: string;
  pairsWith: string;
  description: string;
  pages: number;
};

export const products: Product[] = [
  {
    slug: "founders-agreement",
    stage: "Pre-launch",
    category: "Company",
    title: "Founders' Agreement",
    price: 180,
    blurb:
      "Who owns what, who does what, and what happens if one of you leaves. The one most founders skip.",
    preview: "page 1 preview",
    format: "DOCX and PDF, plus a three-page guidance note",
    licence: "Unlimited use within one business. Not for resale or redistribution.",
    delivery: "Immediate download, plus a permanent copy in your library",
    pairsWith: "Shareholders' Agreement · Mutual NDA",
    description:
      "Sets out equity split, roles, decision rights, vesting and what happens if a co-founder leaves early. Written for two or more people starting a company together, before the goodwill runs out.",
    pages: 7,
  },
  {
    slug: "shareholders-agreement",
    stage: "Pre-launch",
    category: "Company",
    title: "Shareholders' Agreement",
    price: 180,
    blurb:
      "Decision rights, share transfers and deadlock, in language you can take to a co-founder.",
    preview: "page 1 preview",
    format: "DOCX and PDF, plus a three-page guidance note",
    licence: "Unlimited use within one business. Not for resale or redistribution.",
    delivery: "Immediate download, plus a permanent copy in your library",
    pairsWith: "Founders' Agreement · Company Articles checklist",
    description:
      "Covers reserved matters, share transfer restrictions, drag/tag rights and deadlock resolution. The document investors expect to see in place before they write a cheque.",
    pages: 9,
  },
  {
    slug: "client-services-contract",
    stage: "Year 1",
    category: "Clients",
    title: "Client Services Contract",
    price: 120,
    blurb:
      "Scope, payment terms, late fees and how either side walks away cleanly.",
    preview: "page 1 preview",
    format: "DOCX and PDF, plus a two-page guidance note",
    licence: "Unlimited use within one business. Not for resale or redistribution.",
    delivery: "Immediate download, plus a permanent copy in your library",
    pairsWith: "Freelancer IP Assignment · Mutual NDA",
    description:
      "Six pages covering scope, payment terms, late-payment interest, intellectual property and how either side ends the engagement cleanly. Every clause you need to change is highlighted; everything else you can leave alone.",
    pages: 6,
  },
  {
    slug: "freelancer-ip-assignment",
    stage: "Year 1",
    category: "People",
    title: "Freelancer IP Assignment",
    price: 75,
    blurb:
      "Two pages that make sure the work you paid for actually belongs to you.",
    preview: "page 1 preview",
    format: "DOCX and PDF, plus a one-page guidance note",
    licence: "Unlimited use within one business. Not for resale or redistribution.",
    delivery: "Immediate download, plus a permanent copy in your library",
    pairsWith: "Client Services Contract · Contractor Agreement Pack",
    description:
      "A short assignment agreement that transfers IP in deliverables from a freelancer to your business, with moral rights waived. Sign this before the invoice, not after.",
    pages: 2,
  },
  {
    slug: "contractor-agreement-pack",
    stage: "Year 1",
    category: "People",
    title: "Contractor Agreement Pack",
    price: 145,
    blurb:
      "Engagement letter, statement of work and confidentiality, as one consistent set.",
    preview: "3-doc pack",
    format: "3× DOCX and PDF, plus a shared guidance note",
    licence: "Unlimited use within one business. Not for resale or redistribution.",
    delivery: "Immediate download, plus a permanent copy in your library",
    pairsWith: "Freelancer IP Assignment · Mutual NDA",
    description:
      "Engagement letter, statement of work template and confidentiality undertaking, drafted to work together and to keep contractor status genuinely outside IR35 and employment.",
    pages: 11,
  },
  {
    slug: "employment-contract",
    stage: "Scaling",
    category: "People",
    title: "Employment Contract",
    price: 150,
    blurb:
      "A first-hire contract with probation, notice and restrictive covenants that hold up.",
    preview: "page 1 preview",
    format: "DOCX and PDF, plus a two-page guidance note",
    licence: "Unlimited use within one business. Not for resale or redistribution.",
    delivery: "Immediate download, plus a permanent copy in your library",
    pairsWith: "Contractor Agreement Pack",
    description:
      "A UK-compliant employment contract covering probation, notice, restrictive covenants and the statement-of-particulars requirements — built for a founder hiring their first employee.",
    pages: 8,
  },
  {
    slug: "reseller-partnership-terms",
    stage: "Scaling",
    category: "Clients",
    title: "Reseller & Partnership Terms",
    price: 165,
    blurb:
      "For when someone else starts selling on your behalf and nobody wrote it down.",
    preview: "page 1 preview",
    format: "DOCX and PDF, plus a two-page guidance note",
    licence: "Unlimited use within one business. Not for resale or redistribution.",
    delivery: "Immediate download, plus a permanent copy in your library",
    pairsWith: "Client Services Contract",
    description:
      "Commission, territory, brand use and termination for a reseller or referral partner — the document that keeps a good informal relationship from turning into a dispute.",
    pages: 7,
  },
  {
    slug: "mutual-nda",
    stage: "Any stage",
    category: "Company",
    title: "Mutual NDA",
    price: 45,
    blurb:
      "The short, fair version people actually sign without sending it to their lawyer.",
    preview: "page 1 preview",
    format: "DOCX and PDF",
    licence: "Unlimited use within one business. Not for resale or redistribution.",
    delivery: "Immediate download, plus a permanent copy in your library",
    pairsWith: "Founders' Agreement · Client Services Contract",
    description:
      "A two-way confidentiality agreement short enough that people actually sign it on the call. Covers both sides equally, so nobody has to negotiate it.",
    pages: 3,
  },
  {
    slug: "website-terms-privacy-pack",
    stage: "Any stage",
    category: "Clients",
    title: "Website Terms & Privacy Pack",
    price: 130,
    blurb:
      "Terms of use, privacy notice and cookie notice, written for a small business.",
    preview: "3-doc pack",
    format: "3× DOCX and PDF, plus a shared guidance note",
    licence: "Unlimited use within one business. Not for resale or redistribution.",
    delivery: "Immediate download, plus a permanent copy in your library",
    pairsWith: "Client Services Contract",
    description:
      "Website terms of use, a UK GDPR-ready privacy notice and a cookie notice, drafted as a consistent set for a small business collecting the usual analytics and enquiry data.",
    pages: 9,
  },
];

export const productStages = ["All", "Pre-launch", "Year 1", "Scaling", "Any stage"] as const;
export const productCategories = ["Company", "People", "Clients"] as const;

export const modules = [
  {
    no: "01",
    title: "What you have actually built",
    body: "Structure, ownership and the four documents that should already exist.",
    meta: "Video 18 min · audit worksheet",
  },
  {
    no: "02",
    title: "Getting the entity right",
    body: "Sole trader, limited company, or something in between — and the cost of changing later.",
    meta: "Video 24 min · decision tree",
  },
  {
    no: "03",
    title: "Contracts that get signed",
    body: "Writing terms clients accept without a three-week legal review.",
    meta: "Video 26 min · 2 templates",
  },
  {
    no: "04",
    title: "Who owns what you make",
    body: "IP, assignment, and the freelancer who still owns your logo.",
    meta: "Video 22 min · 2 templates",
  },
  {
    no: "05",
    title: "Hiring without heartache",
    body: "First employee, contractors, and the difference that matters to HMRC.",
    meta: "Video 28 min · 3 templates",
  },
  {
    no: "06",
    title: "Money in, money out",
    body: "Payment terms, late payers, and the clauses that get you paid.",
    meta: "Video 20 min · 1 template",
  },
  {
    no: "07",
    title: "Leading the thing you built",
    body: "Decision-making, advisers, and when to put a board around you.",
    meta: "Video 25 min · governance canvas",
  },
  {
    no: "08",
    title: "Your first annual review",
    body: "The one-hour check you run every year from now on.",
    meta: "Video 16 min · annual checklist",
  },
];

export const included = [
  "Sixty minutes, video or in person in London",
  "Two hours of preparation on your documents beforehand",
  "A written follow-up with the decision and next actions",
  "20% off any Contract Treasury documents we identify",
];

export const excluded = [
  "Not legal advice, and not a substitute for your solicitor",
  "No document drafting or redlining during the hour",
  "No ongoing retainer — one conversation, deliberately",
];

export const pickMyBrainConfig = {
  cap: 4,
  taken: 2,
  monthLabel: "September 2026",
  releaseLabel: "1 October, 08:00",
  slotDates: [
    ["Tue 8 Sep", "10:00–11:00 BST"],
    ["Thu 17 Sep", "14:00–15:00 BST"],
    ["Tue 22 Sep", "09:00–10:00 BST"],
    ["Thu 24 Sep", "15:30–16:30 BST"],
  ] as [string, string][],
};

export const testimonials = {
  home: {
    quote:
      "I'd been trading for eighteen months on an email thread and a handshake. Four weeks later I had a client contract, IP assignments from both freelancers, and a shareholders' agreement I understood line by line.",
    attribution: "Founder, studio practice · cohort two",
  },
  programme: {
    quote: "Module four alone saved me the cost of the cohort twice over.",
    attribution: "Founder, consumer brand",
  },
};
