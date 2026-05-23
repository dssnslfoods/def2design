import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Photo } from "@/components/Figure";

export const metadata: Metadata = {
  title: "About",
  description: "Def to Design was founded in Bangkok in 2009. We work with listed companies, state enterprises and public organizations across Southeast Asia.",
};

const TIMELINE = [
  ["2009", "Studio founded by report designers and IR veterans in Sathorn."],
  ["2013", "First SAA Annual Report Award. Dedicated studio space."],
  ["2017", "eMagazine practice launched. First SET50 digital edition."],
  ["2021", "SET 56-1 One Report practice formalised. Sustainability added."],
  ["2023", "17th international award. ESG advisory practice."],
  ["2026", "Studio reissue. New site, digital practice, ESG advisory."],
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

const AWARDS = [
  ["SAA", "Annual Report Awards · Gold", "2013 · 2016 · 2018 · 2021 · 2023 · 2025"],
  ["LACP", "Vision Awards", "2014 · 2017 · 2019 · 2022 · 2024"],
  ["ARC", "International Annual Report Awards", "2015 · 2018 · 2020 · 2023"],
  ["IR Magazine", "Best Annual Report SEA · Nominee", "2019 · 2022"],
];

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <Nav />

      {/* HERO */}
      <section style={{ padding: "96px var(--page-x) 64px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 32 }}>
          The studio · est. 2009 · Bangkok
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
            Def to Design was founded in Bangkok in 2009 with a single conviction: that the annual report
            is the most under-designed document in modern business. A document that costs a listed company
            more than most of its marketing, lands on the desk of every analyst that covers it, and is the
            only piece of communication that bears the chairman&apos;s signature — and yet is, somehow, the last
            document anyone gets to design.
          </p>
          <p style={{ margin: "0 0 1em" }}>
            Sixteen years later, we work with listed companies, state enterprises and public organizations
            across Southeast Asia — not as printers, but as the studio that argues for the narrative in the
            room before the document leaves it. We are equal parts editorial, design and production.
          </p>
          <p style={{ margin: "0 0 1em" }}>
            Our work has been recognized by the SAA Annual Report Awards, the LACP Vision Awards and the
            international ARC Awards. But the metric we trust most is tenure: the average D2D client has
            been with us for over twelve years. We are slow growth on purpose. We add one or two clients a
            year. We turn down work that doesn&apos;t fit. The studio is small, by design.
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

      {/* AWARDS */}
      <SectionMarker left="05 — Recognition" right="17 international honors" />
      <div style={{ padding: "56px var(--page-x)" }}>
        <div style={{ borderTop: "1px solid var(--ink)" }}>
          {AWARDS.map(([a, b, c]) => (
            <div key={a} style={{ display: "grid", gridTemplateColumns: "200px 1fr 1fr", alignItems: "baseline", padding: "28px 0", borderBottom: "1px solid var(--line)", gap: 24 }}>
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
