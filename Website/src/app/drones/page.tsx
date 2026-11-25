import type { Metadata } from "next";
import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import CenterLocator from "@/components/CenterLocator";
import { assets, drones, productForm } from "@/lib/site-data";

export const metadata: Metadata = { title: "Agricultural Drones & Services", description: "Explore the Mama drone catalogue, spraying services and repair support.", alternates: { canonical: "/drones" } };

export default function DronesPage() {
  return <main>
    <section className="subpage-hero shell"><p className="eyebrow">Current business / Air systems</p><h1>Drone equipment<br /><em>and the people behind it.</em></h1><div className="subpage-lede"><p>Compare the 10L drone options and kits, then ask the team about configuration and service in your area.</p><Link className="button button-dark" href="#catalogue">Explore the catalogue</Link></div></section>
    <section className="wide-image shell"><EditorialImage src={assets.trainingGroup} alt="Mama drone training group with certificates and an agricultural drone" priority /><span className="image-caption">Drone training / The people using the machine</span></section>
    <section className="section services-section"><div className="shell"><p className="eyebrow">Equipment + field support</p><h2>Support after the flight.</h2><div className="service-list"><article><span>01</span><h3>Spraying</h3><p>Ask the team to handle a spraying job on your farm.</p></article><article><span>02</span><h3>Training</h3><p>Learn setup, flight planning and field operation.</p></article><article><span>03</span><h3>Repair</h3><p>Get a diagnosis and ask about replacement parts.</p></article><article><span>04</span><h3>Parts & support</h3><p>Confirm the part for your model before visiting a centre.</p></article></div></div></section>
    <section className="section catalogue-section" id="catalogue"><div className="shell"><div className="product-heading"><div><p className="eyebrow">The drone range</p><h2>Find your machine.</h2></div><p>Each listing has its own enquiry link. Confirm the current configuration with Mama.</p></div><div className="catalogue-grid">{drones.map((drone, index) => <article className="catalogue-product" key={drone.slug}><div className="product-number">0{index + 1} / {drone.variant}</div><Link href={`/drones/${drone.slug}`} aria-label={`View ${drone.name}, ${drone.variant}`}><EditorialImage src={drone.image} alt={drone.imageAlt} contain /></Link><h3>{drone.name}</h3><p>{drone.variant}</p><div className="catalogue-actions"><Link className="text-link" href={`/drones/${drone.slug}`}>View details <span aria-hidden="true">↗</span></Link><a className="text-link" href={productForm} target="_blank" rel="noopener noreferrer">Enquire <span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
    <section className="section support-section"><div className="shell support-grid"><EditorialImage src={assets.repair} alt="Drone repair imagery from the existing Mama website" /><div><p className="eyebrow">Support in the field</p><h2>Need a repair or spare?</h2><p>Use the centre locator, then call ahead to confirm the right part or technician is available.</p><Link className="button button-dark" href="#centers">Find a center</Link></div></div></section>
    <section className="section centers-section" id="centers"><div className="shell"><p className="eyebrow">Local support</p><h2>Mama Drones centers.</h2><p>Check the address and phone number before you visit.</p></div><CenterLocator /></section>
  </main>;
}
