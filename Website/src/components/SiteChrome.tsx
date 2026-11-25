"use client";
import { usePathname } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EditorialMotion from "@/components/EditorialMotion";
import FloatingEnquiry from "@/components/FloatingEnquiry";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/marathi")) return <><EditorialMotion /><SiteHeader language="mr" /><div id="main-content" className="marathi-page" lang="mr">{children}</div><FloatingEnquiry /><SiteFooter language="mr" /></>;
  return <><EditorialMotion /><SiteHeader /><div id="main-content">{children}</div><FloatingEnquiry /><SiteFooter /></>;
}
