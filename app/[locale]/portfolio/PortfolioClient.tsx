"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";
import { ReportCover, ReportSpread, Infographic } from "@/components/Figure";

const FILTERS = ["All work", "Annual Reports", "One Reports", "Sustainability", "eMagazine", "Corporate Branding", "Printing"];

type Tone = "navy" | "emerald" | "mist" | "paper" | "paper2";

const PORTFOLIO_ITEMS: {
  label: string; title: string; category: string; cols: number; rows: number; tone: Tone;
}[] = [
  { label: "2025 · Annual", title: "The Continuous Year", category: "One Reports", cols: 7, rows: 5, tone: "navy" },
  { label: "2025 · ESG", title: "A Decade in Green", category: "Sustainability", cols: 5, rows: 3, tone: "emerald" },
  { label: "2025 · eMag", title: "Quarter Three", category: "eMagazine", cols: 5, rows: 2, tone: "navy" },
  { label: "2024 · One Report", title: "Foundations", category: "One Reports", cols: 4, rows: 4, tone: "emerald" },
  { label: "2024 · Branding", title: "Northwind Identity", category: "Corporate Branding", cols: 8, rows: 4, tone: "navy" },
  { label: "2024 · Print", title: "Year in Pages", category: "Printing", cols: 6, rows: 3, tone: "emerald" },
  { label: "2023 · Print", title: "Investor Day Kit", category: "Printing", cols: 6, rows: 3, tone: "navy" },
  { label: "2023 · ESG", title: "The Long Now", category: "Sustainability", cols: 4, rows: 4, tone: "emerald" },
  { label: "2023 · One Report", title: "Building Years", category: "One Reports", cols: 8, rows: 4, tone: "navy" },
];

const TILE_BG: Record<Tone, string> = {
  navy: "var(--navy)", emerald: "var(--emerald)", mist: "var(--mist)", paper: "var(--paper)", paper2: "var(--paper-2)",
};

const CASE_STUDY_RESULTS = [
  ["248pp", "Final volume"],
  ["TH · EN", "Bilingual parity"],
  ["16 wk", "From brief to press"],
  ["One stop", "Concept to print"],
];

export function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState("All work");

  const filtered = activeFilter === "All work"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((it) => it.category === activeFilter);

  return (
    <div className="page-wrap">
      <Nav />

      {/* HEADER */}
      <section style={{ padding: "80px var(--page-x) 32px", display: "flex", justifyContent: "space-between", alignItems: "end", borderBottom: "1px solid var(--line)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>
            04 / Portfolio · 2009 — 2026
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(72px, 8vw, 108px)", lineHeight: 0.92, letterSpacing: "-.02em" }}>
            Selected<br />work, by{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>chapter.</em>
          </h1>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", textAlign: "right" }}>
          Showing {filtered.length} of 187<br />
          <span style={{ display: "inline-block", marginTop: 6 }}>View ▸ Grid</span>
        </div>
      </section>

      {/* FILTERS */}
      <div style={{ padding: "24px var(--page-x)", display: "flex", gap: 8, flexWrap: "wrap", borderBottom: "1px solid var(--line)", alignItems: "center" }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`tag${activeFilter === f ? " active" : ""}`}
          >
            {f}
          </button>
        ))}
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>Filter by year · industry ↓</span>
      </div>

      {/* GRID */}
      {filtered.length === 0 ? (
        <div style={{ padding: "120px var(--page-x)", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>
            No work in this category yet —{" "}
            <button onClick={() => setActiveFilter("All work")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--emerald)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>
              View all work →
            </button>
          </div>
        </div>
      ) : (
        <div style={{ padding: "40px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 16, gridAutoRows: "90px" }}>
          {filtered.map((item, i) => (
            <Link
              key={i}
              className="pf-tile"
              href={`/portfolio/${item.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
              style={{ gridColumn: `span ${item.cols}`, gridRow: `span ${item.rows}`, position: "relative", textDecoration: "none", overflow: "hidden", containerType: "size", background: TILE_BG[item.tone] }}
            >
              {/* typographic cover panel */}
              <span style={{ position: "absolute", inset: "5%", border: "1px solid var(--line-dark)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: 0, padding: "9% 7%" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "min(11px, 4cqi)", letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(246,244,239,.6)" }}>
                  {item.category}
                </span>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "min(52px, 14cqi)", lineHeight: 0.95, letterSpacing: "-.02em", color: "var(--paper)", marginTop: "6%" }}>
                  {item.title}
                </div>
              </div>
              {/* meta overlay */}
              <div style={{ position: "absolute", left: 14, bottom: 14, right: 14, display: "flex", justifyContent: "space-between", alignItems: "end", color: "var(--paper)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", textShadow: "0 1px 0 rgba(0,0,0,.4)", zIndex: 2 }}>
                <span>{item.label}</span>
                <span>↗</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* CASE STUDY — featured */}
      <SectionMarker left="Case Study · 2025 · SET100 / Annual Report" right="Open in detail ↓" />
      <div style={{ padding: "80px var(--page-x) 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>
            Featured · 248 pages · TH / EN
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(64px, 7vw, 96px)", lineHeight: 0.92, letterSpacing: "-.02em" }}>
            The Continuous{" "}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>Year.</em>
          </h2>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--gray)", maxWidth: "48ch" }}>
          A four-month engagement to rebuild a SET100 issuer&apos;s annual narrative from the ground up — moving from a chairman-led essay to a chapter-based report organised by stakeholder commitments. The final book ran to 248 pages, in both Thai and English, with a printed and eBook edition.
        </p>
      </div>

      {/* CASE STUDY SPREADS */}
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
        {CASE_STUDY_RESULTS.map(([n, l], i) => (
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
