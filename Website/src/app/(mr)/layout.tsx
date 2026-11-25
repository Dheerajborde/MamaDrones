import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mamaapp.live"),
  title: { default: "MAMA कृषी रोबोटिक्स | Shanik AG Private Limited", template: "%s | MAMA कृषी रोबोटिक्स" },
  description: "मामाचे कृषी ड्रोन, शेतकरी सेवा आणि Pehelwan इलेक्ट्रिक ट्रॅक्टरची माहिती मराठीत.",
  openGraph: { title: "MAMA कृषी रोबोटिक्स", description: "कृषी ड्रोन आणि इलेक्ट्रिक शेतयंत्रे.", siteName: "MAMA Agricultural Robotics by Shanik AG Private Limited", type: "website", images: ["/MamaDronesLogo.png"] },
  icons: { icon: "/mama_drones.svg" },
  alternates: { canonical: "/marathi" },
};

export default function MarathiRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="mr"><body><a className="skip-link" href="#main-content">मुख्य मजकुराकडे जा</a><SiteChrome>{children}</SiteChrome></body></html>;
}
