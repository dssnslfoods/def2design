import type { Metadata } from "next";
import { PortfolioClient } from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected work — 2009 to 2026. One Reports, Annual Reports, Sustainability reports, eMagazines and corporate publications for Thailand's listed companies.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
