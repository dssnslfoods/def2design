import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";

export const metadata: Metadata = {
  title: "Printing & Marketing Materials",
  description: "Press supervision, premium finishing, brand-grade output. We are physically on the printing floor.",
};

export default function PrintingPage() {
  return (
    <div className="page-wrap">
      <Nav />

      <section style={{ padding: "96px var(--page-x) 64px", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>
            Services <span style={{ color: "var(--emerald)" }}>/</span> Printing &amp; Marketing Materials
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(64px, 8vw, 108px)", lineHeight: 0.92, letterSpacing: "-.02em" }}>
            On the floor, at{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>press.</em>
          </h1>
        </div>
        <div>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--gray)", marginBottom: 32 }}>
            Press supervision, premium finishing, brand-grade output. We are physically on the printing floor for every D2D job — not because we have to be, but because the work demands it.
          </p>
          <Btn href="/contact" variant="primary">Request a proposal</Btn>
        </div>
      </section>

      <SectionMarker left="01 — What we supervise" right="End to end" />
      <div style={{ padding: "56px var(--page-x)" }}>
        <div style={{ borderTop: "1px solid var(--ink)" }}>
          {[
            ["Paper sourcing", "We specify and source paper — weight, texture, finish — based on the design, not the printer's stock."],
            ["Press checks", "A D2D designer is on-site for every press check. We match proof to print."],
            ["Bindery", "Perfect bind, case bind, saddle stitch, Swiss broch — we supervise all bindery and finishing on-site."],
            ["Specialty finishing", "Foil, emboss, varnish, die-cut — all specified by the design team, supervised in person."],
            ["Quality control", "Page-by-page QC of the final run before delivery."],
          ].map(([t, d], i) => (
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
          Print job?{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Let&apos;s go.</em>
        </h2>
        <Btn href="/contact" variant="primary" large>Brief us</Btn>
      </section>

      <Footer />
    </div>
  );
}
