import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { ReportCover, ReportSpread, Infographic } from "@/components/Figure";
import { Btn } from "@/components/Button";

// In production this would come from the CMS
export const metadata: Metadata = {
  title: "The Continuous Year — Case Study",
  description: "A four-month engagement to rebuild a SET100 issuer's annual narrative from the ground up.",
};

const RESULTS = [
  ["248pp", "Final volume"],
  ["TH · EN", "Bilingual parity"],
  ["16 wk", "From brief to press"],
  ["SAA 2025", "Gold honoree"],
];

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return (
    <div className="page-wrap">
      <Nav />

      {/* BREADCRUMB */}
      <div style={{ padding: "24px var(--page-x)", borderBottom: "1px solid var(--line)", display: "flex", gap: 8, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>
        <Link href="/portfolio" style={{ color: "inherit", textDecoration: "none" }}>Portfolio</Link>
        <span style={{ color: "var(--gray-2)" }}>/</span>
        <span style={{ color: "var(--emerald)" }}>The Continuous Year</span>
      </div>

      {/* HERO */}
      <section style={{ padding: "80px var(--page-x) 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>
            Featured · 248 pages · TH / EN
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(64px, 7vw, 96px)", lineHeight: 0.92, letterSpacing: "-.02em" }}>
            The Continuous{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Year.</em>
          </h1>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--gray)", maxWidth: "48ch" }}>
          A four-month engagement to rebuild a SET100 issuer&apos;s annual narrative from the ground up — moving from a chairman-led essay to a chapter-based report organised by stakeholder commitments. The final book ran to 248 pages, in both Thai and English, with a printed and eBook edition.
        </p>
      </section>

      {/* SPREADS */}
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <ReportCover title="The Continuous" italicWord="Year" eyebrow="SET100 · Energy" kicker="Annual Report" year="2025" tone="navy" aspectRatio="4/3" alt="The Continuous Year — printed cover" />
        <ReportSpread heading="A letter from" italicWord="the chair." eyebrow="Chapter 01" page="08 — 09" tone="paper" aspectRatio="4/3" alt="Chairman's letter spread" />
        <Infographic stats={[["+150", "Reports delivered"], ["248pp", "Final volume"], ["TH · EN", "Bilingual parity"]]} tone="navy" aspectRatio="4/3" eyebrow="Fig. — Stakeholder commitments" style={{ gridColumn: "span 2" }} alt="Full-bleed infographic of stakeholder commitments" />
        <Infographic stats={[["-42%", "Scope 1"], ["100%", "Renewable"], ["+18%", "Women lead"]]} tone="paper" aspectRatio="4/3" eyebrow="Fig. — ESG metrics, typeset" alt="ESG metrics, typographic" />
        <ReportSpread heading="Financial" italicWord="summary." eyebrow="Chapter 06" page="210 — 211" tone="mist" aspectRatio="4/3" rightStat="₿2.3B" rightStatLabel="Total assets" alt="Financial summary spread" />
      </div>

      {/* RESULTS */}
      <SectionMarker left="Outcomes" right="In numbers" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
        {RESULTS.map(([n, l], i) => (
          <div key={l} style={{ padding: "40px 32px 40px 0", borderRight: i < 3 ? "1px solid var(--line)" : "none", paddingLeft: i > 0 ? 32 : 0 }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 88, lineHeight: 1, color: "var(--emerald)" }}>{n}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginTop: 14 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* NEXT */}
      <div style={{ padding: "80px var(--page-x)", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 14 }}>Next case</div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: 64, lineHeight: 1, letterSpacing: "-.015em" }}>A Decade in Green →</div>
        </div>
        <Btn href="/portfolio">Browse all 187</Btn>
      </div>

      <Footer />
    </div>
  );
}
