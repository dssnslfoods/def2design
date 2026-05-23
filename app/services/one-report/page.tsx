import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";
import { ReportCover } from "@/components/Figure";
import { Arrow } from "@/components/Arrow";

const COVER_TONES = ["paper", "navy", "mist"] as const;

export const metadata: Metadata = {
  title: "One Report Design",
  description: "SET-compliant 56-1 One Report that reads as a brand story. We handle narrative architecture, infographic system, photography direction, bilingual production and printing.",
};

const DELIVERABLES = [
  ["01", "Narrative architecture", "Chapter outline, story arc, chairman & CEO voice — the editorial spine of the report."],
  ["02", "Infographic system", "A consistent visual language for financials, KPIs and ESG metrics — typographic, not stock."],
  ["03", "Cover & spreads", "Custom cover, divider pages, full-bleed photography direction, photo shoot on request."],
  ["04", "Bilingual typesetting", "Thai & English in parallel — typographic parity, not translation afterthought."],
  ["05", "Print supervision", "Press checks, paper sourcing, bindery, finishing. We are physically on the printing floor."],
  ["06", "Digital edition", "Interactive eMagazine version, microsite, accessible PDF — issued alongside the print run."],
];

const PROCESS = [
  ["01", "Discover", "Weeks 1 – 3", "Stakeholder interviews · brand audit · IR alignment · narrative thesis."],
  ["02", "Architect", "Weeks 4 – 6", "Chapter outline · infographic system · cover concepts · photography brief."],
  ["03", "Design", "Weeks 7 – 12", "Full TH + EN typesetting · photography shoot · iterative review with IR/CEO."],
  ["04", "Produce", "Weeks 13 – 16", "Press supervision · digital edition · launch microsite · eBook."],
];

const RECENT = [
  ["2025", "SET100 · Energy", "The Continuous Year", "cover spread"],
  ["2025", "SET50 · Banking", "Foundations", "divider page"],
  ["2024", "SET · Property", "Building Years", "infographic spread"],
];

const RELATED = [
  ["Annual Report Design", "Story-led editorial reports for board, investors, regulators.", "/services/annual-report"],
  ["Sustainability Report", "GRI · SASB · TCFD · IFRS S1/S2 literate ESG reporting.", "/services/sustainability"],
  ["ESG Communication", "Stakeholder decks, microsites, investor day collateral.", "/services/esg-communication"],
  ["eMagazine", "Interactive digital editions, page-turn and microsite formats.", "/services/emagazine"],
  ["Corporate Publications", "Calendar, notebook, signage, booth, packaging, presentations.", "/services/corporate-publications"],
  ["Printing & Marketing", "Press supervision · premium finishing · brand-grade output.", "/services/printing"],
];

export default function OneReportPage() {
  return (
    <div className="page-wrap">
      <Nav />

      {/* HERO */}
      <section style={{ padding: "96px var(--page-x) 64px", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>
            Services <span style={{ color: "var(--emerald)" }}>/</span> One Report Design
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(72px, 9vw, 120px)", lineHeight: 0.92, letterSpacing: "-.02em" }}>
            One&nbsp;Report,<br />end{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>to&nbsp;end.</em>
          </h1>
        </div>
        <div>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--gray)", marginBottom: 32 }}>
            A SET-compliant 56-1 One Report that reads as a brand story. We handle narrative architecture, infographic system, photography direction, bilingual production and printing — under one roof.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn href="/contact" variant="primary">Request a proposal</Btn>
            <Btn href="/portfolio">Download sample</Btn>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <SectionMarker left="01 — What you receive" right="Six core deliverables" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
        {DELIVERABLES.map(([n, t, d], i) => (
          <div key={n} style={{ padding: i % 3 === 0 ? "36px 32px 32px 0" : "36px 32px 32px 32px", borderRight: i % 3 !== 2 ? "1px solid var(--line)" : "none", borderBottom: i < 3 ? "1px solid var(--line)" : "none" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 32 }}>{n}</div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 32, lineHeight: 1.05, marginBottom: 12 }}>{t}</h3>
            <p style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.6, maxWidth: "32ch" }}>{d}</p>
          </div>
        ))}
      </div>

      {/* PROCESS */}
      <SectionMarker left="02 — How we work" right="Four phases · 12–16 weeks" />
      <div style={{ padding: "80px var(--page-x)", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64 }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 56, lineHeight: 0.98, letterSpacing: "-.015em" }}>
          A four-phase studio process — not a vendor checklist.
        </h2>
        <div style={{ borderTop: "1px solid var(--ink)" }}>
          {PROCESS.map(([n, t, wk, d]) => (
            <div key={n} style={{ display: "grid", gridTemplateColumns: "60px 220px 160px 1fr", alignItems: "baseline", padding: "28px 0", borderBottom: "1px solid var(--line)", gap: 24 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>{n}</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 28, lineHeight: 1 }}>{t}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)" }}>{wk}</div>
              <p style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.55 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SHOWCASE */}
      <SectionMarker left="03 — Recent One Reports" right="2024 / 2025" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {RECENT.map(([y, c, t], idx) => (
          <div key={t}>
            <ReportCover title={t} eyebrow={c} kicker="One Report" year={y} tone={COVER_TONES[idx % COVER_TONES.length]} aspectRatio="3/4" alt={`${t} — One Report cover, ${c}, ${y}`} />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", display: "flex", justifyContent: "space-between", marginTop: 14 }}>
              <span>{y}</span><span>{c}</span>
            </div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, lineHeight: 1.1, marginTop: 6 }}>{t}</div>
          </div>
        ))}
      </div>

      {/* RELATED */}
      <SectionMarker left="04 — Related services" right="Six more disciplines" />
      <div style={{ padding: "56px var(--page-x)" }}>
        {RELATED.map(([t, d, href], i) => (
          <Link key={t} href={href} style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr 60px", alignItems: "center", padding: "24px 0", borderTop: i === 0 ? "1px solid var(--ink)" : "1px solid var(--line)", gap: 24, textDecoration: "none", color: "inherit" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>{String(i + 2).padStart(2, "0")}</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 28, lineHeight: 1 }}>{t}</div>
            <div style={{ fontSize: 13, color: "var(--gray)" }}>{d}</div>
            <div style={{ textAlign: "right" }}><Arrow /></div>
          </Link>
        ))}
        <div style={{ borderTop: "1px solid var(--line)", height: 0 }} />
      </div>

      {/* CTA */}
      <section className="cta-gradient" style={{ padding: "120px var(--page-x)", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--line)" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(64px, 8vw, 96px)", lineHeight: 0.95, letterSpacing: "-.02em", maxWidth: "16ch" }}>
          Your fiscal year is already running.{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Let&apos;s start.</em>
        </h2>
        <Btn href="/contact" variant="primary" large>Brief us</Btn>
      </section>

      <Footer />
    </div>
  );
}
