"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dictionaries";
import { Btn } from "./Button";

const NAV_HREFS = [
  { key: "Home", href: "/" },
  { key: "About", href: "/about" },
  { key: "Services", href: "/services" },
  { key: "Portfolio", href: "/portfolio" },
  { key: "Insights", href: "/insights" },
  { key: "Contact", href: "/contact" },
] as const;

interface NavProps {
  dark?: boolean;
}

export function Nav({ dark = false }: NavProps) {
  const pathname = usePathname(); // locale-stripped, e.g. "/about"
  const locale = useLocale() as Locale;
  const t = getDict(locale).nav;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const fg = dark && !scrolled ? "var(--paper)" : "var(--ink)";
  const muted = dark && !scrolled ? "var(--paper-dim)" : "var(--gray)";
  const borderColor = dark && !scrolled ? "var(--line-dark)" : "var(--line)";
  const bg = scrolled ? "var(--paper)" : dark ? "var(--navy)" : "var(--paper)";

  const LangToggle = ({ light = false }: { light?: boolean }) => {
    const base = light ? "var(--paper-fade)" : muted;
    return (
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase" }}>
        {(["th", "en"] as const).map((lc, i) => (
          <React.Fragment key={lc}>
            {i > 0 && <span style={{ color: base, margin: "0 6px" }}>/</span>}
            <Link
              href={pathname}
              locale={lc}
              style={{
                color: lc === locale ? (light ? "var(--paper)" : "var(--emerald)") : base,
                textDecoration: "none",
                fontWeight: lc === locale ? 500 : 400,
              }}
            >
              {lc.toUpperCase()}
            </Link>
          </React.Fragment>
        ))}
      </span>
    );
  };

  return (
    <>
      {/* Desktop nav */}
      <nav
        aria-label="Main navigation"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "28px var(--page-x)",
          borderBottom: `1px solid ${borderColor}`,
          color: fg,
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: bg,
          transition: "background var(--duration-fast) var(--ease)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 30,
            letterSpacing: "-.01em",
            color: fg,
            textDecoration: "none",
            transition: "color var(--duration-fast) var(--ease)",
          }}
        >
          Def to Design
        </Link>

        {/* Links — desktop */}
        <ul
          style={{ display: "flex", gap: 36, listStyle: "none", padding: 0, margin: 0, fontSize: 13 }}
          className="hidden md:flex"
        >
          {NAV_HREFS.map((l) => {
            const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    color: isActive ? "var(--emerald)" : muted,
                    textDecoration: "none",
                    transition: "color var(--duration-fast) var(--ease)",
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {t.links[l.key]}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + language toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="hidden md:inline">
            <LangToggle light={dark && !scrolled} />
          </span>
          <Btn href="/contact" variant={dark && !scrolled ? "dark" : "default"}>
            {t.briefUs}
          </Btn>

          {/* Hamburger — mobile */}
          <button
            className="flex md:hidden flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-0"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{ color: fg }}
          >
            <span style={{ width: 22, height: 1, background: "currentColor", display: "block" }} />
            <span style={{ width: 22, height: 1, background: "currentColor", display: "block" }} />
            <span style={{ width: 22, height: 1, background: "currentColor", display: "block" }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--navy)",
          color: "var(--paper)",
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
          padding: "28px var(--page-x)",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 360ms var(--ease)",
        }}
        aria-hidden={!mobileOpen}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 30, letterSpacing: "-.01em" }}>
            Def to Design
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{ background: "transparent", border: "none", color: "var(--paper)", fontSize: 24, cursor: "pointer", padding: 8 }}
          >
            ×
          </button>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {NAV_HREFS.map((l) => (
            <li key={l.href} style={{ borderBottom: "1px solid var(--line-dark)" }}>
              <Link
                href={l.href}
                style={{ display: "block", padding: "20px 0", fontFamily: "var(--font-serif)", fontSize: 36, color: "var(--paper)", textDecoration: "none", lineHeight: 1 }}
              >
                {t.links[l.key]}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Btn href="/contact" variant="dark" large>
            {t.briefUs}
          </Btn>
          <LangToggle light />
        </div>
      </div>
    </>
  );
}
