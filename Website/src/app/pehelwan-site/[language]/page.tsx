import type { Metadata } from "next";
import EnglishTractor from "@/components/tractor/EnglishTractor";
import MarathiTractor from "@/components/tractor/MarathiTractor";

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
  const Tractor = (await params).language === "mr" ? MarathiTractor : EnglishTractor;
  return <Tractor mamaOrigin="https://www.mamaapp.live" />;
}
