import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";
import { ReportCover } from "@/components/Figure";

export const metadata: Metadata = {
  title: "Sustainability Report Design",
  description: "GRI, SASB, TCFD, IFRS S1/S2 literate. Story-driven ESG reporting that reads as well as it ranks.",
};

const FRAMEWORKS = [
  ["GRI", "Global Reporting Initiative", "Universal · Topic · Sector standards. Material topic analysis."],
  ["SASB", "Sustainability Accounting", "Industry-specific disclosures investors look for first."],
  ["TCFD", "Climate-related disclosure", "Governance · Strategy · Risk · Metrics & targets."],
  ["IFRS", "S1 / S2 Sustainability", "ISSB-aligned disclosures, climate-first."],
];

const PROCESS = [
  ["01", "Materiality refresh", "Stakeholder mapping, double materiality assessment, topic prioritization."],
  ["02", "Disclosure audit", "Gap analysis against GRI · SASB · TCFD · IFRS S1/S2."],
  ["03", "Narrative architecture", "Story spine — chapters mapped to material topics, not framework indices."],
  ["04", "Data visualization", "Typographic charts, metric systems, year-over-year transparency."],
  ["05", "Design & writing", "Bilingual TH + EN spreads, infographics, photography direction."],
  ["06", "Production", "Print, eBook, microsite, framework cross-reference index."],
];

const DATA_VIZ = [
  ["-42%", "Scope 1 emissions", "2014 → 2024"],
  ["100%", "Renewable electricity", "2024 onward"],
  ["+18%", "Women in leadership", "2014 → 2024"],
  ["฿2.3B", "Community investment", "Cumulative"],
  ["7.2", "Lost-time injury rate", "Per million hours"],
  ["97%", "Local procurement", "Tier-1 supply chain"],
];

export default function SustainabilityPage() {
  return (
    <div className="page-wrap">
      <Nav />

      {/* HERO */}
      <section style={{ padding: "96px var(--page-x) 64px", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>
            Services <span style={{ color: "var(--emerald)" }}>/</span> Sustainability Report Design
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(64px, 9vw, 120px)", lineHeight: 0.92, letterSpacing: "-.02em" }}>
            Reports that<br />read as well<br />as they{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>rank.</em>
          </h1>
        </div>
        <div>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--gray)", marginBottom: 32 }}>
            We design sustainability reports that satisfy GRI, SASB, TCFD and IFRS S1/S2 — but more importantly, that move investors, employees and stakeholders. ESG communication is a story problem before it is a disclosure problem.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn href="/contact" variant="primary">Request a proposal</Btn>
            <Btn href="/portfolio">See ESG case study</Btn>
          </div>
        </div>
      </section>

      {/* FRAMEWORKS */}
      <SectionMarker left="01 — Framework literacy" right="Standards we work to natively" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
        {FRAMEWORKS.map(([t, sub, d], i) => (
          <div key={t} style={{ padding: i === 0 ? "32px 32px 32px 0" : "32px", borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 72, lineHeight: 1, color: "var(--emerald)", fontStyle: "italic" }}>{t}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginTop: 18 }}>{sub}</div>
            <p style={{ fontSize: 13, color: "var(--ink)", marginTop: 14, lineHeight: 1.55 }}>{d}</p>
          </div>
        ))}
      </div>

      {/* APPROACH */}
      <SectionMarker left="02 — Our approach" right="From compliance to communication" />
      <div style={{ padding: "80px var(--page-x)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96 }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>The problem</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1.1, marginBottom: 24 }}>
            Most sustainability reports read like spreadsheets bound between covers.
          </h2>
          <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.7 }}>
            They&apos;re long. They&apos;re dense. They&apos;re built for a rating agency to scan, not a human to read. The cost of this is real: ESG communication ranks below financial communication in board attention, in employee comprehension, in investor recall. The audience that matters most reads least.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)", marginBottom: 24 }}>Our position</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1.1, marginBottom: 24 }}>
            A sustainability report is a stakeholder document, not a compliance document.
          </h2>
          <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.7 }}>
            We start with the material topics that move stakeholders — not the GRI index. Then we architect a narrative around them, mapped back to the disclosure framework. The rating agencies still get what they need; the rest of the world gets something readable.
          </p>
        </div>
      </div>

      {/* PROCESS */}
      <SectionMarker left="03 — Process" right="Six steps · 14–18 weeks" />
      <div style={{ padding: "56px var(--page-x)", borderTop: "1px solid var(--ink)" }}>
        {PROCESS.map(([n, t, d]) => (
          <div key={n} style={{ display: "grid", gridTemplateColumns: "80px 280px 1fr 60px", alignItems: "baseline", padding: "28px 0", borderBottom: "1px solid var(--line)", gap: 24 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>{n}</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>{t}</div>
            <p style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.6 }}>{d}</p>
            <div style={{ textAlign: "right", fontSize: 18, color: "var(--gray-2)" }}>—</div>
          </div>
        ))}
      </div>

      {/* CASE */}
      <SectionMarker left="04 — Featured case" right="A Decade in Green · 2025" />
      <div style={{ padding: "80px var(--page-x)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <ReportCover title="A Decade in" italicWord="Green" eyebrow="SET50 · Materials" kicker="Sustainability" year="2025" tone="navy" aspectRatio="3/4" alt="A Decade in Green — sustainability report cover, SET50 materials client, 2025" />
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>SET50 · Materials · 196 pages</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(48px, 6vw, 72px)", lineHeight: 0.95, letterSpacing: "-.015em" }}>
            A Decade in{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Green.</em>
          </h2>
          <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.7, marginTop: 24, maxWidth: "48ch" }}>
            A ten-year retrospective sustainability report told in three chapters — Earth, People, Governance — each opening with a long-form essay before descending into framework-mapped disclosure. The first sustainability report in Thailand to be IFRS S1/S2 aligned at publication.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--ink)" }}>
            {[["196pp", "Volume"], ["IFRS", "S1 / S2"], ["SAA", "Honoree"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 48, color: "var(--emerald)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginTop: 10 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DATA-VIZ NOTE — dark section */}
      <SectionMarker left="05 — A note on data visualization" right="Typographic, not stock" />
      <div style={{ padding: "80px var(--page-x)", background: "var(--navy)", color: "var(--paper)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 56, lineHeight: 1, fontStyle: "italic" }}>
              Numbers,<br />typeset.
            </h2>
            <p style={{ fontSize: 15, color: "var(--paper-dim)", lineHeight: 1.7, marginTop: 24, maxWidth: "40ch" }}>
              We do not use generic chart libraries. Every metric in a D2D sustainability report is typeset by hand — because the typography of a number is as important as its value.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
            {DATA_VIZ.map(([n, l, sub]) => (
              <div key={l} style={{ borderTop: "1px solid var(--line-dark)", paddingTop: 14 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 48, color: "var(--emerald-2)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 13, marginTop: 10, fontWeight: 500 }}>{l}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--paper-fade)", marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ padding: "120px var(--page-x)", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--line)" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(64px, 8vw, 96px)", lineHeight: 0.95, letterSpacing: "-.02em", maxWidth: "14ch" }}>
          Report cycle?{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Begin now.</em>
        </h2>
        <Btn href="/contact" variant="primary" large>Brief us</Btn>
      </section>

      <Footer />
    </div>
  );
}
