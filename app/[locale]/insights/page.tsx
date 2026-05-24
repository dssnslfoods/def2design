import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";
import { Photo, ReportCover } from "@/components/Figure";

export const metadata: Metadata = {
  title: "Insights",
  description: "The studio journal on corporate communication, ESG reporting and editorial design — published monthly from Bangkok.",
};

const FEATURES = [
  { d: "2026 · March", cat: "Editorial", t: "Writing the chairman's letter in 2026.", dek: "The most under-edited document in a corporation deserves more editorial discipline than any other page in the annual report. A studio note.", min: "14 min read", author: "Founding Principal", img: "/images/feature-chairman.jpg", slug: "writing-the-chairmans-letter-2026" },
  { d: "2026 · February", cat: "ESG", t: "From GRI to story: a four-step bridge.", dek: "Most sustainability reports read like spreadsheets. They don't have to. A studio method for moving from material topics to readable narrative.", min: "9 min read", author: "Sustainability Lead", img: "/images/feature-esg.jpg", slug: "from-gri-to-story" },
];

const ARTICLES = [
  { d: "2026 · January", cat: "Craft", t: "Why we still print One Report covers in ink.", min: "6 min", slug: "why-we-still-print" },
  { d: "2025 · December", cat: "Practice", t: "What changes when a SET100 issuer adopts IFRS S1/S2.", min: "11 min", slug: "set100-ifrs-s1-s2" },
  { d: "2025 · November", cat: "Typography", t: "Designing financial numbers — a typographic note.", min: "7 min", slug: "designing-financial-numbers" },
  { d: "2025 · October", cat: "Studio", t: "The case for the small studio: sixteen years in.", min: "8 min", slug: "case-for-small-studio" },
  { d: "2025 · September", cat: "Editorial", t: "Reading the One Report — what we actually do.", min: "5 min", slug: "reading-one-report" },
  { d: "2025 · August", cat: "Trend", t: "Three patterns we see in the 2025 annual report cycle.", min: "10 min", slug: "patterns-2025-annual-report" },
];

const TAGS = ["All", "Editorial", "ESG", "Craft", "Typography", "Studio", "Trend", "Practice"];

export default function InsightsPage() {
  return (
    <div className="page-wrap">
      <Nav />

      {/* MASTHEAD */}
      <section style={{ padding: "96px var(--page-x) 32px", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "end", borderBottom: "1px solid var(--ink)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 32 }}>
            The Studio Journal · Volume XVII
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(88px, 10vw, 148px)", lineHeight: 0.9, letterSpacing: "-.02em" }}>
            Insights<em style={{ color: "var(--emerald)", fontStyle: "italic" }}>.</em>
          </h1>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", textAlign: "right", maxWidth: 300, lineHeight: 1.8 }}>
          A studio journal on corporate communication, ESG reporting and editorial design — published monthly from Bangkok.
          <div style={{ marginTop: 16 }}>
            <Btn variant="ghost">Subscribe</Btn>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <div style={{ padding: "20px var(--page-x)", display: "flex", gap: 8, flexWrap: "wrap", borderBottom: "1px solid var(--line)", alignItems: "center" }}>
        {TAGS.map((t, i) => (
          <span key={t} className={`tag${i === 0 ? " active" : ""}`} style={{ cursor: "pointer" }}>{t}</span>
        ))}
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>32 articles · sorted by date ↓</span>
      </div>

      {/* FEATURE SPREAD */}
      <SectionMarker left="01 — This month" right="Featured · two essays" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 48 }}>
        {FEATURES.map((f) => (
          <article key={f.t} className="card">
            <Link href={`/insights/${f.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card-image">
                <Photo src={f.img} alt={f.t} aspectRatio="4/3" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>
                <span style={{ color: "var(--emerald)" }}>{f.cat}</span>
                <span>{f.d}</span>
              </div>
              <h2 className="card-title">{f.t}</h2>
              <p className="card-dek">{f.dek}</p>
              <footer className="card-footer">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>By {f.author} · {f.min}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink)" }}>Read essay →</span>
              </footer>
            </Link>
          </article>
        ))}
      </div>

      {/* ARCHIVE LIST */}
      <SectionMarker left="02 — From the archive" right="Recent essays" />
      <div style={{ padding: "56px var(--page-x)" }}>
        <div style={{ borderTop: "1px solid var(--ink)" }}>
          {ARTICLES.map((a) => (
            <Link key={a.slug} href={`/insights/${a.slug}`} style={{ display: "grid", gridTemplateColumns: "140px 200px 1fr 100px 40px", alignItems: "baseline", padding: "32px 0", borderBottom: "1px solid var(--line)", gap: 24, textDecoration: "none", color: "inherit" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>{a.d}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)" }}>{a.cat}</div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 30, lineHeight: 1.1, letterSpacing: "-.01em" }}>{a.t}</h2>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", textAlign: "right" }}>{a.min}</div>
              <div style={{ textAlign: "right", fontSize: 18 }}>→</div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Btn>Load all 32 essays</Btn>
        </div>
      </div>

      {/* TREND REPORT CTA — dark */}
      <SectionMarker left="03 — Annual study" right="Free · 96 pages" />
      <div style={{ padding: "120px var(--page-x)", background: "var(--navy)", color: "var(--paper)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--paper-fade)", marginBottom: 32 }}>
            The 2026 D2D Trend Report
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(56px, 7vw, 88px)", lineHeight: 0.95, letterSpacing: "-.02em", maxWidth: "14ch" }}>
            The state of corporate communication in{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald-2)" }}>Thailand.</em>
          </h2>
          <p style={{ fontSize: 16, color: "var(--paper-dim)", lineHeight: 1.7, marginTop: 32, maxWidth: "48ch" }}>
            Our annual long-form study of how listed companies, state enterprises and public organizations are communicating with their stakeholders. 96 pages, free, published every March.
          </p>
          <div style={{ marginTop: 32 }}>
            <Btn variant="dark" large>Download report → ฿0</Btn>
          </div>
        </div>
        <ReportCover title="The state of corporate" italicWord="communication." eyebrow="Annual Study · 96pp" kicker="Trend Report" year="2026" tone="navy" aspectRatio="3/4" alt="The 2026 D2D Trend Report cover" />
      </div>

      <Footer />
    </div>
  );
}
