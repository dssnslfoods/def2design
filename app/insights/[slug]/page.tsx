import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Photo } from "@/components/Figure";

// In production this would come from the CMS based on slug
export const metadata: Metadata = {
  title: "Writing the chairman's letter in 2026",
  description: "The most under-edited document in a corporation deserves more editorial discipline than any other page in the annual report.",
};

const CHAPTERS = [
  "The page nobody edits",
  "What it actually says",
  "Three things we cut",
  "A short style note",
  "The four-week edit",
];

const RELATED = [
  { d: "2026 · February", cat: "ESG", t: "From GRI to story: a four-step bridge.", min: "9 min", slug: "from-gri-to-story" },
  { d: "2025 · November", cat: "Typography", t: "Designing financial numbers — a typographic note.", min: "7 min", slug: "designing-financial-numbers" },
  { d: "2025 · September", cat: "Editorial", t: "Reading the One Report — what we actually do.", min: "5 min", slug: "reading-one-report" },
];

const SHARE_LINKS = ["Email", "LINE", "LinkedIn", "Copy link"];
const TAGS = ["Editorial", "Annual Report", "Practice", "Writing"];

export default function ArticlePage() {
  return (
    <div className="page-wrap">
      <Nav />

      {/* BREADCRUMB */}
      <div style={{ padding: "24px var(--page-x)", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>
          <Link href="/insights" style={{ color: "inherit", textDecoration: "none" }}>Insights</Link>
          {" "}<span style={{ color: "var(--gray-2)" }}>/</span>{" "}
          <span style={{ color: "var(--gray-2)" }}>Editorial</span>
          {" "}<span style={{ color: "var(--gray-2)" }}>/</span>{" "}
          <span style={{ color: "var(--emerald)" }}>Writing the chairman&apos;s letter in 2026</span>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>14 min · A · A+</div>
      </div>

      {/* MASTHEAD */}
      <section style={{ padding: "96px var(--page-x) 64px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 24, marginBottom: 48 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)" }}>Editorial · Essay</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", textAlign: "center" }}>2026 · March · Vol. XVII / 03</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", textAlign: "right" }}>3,200 Words</div>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(64px, 9vw, 120px)", lineHeight: 0.92, letterSpacing: "-.02em", textAlign: "center", maxWidth: "18ch", margin: "0 auto" }}>
          Writing the{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>chairman&apos;s letter</em>{" "}
          in 2026.
        </h1>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 24, lineHeight: 1.3, fontStyle: "italic", color: "var(--gray)", textAlign: "center", marginTop: 40, maxWidth: "48ch", marginLeft: "auto", marginRight: "auto" }}>
          The most under-edited document in a corporation deserves more design — and more editorial discipline — than any other page in the annual report.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, marginTop: 64, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>
          <span>By <span style={{ color: "var(--ink)" }}>The Founding Principal</span></span>
          <span>Photography <span style={{ color: "var(--ink)" }}>Studio archive</span></span>
          <span>14 min read</span>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div style={{ padding: 56 }}>
        <Photo src="/images/hero-proof.jpg" alt="Annotated proof of a chairman's letter, 2025 — the studio archive" aspectRatio="16/9" priority />
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginTop: 14 }}>
          Fig. 1 — Annotated proof of a chairman&apos;s letter, 2025. The studio archive.
        </div>
      </div>

      {/* BODY — three-column with sticky sidebars */}
      <div style={{ padding: "40px var(--page-x) 96px", display: "grid", gridTemplateColumns: "200px 1fr 200px", gap: 64 }}>
        {/* Sticky chapter index */}
        <aside style={{ position: "sticky", top: 40, alignSelf: "start" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 16 }}>Chapters</div>
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {CHAPTERS.map((t, i) => (
              <li key={t} style={{ borderTop: i === 0 ? "1px solid var(--ink)" : "1px solid var(--line)", padding: "10px 0", fontFamily: "var(--font-mono)", fontSize: 11, color: i === 1 ? "var(--emerald)" : "var(--gray)", display: "flex", gap: 10 }}>
                <span style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ textTransform: "none", letterSpacing: 0 }}>{t}</span>
              </li>
            ))}
          </ol>
        </aside>

        {/* Article body */}
        <article style={{ maxWidth: 680, justifySelf: "center" }}>
          {/* Drop cap paragraph */}
          <div style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1.15, letterSpacing: "-.005em", marginBottom: 32, overflow: "hidden" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 96, lineHeight: 0.7, float: "left", marginRight: 14, marginTop: 14, color: "var(--emerald)", fontStyle: "italic" }}>T</span>
            here is, in every annual report, one document that is not really designed and not really edited. It bears the signature of the most senior person in the company. It is the first thing most investors read and the last thing most editors touch. It is the chairman&apos;s letter — and it is, by some distance, the most under-edited page in modern corporate communication.
          </div>

          <p style={{ fontSize: 18, color: "var(--ink)", lineHeight: 1.7, marginTop: 24 }}>
            Sixteen years of practice has taught us that this is not because chairmen are bad writers, or because their assistants are. It is because nobody owns the page. It arrives late. It is signed off by someone who has not read the rest of the report. It is &ldquo;polished&rdquo; by counsel. By the time it is set in type, every interesting sentence has been replaced with a careful one.
          </p>

          <p style={{ fontSize: 18, color: "var(--ink)", lineHeight: 1.7 }}>
            We think this is fixable, and we think it is worth fixing. Here is what we have learned about doing the editing properly.
          </p>

          {/* Section break */}
          <div style={{ margin: "56px 0 32px", display: "flex", alignItems: "center", gap: 16, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)" }}>
            <span style={{ flex: 1, height: 1, background: "var(--line)", display: "block" }} />
            <span>02 — What it actually says</span>
            <span style={{ flex: 1, height: 1, background: "var(--line)", display: "block" }} />
          </div>

          <p style={{ fontSize: 18, color: "var(--ink)", lineHeight: 1.7 }}>
            Read fifty chairmen&apos;s letters back to back, and a pattern emerges. They all say a version of the same five things, in nearly the same order: the year was challenging, the company performed well in the circumstances, our people are our greatest asset, we are committed to sustainability, the future is bright. This is not a critique of any particular letter. It is a critique of a genre.
          </p>

          {/* Pull quote */}
          <blockquote className="pull-quote">
            &ldquo;The chairman&apos;s letter is the only page in the annual report a board member actually reads twice.&rdquo;
            <footer style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginTop: 24, fontStyle: "normal" }}>
              — A non-executive director, 2023, in conversation with the studio
            </footer>
          </blockquote>

          <p style={{ fontSize: 18, color: "var(--ink)", lineHeight: 1.7 }}>
            The audience for the chairman&apos;s letter is not the analyst. The analyst will read the MD&amp;A. The audience is the long-term shareholder, the new board member, the prospective employee, the journalist looking for a quote. They want to know what the company actually thinks about the world.
          </p>

          {/* Inline figure */}
          <div style={{ margin: "48px 0" }}>
            <Photo src="/images/before-after.jpg" alt="Before and after of a chairman's letter, edited under the studio's four-week process, 2024" aspectRatio="4/3" />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginTop: 14 }}>
              Fig. 2 — Before and after of a chairman&apos;s letter, edited under the studio&apos;s four-week process. 2024.
            </div>
          </div>

          {/* Section break */}
          <div style={{ margin: "56px 0 32px", display: "flex", alignItems: "center", gap: 16, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)" }}>
            <span style={{ flex: 1, height: 1, background: "var(--line)", display: "block" }} />
            <span>03 — Three things we cut</span>
            <span style={{ flex: 1, height: 1, background: "var(--line)", display: "block" }} />
          </div>

          <p style={{ fontSize: 18, color: "var(--ink)", lineHeight: 1.7 }}>
            In sixteen years of editing chairmen&apos;s letters, three categories of sentence have been deleted from almost every draft we have worked on: the throat-clearing first paragraph, the abstract sustainability paragraph, and the closing thank-you to everyone. We replace them with three different things: a specific event from the year, a sentence on one — only one — ESG commitment, and a thank you to one person, by name.
          </p>

          <p style={{ fontSize: 18, color: "var(--ink)", lineHeight: 1.7 }}>
            The result is a letter that is shorter, more specific, and more frequently quoted in the press. None of this is editorial magic. It is editorial discipline — the same discipline a good magazine editor applies to a feature story. The studio is, in many ways, a magazine that publishes one issue a year.
          </p>

          {/* Continue */}
          <div style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid var(--ink)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>Continued in chapter 04 →</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>10 more minutes</div>
          </div>
        </article>

        {/* Right rail — share */}
        <aside style={{ position: "sticky", top: 40, alignSelf: "start" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 16 }}>Share</div>
          <div style={{ borderTop: "1px solid var(--ink)" }}>
            {SHARE_LINKS.map((t) => (
              <div key={t} style={{ padding: "12px 0", borderBottom: "1px solid var(--line)", color: "var(--gray)", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", cursor: "pointer" }}>
                <span>{t}</span><span>↗</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 14 }}>Filed under</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {TAGS.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </aside>
      </div>

      {/* RELATED */}
      <SectionMarker left="Continue reading" right="Three related essays" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {RELATED.map((a) => (
          <Link key={a.slug} href={`/insights/${a.slug}`} style={{ textDecoration: "none", color: "inherit", borderTop: "1px solid var(--ink)", paddingTop: 24, display: "block" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 24 }}>
              <span style={{ color: "var(--emerald)" }}>{a.cat}</span>
              <span>{a.d}</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, lineHeight: 1.15, marginBottom: 24 }}>{a.t}</h3>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>{a.min} · Read →</div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
