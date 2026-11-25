import type { Metadata } from "next";
import MarathiTractor from "@/components/tractor/MarathiTractor";

export const metadata: Metadata = { title: "Pehelwan इलेक्ट्रिक ट्रॅक्टर", description: "Pehelwan ची सध्याची रचना, पीक ओळींसाठी मोजमाप आणि उपलब्धतेची माहिती मराठीत.", alternates: { canonical: "/marathi/electric-tractor" } };

export default function ElectricTractorPage() {
  return <MarathiTractor />;
}
