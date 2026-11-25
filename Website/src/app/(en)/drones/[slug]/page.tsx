import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DroneModelVisual from "@/components/DroneModelVisual";
import { drones, productForm } from "@/lib/site-data";

export function generateStaticParams() { return drones.map((drone) => ({ slug: drone.slug })); }
type DetailProps = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: DetailProps): Promise<Metadata> {
  const { slug } = await params;
  const drone = drones.find((item) => item.slug === slug);
  if (!drone) return {};
  return { title: `${drone.name} — ${drone.variant}`, description: `Explore the ${drone.name} ${drone.variant} in Mama's agricultural drone catalogue. Ask Mama about current options and availability.`, alternates: { canonical: `/drones/${drone.slug}` } };
}

export default async function DroneDetail({ params }: DetailProps) {
  const { slug } = await params;
  const drone = drones.find((item) => item.slug === slug);
  if (!drone) notFound();
  return <main><section className="shell detail-page"><Link className="eyebrow back-link" href="/drones">← All drones</Link><div className="detail-grid"><div><p className="eyebrow">Agricultural drone / {drone.variant}</p><h1>{drone.name}</h1><p className="detail-intro">See the product photograph in the <Link href="/drones#catalogue">drone catalogue</Link>. Ask the team about current options, availability and support.</p><div className="button-row"><a className="button button-dark" href={productForm} target="_blank" rel="noopener noreferrer">Enquire about this drone</a><Link className="text-link" href="/contact">Contact the team <span aria-hidden="true">↗</span></Link></div></div><DroneModelVisual name={drone.name} variant={drone.variant} /></div></section></main>;
}
