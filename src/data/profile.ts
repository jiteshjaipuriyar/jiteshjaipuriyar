export const profile = {
  name: "Captain Jitesh Jaipuriyar",
  post: "AFNI",
  tagline: "Strategic maritime advisor — commercial governance, fleet optimisation and decarbonisation.",
  location: "Dubai Marina, Dubai, UAE",
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
  { company: "Alphard Maritime Group", title: "Director — Commercial, Compliance & ESG", period: "2023 — Present", place: "UAE", points: [
    "Directs commercial governance, chartering strategy and freight-risk frameworks for the group's dry bulk portfolio.",
    "Oversees fleet deployment and technical performance to maximise net yield per vessel.",
    "Hedges exposure through Cape 5TC and Panamax 5TC FFAs and bunker contracts.",
    "Formulates and embeds group-wide ESG policy; evaluates vessel acquisitions on valuation, tradability and GHG/CII.",
  ]},
  { company: "Navozyme", title: "Co-Founder & Board Member", period: "2017 — Present", place: "Singapore", points: [
    "Board-level governance for an award-winning maritime DeepTech platform using blockchain and AI.",
    "Built alliances with the IMO, port authorities and global shipowners for world-first e-certificate and smart bunkering protocols.",
  ]},
  { company: "Bostomar Shipping Pte Ltd", title: "CEO & Founding Managing Director", period: "2016 — 2023", place: "Singapore", points: [
    "Built an asset-light dry bulk operating and chartering platform with 50% year-on-year volume growth.",
    "Sat on international panels with BIMCO and Precious Shipping; led an orderly, compliant wind-down post-COVID.",
  ]},
  { company: "Emerald Maritime LLC", title: "Founding MD & Entrepreneurial Partner", period: "2012 — 2015", place: "Dubai", points: [
    "Launched a dry bulk operating business and 3PL logistics division from a cold start with full P&L ownership.",
    "Scaled revenues beyond $100M within three years with Fortune-listed clients, ahead of a successful equity exit.",
  ]},
  { company: "Tata Group — International Shipping & Logistics", title: "Senior Business Development Manager", period: "2010 — 2012", place: "Dubai", points: [
    "Opened new commodities, Atlantic trades and a project-cargo vertical; led shipbuilding and acquisition projects for the CEO and board.",
  ]},
  { company: "Fleet Management Limited", title: "Captain / Delivery Project Head", period: "2008", place: "Japan", points: [
    "Led a 30-strong multicultural newbuild delivery team and helped secure a long-term charter with an oil major.",
  ]},
  { company: "A.P. Moller — Maersk", title: "Captain, Fleet Quality Manager, Chief Officer", period: "2000 — 2007", place: "Worldwide", points: [
    "Rose to command as Master of Aframax tankers.",
    "As Fleet Quality Manager, supervised delivery of four newbuilds and lifted gross margin 5% in one year.",
    "Cut port turnaround times by 20%; received the \"Best Officer\" award.",
  ]},
  { company: "OMI", title: "Second Navigating Officer", period: "1995 — 1999", place: "Worldwide", points: [
    "Started deep-sea career; introduced preventive maintenance and cross-cultural training practices.",
  ]},
];

export const education = [
  { school: "China Europe International Business School (CEIBS)", detail: "MBA, Business Studies · 2008–2010" },
  { school: "UNITAR", detail: "Carbon Taxation & ETS Policy · 2022" },
  { school: "One UN Climate Change Learning Partnership", detail: "Maritime Decarbonisation · 2022" },
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
