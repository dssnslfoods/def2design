import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Photo, Infographic } from "@/components/Figure";

export const metadata: Metadata = {
  title: "About",
  description: "Def to Design Co., Ltd. is a Bangkok studio offering one-stop design and production for annual reports, 56-1 One Reports, sustainability reports, eMagazines and corporate print.",
};

const TIMELINE = [
  ["2010", "Def to Design Co., Ltd. registered in Bangkok as a print-media design studio."],
  ["2013", "Annual report practice established with listed-company clients."],
  ["2016", "eMagazine and digital-edition service launched."],
  ["2021", "56-1 One Report practice formalised after the SET format change."],
  ["2023", "Sustainability report practice added as ESG disclosure expands."],
  ["2026", "Studio reissue — new site and a refreshed digital practice."],
];

const ADVANTAGES = [
  {
    img: "adv-team",
    title: "A senior team, not a junior bench.",
    desc: "Editors, designers and production leads who have built corporate reports for more than a decade — for listed companies, state enterprises and the Stock Exchange of Thailand itself.",
  },
  {
    img: "adv-meeting",
    title: "Full-time, not freelance.",
    desc: "A dedicated in-house team is assigned to your report for the whole cycle. We do not subcontract the creative, and we do not disappear after the brief.",
  },
  {
    img: "adv-design",
    title: "Every tool, under one roof.",
    desc: "Editorial, design, prepress, photography and digital — the complete toolchain to take a 56-1 One Report from first outline to finished print and eMagazine.",
  },
  {
    img: "adv-calendar",
    title: "On time, every filing season.",
    desc: "Milestones, proofs and press dates planned backwards from your AGM and SET deadlines — so the date that matters is never the one at risk.",
  },
  {
    img: "adv-tools",
    title: "A process, not improvisation.",
    desc: "A four-phase method — discover, architect, design, produce — keeps a complex bilingual report moving from kickoff to launch without surprises.",
  },
  {
    img: "adv-books",
    title: "Concept to press, one partner.",
    desc: "Strategy, writing, design, bilingual typesetting, print supervision and digital edition — managed end to end, so nothing falls between vendors.",
  },
];

const PHILOSOPHY = [
  ["Vision", "Communication that makes complex companies legible to the people who need to understand them most."],
  ["Philosophy", "Striking design. Stylish concept. Quiet rigor. The document is the studio's signature, not the studio."],
  ["Approach", "We do not template, we do not subcontract creative, and we are physically on the printing floor for press checks."],
];

const CLIENTS = [
  ["CPALL", "Annual report · 56-1 One Report", "Retail · SET100"],
  ["CENTEL", "Annual report · 56-1 One Report", "Hospitality · SET100"],
  ["HOMEPRO", "Annual report · 56-1 One Report", "Retail · SET100"],
  ["RATCH", "Annual & sustainability report", "Energy · SET"],
  ["AOT", "Monthly eMagazine · internal communication", "State enterprise"],
  ["S&P", "Annual report · eMagazine", "Food · SET"],
  ["SET", "Annual report", "Stock Exchange of Thailand"],
];

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <Nav />

      {/* HERO */}
      <section style={{ padding: "96px var(--page-x) 64px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 32 }}>
          The studio · est. 2010 · Bangkok
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(88px, 10vw, 132px)", lineHeight: 0.92, letterSpacing: "-.02em", maxWidth: "14ch" }}>
          We design the year, not just the{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>report.</em>
        </h1>
      </section>

      {/* OPENING ESSAY */}
      <SectionMarker left="01 — Who we are" right="A studio note" />
      <div style={{ padding: "80px var(--page-x)", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", position: "sticky", top: 40, alignSelf: "start" }}>
          A note from the studio · 2026
        </div>
        <div style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink)", maxWidth: "62ch" }}>
          <p style={{ margin: "0 0 1em" }}>
            Def to Design Co., Ltd. was established in Bangkok in 2010 with a single conviction: that the
            annual report is the most under-designed document in modern business. A document that costs a
            listed company more than most of its marketing, lands on the desk of every analyst that covers
            it, and bears the chairman&apos;s signature — and yet is, somehow, the last document anyone gets to
            design.
          </p>
          <p style={{ margin: "0 0 1em" }}>
            Fifteen years on, we work with listed companies, state enterprises and large organizations —
            among them CPALL, CENTEL, HOMEPRO, RATCH, AOT, S&amp;P and the Stock Exchange of Thailand. We are not a printer. We are the
            studio that shapes the narrative before the document leaves the room: equal parts editorial,
            design and production.
          </p>
          <p style={{ margin: "0 0 1em" }}>
            We work as a One Stop Service — concept, design, file preparation, production and publishing —
            for annual reports, 56-1 One Reports, sustainability reports, eMagazines, calendars and corporate
            print. Everything is designed in Thai and English in parallel, managed with disciplined project
            management and close client communication.
          </p>
        </div>
      </div>

      {/* VISION / PHILOSOPHY */}
      <SectionMarker left="02 — What we believe" right="Three commitments" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
        {PHILOSOPHY.map(([t, d], i) => (
          <div key={t} style={{ padding: i === 0 ? "40px 40px 40px 0" : "40px", borderRight: i < 2 ? "1px solid var(--line)" : "none" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 32 }}>
              {String(i + 1).padStart(2, "0")} — {t}
            </div>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1.1, fontStyle: "italic" }}>{d}</p>
          </div>
        ))}
      </div>

      {/* TIMELINE */}
      <SectionMarker left="03 — A short history" right="2009 → 2026" />
      <div style={{ padding: "80px var(--page-x)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 24 }}>
          {TIMELINE.map(([y, d]) => (
            <div key={y} style={{ borderTop: "1px solid var(--ink)", paddingTop: 18 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 48, lineHeight: 1, color: "var(--emerald)" }}>{y}</div>
              <p style={{ fontSize: 12, color: "var(--gray)", marginTop: 14, lineHeight: 1.55 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* OUR ADVANTAGE */}
      <SectionMarker left="04 — Our advantage" right="Why work with us" />

      {/* FEATURED — data made legible through infographics */}
      <div style={{ padding: "80px var(--page-x)", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)", marginBottom: 24 }}>
            Data, made legible
          </div>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(40px, 4.5vw, 56px)", lineHeight: 1.0, letterSpacing: "-.015em", marginBottom: 24 }}>
            Numbers a reader can{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>actually read.</em>
          </h3>
          <p style={{ fontSize: 16, color: "var(--gray)", lineHeight: 1.7, maxWidth: "46ch" }}>
            A report is only as clear as its most complex page. We read the data first — financials, KPIs,
            ESG metrics — and rebuild it as clean, typographic infographics. The aim is simple: a board
            member, an analyst and a first-time reader should all understand the same number the same way,
            at a glance.
          </p>
        </div>
        <Infographic
          stats={[["+18%", "Revenue YoY"], ["฿2.3B", "Net profit"], ["-42%", "Emissions"], ["98%", "Coverage"], ["TH · EN", "Bilingual"], ["+150", "Reports"]]}
          tone="navy"
          aspectRatio="4/3"
          eyebrow="Fig. — Financial & ESG highlights, typeset by hand"
          alt="Example of a typographic infographic — financial and ESG highlights"
        />
      </div>

      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48 }}>
        {ADVANTAGES.map((a, i) => (
          <div key={a.img}>
            <Photo src={`/images/${a.img}.jpg`} alt={a.title} aspectRatio="4/3" style={{ marginBottom: 20 }} />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)", marginBottom: 14 }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 26, lineHeight: 1.1, letterSpacing: "-.01em", marginBottom: 12 }}>{a.title}</h3>
            <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.6, maxWidth: "38ch" }}>{a.desc}</p>
          </div>
        ))}
      </div>

      {/* SELECTED CLIENTS */}
      <SectionMarker left="05 — Selected clients" right="Listed companies · State enterprises" />
      <div style={{ padding: "56px var(--page-x)" }}>
        <div style={{ borderTop: "1px solid var(--ink)" }}>
          {CLIENTS.map(([a, b, c]) => (
            <div key={a} style={{ display: "grid", gridTemplateColumns: "260px 1fr 1fr", alignItems: "baseline", padding: "28px 0", borderBottom: "1px solid var(--line)", gap: 24 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 36, color: "var(--emerald)", fontStyle: "italic" }}>{a}</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, lineHeight: 1.1 }}>{b}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", textAlign: "right" }}>{c}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
