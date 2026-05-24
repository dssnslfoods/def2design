"use client";

import React from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dictionaries";

interface FooterProps {
  dark?: boolean;
}

export function Footer({ dark = false }: FooterProps) {
  const locale = useLocale() as Locale;
  const t = getDict(locale).footer;

  const fg = dark ? "var(--paper)" : "var(--ink)";
  const muted = dark ? "var(--paper-fade)" : "var(--gray)";
  const borderColor = dark ? "var(--line-dark)" : "var(--line)";

  const linkStyle: React.CSSProperties = {
    color: muted,
    textDecoration: "none",
    transition: "color var(--duration-fast) var(--ease)",
  };

  const studioLinks = [
    { label: t.links.About, href: "/about" },
    { label: t.links.Process, href: "/services" },
    { label: t.links.Insights, href: "/insights" },
    { label: t.links.Careers, href: "/contact" },
  ];
  const serviceLinks = [
    { label: t.links.OneReport, href: "/services/one-report" },
    { label: t.links.AnnualReport, href: "/services/annual-report" },
    { label: t.links.Sustainability, href: "/services/sustainability" },
    { label: t.links.eMagazine, href: "/services/emagazine" },
  ];
  const contactLinks = [
    { label: "02 935 9702", href: "tel:+6629359702" },
    { label: "095 536 1574", href: "tel:+66955361574" },
    { label: "contactd2d@def2design.com", href: "mailto:contactd2d@def2design.com" },
    { label: "Ladprao · Bangkok 10240", href: "https://www.def2design.com" },
  ];

  const heading = (text: string) => (
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: ".14em", color: fg, marginBottom: 14 }}>
      {text}
    </div>
  );

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
        <div style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: fg, marginBottom: 10, lineHeight: 1 }}>
          Def to Design
        </div>
        <p>
          {t.tagline}
          <br />
          {t.copyright}
        </p>
      </div>

      {/* Studio */}
      <div>
        {heading(t.studio)}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 2 }}>
          {studioLinks.map((l) => (
            <li key={l.href + l.label}>
              <Link href={l.href} style={linkStyle}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        {heading(t.services)}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 2 }}>
          {serviceLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} style={linkStyle}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact — external/protocol links use plain anchors */}
      <div>
        {heading(t.contact)}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 2 }}>
          {contactLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} style={linkStyle}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
