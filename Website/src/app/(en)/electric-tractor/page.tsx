import type { Metadata } from "next";
import EnglishTractor from "@/components/tractor/EnglishTractor";

export const metadata: Metadata = {
  title: "Pehelwan Electric Tractor",
  description:
    "See Pehelwan's current electric tractor design for narrow crop rows, including dimensions and battery capacity from November 2026.",
  alternates: { canonical: "/electric-tractor" },
};

export default function ElectricTractorPage() {
  return <EnglishTractor />;
}
