"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Btn } from "./Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

interface NavProps {
  dark?: boolean;
}

export function Nav({ dark = false }: NavProps) {
  const pathname = usePathname();
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
          style={{
            display: "flex",
            gap: 36,
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontSize: 13,
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((l) => {
            const isActive =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href);
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
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + language toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: muted,
            }}
          >
            TH / EN
          </span>
          <Btn href="/contact" variant={dark && !scrolled ? "dark" : "default"}>
            Brief us
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
            style={{
              background: "transparent",
              border: "none",
              color: "var(--paper)",
              fontSize: 24,
              cursor: "pointer",
              padding: 8,
            }}
          >
            ×
          </button>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {NAV_LINKS.map((l) => (
            <li key={l.href} style={{ borderBottom: "1px solid var(--line-dark)" }}>
              <Link
                href={l.href}
                style={{
                  display: "block",
                  padding: "20px 0",
                  fontFamily: "var(--font-serif)",
                  fontSize: 36,
                  color: "var(--paper)",
                  textDecoration: "none",
                  lineHeight: 1,
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "auto" }}>
          <Btn href="/contact" variant="dark" large>
            Brief us
          </Btn>
        </div>
      </div>
    </>
  );
}
