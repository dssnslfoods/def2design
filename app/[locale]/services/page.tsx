import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";
import { ImageBand } from "@/components/Figure";

export const metadata: Metadata = {
  title: "Services",
  description: "Seven disciplines, one partner. From One Reports to eMagazines — end to end, in Thai and English.",
};

const SERVICES = [
  { n: "01", t: "One Report Design", d: "SET 56-1 One Report, end to end — narrative, layout, infographics, bilingual production, press.", tags: "SET 56-1 · TH/EN · Print + digital", href: "/services/one-report", span: 7 },
  { n: "02", t: "Annual Report Design", d: "Story-led editorial reports for board, investors, regulators. The chairman's annual document, designed as a brand asset.", tags: "Editorial · Print + eBook", href: "/services/annual-report", span: 5 },
  { n: "03", t: "Sustainability Report Design", d: "GRI · SASB · TCFD · IFRS S1/S2 literate. Story-driven ESG reporting that reads as well as it ranks.", tags: "GRI · SASB · TCFD", href: "/services/sustainability", span: 5 },
  { n: "04", t: "ESG Communication", d: "Beyond the report: stakeholder decks, investor day microsites, ESG explainer videos.", tags: "Microsite · Deck · Motion", href: "/services/esg-communication", span: 7 },
  { n: "05", t: "eMagazine Design", d: "Interactive, page-turning digital editions for IR, employee and stakeholder communications.", tags: "Interactive · Quarterly", href: "/services/emagazine", span: 6 },
  { n: "06", t: "Corporate Publications", d: "Calendar · notebook · signage · booth · packaging · presentations. The studio behind your brand year.", tags: "Multi-discipline", href: "/services/corporate-publications", span: 6 },
  { n: "07", t: "Printing & Marketing Materials", d: "Press supervision, premium finishing, brand-grade output. We are physically on the printing floor.", tags: "Production · Press", href: "/services/printing", span: 12 },
];

const PROCESS = [
  ["Phase 01", "Discover", "3 weeks", "Stakeholder interviews · brand audit · IR alignment · narrative thesis."],
  ["Phase 02", "Architect", "3 weeks", "Chapter outline · infographic system · cover concepts · photography brief."],
  ["Phase 03", "Design", "6 weeks", "Full TH + EN typesetting · photography shoot · iterative review with IR/CEO."],
  ["Phase 04", "Produce", "4 weeks", "Press supervision · digital edition · launch microsite · eBook."],
];

export default function ServicesPage() {
  return (
    <div className="page-wrap">
      <Nav />

      {/* HERO */}
      <section style={{ padding: "96px var(--page-x) 64px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 32 }}>
          03 / Services · Seven disciplines, one partner
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 64, alignItems: "end" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(88px, 10vw, 148px)", lineHeight: 0.9, letterSpacing: "-.02em" }}>
            What we{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>do.</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--gray)", maxWidth: "36ch" }}>
            We are a focused team with a deep practice in corporate communication for listed companies, state enterprises and public organizations. Each discipline below is delivered end to end — under one roof, in Thai and English, with senior creative direction.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 24, gridAutoRows: "auto" }}>
        {SERVICES.map((s, i) => (
          <Link
            key={s.n}
            href={s.href}
            style={{ gridColumn: `span ${s.span}`, padding: "40px 32px 40px 0", borderTop: i === 0 ? "1px solid var(--ink)" : "none", borderBottom: "1px solid var(--line)", textDecoration: "none", color: "inherit", display: "block" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 32, alignItems: "start", marginBottom: 24 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>{s.n}</div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 44, lineHeight: 1.0, letterSpacing: "-.015em" }}>{s.t}</h2>
              <div style={{ fontSize: 18, color: "var(--gray)" }}>→</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end" }}>
              <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.6, maxWidth: "58ch" }}>{s.d}</p>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)", textAlign: "right" }}>{s.tags}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* IMAGE BAND */}
      <ImageBand src="/images/band-paper.jpg" alt="Bound corporate reports and publications" caption="From brief to bound · selected work" aspectRatio="21/8" />

      {/* PROCESS */}
      <SectionMarker left="How we engage" right="Our process" />
      <div style={{ padding: "80px var(--page-x)", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64 }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 48, lineHeight: 1, letterSpacing: "-.015em" }}>
          A four-phase process — from brief to{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>press.</em>
        </h2>
        <div style={{ borderTop: "1px solid var(--ink)" }}>
          {PROCESS.map(([p, n, wk, d]) => (
            <div key={n} style={{ display: "grid", gridTemplateColumns: "90px 200px 100px 1fr", alignItems: "baseline", padding: "28px 0", borderBottom: "1px solid var(--line)", gap: 24 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>{p}</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>{n}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)" }}>{wk}</div>
              <p style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="cta-gradient" style={{ padding: "120px var(--page-x)", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--line)" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(56px, 7vw, 88px)", lineHeight: 0.95, letterSpacing: "-.02em", maxWidth: "18ch" }}>
          Not sure which one?{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Let&apos;s talk.</em>
        </h2>
        <Btn href="/contact" variant="primary" large>Brief us</Btn>
      </section>

      <Footer />
    </div>
  );
}
