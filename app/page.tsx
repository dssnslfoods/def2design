import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";
import { ReportCover, ReportSpread } from "@/components/Figure";

export const metadata: Metadata = {
  title: "Def to Design — Corporate Report Design Studio",
  description:
    "Thailand's premier studio for One Reports, Annual Reports and ESG communications — trusted by listed companies, state enterprises and public organizations.",
};

const SERVICES = [
  { n: "01", t: "One Report Design", d: "SET 56-1 One Report, end to end — narrative, layout, infographics, bilingual production.", href: "/services/one-report" },
  { n: "02", t: "Annual Report Design", d: "The annual report as a board-level brand asset, not a regulatory deliverable.", href: "/services/annual-report" },
  { n: "03", t: "Sustainability Report", d: "GRI · SASB · TCFD literate. Story-driven ESG reporting that reads as well as it ranks.", href: "/services/sustainability" },
  { n: "04", t: "ESG Communication", d: "Beyond the report: stakeholder decks, microsites, investor day collateral.", href: "/services/esg-communication" },
  { n: "05", t: "eMagazine", d: "Interactive, page-turning digital editions for IR & corporate communications teams.", href: "/services/emagazine" },
  { n: "06", t: "Corporate Publications", d: "Calendar, notebook, signage, booth, packaging — the studio behind your brand year.", href: "/services/corporate-publications" },
];

const STATS = [
  ["2010", "Studio founded in Bangkok"],
  ["56-1", "One Report specialists"],
  ["One stop", "Concept to production"],
  ["TH · EN", "Bilingual by default"],
];

const CLIENTS = ["CPALL", "S&P", "RATCH", "PTTGC", "AOT", "COM7", "& more"];

export default function HomePage() {
  return (
    <div className="page-wrap">
      <Nav />

      {/* HERO */}
      <section style={{ padding: "120px var(--page-x) 64px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end", minHeight: 640 }}>
        <div>
          <div className="rise rise-1" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 48 }}>
            Striking design · Stylish concept · Since 2010
          </div>
          <h1 className="rise rise-2" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(88px, 10.5vw, 148px)", lineHeight: 0.9, letterSpacing: "-.025em" }}>
            Designing<br />the document<br />a board{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>signs.</em>
          </h1>
        </div>
        <div className="rise rise-3" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--gray)", maxWidth: "34ch" }}>
            A Bangkok studio for annual reports, 56-1 One Reports and sustainability
            reporting — one-stop design and production, trusted by listed companies
            and state enterprises.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn href="/portfolio" variant="primary">View portfolio</Btn>
            <Btn href="/insights">Read insights</Btn>
          </div>
        </div>
      </section>

      {/* META ROW */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "28px var(--page-x)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", gap: 24 }}>
        {[["Founded", "2009"], ["Reports delivered", "+150"], ["Listed clients", "SET & mai"], ["Awards", "SAA · ARC · LACP"]].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>{k}</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, marginTop: 8 }}>{v}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <SectionMarker left="02 — Featured Services" right="Seven disciplines" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
        {SERVICES.map(({ n, t, d, href }, i) => (
          <Link key={n} href={href} style={{ textDecoration: "none", color: "inherit", padding: i % 3 === 0 ? "36px 32px 32px 0" : "36px 32px 32px 32px", borderRight: i % 3 !== 2 ? "1px solid var(--line)" : "none", borderBottom: i < 3 ? "1px solid var(--line)" : "none", display: "block" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 48 }}>{n}</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1.05, marginBottom: 14 }}>{t}</div>
            <div style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.55, maxWidth: "34ch" }}>{d}</div>
          </Link>
        ))}
      </div>

      {/* PORTFOLIO */}
      <SectionMarker left="03 — Featured Portfolio" right="Selected 2024 / 2025" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "5fr 4fr", gap: 24 }}>
        <div style={{ gridRow: "span 2" }}>
          <ReportCover title="The Continuous Year" eyebrow="SET100 · Energy" kicker="One Report" year="2025" tone="paper" aspectRatio="3/4" alt="The Continuous Year — One Report cover for a SET100 energy client, 2025" />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>
            <span>Featured · 2025</span>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 16, textTransform: "none", letterSpacing: 0, color: "var(--ink)" }}>The Continuous Year</span>
            <span>One Report</span>
          </div>
        </div>
        <div>
          <ReportCover title="A Decade in" italicWord="Green" eyebrow="SET50 · Materials" kicker="Sustainability" year="2025" tone="navy" aspectRatio="4/3" alt="A Decade in Green — sustainability report cover, 2025" />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>
            <span>Sustainability</span>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 16, textTransform: "none", letterSpacing: 0, color: "var(--ink)" }}>A Decade in Green</span>
            <span>2025</span>
          </div>
        </div>
        <div>
          <ReportSpread heading="Quarter" italicWord="Three." eyebrow="D2D · eMagazine" page="12 — 13" tone="paper" aspectRatio="4/3" alt="Quarter Three — eMagazine spread, 2025" />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>
            <span>eMagazine</span>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 16, textTransform: "none", letterSpacing: 0, color: "var(--ink)" }}>Quarter Three</span>
            <span>2025</span>
          </div>
        </div>
      </div>

      {/* WHY / STATS */}
      <SectionMarker left="04 — Why Def to Design" right="The case in numbers" />
      <div style={{ padding: "80px var(--page-x)", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64 }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(48px, 5vw, 64px)", lineHeight: 0.95, letterSpacing: "-.015em" }}>
          Fifteen years designing Thailand&apos;s corporate reports and communications.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 32 }}>
          {STATS.map(([n, l]) => (
            <div key={l} style={{ borderTop: "1px solid var(--line)", paddingTop: 18 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 64, lineHeight: 1, color: "var(--emerald)" }}>{n}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LOGO WALL */}
      <SectionMarker left="05 — Trusted by" right="Listed companies · State enterprises" />
      <div style={{ padding: "0 var(--page-x) 56px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid var(--line)" }}>
        {CLIENTS.map((name, i) => (
          <div key={name} style={{ aspectRatio: "5/2", borderRight: (i + 1) % 4 !== 0 ? "1px solid var(--line)" : "none", borderBottom: i < 4 ? "1px solid var(--line)" : "none", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontSize: 26, letterSpacing: "-.01em", color: i === CLIENTS.length - 1 ? "var(--gray-2)" : "var(--ink)", fontStyle: i === CLIENTS.length - 1 ? "italic" : "normal" }}>
            {name}
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="cta-gradient" style={{ padding: "120px var(--page-x)", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--line)" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(72px, 8vw, 108px)", lineHeight: 0.95, letterSpacing: "-.02em", maxWidth: "14ch" }}>
          Have a report due?{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Let&apos;s begin.</em>
        </h2>
        <Btn href="/contact" large>Start a brief</Btn>
      </section>

      <Footer />
    </div>
  );
}
