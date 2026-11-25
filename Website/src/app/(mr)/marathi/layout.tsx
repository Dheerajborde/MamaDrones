import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mama Drones — मराठी",
  description: "मामा ड्रोन्सची उत्पादने, सेवा, प्रशिक्षण आणि संपर्क माहिती.",
  alternates: { canonical: "/marathi" },
};

export default function MarathiLayout({ children }: { children: React.ReactNode }) { return children; }
