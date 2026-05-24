import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Photo } from "@/components/Figure";

/* ──────────────────────────────────────────────────────────────
   Article content model. In production this comes from the CMS.
   ────────────────────────────────────────────────────────────── */
type Block =
  | { t: "p"; text: string; dropcap?: boolean }
  | { t: "break"; n: string; label: string }
  | { t: "quote"; text: string; cite: string }
  | { t: "figure"; img: string; caption: string };

interface Article {
  category: string;
  date: string;
  vol: string;
  words: string;
  titleLead: string;
  titleEm: string;
  titleTail?: string;
  dek: string;
  author: string;
  photographer: string;
  readMin: string;
  hero: string;
  heroCaption: string;
  chapters: string[];
  tags: string[];
  body: Block[];
  metaTitle: string;
}

const ARTICLES: Record<string, Article> = {
  /* ─── ESG essay ─────────────────────────────────────────────── */
  "from-gri-to-story": {
    metaTitle: "From GRI to story: a four-step bridge",
    category: "ESG · Essay",
    date: "2026 · February · Vol. XVII / 02",
    vol: "2026 · FEBRUARY · VOL. XVII / 02",
    words: "2,400 WORDS",
    titleLead: "From GRI to",
    titleEm: "story:",
    titleTail: "a four-step bridge.",
    dek: "Most sustainability reports read like spreadsheets. They don't have to — and as ESG becomes a board-level priority, they can't afford to. A studio method for turning material topics into a narrative the whole organization can read.",
    author: "The Sustainability Lead",
    photographer: "Studio archive",
    readMin: "9 min read",
    hero: "/images/feature-esg.jpg",
    heroCaption: "Fig. 1 — A material-topic map for a SET-listed sustainability report, cross-referenced to GRI and IFRS S1/S2. The studio archive, 2025.",
    chapters: [
      "Why ESG stopped being optional",
      "The cost of an unread report",
      "From GRI index to narrative",
      "The four-step bridge",
      "What good looks like",
    ],
    tags: ["ESG", "Sustainability", "GRI", "IFRS S1/S2"],
    body: [
      {
        t: "p",
        dropcap: true,
        text: "For most of the last decade, a sustainability report was something a Thai listed company produced because someone asked for it — the SET, an index, a large institutional shareholder. It sat at the back of the annual report, ran to a hundred pages of tables, and was read by almost no one. That era is over.",
      },
      {
        t: "p",
        text: "ESG is no longer a disclosure exercise at the margin of the business. It now sits at the centre of how a company raises capital, manages risk, attracts talent and earns the trust of its customers and regulators. The question for a board in 2026 is not whether to report on sustainability — it is whether the report communicates anything at all.",
      },
      { t: "break", n: "01", label: "Why ESG stopped being optional" },
      {
        t: "p",
        text: "Three forces have moved ESG from the periphery to the boardroom. The first is capital. Global and regional investors now screen for ESG performance before they allocate; a weak or unreadable sustainability story raises the perceived risk of an issuer, and with it the cost of capital. SET ESG Ratings, the MSCI and FTSE index families, and the expectations of foreign institutional holders all turn sustainability disclosure into a financial variable.",
      },
      {
        t: "p",
        text: "The second is regulation. Thailand's 56-1 One Report already folds sustainability into mandatory corporate disclosure, and the move toward IFRS S1 and S2 — the ISSB's global baseline for sustainability and climate reporting — means the bar for credible disclosure rises every year. What was once voluntary narrative is becoming assured, comparable data.",
      },
      {
        t: "p",
        text: "The third is people. Employees, customers and communities increasingly choose the companies they work for, buy from and live beside on the basis of how those companies behave. A sustainability report is, among other things, the most public statement a company makes about what it values.",
      },
      { t: "break", n: "02", label: "The cost of an unread report" },
      {
        t: "p",
        text: "And yet most sustainability reports fail at the one thing they exist to do: communicate. They are written for the rating analyst who scans for a single data point, not for the human being who wants to understand the company. They are long, dense, and organised around the disclosure framework rather than the topics that matter. The result satisfies a checklist and moves no one.",
      },
      {
        t: "quote",
        text: "A sustainability report that no one reads is not a low-risk document. It is a missed opportunity to tell the most important story a company has — about its own future.",
        cite: "— The studio, on ESG communication",
      },
      {
        t: "p",
        text: "The cost of this is real, and it compounds. An ESG story that cannot be understood cannot be rewarded — not by investors, not by employees, not by the index. The audience that matters most to a company's future tends to read its sustainability report least. Fixing that is not a design luxury. It is strategy.",
      },
      { t: "break", n: "03", label: "From GRI index to narrative" },
      {
        t: "p",
        text: "The instinct of most reporting teams is to start from the framework — to open the GRI, SASB or TCFD index and work down it, topic by topic, filling each box. The framework is essential; it is what makes disclosure complete and comparable. But it is the wrong place to begin the writing. A framework is an index, not a story. Organise a report around it and you get a reference document, not a piece of communication.",
      },
      {
        t: "p",
        text: "The studio's method inverts the order. We begin from the material topics that genuinely move the company's stakeholders, build a narrative around them, and then map that narrative back to the framework. The rating agency still finds every disclosure it needs; the rest of the world finds something it can read. The two goals are not in tension — they are simply sequenced correctly.",
      },
      {
        t: "figure",
        img: "/images/adv-tools.jpg",
        caption: "Fig. 2 — A narrative organised by material topic, then mapped back to GRI and IFRS S1/S2 disclosure points. The studio archive, 2025.",
      },
      { t: "break", n: "04", label: "The four-step bridge" },
      {
        t: "p",
        text: "Between a GRI index and a report a stakeholder will actually read, there is a bridge — and it has four steps. First, materiality: a disciplined assessment of which topics truly matter to the business and its stakeholders, and the courage to foreground a few rather than flatten everything to the same weight. Second, evidence: the metrics, targets and year-on-year data that turn claims into accountability. Third, narrative: a chapter structure built around stakeholders and commitments, not framework headings. Fourth, design: typographic infographics that make a complex number legible at a glance.",
      },
      {
        t: "p",
        text: "Each step is ordinary on its own. Together, in order, they are the difference between a report that is filed and a report that is read — and, increasingly, between a company that is merely rated and one that is genuinely understood.",
      },
      { t: "break", n: "05", label: "What good looks like" },
      {
        t: "p",
        text: "A good sustainability report does three things at once. It satisfies the framework, so the disclosure is complete and assurable. It reads as a story, so a board member, an analyst and a new employee all take away the same understanding. And it looks like the company means it — because the care visible in the design of a report is read, fairly or not, as a proxy for the care behind the commitments it describes.",
      },
      {
        t: "p",
        text: "For a Thai listed company in 2026, the sustainability report is no longer the document at the back of the file. It is one of the most strategic things the organization will publish about its own future. It deserves to be written, designed and edited like it.",
      },
    ],
  },

  /* ─── Chairman's letter essay (default) ─────────────────────── */
  "writing-the-chairmans-letter-2026": {
    metaTitle: "Writing the chairman's letter in 2026",
    category: "Editorial · Essay",
    date: "2026 · March · Vol. XVII / 03",
    vol: "2026 · MARCH · VOL. XVII / 03",
    words: "3,200 WORDS",
    titleLead: "Writing the",
    titleEm: "chairman's letter",
    titleTail: "in 2026.",
    dek: "The most under-edited document in a corporation deserves more design — and more editorial discipline — than any other page in the annual report.",
    author: "The Founding Principal",
    photographer: "Studio archive",
    readMin: "14 min read",
    hero: "/images/hero-proof.jpg",
    heroCaption: "Fig. 1 — Annotated proof of a chairman's letter, 2025. The studio archive.",
    chapters: [
      "The page nobody edits",
      "What it actually says",
      "Three things we cut",
      "A short style note",
      "The four-week edit",
    ],
    tags: ["Editorial", "Annual Report", "Practice", "Writing"],
    body: [
      {
        t: "p",
        dropcap: true,
        text: "There is, in every annual report, one document that is not really designed and not really edited. It bears the signature of the most senior person in the company. It is the first thing most investors read and the last thing most editors touch. It is the chairman's letter — and it is, by some distance, the most under-edited page in modern corporate communication.",
      },
      {
        t: "p",
        text: "Sixteen years of practice has taught us that this is not because chairmen are bad writers. It is because nobody owns the page. It arrives late. It is signed off by someone who has not read the rest of the report. It is polished by counsel. By the time it is set in type, every interesting sentence has been replaced with a careful one.",
      },
      { t: "break", n: "02", label: "What it actually says" },
      {
        t: "p",
        text: "Read fifty chairmen's letters back to back, and a pattern emerges. They all say a version of the same five things, in nearly the same order: the year was challenging, the company performed well in the circumstances, our people are our greatest asset, we are committed to sustainability, the future is bright. This is not a critique of any particular letter. It is a critique of a genre.",
      },
      {
        t: "quote",
        text: "The chairman's letter is the only page in the annual report a board member actually reads twice.",
        cite: "— A non-executive director, 2023, in conversation with the studio",
      },
      {
        t: "p",
        text: "The audience for the chairman's letter is not the analyst. The analyst will read the MD&A. The audience is the long-term shareholder, the new board member, the prospective employee, the journalist looking for a quote. They want to know what the company actually thinks about the world.",
      },
      {
        t: "figure",
        img: "/images/before-after.jpg",
        caption: "Fig. 2 — Before and after of a chairman's letter, edited under the studio's four-week process. 2024.",
      },
      { t: "break", n: "03", label: "Three things we cut" },
      {
        t: "p",
        text: "In sixteen years of editing chairmen's letters, three categories of sentence have been deleted from almost every draft: the throat-clearing first paragraph, the abstract sustainability paragraph, and the closing thank-you to everyone. We replace them with three different things: a specific event from the year, a sentence on one — only one — ESG commitment, and a thank you to one person, by name.",
      },
      {
        t: "p",
        text: "The result is a letter that is shorter, more specific, and more frequently quoted in the press. None of this is editorial magic. It is editorial discipline — the same discipline a good magazine editor applies to a feature story. The studio is, in many ways, a magazine that publishes one issue a year.",
      },
    ],
  },
};

const SHARE_LINKS = ["Email", "LINE", "LinkedIn", "Copy link"];

const RELATED = [
  { d: "2026 · March", cat: "Editorial", t: "Writing the chairman's letter in 2026.", min: "14 min", slug: "writing-the-chairmans-letter-2026" },
  { d: "2025 · November", cat: "Typography", t: "Designing financial numbers — a typographic note.", min: "7 min", slug: "designing-financial-numbers" },
  { d: "2025 · September", cat: "Editorial", t: "Reading the One Report — what we actually do.", min: "5 min", slug: "reading-one-report" },
];

function getArticle(slug: string): Article {
  return ARTICLES[slug] ?? ARTICLES["writing-the-chairmans-letter-2026"];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  return { title: a.metaTitle, description: a.dek };
}

const monoStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "var(--gray)",
};

function renderBlock(b: Block, i: number) {
  switch (b.t) {
    case "p":
      if (b.dropcap) {
        return (
          <div key={i} style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1.15, letterSpacing: "-.005em", marginBottom: 32, overflow: "hidden" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 96, lineHeight: 0.7, float: "left", marginRight: 14, marginTop: 14, color: "var(--emerald)", fontStyle: "italic" }}>
              {b.text.charAt(0)}
            </span>
            {b.text.slice(1)}
          </div>
        );
      }
      return (
        <p key={i} style={{ fontSize: 18, color: "var(--ink)", lineHeight: 1.7, marginTop: 24 }}>
          {b.text}
        </p>
      );
    case "break":
      return (
        <div key={i} style={{ margin: "56px 0 32px", display: "flex", alignItems: "center", gap: 16, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--emerald)" }}>
          <span style={{ flex: 1, height: 1, background: "var(--line)", display: "block" }} />
          <span>{b.n} — {b.label}</span>
          <span style={{ flex: 1, height: 1, background: "var(--line)", display: "block" }} />
        </div>
      );
    case "quote":
      return (
        <blockquote key={i} className="pull-quote">
          &ldquo;{b.text}&rdquo;
          <footer style={{ ...monoStyle, marginTop: 24, fontStyle: "normal" }}>{b.cite}</footer>
        </blockquote>
      );
    case "figure":
      return (
        <div key={i} style={{ margin: "48px 0" }}>
          <Photo src={b.img} alt={b.caption} aspectRatio="4/3" />
          <div style={{ ...monoStyle, marginTop: 14 }}>{b.caption}</div>
        </div>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);

  return (
    <div className="page-wrap">
      <Nav />

      {/* BREADCRUMB */}
      <div style={{ padding: "24px var(--page-x)", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={monoStyle}>
          <Link href="/insights" style={{ color: "inherit", textDecoration: "none" }}>Insights</Link>
          {" "}<span style={{ color: "var(--gray-2)" }}>/</span>{" "}
          <span style={{ color: "var(--gray-2)" }}>{a.category.split(" · ")[0]}</span>
          {" "}<span style={{ color: "var(--gray-2)" }}>/</span>{" "}
          <span style={{ color: "var(--emerald)" }}>{a.metaTitle}</span>
        </div>
        <div style={monoStyle}>{a.readMin.replace(" read", "")} · A · A+</div>
      </div>

      {/* MASTHEAD */}
      <section style={{ padding: "96px var(--page-x) 64px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 24, marginBottom: 48 }}>
          <div style={{ ...monoStyle, color: "var(--emerald)" }}>{a.category}</div>
          <div style={{ ...monoStyle, textAlign: "center" }}>{a.vol}</div>
          <div style={{ ...monoStyle, textAlign: "right" }}>{a.words}</div>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 0.92, letterSpacing: "-.02em", textAlign: "center", maxWidth: "18ch", margin: "0 auto" }}>
          {a.titleLead}{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>{a.titleEm}</em>
          {a.titleTail ? <> {a.titleTail}</> : null}
        </h1>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 24, lineHeight: 1.3, fontStyle: "italic", color: "var(--gray)", textAlign: "center", marginTop: 40, maxWidth: "52ch", marginLeft: "auto", marginRight: "auto" }}>
          {a.dek}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, marginTop: 64, ...monoStyle }}>
          <span>By <span style={{ color: "var(--ink)" }}>{a.author}</span></span>
          <span>Photography <span style={{ color: "var(--ink)" }}>{a.photographer}</span></span>
          <span>{a.readMin}</span>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div style={{ padding: 56 }}>
        <Photo src={a.hero} alt={a.heroCaption} aspectRatio="16/9" priority />
        <div style={{ ...monoStyle, marginTop: 14 }}>{a.heroCaption}</div>
      </div>

      {/* BODY */}
      <div style={{ padding: "40px var(--page-x) 96px", display: "grid", gridTemplateColumns: "200px 1fr 200px", gap: 64 }}>
        {/* chapter index */}
        <aside style={{ position: "sticky", top: 40, alignSelf: "start" }}>
          <div style={{ ...monoStyle, marginBottom: 16 }}>Chapters</div>
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {a.chapters.map((t, i) => (
              <li key={t} style={{ borderTop: i === 0 ? "1px solid var(--ink)" : "1px solid var(--line)", padding: "10px 0", fontFamily: "var(--font-mono)", fontSize: 11, color: i === 0 ? "var(--emerald)" : "var(--gray)", display: "flex", gap: 10 }}>
                <span style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ textTransform: "none", letterSpacing: 0 }}>{t}</span>
              </li>
            ))}
          </ol>
        </aside>

        {/* article body */}
        <article style={{ maxWidth: 680, justifySelf: "center" }}>
          {a.body.map(renderBlock)}
          <div style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid var(--ink)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={monoStyle}>End of essay</div>
            <div style={monoStyle}>{a.readMin}</div>
          </div>
        </article>

        {/* share rail */}
        <aside style={{ position: "sticky", top: 40, alignSelf: "start" }}>
          <div style={{ ...monoStyle, marginBottom: 16 }}>Share</div>
          <div style={{ borderTop: "1px solid var(--ink)" }}>
            {SHARE_LINKS.map((t) => (
              <div key={t} style={{ padding: "12px 0", borderBottom: "1px solid var(--line)", color: "var(--gray)", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", cursor: "pointer" }}>
                <span>{t}</span><span>↗</span>
              </div>
            ))}
          </div>
          <div style={{ ...monoStyle, marginTop: 32, marginBottom: 14 }}>Filed under</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {a.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </aside>
      </div>

      {/* RELATED */}
      <SectionMarker left="Continue reading" right="Three related essays" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {RELATED.filter((r) => r.slug !== slug).slice(0, 3).map((r) => (
          <Link key={r.slug} href={`/insights/${r.slug}`} style={{ textDecoration: "none", color: "inherit", borderTop: "1px solid var(--ink)", paddingTop: 24, display: "block" }}>
            <div style={{ display: "flex", justifyContent: "space-between", ...monoStyle, marginBottom: 24 }}>
              <span style={{ color: "var(--emerald)" }}>{r.cat}</span>
              <span>{r.d}</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, lineHeight: 1.15, marginBottom: 24 }}>{r.t}</h3>
            <div style={monoStyle}>{r.min} · Read →</div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
