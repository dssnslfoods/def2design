import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dictionaries";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";
import { ReportCover, ReportSpread } from "@/components/Figure";

const SERVICE_HREFS = [
  "/services/one-report",
  "/services/annual-report",
  "/services/sustainability",
  "/services/esg-communication",
  "/services/emagazine",
  "/services/corporate-publications",
];

const CLIENTS = ["CPALL", "CENTEL", "HOMEPRO", "RATCH", "AOT", "S&P", "SET", "& more"];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = getDict(locale as Locale);
  const t = d.home;
  const c = d.common;
  const isTH = locale === "th";
  const heroSize = isTH ? "clamp(52px, 6.5vw, 96px)" : "clamp(88px, 10.5vw, 148px)";
  const ctaSize = isTH ? "clamp(48px, 6vw, 84px)" : "clamp(72px, 8vw, 108px)";

  const services = [t.services.s1t, t.services.s2t, t.services.s3t, t.services.s4t, t.services.s5t, t.services.s6t];
  const serviceDescs = [t.services.s1d, t.services.s2d, t.services.s3d, t.services.s4d, t.services.s5d, t.services.s6d];
  const meta: [string, string][] = [
    [t.meta.founded, t.metaVals.founded],
    [t.meta.reports, t.metaVals.reports],
    [t.meta.clients, t.metaVals.clients],
    [t.meta.awards, t.metaVals.awards],
  ];
  const stats: [string, string][] = [
    [t.stats.s1n, t.stats.s1l],
    [t.stats.s2n, t.stats.s2l],
    [t.stats.s3n, t.stats.s3l],
    [t.stats.s4n, t.stats.s4l],
  ];

  return (
    <div className="page-wrap">
      <Nav />

      {/* HERO */}
      <section style={{ padding: "120px var(--page-x) 64px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end", minHeight: 640 }}>
        <div>
          <div className="rise rise-1" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 48 }}>
            {t.eyebrow}
          </div>
          <h1 className="rise rise-2" style={{ fontFamily: "var(--font-serif)", fontSize: heroSize, lineHeight: isTH ? 1.05 : 0.9, letterSpacing: "-.025em" }}>
            {t.heroL1}<br />{t.heroL2}<br />{t.heroL3}{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>{t.heroEm}</em>
          </h1>
        </div>
        <div className="rise rise-3" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--gray)", maxWidth: "36ch" }}>
            {t.lede}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn href="/portfolio" variant="primary">{c.viewPortfolio}</Btn>
            <Btn href="/insights">{c.readInsights}</Btn>
          </div>
        </div>
      </section>

      {/* META ROW */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "28px var(--page-x)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", gap: 24 }}>
        {meta.map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>{k}</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, marginTop: 8 }}>{v}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <SectionMarker left={t.servicesMarkerL} right={t.servicesMarkerR} />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
        {services.map((title, i) => (
          <Link key={i} href={SERVICE_HREFS[i]} style={{ textDecoration: "none", color: "inherit", padding: i % 3 === 0 ? "36px 32px 32px 0" : "36px 32px 32px 32px", borderRight: i % 3 !== 2 ? "1px solid var(--line)" : "none", borderBottom: i < 3 ? "1px solid var(--line)" : "none", display: "block" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 48 }}>{String(i + 1).padStart(2, "0")}</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1.05, marginBottom: 14 }}>{title}</div>
            <div style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.55, maxWidth: "34ch" }}>{serviceDescs[i]}</div>
          </Link>
        ))}
      </div>

      {/* PORTFOLIO */}
      <SectionMarker left={t.portfolioMarkerL} right={t.portfolioMarkerR} />
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
      <SectionMarker left={t.whyMarkerL} right={t.whyMarkerR} />
      <div style={{ padding: "80px var(--page-x)", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64 }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(48px, 5vw, 64px)", lineHeight: 0.95, letterSpacing: "-.015em" }}>
          {t.whyHeading}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 32 }}>
          {stats.map(([n, l]) => (
            <div key={l} style={{ borderTop: "1px solid var(--line)", paddingTop: 18 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 64, lineHeight: 1, color: "var(--emerald)" }}>{n}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LOGO WALL */}
      <SectionMarker left={t.clientsMarkerL} right={t.clientsMarkerR} />
      <div style={{ padding: "0 var(--page-x) 56px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid var(--line)" }}>
        {CLIENTS.map((name, i) => (
          <div key={name} style={{ aspectRatio: "5/2", borderRight: (i + 1) % 4 !== 0 ? "1px solid var(--line)" : "none", borderBottom: i < 4 ? "1px solid var(--line)" : "none", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontSize: 26, letterSpacing: "-.01em", color: i === CLIENTS.length - 1 ? "var(--gray-2)" : "var(--ink)", fontStyle: i === CLIENTS.length - 1 ? "italic" : "normal" }}>
            {name}
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="cta-gradient" style={{ padding: "120px var(--page-x)", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end", borderTop: "1px solid var(--line)" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: ctaSize, lineHeight: isTH ? 1.1 : 0.95, letterSpacing: "-.02em", maxWidth: "16ch" }}>
          {t.ctaLead}{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>{t.ctaEm}</em>
        </h2>
        <Btn href="/contact" large>{c.startBrief}</Btn>
      </section>

      <Footer />
    </div>
  );
}
