import type { Metadata } from "next";
import PehelwanSite from "@/components/tractor/PehelwanSite";

type Props = { params: Promise<{ language: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const marathi = (await params).language === "mr";
  const title = marathi ? "Pehelwan इलेक्ट्रिक ट्रॅक्टर" : "Pehelwan Electric Tractor";
  const canonical = marathi ? "/marathi" : "/";
  return {
    metadataBase: new URL("https://pehelwan.live"),
    title,
    description: marathi ? "अरुंद पीक ओळींसाठी मामाची सध्याची Pehelwan ट्रॅक्टर रचना पहा." : "Explore Mama’s Pehelwan electric tractor for narrow crop rows.",
    alternates: { canonical, languages: { en: "/", mr: "/marathi" } },
    openGraph: { title, url: canonical, type: "website", images: ["/pehelwan-prototype.webp"] },
    icons: { icon: "/mama_drones.svg" },
  };
}

export default async function PehelwanPage({ params }: Props) {
  return <PehelwanSite language={(await params).language as "en" | "mr"} />;
}
