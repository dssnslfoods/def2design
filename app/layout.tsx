import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.def2design.com"),
  title: {
    default: "Def to Design — Corporate Report Design Studio",
    template: "%s | Def to Design",
  },
  description:
    "Thailand's premier studio for One Reports, Annual Reports and ESG communications — trusted by listed companies, state enterprises and public organizations.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.def2design.com",
    siteName: "Def to Design",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
      style={{
        // Override CSS variables with actual next/font values
        ["--font-serif" as string]: `var(${instrumentSerif.variable}), "IBM Plex Sans Thai", "Times New Roman", serif`,
        ["--font-sans" as string]: `var(${plusJakartaSans.variable}), "IBM Plex Sans Thai", -apple-system, sans-serif`,
        ["--font-mono" as string]: `var(${jetbrainsMono.variable}), ui-monospace, "SF Mono", monospace`,
      }}
    >
      <body className="page-wrap">{children}</body>
    </html>
  );
}
