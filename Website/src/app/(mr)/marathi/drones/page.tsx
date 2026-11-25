import type { Metadata } from "next";
import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import CenterLocator from "@/components/CenterLocator";
import { assets, drones, productForm } from "@/lib/site-data";
import { marathiDroneName, marathiDroneVariant } from "@/lib/marathi-data";

export const metadata: Metadata = { title: "कृषी ड्रोन आणि सेवा", description: "मामाचे कृषी ड्रोन, फवारणी, प्रशिक्षण आणि दुरुस्तीची माहिती मराठीत.", alternates: { canonical: "/marathi/drones" } };

export default function MarathiDronesPage() {
  return <main lang="mr">
    <section className="subpage-hero shell"><p className="eyebrow">सध्याचा व्यवसाय / ड्रोन</p><h1>ड्रोन उपकरणे<br /><em>आणि त्यामागची माणसे.</em></h1><div className="subpage-lede"><p>१० लिटर ड्रोन आणि किटचे पर्याय पाहा. उपलब्ध रचना आणि तुमच्या भागातील सेवेसाठी टीमशी बोला.</p><Link className="button button-dark" href="#catalogue">ड्रोन संग्रह पाहा</Link></div></section>
    <section className="wide-image shell"><EditorialImage src={assets.trainingGroup} alt="प्रमाणपत्रे आणि कृषी ड्रोनसह मामा प्रशिक्षण गट" priority /><span className="image-caption">ड्रोन प्रशिक्षण / यंत्र वापरणारी माणसे</span></section>
    <section className="section services-section"><div className="shell"><p className="eyebrow">उपकरणे आणि शेतातील मदत</p><h2>उड्डाणानंतरही मदत.</h2><div className="service-list"><article><span>०१</span><h3>फवारणी</h3><p>तुमच्या शेतातील फवारणीच्या कामासाठी टीमशी बोला.</p></article><article><span>०२</span><h3>प्रशिक्षण</h3><p>सेटअप, उड्डाण नियोजन आणि शेतातील वापर शिका.</p></article><article><span>०३</span><h3>दुरुस्ती</h3><p>बिघाड तपासणी आणि सुट्या भागांची चौकशी करा.</p></article><article><span>०४</span><h3>सुटे भाग</h3><p>केंद्रात जाण्यापूर्वी तुमच्या मॉडेलसाठी भाग उपलब्ध आहे का ते तपासा.</p></article></div></div></section>
    <section className="section catalogue-section" id="catalogue"><div className="shell"><div className="product-heading"><div><p className="eyebrow">ड्रोनचे पर्याय</p><h2>तुमचे यंत्र निवडा.</h2></div><p>प्रत्येक ड्रोनसाठी चौकशी लिंक आहे. सध्याचे पर्याय मामाकडून तपासा.</p></div><div className="catalogue-grid">{drones.map((drone, index) => <article className="catalogue-product" key={drone.slug}><div className="product-number">०{index + 1} / {marathiDroneVariant(drone.slug)}</div><Link href={`/marathi/drones/${drone.slug}`} aria-label={`${marathiDroneName(drone.slug)} — तपशील पाहा`}><EditorialImage src={drone.image} alt={drone.imageAlt} contain /></Link><h3>{marathiDroneName(drone.slug)}</h3><p>{marathiDroneVariant(drone.slug)}</p><div className="catalogue-actions"><Link className="text-link" href={`/marathi/drones/${drone.slug}`}>तपशील पाहा <span aria-hidden="true">↗</span></Link><a className="text-link" href={productForm} target="_blank" rel="noopener noreferrer">चौकशी करा <span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
    <section className="section support-section"><div className="shell support-grid"><EditorialImage src={assets.repair} alt="मामा ड्रोन दुरुस्ती" /><div><p className="eyebrow">शेतातील मदत</p><h2>दुरुस्ती किंवा सुटा भाग हवा आहे?</h2><p>जवळचे केंद्र शोधा आणि योग्य भाग किंवा तंत्रज्ञ उपलब्ध आहे का ते फोनवर तपासा.</p><Link className="button button-dark" href="#centers">केंद्र शोधा</Link></div></div></section>
    <section className="section centers-section" id="centers"><div className="shell"><p className="eyebrow">जवळची सेवा</p><h2>मामा ड्रोन्स केंद्रे.</h2><p>भेट देण्यापूर्वी पत्ता आणि फोन नंबर तपासा.</p></div><CenterLocator language="mr" /></section>
  </main>;
}
