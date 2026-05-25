import React from "react";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────
   Figure — the production replacement for the prototype `.ph`
   striped placeholders. Renders genuine, on-brand visuals:
   • <Photo>        real photography (next/image)
   • <ReportCover>  typographic report cover (the studio's deliverable)
   • <ReportSpread> two-page report spread mock
   • <Infographic>  typographic data spread
   • <StudioMap>    stylized location block
   ────────────────────────────────────────────────────────────── */

type Tone = "paper" | "paper2" | "navy" | "emerald" | "mist";

const TONES: Record<Tone, { bg: string; fg: string; muted: string; accent: string; line: string }> = {
  paper: { bg: "var(--paper)", fg: "var(--ink)", muted: "var(--gray)", accent: "var(--emerald)", line: "var(--line)" },
  paper2: { bg: "var(--paper-2)", fg: "var(--ink)", muted: "var(--gray)", accent: "var(--emerald)", line: "var(--line)" },
  mist: { bg: "var(--mist)", fg: "var(--ink)", muted: "var(--gray)", accent: "var(--emerald)", line: "var(--line)" },
  navy: { bg: "var(--navy)", fg: "var(--paper)", muted: "var(--paper-fade)", accent: "var(--emerald-2)", line: "var(--line-dark)" },
  emerald: { bg: "var(--emerald)", fg: "var(--paper)", muted: "rgba(246,244,239,.7)", accent: "var(--paper)", line: "var(--line-dark)" },
};

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  letterSpacing: ".14em",
};

/* ─── Photo ─────────────────────────────────────────────────── */
export function Photo({
  src,
  alt,
  aspectRatio = "4/3",
  style,
  priority = false,
}: {
  src: string;
  alt: string;
  aspectRatio?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}) {
  return (
    <div className="zoomable" style={{ position: "relative", width: "100%", aspectRatio, overflow: "hidden", background: "var(--paper-2)", ...style }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover", filter: "saturate(.85) contrast(.98)" }}
        priority={priority}
      />
    </div>
  );
}

/* ─── ReportCover ───────────────────────────────────────────── */
export function ReportCover({
  title,
  italicWord,
  eyebrow,
  kicker = "One Report",
  year = "2025",
  tone = "paper",
  aspectRatio = "3/4",
  alt,
  style,
}: {
  title: string;
  italicWord?: string;
  eyebrow: string;
  kicker?: string;
  year?: string;
  tone?: Tone;
  aspectRatio?: string;
  alt?: string;
  style?: React.CSSProperties;
}) {
  const t = TONES[tone];
  return (
    <div
      role="img"
      aria-label={alt ?? `${title} — ${kicker}, ${year}`}
      style={{ containerType: "inline-size", width: "100%", aspectRatio, background: t.bg, color: t.fg, position: "relative", overflow: "hidden", ...style }}
    >
      {/* inset hairline frame */}
      <div style={{ position: "absolute", inset: "4.5cqi", border: `1px solid ${t.line}`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, padding: "9cqi 8cqi", display: "flex", flexDirection: "column", height: "100%" }}>
        {/* eyebrow */}
        <div style={{ ...mono, fontSize: "3cqi", color: t.muted, display: "flex", justifyContent: "space-between" }}>
          <span>{eyebrow}</span>
          <span>{year}</span>
        </div>

        {/* title */}
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "14cqi", lineHeight: 0.95, letterSpacing: "-.02em" }}>
            {title}
            {italicWord && (
              <>
                {" "}
                <em style={{ fontStyle: "italic", color: t.accent }}>{italicWord}</em>
              </>
            )}
          </div>
        </div>

        {/* footer */}
        <div style={{ borderTop: `1px solid ${t.line}`, paddingTop: "3.5cqi", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "4.5cqi" }}>Def to Design</span>
          <span style={{ ...mono, fontSize: "2.6cqi", color: t.muted }}>{kicker}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── ReportSpread ──────────────────────────────────────────── */
function FauxLines({ count, color, widths }: { count: number; color: string; widths?: number[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.2cqi", marginTop: "3cqi" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            height: "1.1cqi",
            background: color,
            opacity: 0.5,
            width: `${widths ? widths[i % widths.length] : 92 - (i % 3) * 9}%`,
            display: "block",
          }}
        />
      ))}
    </div>
  );
}

export function ReportSpread({
  heading,
  italicWord,
  eyebrow,
  page = "12 — 13",
  tone = "paper",
  aspectRatio = "4/3",
  rightStat,
  rightStatLabel,
  alt,
  style,
}: {
  heading: string;
  italicWord?: string;
  eyebrow: string;
  page?: string;
  tone?: Tone;
  aspectRatio?: string;
  rightStat?: string;
  rightStatLabel?: string;
  alt?: string;
  style?: React.CSSProperties;
}) {
  const t = TONES[tone];
  return (
    <div
      role="img"
      aria-label={alt ?? `${heading} — report spread`}
      style={{ containerType: "inline-size", width: "100%", aspectRatio, background: t.bg, position: "relative", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", ...style }}
    >
      {/* spine */}
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "3cqi", transform: "translateX(-50%)", background: "linear-gradient(90deg, transparent, rgba(0,0,0,.08) 50%, transparent)", zIndex: 2, pointerEvents: "none" }} />

      {/* left page */}
      <div style={{ padding: "6cqi 5cqi", color: t.fg, display: "flex", flexDirection: "column" }}>
        <div style={{ ...mono, fontSize: "2.4cqi", color: t.muted, display: "flex", justifyContent: "space-between" }}>
          <span>{eyebrow}</span>
          <span>P. {page.split("—")[0]?.trim()}</span>
        </div>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: "8cqi", lineHeight: 1, marginTop: "5cqi", letterSpacing: "-.015em" }}>
          {heading}
          {italicWord && (
            <>
              {" "}
              <em style={{ fontStyle: "italic", color: t.accent }}>{italicWord}</em>
            </>
          )}
        </div>
        <FauxLines count={5} color={t.fg} />
      </div>

      {/* right page */}
      <div style={{ padding: "6cqi 5cqi", color: t.fg, display: "flex", flexDirection: "column" }}>
        <div style={{ ...mono, fontSize: "2.4cqi", color: t.muted, textAlign: "right" }}>P. {page.split("—")[1]?.trim()}</div>
        {rightStat ? (
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "20cqi", lineHeight: 0.9, color: t.accent }}>{rightStat}</div>
            <div style={{ ...mono, fontSize: "2.6cqi", color: t.muted, marginTop: "2cqi" }}>{rightStatLabel}</div>
          </div>
        ) : (
          <>
            <div style={{ width: "100%", aspectRatio: "4/3", background: tone === "navy" ? "var(--navy-2)" : "var(--mist)", marginTop: "4cqi" }} />
            <FauxLines count={3} color={t.fg} />
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Infographic ───────────────────────────────────────────── */
export function Infographic({
  stats,
  tone = "navy",
  aspectRatio = "4/3",
  eyebrow = "Fig. — Stakeholder commitments",
  alt,
  style,
}: {
  stats: [string, string][];
  tone?: Tone;
  aspectRatio?: string;
  eyebrow?: string;
  alt?: string;
  style?: React.CSSProperties;
}) {
  const t = TONES[tone];
  return (
    <div
      role="img"
      aria-label={alt ?? eyebrow}
      style={{ containerType: "inline-size", width: "100%", aspectRatio, background: t.bg, color: t.fg, position: "relative", overflow: "hidden", padding: "5cqi", display: "flex", flexDirection: "column", ...style }}
    >
      <div style={{ ...mono, fontSize: "2.4cqi", color: t.muted, marginBottom: "auto" }}>{eyebrow}</div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(stats.length, 3)}, 1fr)`, gap: "4cqi", marginTop: "4cqi" }}>
        {stats.map(([n, l]) => (
          <div key={l} style={{ borderTop: `1px solid ${t.line}`, paddingTop: "2cqi" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "11cqi", lineHeight: 1, color: t.accent }}>{n}</div>
            <div style={{ ...mono, fontSize: "2cqi", color: t.muted, marginTop: "1.5cqi" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── ImageBand — full-bleed editorial photo + caption ──────── */
export function ImageBand({
  src,
  alt,
  caption,
  height = "clamp(240px, 34vh, 420px)",
}: {
  src: string;
  alt: string;
  caption?: string;
  height?: string;
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div className="zoomable" style={{ position: "relative", width: "100%", height, overflow: "hidden", background: "var(--paper-2)" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", filter: "saturate(.85) contrast(.98)" }}
        />
      </div>
      {caption && (
        <figcaption
          style={{
            padding: "14px var(--page-x) 0",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--gray)",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ─── StudioMap ─────────────────────────────────────────────── */
export function StudioMap({ aspectRatio = "16/10", style }: { aspectRatio?: string; style?: React.CSSProperties }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio, overflow: "hidden", ...style }}>
      <Image
        src="/images/map-bangkok.jpg"
        alt="Studio location — Sathorn, Bangkok"
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        style={{ objectFit: "cover", filter: "saturate(.55) contrast(.95) brightness(1.02)" }}
      />
      {/* paper tint + pin */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(246,244,239,.12), rgba(10,31,61,.28))" }} />
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--emerald)", boxShadow: "0 0 0 6px rgba(31,107,79,.25)" }} />
        <span style={{ ...mono, fontSize: 10, color: "var(--paper)", textShadow: "0 1px 2px rgba(0,0,0,.5)" }}>Sathorn · Bangkok</span>
      </div>
    </div>
  );
}
