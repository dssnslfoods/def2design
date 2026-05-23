import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";

export const metadata: Metadata = {
  title: "ESG Communication",
  description: "Beyond the report: stakeholder decks, investor day microsites, ESG explainer videos and more.",
};

export default function ESGCommunicationPage() {
  return (
    <div className="page-wrap">
      <Nav />

      <section style={{ padding: "96px var(--page-x) 64px", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>
            Services <span style={{ color: "var(--emerald)" }}>/</span> ESG Communication
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(64px, 8vw, 108px)", lineHeight: 0.92, letterSpacing: "-.02em" }}>
            Beyond the{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>report.</em>
          </h1>
        </div>
        <div>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--gray)", marginBottom: 32 }}>
            Stakeholder decks, investor day microsites, ESG explainer videos, data dashboards — the full communication stack around your sustainability report.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <Btn href="/contact" variant="primary">Request a proposal</Btn>
            <Btn href="/portfolio">See portfolio</Btn>
          </div>
        </div>
      </section>

      <SectionMarker left="01 — What we build" right="Four formats" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 0 }}>
        {[
          ["Stakeholder decks", "Board, investor, employee — the same ESG story, told three different ways, in three different formats."],
          ["Investor day microsite", "A living companion to the sustainability report — interactive material topics, drill-down disclosures."],
          ["ESG explainer", "Short-form video or animated infographic that makes material ESG topics accessible to a wider audience."],
          ["Data dashboard", "Real-time or annual ESG metrics, designed typographically — embedded in your IR site or standalone."],
        ].map(([t, d], i) => (
          <div key={t} style={{ padding: i % 2 === 0 ? "40px 40px 40px 0" : "40px 0 40px 40px", borderRight: i % 2 === 0 ? "1px solid var(--line)" : "none", borderBottom: i < 2 ? "1px solid var(--line)" : "none" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>{String(i + 1).padStart(2, "0")}</div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1.05, marginBottom: 16 }}>{t}</h3>
            <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.6 }}>{d}</p>
          </div>
        ))}
      </div>

      <section className="cta-gradient" style={{ padding: "120px var(--page-x)", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--line)" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(56px, 7vw, 88px)", lineHeight: 0.95, letterSpacing: "-.02em", maxWidth: "16ch" }}>
          ESG story to tell?{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Let&apos;s begin.</em>
        </h2>
        <Btn href="/contact" variant="primary" large>Brief us</Btn>
      </section>

      <Footer />
    </div>
  );
}
