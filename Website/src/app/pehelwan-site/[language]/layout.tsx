import { notFound } from "next/navigation";
import EditorialMotion from "@/components/EditorialMotion";
import "../../globals.css";

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

  const marathi = language === "mr";
  const mamaUrl = "https://www.mamaapp.live" + (marathi ? "/marathi" : "");
  return (
    <html lang={language}>
      <body className={marathi ? "marathi-page" : undefined}>
        <a className="skip-link" href="#tractor-content">
          {marathi ? "मुख्य मजकुराकडे जा" : "Skip to content"}
        </a>
        <header className="site-header">
          <nav className="shell flex min-h-16 flex-wrap items-center justify-between gap-3 py-2" aria-label={marathi ? "मुख्य नेव्हिगेशन" : "Main navigation"}>
            <a className="font-bold" href={marathi ? "/marathi" : "/"}>Pehelwan</a>
            <div className="flex items-center gap-4">
              <a className="underline" href={marathi ? "/" : "/marathi"} hrefLang={marathi ? "en" : "mr"} lang={marathi ? "en" : "mr"}>
                {marathi ? "English" : "मराठी"}
              </a>
              <a className="button button-signal" href={mamaUrl + "/contact?interest=tractor"}>
                {marathi ? "चौकशी करा" : "Enquire"}
              </a>
            </div>
          </nav>
        </header>
        <div id="tractor-content">{children}</div>
        <EditorialMotion />
        <footer className="site-footer">
          <div className="shell">
            <a href={mamaUrl}>MAMA Agricultural Robotics by Shanik AG Private Limited</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
