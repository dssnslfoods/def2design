"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionMarker } from "@/components/SectionMarker";
import { Btn } from "@/components/Button";
import { StudioMap } from "@/components/Figure";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company"),
  role: z.string().min(2, "Please enter your role"),
  project: z.string().min(2, "Please describe the project type"),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  brief: z.string().min(20, "Please share a brief description (min 20 chars)"),
  // honeypot
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

const FIELDS = [
  { name: "name" as const, label: "Your name", placeholder: "Jane Director" },
  { name: "company" as const, label: "Company", placeholder: "Listed on SET / mai · public / state" },
  { name: "role" as const, label: "Role", placeholder: "IR · Corporate Comms · CFO office" },
  { name: "project" as const, label: "Project", placeholder: "One Report · Sustainability · ESG · eMagazine · Other" },
  { name: "timeline" as const, label: "Timeline", placeholder: "Due fiscal Q1 — Q2 · 2026" },
  { name: "budget" as const, label: "Budget", placeholder: "฿ 800k — 1.5M" },
];

const CONTACT_INFO = [
  ["Studio", "Def to Design Co., Ltd.\nSathorn, Bangkok 10120\nThailand"],
  ["Phone", "+66 2 000 0000\nMon – Fri · 09:30 – 18:30 (GMT+7)"],
  ["Email", "hello@def2design.com\ncareers@def2design.com"],
  ["LINE OA", "@def2design"],
  ["Social", "Instagram · Behance · LinkedIn"],
];

const FAQ = [
  ["What is your minimum engagement?", "We do not have a minimum, but most One Report engagements start at ฿800,000 and run 12–16 weeks."],
  ["Do you work in Thai and English?", "Yes. Both languages are designed in parallel, not translated afterward. We retain bilingual designers."],
  ["Can you handle press?", "Yes. We supervise press checks personally, source paper, and manage bindery & finishing."],
  ["Do you work with non-listed companies?", "Yes — state enterprises, public organizations and selected private companies with public-facing reports."],
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // honeypot check
    if (data.website) return;
    // In production, POST to your API route
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <div className="page-wrap">
      <Nav />

      {/* HERO */}
      <section style={{ padding: "96px var(--page-x) 48px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 32 }}>
          Brief us · approx. 90 seconds
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(88px, 10vw, 148px)", lineHeight: 0.92, letterSpacing: "-.02em", maxWidth: "10ch" }}>
          Let&apos;s begin a{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>report.</em>
        </h1>
      </section>

      {/* FORM + INFO */}
      <div style={{ padding: "80px var(--page-x)", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 96 }}>
        {/* FORM */}
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 32 }}>
            01 — The brief
          </div>

          {submitted ? (
            <div style={{ borderTop: "1px solid var(--ink)", paddingTop: 40 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 48, lineHeight: 1.05, marginBottom: 16 }}>
                Brief received.
              </div>
              <p style={{ fontSize: 16, color: "var(--gray)", lineHeight: 1.6 }}>
                We respond within 1 business day. Thank you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} style={{ borderTop: "1px solid var(--ink)" }} noValidate>
              {/* Honeypot */}
              <input {...register("website")} type="text" style={{ display: "none" }} tabIndex={-1} aria-hidden />

              {FIELDS.map(({ name, label, placeholder }) => (
                <div key={name} className="field">
                  <label htmlFor={name}>{label}</label>
                  <div>
                    <input
                      {...register(name)}
                      id={name}
                      placeholder={placeholder}
                      aria-invalid={!!errors[name]}
                    />
                    {errors[name] && (
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#c0392b", marginTop: 4 }}>
                        {errors[name]?.message}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="field" style={{ alignItems: "start" }}>
                <label htmlFor="brief" style={{ paddingTop: 8 }}>Brief</label>
                <div>
                  <textarea
                    {...register("brief")}
                    id="brief"
                    placeholder="A short paragraph describing what you have in mind."
                    rows={4}
                    aria-invalid={!!errors.brief}
                  />
                  {errors.brief && (
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#c0392b", marginTop: 4 }}>
                      {errors.brief.message}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ padding: "32px 0 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)" }}>
                  We respond within 1 business day.
                </span>
                <Btn variant="primary" type="submit" disabled={isSubmitting} large>
                  {isSubmitting ? "Sending…" : "Send brief"}
                </Btn>
              </div>
            </form>
          )}
        </div>

        {/* INFO */}
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 32 }}>
            02 — Or reach us directly
          </div>
          <div style={{ borderTop: "1px solid var(--ink)" }}>
            {CONTACT_INFO.map(([k, v]) => (
              <div key={k} style={{ padding: "24px 0", borderBottom: "1px solid var(--line)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", marginBottom: 8 }}>{k}</div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, lineHeight: 1.25, whiteSpace: "pre-line" }}>{v}</div>
              </div>
            ))}
          </div>
          <StudioMap aspectRatio="16/10" style={{ marginTop: 32 }} />
        </div>
      </div>

      {/* FAQ */}
      <SectionMarker left="03 — Common questions" right="Before you write" />
      <div style={{ padding: "56px var(--page-x)", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 0 }}>
        {FAQ.map(([q, a], i) => (
          <div key={i} style={{ padding: i % 2 === 0 ? "32px 32px 32px 0" : "32px 0 32px 32px", borderRight: i % 2 === 0 ? "1px solid var(--line)" : "none", borderBottom: i < 2 ? "1px solid var(--line)" : "none" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24, lineHeight: 1.15, marginBottom: 14 }}>{q}</h3>
            <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.6 }}>{a}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
