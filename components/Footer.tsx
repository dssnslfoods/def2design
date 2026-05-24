import React from "react";
import Link from "next/link";

const FOOTER_COLS = [
  {
    heading: "Studio",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/services" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/contact#careers" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "One Report", href: "/services/one-report" },
      { label: "Annual Report", href: "/services/annual-report" },
      { label: "Sustainability", href: "/services/sustainability" },
      { label: "eMagazine", href: "/services/emagazine" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "02 935 9702", href: "tel:+6629359702" },
      { label: "095 536 1574", href: "tel:+66955361574" },
      { label: "contactd2d@def2design.com", href: "mailto:contactd2d@def2design.com" },
      { label: "Ladprao · Bangkok 10240", href: "https://www.def2design.com" },
    ],
  },
];

interface FooterProps {
  dark?: boolean;
}

export function Footer({ dark = false }: FooterProps) {
  const fg = dark ? "var(--paper)" : "var(--ink)";
  const muted = dark ? "var(--paper-fade)" : "var(--gray)";
  const borderColor = dark ? "var(--line-dark)" : "var(--line)";

  return (
    <footer
      style={{
        padding: "56px var(--page-x)",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: 32,
        borderTop: `1px solid ${borderColor}`,
        fontSize: 13,
        color: muted,
        background: dark ? "var(--navy)" : "var(--paper)",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 32,
            color: fg,
            marginBottom: 10,
            lineHeight: 1,
          }}
        >
          Def to Design
        </div>
        <p>
          Striking design. Stylish concept.
          <br />
          © 2010–2026 · Def to Design Co., Ltd.
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          {["TH", "EN"].map((lang) => (
            <span
              key={lang}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                cursor: "pointer",
                color: muted,
              }}
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {FOOTER_COLS.map((col) => (
        <div key={col.heading}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: ".14em",
              color: fg,
              marginBottom: 14,
            }}
          >
            {col.heading}
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 2 }}>
            {col.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={{
                    color: muted,
                    textDecoration: "none",
                    transition: "color var(--duration-fast) var(--ease)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
