import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DroneModelVisual from "@/components/DroneModelVisual";
import { drones, productForm } from "@/lib/site-data";
import { marathiDroneName, marathiDroneVariant } from "@/lib/marathi-data";

export function generateStaticParams() { return drones.map((drone) => ({ slug: drone.slug })); }
type DetailProps = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: DetailProps): Promise<Metadata> {
  const { slug } = await params;
  const drone = drones.find((item) => item.slug === slug);
  if (!drone) return {};
  return { title: `${marathiDroneName(drone.slug)} — ${marathiDroneVariant(drone.slug)}`, description: `${marathiDroneName(drone.slug)} बद्दल माहिती आणि चौकशी.`, alternates: { canonical: `/marathi/drones/${drone.slug}` } };
}

export default async function MarathiDroneDetail({ params }: DetailProps) {
  const { slug } = await params;
  const drone = drones.find((item) => item.slug === slug);
  if (!drone) notFound();
  return <main lang="mr"><section className="shell detail-page"><Link className="eyebrow back-link" href="/marathi/drones">← सर्व ड्रोन</Link><div className="detail-grid"><div><p className="eyebrow">कृषी ड्रोन / {marathiDroneVariant(drone.slug)}</p><h1>{marathiDroneName(drone.slug)}</h1><p className="detail-intro">उत्पादनाचा फोटो <Link href="/marathi/drones#catalogue">ड्रोन संग्रहात</Link> पाहा. सध्याचे पर्याय, उपलब्धता आणि सेवेसाठी टीमशी बोला.</p><div className="button-row"><a className="button button-dark" href={productForm} target="_blank" rel="noopener noreferrer">या ड्रोनची चौकशी करा</a><Link className="text-link" href="/marathi/contact">टीमशी संपर्क करा <span aria-hidden="true">↗</span></Link></div></div><DroneModelVisual name={drone.name} variant={drone.variant} language="mr" /></div></section></main>;
}
