import type { Locale } from "./routing";

/* ──────────────────────────────────────────────────────────────
   Content dictionary. `en` is the full source of truth.
   `th` provides Thai overrides; anything missing falls back to EN,
   so the build never breaks on a missing translation.
   ────────────────────────────────────────────────────────────── */

const en = {
  nav: {
    links: {
      Home: "Home",
      About: "About",
      Services: "Services",
      Portfolio: "Portfolio",
      Insights: "Insights",
      Contact: "Contact",
    },
    briefUs: "Brief us",
  },
  footer: {
    tagline: "Striking design. Stylish concept.",
    copyright: "© 2010–2026 · Def to Design Co., Ltd.",
    studio: "Studio",
    services: "Services",
    contact: "Contact",
    links: {
      About: "About",
      Process: "Process",
      Insights: "Insights",
      Careers: "Careers",
      OneReport: "One Report",
      AnnualReport: "Annual Report",
      Sustainability: "Sustainability",
      eMagazine: "eMagazine",
    },
  },
  common: {
    viewPortfolio: "View portfolio",
    readInsights: "Read insights",
    startBrief: "Start a brief",
    briefUs: "Brief us",
    requestProposal: "Request a proposal",
    letsBegin: "Let's begin.",
  },
  home: {
    eyebrow: "Striking design · Stylish concept · Since 2010",
    heroL1: "Designing",
    heroL2: "the document",
    heroL3: "a board",
    heroEm: "signs.",
    lede: "A Bangkok studio for annual reports, 56-1 One Reports and sustainability reporting — one-stop design and production, trusted by listed companies and state enterprises.",
    meta: {
      founded: "Founded",
      reports: "Reports delivered",
      clients: "Listed clients",
      awards: "Capabilities",
    },
    metaVals: {
      founded: "2010",
      reports: "+150",
      clients: "SET & mai",
      awards: "One stop · TH/EN",
    },
    servicesMarkerL: "02 — Featured Services",
    servicesMarkerR: "Seven disciplines",
    services: {
      s1t: "One Report Design",
      s1d: "SET 56-1 One Report, end to end — narrative, layout, infographics, bilingual production.",
      s2t: "Annual Report Design",
      s2d: "The annual report as a board-level brand asset, not a regulatory deliverable.",
      s3t: "Sustainability Report",
      s3d: "GRI · SASB · TCFD literate. Story-driven ESG reporting that reads as well as it ranks.",
      s4t: "ESG Communication",
      s4d: "Beyond the report: stakeholder decks, microsites, investor day collateral.",
      s5t: "eMagazine",
      s5d: "Interactive, page-turning digital editions for IR & corporate communications teams.",
      s6t: "Corporate Publications",
      s6d: "Calendar, notebook, signage, booth, packaging — the studio behind your brand year.",
    },
    portfolioMarkerL: "03 — Featured Portfolio",
    portfolioMarkerR: "Selected 2024 / 2025",
    whyMarkerL: "04 — Why Def to Design",
    whyMarkerR: "The case in numbers",
    whyHeading: "Fifteen years designing Thailand's corporate reports and communications.",
    stats: {
      s1n: "2010",
      s1l: "Studio founded in Bangkok",
      s2n: "56-1",
      s2l: "One Report specialists",
      s3n: "One stop",
      s3l: "Concept to production",
      s4n: "TH · EN",
      s4l: "Bilingual by default",
    },
    clientsMarkerL: "05 — Trusted by",
    clientsMarkerR: "Listed companies · State enterprises",
    ctaLead: "Have a report due?",
    ctaEm: "Let's begin.",
  },
};

export type Dict = typeof en;

// Thai overrides — professionally written, not machine-translated.
const th: DeepPartial<Dict> = {
  nav: {
    links: {
      Home: "หน้าแรก",
      About: "เกี่ยวกับเรา",
      Services: "บริการ",
      Portfolio: "ผลงาน",
      Insights: "บทความ",
      Contact: "ติดต่อ",
    },
    briefUs: "เริ่มโปรเจกต์",
  },
  footer: {
    tagline: "ออกแบบโดดเด่น แนวคิดมีสไตล์",
    copyright: "© 2553–2569 · บริษัท เดฟ ทู ดีไซน์ จำกัด",
    studio: "สตูดิโอ",
    services: "บริการ",
    contact: "ติดต่อ",
    links: {
      About: "เกี่ยวกับเรา",
      Process: "ขั้นตอนการทำงาน",
      Insights: "บทความ",
      Careers: "ร่วมงานกับเรา",
      OneReport: "One Report",
      AnnualReport: "รายงานประจำปี",
      Sustainability: "รายงานความยั่งยืน",
      eMagazine: "eMagazine",
    },
  },
  common: {
    viewPortfolio: "ดูผลงาน",
    readInsights: "อ่านบทความ",
    startBrief: "เริ่มต้นโปรเจกต์",
    briefUs: "เริ่มโปรเจกต์",
    requestProposal: "ขอใบเสนอราคา",
    letsBegin: "เริ่มกันเลย",
  },
  home: {
    eyebrow: "ออกแบบโดดเด่น · แนวคิดมีสไตล์ · ตั้งแต่ปี 2553",
    heroL1: "ออกแบบ",
    heroL2: "เอกสารสำคัญ",
    heroL3: "ที่คณะกรรมการ",
    heroEm: "ลงนาม",
    lede: "สตูดิโอออกแบบในกรุงเทพฯ สำหรับรายงานประจำปี รายงาน 56-1 One Report และรายงานความยั่งยืน — บริการครบวงจรตั้งแต่ออกแบบจนถึงผลิต ได้รับความไว้วางใจจากบริษัทจดทะเบียนและรัฐวิสาหกิจ",
    meta: {
      founded: "ก่อตั้ง",
      reports: "รายงานที่ส่งมอบ",
      clients: "ลูกค้าจดทะเบียน",
      awards: "ความสามารถ",
    },
    metaVals: {
      founded: "2553",
      reports: "+150",
      clients: "SET & mai",
      awards: "ครบวงจร · ไทย/อังกฤษ",
    },
    servicesMarkerL: "02 — บริการเด่น",
    servicesMarkerR: "เจ็ดความเชี่ยวชาญ",
    services: {
      s1t: "ออกแบบ One Report",
      s1d: "รายงาน 56-1 One Report ครบวงจร — โครงเรื่อง เลย์เอาต์ อินโฟกราฟิก และงานผลิตสองภาษา",
      s2t: "ออกแบบรายงานประจำปี",
      s2d: "รายงานประจำปีในฐานะสินทรัพย์แบรนด์ระดับคณะกรรมการ ไม่ใช่แค่เอกสารตามกฎเกณฑ์",
      s3t: "รายงานความยั่งยืน",
      s3d: "เข้าใจ GRI · SASB · TCFD ทำรายงาน ESG ที่เล่าเรื่องได้ดีพอๆ กับคะแนนที่ได้",
      s4t: "การสื่อสาร ESG",
      s4d: "มากกว่ารายงาน: เด็คผู้มีส่วนได้เสีย ไมโครไซต์ และสื่อสำหรับ Investor Day",
      s5t: "eMagazine",
      s5d: "ฉบับดิจิทัลแบบเปิดอ่านได้ มีอินเทอร์แอกชัน สำหรับงาน IR และสื่อสารองค์กร",
      s6t: "สื่อสิ่งพิมพ์องค์กร",
      s6d: "ปฏิทิน สมุด ป้าย บูธ บรรจุภัณฑ์ — สตูดิโอเบื้องหลังแบรนด์ของคุณตลอดทั้งปี",
    },
    portfolioMarkerL: "03 — ผลงานเด่น",
    portfolioMarkerR: "คัดสรร 2567 / 2568",
    whyMarkerL: "04 — ทำไมต้อง Def to Design",
    whyMarkerR: "เหตุผลในตัวเลข",
    whyHeading: "สิบห้าปีกับการออกแบบรายงานและการสื่อสารองค์กรของไทย",
    stats: {
      s1n: "2553",
      s1l: "ก่อตั้งสตูดิโอในกรุงเทพฯ",
      s2n: "56-1",
      s2l: "ผู้เชี่ยวชาญ One Report",
      s3n: "ครบวงจร",
      s3l: "ตั้งแต่แนวคิดถึงงานผลิต",
      s4n: "ไทย · อังกฤษ",
      s4l: "สองภาษาเป็นมาตรฐาน",
    },
    clientsMarkerL: "05 — ได้รับความไว้วางใจจาก",
    clientsMarkerR: "บริษัทจดทะเบียน · รัฐวิสาหกิจ",
    ctaLead: "มีรายงานที่ต้องทำใช่ไหม?",
    ctaEm: "เริ่มกันเลย",
  },
};

/* deep-merge th over en so missing keys fall back to en */
type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

function deepMerge<T>(base: T, override: DeepPartial<T>): T {
  const out = { ...base } as T;
  for (const key in override) {
    const o = override[key];
    const b = (base as Record<string, unknown>)[key];
    if (o && typeof o === "object" && !Array.isArray(o) && b && typeof b === "object") {
      (out as Record<string, unknown>)[key] = deepMerge(b, o as DeepPartial<typeof b>);
    } else if (o !== undefined) {
      (out as Record<string, unknown>)[key] = o;
    }
  }
  return out;
}

const dictionaries: Record<Locale, Dict> = {
  en,
  th: deepMerge(en, th),
};

export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries.en;
}
