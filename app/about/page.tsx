import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Photo } from "@/components/Figure";

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

const TEAM = [
  ["Founding Principal", "Editorial direction · IR strategy"],
  ["Design Principal", "Cover · spread system · typography"],
  ["Sustainability Lead", "GRI · SASB · TCFD · IFRS S1/S2"],
  ["Production Lead", "Press · bindery · finishing"],
  ["Senior Designer", "Bilingual typesetting · TH · EN"],
  ["Senior Designer", "Infographic · data visualization"],
  ["Digital Lead", "eMagazine · microsites"],
  ["Studio Manager", "Client liaison · operations"],
];

const PHILOSOPHY = [
  ["Vision", "Communication that makes complex companies legible to the people who need to understand them most."],
  ["Philosophy", "Striking design. Stylish concept. Quiet rigor. The document is the studio's signature, not the studio."],
  ["Approach", "We do not template, we do not subcontract creative, and we are physically on the printing floor for press checks."],
];

const CLIENTS = [
  ["CPALL", "Annual report · One Report", "Retail · SET100"],
  ["RATCH", "Annual & sustainability report", "Energy · SET"],
  ["AOT", "Annual report · corporate print", "State enterprise"],
  ["COM7", "Annual report · 56-1 One Report", "Retail · SET"],
  ["S&P", "Annual report · eMagazine", "Food · SET"],
  ["Bank of Singapore", "Corporate communications", "Banking"],
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
            among them CPALL, RATCH, AOT, COM7, S&amp;P and Bank of Singapore. We are not a printer. We are the
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

      {/* TEAM */}
      <SectionMarker left="04 — The studio" right="Small, by design" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
        {TEAM.map(([role, specialty], i) => (
          <div key={i}>
            <Photo src={`/images/portrait-${i + 1}.jpg`} alt={`${role} — Def to Design studio portrait`} aspectRatio="1/1" style={{ marginBottom: 16 }} />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 6 }}>—</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, lineHeight: 1.15 }}>{role}</div>
            <p style={{ fontSize: 12, color: "var(--gray)", marginTop: 6 }}>{specialty}</p>
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
