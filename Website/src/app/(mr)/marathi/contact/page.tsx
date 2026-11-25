import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactUsSection";
import ContactTopics from "@/components/ContactTopics";

export const metadata: Metadata = { title: "संपर्क", description: "ड्रोन सेवा, Pehelwan किंवा भागीदारीसाठी मामाशी मराठीत संपर्क करा.", alternates: { canonical: "/marathi/contact" } };

export default async function MarathiContactPage({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const tractor = (await searchParams).interest === "tractor";
  return <main className="contact-page" lang="mr">
    <section className="contact-page-hero"><div className="shell contact-page-hero-grid"><div className="contact-page-intro"><p className="eyebrow">संपर्क / मामा</p><h1>योग्य टीमशी <em>बोला.</em></h1><p>सेवेचा तातडीचा प्रश्न असेल तर फोन करा. उपकरणे, Pehelwan किंवा भागीदारीसाठी फॉर्म भरा.</p></div><div className="contact-direct" aria-label="मामाला फोन करा"><p className="eyebrow">थेट फोन करा</p><a href="tel:+919322418319">+91 93224 18319</a><a href="tel:+919834512803">+91 98345 12803</a><p>कामातील यंत्राला तातडीची मदत हवी असल्यास फोन करा.</p></div></div></section>
    <section className="contact-page-body"><div className="shell contact-page-grid"><div className="contact-page-details"><p className="eyebrow">चौकशी पाठवा</p><h2>चौकशीचा विषय निवडा.</h2><p>तुमचा जिल्हा, यंत्र किंवा प्रकल्पाची माहिती द्या म्हणजे योग्य व्यक्ती उत्तर देऊ शकेल.</p></div><div className="contact-page-form"><div className="contact-form-heading"><span>चौकशी फॉर्म</span><span>मामा कृषी रोबोटिक्स</span></div><ContactTopics tractor={tractor} language="mr" /><p className="contact-language-note">खालील फॉर्म सध्या इंग्रजीत आहे. मराठीत मदतीसाठी आम्हाला फोन करा.</p><ContactForm language="mr" compact /></div><div className="contact-address"><p className="eyebrow">आमचे कार्यालय</p><address>STPI, T-17, Opp. Garware Stadium, MIDC, Chikalthana, छत्रपती संभाजीनगर, महाराष्ट्र</address></div></div></section>
  </main>;
}
