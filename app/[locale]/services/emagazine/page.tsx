import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";
import { Photo } from "@/components/Figure";

export const metadata: Metadata = {
  title: "eMagazine Design",
  description: "Interactive digital editions for listed companies — quarterly editorials, sustainability microsites, employee magazines, investor day archives.",
};

const FORMATS = [
  ["Quarterly editorial", "Studio-style magazine for IR & comms. 40–80pp, web-native, eight issues a year."],
  ["Sustainability microsite", "One ESG report, expanded — interactive material topics, drill-down disclosures."],
  ["Investor day archive", "Live + on-demand companion to investor presentations. Decks + transcripts + Q&A."],
  ["Employee magazine", "Internal eMagazine for state enterprises and large workforces. Bilingual."],
  ["One Report digital edition", "The full SET 56-1 One Report, page-turn online + accessible PDF."],
  ["Annual report companion", "A reading-room version of the annual — long-form chapters, no PDFs."],
];

export default function EmagazinePage() {
  return (
    <div className="page-wrap">
      <Nav />

      {/* HERO */}
      <section style={{ padding: "96px var(--page-x) 64px", borderBottom: "1px solid var(--line)", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "end" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>
            Services <span style={{ color: "var(--emerald)" }}>/</span> eMagazine Design
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(72px, 9vw, 128px)", lineHeight: 0.92, letterSpacing: "-.02em" }}>
            The annual<br />report,{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>turning.</em>
          </h1>
        </div>
        <div>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--gray)", marginBottom: 32 }}>
            Interactive digital editions for listed companies — quarterly editorials, sustainability microsites, employee magazines, investor day archives. We build the format and the content.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn href="/contact" variant="primary">Request a demo</Btn>
            <Btn href="/portfolio">Live sample</Btn>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PREVIEW */}
      <SectionMarker left="01 — Live preview" right="Page 12 of 84 · drag to turn" />
      <div style={{ padding: "56px var(--page-x)", background: "var(--navy)", color: "var(--paper)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          {/* Page spread mockup */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, aspectRatio: "2/1.3", background: `linear-gradient(90deg, var(--paper-2) 49%, rgba(0,0,0,.1) 50%, var(--paper-2) 51%)`, padding: 2, position: "relative", boxShadow: "0 40px 80px -20px rgba(0,0,0,.5)" }}>
            {/* Left page */}
            <div style={{ background: "var(--paper)", padding: "48px 56px", position: "relative", color: "var(--ink)", display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 32, display: "flex", justifyContent: "space-between" }}>
                <span>D2D · QTR 03 / MMXXVI</span>
                <span>P. 12</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 48, lineHeight: 1, marginBottom: 32, fontStyle: "italic" }}>
                A letter from{" "}
                <span style={{ color: "var(--emerald)" }}>the floor.</span>
              </h2>
              <div style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.7 }}>
                <p style={{ marginTop: 0 }}>This quarter, we shipped four annual reports, two sustainability frameworks, an investor day microsite and a 200-page brand book. We also turned down nine engagements. The studio is small by design; this is the discipline that makes the work possible.</p>
                <p>Inside, you&apos;ll find our note on writing the chairman&apos;s letter in 2026, a behind-the-scenes look at the design of A Decade in Green, and a long-form essay on why typography matters more in ESG than it does in any other corporate document.</p>
              </div>
              <div style={{ marginTop: "auto", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", paddingTop: 24, borderTop: "1px solid var(--line)" }}>Editor&apos;s note</div>
            </div>
            {/* Right page */}
            <div style={{ background: "var(--paper)", padding: "48px 56px", position: "relative", color: "var(--ink)", display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 32, display: "flex", justifyContent: "space-between" }}>
                <span>D2D · QTR 03 / MMXXVI</span>
                <span>P. 13</span>
              </div>
              <Photo src="/images/feature-chairman.jpg" alt="Essay opener — chairman's letter feature" aspectRatio="4/3" style={{ marginBottom: 24 }} />
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, lineHeight: 1.1, marginBottom: 14 }}>The chairman&apos;s letter, 2026.</h3>
              <p style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.6 }}>
                A short essay on why the most under-edited document in a corporation deserves more design — and more editorial discipline — than any other page in the annual report.
              </p>
              <div style={{ marginTop: "auto", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)", paddingTop: 24, borderTop: "1px solid var(--line)" }}>Continue reading →</div>
            </div>
            {/* Spine shadow */}
            <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 24, transform: "translateX(-50%)", background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.12) 50%, transparent 100%)", pointerEvents: "none" }} />
          </div>

          {/* Controls */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--paper-fade)" }}>
            <span>◂ Prev</span>
            <div style={{ display: "flex", gap: 6 }}>
              {Array.from({ length: 42 }).map((_, i) => (
                <span key={i} style={{ width: 8, height: 2, background: (i === 5 || i === 6) ? "var(--emerald-2)" : i < 6 ? "var(--paper-dim)" : "var(--line-dark)", display: "inline-block" }} />
              ))}
            </div>
            <span>Next ▸</span>
          </div>
          <div style={{ textAlign: "center", marginTop: 14, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--paper-fade)" }}>
            P. 12 — 13 / 84 · Quarter Three · 2026
          </div>
        </div>
      </div>

      {/* FORMATS */}
      <SectionMarker left="02 — Editions we build" right="Six recurring formats" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
        {FORMATS.map(([t, d], i) => (
          <div key={t} style={{ padding: i % 3 === 0 ? "36px 32px 36px 0" : "36px 32px", borderRight: i % 3 !== 2 ? "1px solid var(--line)" : "none", borderBottom: i < 3 ? "1px solid var(--line)" : "none" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>{String(i + 1).padStart(2, "0")}</div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 30, lineHeight: 1.05, marginBottom: 14 }}>{t}</h3>
            <p style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.6, maxWidth: "34ch" }}>{d}</p>
          </div>
        ))}
      </div>

      {/* TECH NOTE */}
      <SectionMarker left="03 — Built for the open web" right="No proprietary readers" />
      <div style={{ padding: "80px var(--page-x)", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 48, lineHeight: 1.05, letterSpacing: "-.015em" }}>
          A reader, not a{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>plugin.</em>
        </h2>
        <div>
          <p style={{ fontSize: 16, color: "var(--gray)", lineHeight: 1.7 }}>
            Our eMagazines are built on the open web — HTML, CSS, and progressive enhancement. No Flash, no proprietary reader, no app to install. They work on any browser, on any device, with accessible markup that satisfies WCAG 2.2 AA. They can be self-hosted on your IR site, embedded in a microsite, or distributed as a standalone URL. They are also searchable by Google.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--ink)" }}>
            {[["WCAG 2.2", "AA conformant"], ["SEO", "Indexable"], ["Self-host", "Or D2D cloud"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: "var(--emerald)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginTop: 10 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-gradient" style={{ padding: "120px var(--page-x)", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--line)" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(56px, 7vw, 88px)", lineHeight: 0.95, letterSpacing: "-.02em", maxWidth: "16ch" }}>
          Ready to see a demo?{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Let&apos;s go.</em>
        </h2>
        <Btn href="/contact" variant="primary" large>Request a demo</Btn>
      </section>

      <Footer />
    </div>
  );
}
