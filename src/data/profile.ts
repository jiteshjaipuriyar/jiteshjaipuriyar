export const profile = {
  name: "Captain Jitesh Jaipuriyar",
  post: "AFNI",
  tagline: "Master Mariner, founder and board member. Three decades turning operational depth into commercial results — from commanding Aframax tankers to building $100M+ shipping businesses and IMO-recognised maritime technology.",
  location: "Dubai, UAE",
  linkedin: "https://www.linkedin.com/in/captain-jitesh-jaipuriyar-afni-6695997/",
  email: "jiteshcapt@gmail.com",
};

export const stats = [
  { value: "30", label: "Years in shipping" },
  { value: "13", label: "Years at sea, to Master" },
  { value: "$100M+", label: "Revenue built from a cold start" },
  { value: "3", label: "Maritime ventures founded" },
];

export type Role = { company: string; title: string; period: string; place: string; points: string[] };

export const experience: Role[] = [
  { company: "Alphard Athena DMCC", title: "Director — Commercial, Compliance & ESG", period: "Nov 2023 — Present", place: "Dubai", points: [
    "Spearheads global ocean freight for third-party cargo — own-vessel deployment, freight negotiation and charter party execution for first-class charterers, industrial majors and grain houses.",
    "Leads the commercial team managing over $200 million in maritime assets across load-port, transit and discharge execution.",
    "Performs counterparty due diligence and devises hedging strategies for forward trading positions.",
    "Works with technical managers to monitor performance and remove bottlenecks that erode margins.",
    "Formulates and enforces compliance, governance and ESG strategy across every fixture and the company.",
  ]},
  { company: "Navozyme Pte Ltd", title: "Co-Founder & Board Member", period: "Jul 2017 — Present", place: "Singapore", points: [
    "Spearheaded a pioneering greenfield digital transformation in shipping, using blockchain and AI to streamline document exchange.",
    "Defined the product architecture and forged international partnerships for global scale.",
  ]},
  { company: "Bostomar Holdings Pte Ltd", title: "Director", period: "Sep 2015 — Oct 2023", place: "Singapore", points: [
    "Drove over $100 million in dry bulk chartering revenue over five years across Handysize to Capesize.",
    "Delivered 50% CAGR in the first three years, building and owning networks personally.",
    "Managed the full voyage lifecycle and post-fixture operations; managed risk through FFAs and due diligence.",
    "Structured joint ventures and strategic contracts; consulted on shipping and infrastructure projects for clients including Bain & Co.",
  ]},
  { company: "Emerald Maritime", title: "Chief Operating Officer", period: "Sep 2012 — Aug 2015", place: "Dubai", points: [
    "Created a dry bulk chartering organisation from scratch, with Fortune-listed clients and revenues above $100 million within three years.",
    "Established a 3PL supply chain division with full P&L responsibility; supported the trading arm on LC facilities and commodity trades.",
  ]},
  { company: "Tata Steel subsidiary", title: "Senior Manager — Chartering", period: "Nov 2010 — Aug 2012", place: "Dubai", points: [
    "Developed a new forest-products business vertical and diversified the portfolio.",
    "Led Process Excellence across the organisation and supported the COO on newbuilding and vessel acquisition strategy.",
  ]},
  { company: "Noble Group", title: "Newbuilding Project Lead", period: "Mar 2008 — May 2008", place: "Hong Kong", points: [
    "Led a 30-strong multicultural team to complete a $60M ship-delivery project.",
    "Improved yard lead times and helped secure a long-term contract with oil majors.",
  ]},
  { company: "A.P. Moller — Maersk", title: "Captain, Fleet Quality Manager, Chief Officer", period: "2002 — 2007", place: "Singapore", points: [
    "Chief Officer (2002–2005), then Fleet Quality Manager (2006–2007) and Merchant Ship Captain — one of the youngest captains in the fleet.",
    "Led multi-million-dollar asset management, delivering value to stakeholders across cultures.",
  ]},
  { company: "OMI", title: "Second Navigating Officer", period: "1995 — 1999", place: "Worldwide", points: [
    "Started deep-sea career; introduced preventive maintenance and cross-cultural training practices.",
  ]},
];

export const education = [
  { school: "China Europe International Business School (CEIBS), Shanghai", detail: "MBA, General Management · 2008–2010 · Topped business simulation" },
  { school: "Indian Maritime University, Navi Mumbai", detail: "BSc Nautical Sciences · 1992–1995 · First Class with Distinction" },
  { school: "NUS–SMU (sponsored by AMTD)", detail: "Digital Finance Leadership Programme; Blockchain course, SMU" },
  { school: "UNITAR", detail: "Carbon Taxation & ETS Policy · 2022" },
  { school: "DNV GL", detail: "Internal Auditor, ISO 9001 / 14001 / 45001 / 50001 · 2022" },
  { school: "Lloyd's Maritime Academy", detail: "Dry Bulk Shipping & RightShip Vetting · 2022" },
];

export const services = [
  { title: "Board & Non-Executive Roles", text: "Independent board governance for shipowners, operators and maritime technology ventures — strategy, risk oversight and investor alignment." },
  { title: "Commercial Strategy & Chartering", text: "Chartering desk design, counterparty frameworks, freight risk and FFA hedging programmes for dry bulk portfolios." },
  { title: "Fleet Optimisation & Acquisitions", text: "Vessel deployment, technical performance reviews and buy-side evaluations on valuation, tradability and CII." },
  { title: "ESG & Decarbonisation", text: "Practical ESG policy, carbon pricing readiness and energy-efficient operations aligned with IMO direction." },
  { title: "Maritime Ventures & Digital", text: "Advice for founders and investors scaling maritime DeepTech, from go-to-market to industry partnerships." },
  { title: "Turnarounds & Market Entry", text: "Building or restructuring operating businesses, cargo books and regional platforms — including orderly exits." },
];

export const credentials = ["Master Mariner", "MBA, CEIBS", "AFNI — Nautical Institute", "LMAA supporting member and a maritime arbitrator"];

export const recognition = [
  { title: "IMO-recognised maritime innovation", text: "As co-founder of Navozyme, helped earn IMO recognition (2019) as a pioneer of blockchain-enabled e-certificates for seafarers and ships." },
  { title: "Port and regulator partnerships", text: "Led industry alliances including BRAV with the Maritime and Port Authority of Singapore, and port-clearance pilots with the Ports of Barcelona and Tenerife." },
  { title: "Business school speaker", text: "Guest lecturer to the UCLA–NUS Executive MBA (2019) and featured C-suite alumni speaker at CEIBS (2020) on leadership through crisis." },
  { title: "Voice on decarbonisation policy", text: "Publicly argues for a fair CII methodology, including correction factors for war-risk and force-majeure disruption to shipping." },
  { title: "Arbitration and expert witness", text: "Acted as expert witness in an Indian arbitration before a tribunal consisting of Supreme Court judges." },
];
