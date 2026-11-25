import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mamaapp.live"),
  title: { default: "MAMA Agricultural Robotics | Shanik AG Private Limited", template: "%s | MAMA Agricultural Robotics" },
  description: "Agricultural drones today. Meet Pehelwan, Mama's electric ground vehicle, and explore the work shaping what comes next.",
  openGraph: { title: "MAMA Agricultural Robotics by Shanik AG Private Limited", description: "Agricultural drones today. Autonomous electric tractors next.", siteName: "MAMA Agricultural Robotics by Shanik AG Private Limited", type: "website", images: ["/MamaDronesLogo.png"] },
  icons: { icon: "/mama_drones.svg" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteChrome>{children}</SiteChrome></body></html>;
}
