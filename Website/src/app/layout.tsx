import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700", "500"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Mama Drones",
  description: "Mama Drones",
  icons: {
    icon: "/mama_drones.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/dbGreen.svg" />
      </Head>
      <body className={poppins_init.className}>{children}</body>
    </html>
  );
}
