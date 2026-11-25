import type { MetadataRoute } from "next";
import { drones } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mamaapp.live";
  const routes = ["", "/drones", "/electric-tractor", "/our-journey", "/contact", ...drones.map((drone) => `/drones/${drone.slug}`)];
  return routes.flatMap((route) => {
    const en = `${base}${route}`;
    const mr = `${base}/marathi${route}`;
    const alternates = { languages: { en, mr } };
    return [
      { url: en, alternates, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 },
      { url: mr, alternates, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 },
    ];
  });
}
