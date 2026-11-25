"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const LegacyLocator = dynamic(() => import("@/components/sections/DronebuddyCenters"), { ssr: false, loading: () => <p className="shell">Loading center locator…</p> });
export default function CenterLocator({ language = "en" }: { language?: "en" | "mr" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) { setReady(true); return; }
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setReady(true); observer.disconnect(); } }, { rootMargin: "400px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="locator-shell">{ready ? <LegacyLocator language={language} /> : <p className="shell">{language === "mr" ? "केंद्रांचा नकाशा खाली उपलब्ध आहे." : "Center map loads as you reach this section."}</p>}</div>;
}
