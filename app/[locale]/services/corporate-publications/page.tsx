import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";

export const metadata: Metadata = {
  title: "Corporate Publications",
  description: "Calendar, notebook, signage, booth, packaging, presentations — the studio behind your brand year.",
};

const DISCIPLINES = [
  ["Calendar", "Annual desk and wall calendars — a brand touchpoint that lives on desks all year."],
  ["Notebook", "Premium notebooks as client gifts, board member keepsakes, and employee brand touchpoints."],
  ["Signage", "Corporate wayfinding, lobby signage, branch interiors — brand applied at architectural scale."],
  ["Booth", "Investor day and conference booths — branded environments for SET and international audiences."],
  ["Brochures", "Product, corporate, and service brochures. Print and digital. In Thai and English."],
  ["Packaging", "Premium packaging for corporate gifts, product launches, and investor day collateral."],
  ["Presentations", "Board and investor day decks — slide systems that speak the same typographic language as your report."],
];

export default function CorporatePublicationsPage() {
  return (
    <div className="page-wrap">
      <Nav />

      <section style={{ padding: "96px var(--page-x) 64px", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>
            Services <span style={{ color: "var(--emerald)" }}>/</span> Corporate Publications
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(64px, 8vw, 108px)", lineHeight: 0.92, letterSpacing: "-.02em" }}>
            The studio behind your brand{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>year.</em>
          </h1>
        </div>
        <div>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--gray)", marginBottom: 32 }}>
            Calendar · notebook · signage · booth · packaging · presentations. Seven disciplines, one consistent visual language, one studio.
          </p>
          <Btn href="/contact" variant="primary">Request a proposal</Btn>
        </div>
      </section>

      <SectionMarker left="01 — Disciplines" right="Seven formats" />
      <div style={{ padding: "56px var(--page-x)" }}>
        <div style={{ borderTop: "1px solid var(--ink)" }}>
          {DISCIPLINES.map(([t, d], i) => (
            <div key={t} style={{ display: "grid", gridTemplateColumns: "80px 280px 1fr", alignItems: "baseline", padding: "28px 0", borderBottom: "1px solid var(--line)", gap: 24 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>{String(i + 1).padStart(2, "0")}</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 28, lineHeight: 1 }}>{t}</div>
              <p style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="cta-gradient" style={{ padding: "120px var(--page-x)", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--line)" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(56px, 7vw, 88px)", lineHeight: 0.95, letterSpacing: "-.02em", maxWidth: "16ch" }}>
          Brand collateral?{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Let&apos;s talk.</em>
        </h2>
        <Btn href="/contact" variant="primary" large>Brief us</Btn>
      </section>

      <Footer />
    </div>
  );
}
