import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono, IBM_Plex_Sans_Thai } from "next/font/google";
import { routing, type Locale } from "@/i18n/routing";
import "../globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Thai face. Instrument Serif has no Thai glyphs, so Thai text falls
// through to IBM Plex Sans Thai (paired at matching weight).
const ibmPlexThai = IBM_Plex_Sans_Thai({
  weight: ["400", "500", "600"],
  subsets: ["thai"],
  variable: "--font-ibm-plex-thai",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.def2design.com"),
  title: {
    default: "Def to Design — Corporate Report Design Studio",
    template: "%s | Def to Design",
  },
  description:
    "A Bangkok studio for annual reports, 56-1 One Reports and sustainability reporting — one-stop design and production for listed companies and state enterprises.",
  openGraph: {
    type: "website",
    siteName: "Def to Design",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} ${ibmPlexThai.variable}`}
      style={{
        ["--font-serif" as string]: `var(${instrumentSerif.variable}), var(${ibmPlexThai.variable}), "Times New Roman", serif`,
        ["--font-sans" as string]: `var(${plusJakartaSans.variable}), var(${ibmPlexThai.variable}), -apple-system, sans-serif`,
        ["--font-mono" as string]: `var(${jetbrainsMono.variable}), ui-monospace, "SF Mono", monospace`,
      }}
    >
      <body className="page-wrap">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
