import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";
import { ReportCover } from "@/components/Figure";

const COVER_TONES = ["paper", "navy", "emerald"] as const;

export const metadata: Metadata = {
  title: "Annual Report Design",
  description: "Story-led editorial reports for board, investors, regulators. The chairman's annual document, designed as a brand asset.",
};

const DELIVERABLES = [
  ["01", "Editorial strategy", "Story arc, chairman voice, chapter structure — the narrative backbone before a single layout is set."],
  ["02", "Cover & identity", "Annual report as a brand moment — cover, dividers, a custom typographic system for the year."],
  ["03", "Financial design", "P&L, balance sheet, KPI pages designed typographically, not template-filled."],
  ["04", "Photography direction", "Art direction for board portraits, facility photography, and cover shoot."],
  ["05", "Bilingual typesetting", "Thai & English designed in parallel — not one translated from the other."],
  ["06", "Print & digital", "Press supervision, accessible PDF, eBook edition."],
];

export default function AnnualReportPage() {
  return (
    <div className="page-wrap">
      <Nav />

      <section style={{ padding: "96px var(--page-x) 64px", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>
            Services <span style={{ color: "var(--emerald)" }}>/</span> Annual Report Design
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(72px, 9vw, 120px)", lineHeight: 0.92, letterSpacing: "-.02em" }}>
            The annual as a brand{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>asset.</em>
          </h1>
        </div>
        <div>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--gray)", marginBottom: 32 }}>
            Story-led editorial reports for board, investors, regulators — the chairman&apos;s annual document designed as a brand asset, not a regulatory filing.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn href="/contact" variant="primary">Request a proposal</Btn>
            <Btn href="/portfolio">See case studies</Btn>
          </div>
        </div>
      </section>

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

      <SectionMarker left="02 — Recent work" right="2024 / 2025" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {[["2025", "SET50 · Banking", "Foundations"], ["2024", "SET · Energy", "The Long Horizon"], ["2024", "mai · Technology", "Year One"]].map(([y, c, t], idx) => (
          <div key={t}>
            <ReportCover title={t} eyebrow={c} kicker="Annual Report" year={y} tone={COVER_TONES[idx % COVER_TONES.length]} aspectRatio="3/4" alt={`${t} — Annual Report cover, ${c}, ${y}`} />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", display: "flex", justifyContent: "space-between", marginTop: 14 }}>
              <span>{y}</span><span>{c}</span>
            </div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, lineHeight: 1.1, marginTop: 6 }}>{t}</div>
          </div>
        ))}
      </div>

      <section className="cta-gradient" style={{ padding: "120px var(--page-x)", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--line)" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(64px, 8vw, 96px)", lineHeight: 0.95, letterSpacing: "-.02em", maxWidth: "16ch" }}>
          This year&apos;s report.{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Begin now.</em>
        </h2>
        <Btn href="/contact" variant="primary" large>Brief us</Btn>
      </section>

      <Footer />
    </div>
  );
}
