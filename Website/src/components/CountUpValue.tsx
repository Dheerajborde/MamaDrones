"use client";

import { useEffect, useRef, useState } from "react";

type Figure = "buyers" | "served" | "reached" | "network";

const targets: Record<Figure, number> = {
  buyers: 250,
  served: 2000,
  reached: 125000,
  network: 12,
};

function display(figure: Figure, value: number, language: "en" | "mr") {
  let text = figure === "served" ? `~${Math.round(value).toLocaleString("en-IN")}`
    : figure === "reached" ? `~${(value / 100000).toFixed(2)} lakh`
    : figure === "network" ? `${Math.min(4, Math.round(value / 3))} + ${Math.min(8, Math.round(value * 2 / 3))}`
    : Math.round(value).toLocaleString("en-IN");
  if (language === "mr") text = text.replaceAll("lakh", "लाख").replace("~", "सुमारे ").replace(/[0-9]/g, (digit) => "०१२३४५६७८९"[Number(digit)]);
  return text;
}

export default function CountUpValue({ figure, language = "en" }: { figure: Figure; language?: "en" | "mr" }) {
  const element = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(targets[figure]);

  useEffect(() => {
    const node = element.current;
    if (!node || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      setValue(0);
      const start = performance.now();
      const duration = 1550;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        // Ease out while always landing on the exact deck figure.
        setValue(targets[figure] * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.2 });
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [figure]);

  return <span ref={element} className="count-value"><span aria-hidden="true">{display(figure, value, language)}</span><span className="sr-only">{display(figure, targets[figure], language)}</span></span>;
}
