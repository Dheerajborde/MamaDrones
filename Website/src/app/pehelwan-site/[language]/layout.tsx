import { notFound } from "next/navigation";
import "../../globals.css";
import "./pehelwan.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ language: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ language: "en" }, { language: "mr" }];
}

export default async function PehelwanLayout({ children, params }: Props) {
  const { language } = await params;
  if (language !== "en" && language !== "mr") notFound();

  return (
    <html lang={language}>
      <body className="pehelwan-site">
        <a className="pehelwan-skip" href="#main">{language === "mr" ? "मुख्य मजकुराकडे जा" : "Skip to content"}</a>
        {children}
      </body>
    </html>
  );
}
