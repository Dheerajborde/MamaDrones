import type { MetadataRoute } from "next";
import { drones } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mamaapp.live";
  return ["", "/drones", "/electric-tractor", "/our-journey", "/contact", "/marathi", ...drones.map((drone) => `/drones/${drone.slug}`)].map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
