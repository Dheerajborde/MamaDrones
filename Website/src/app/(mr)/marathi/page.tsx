import type { Metadata } from "next";
import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import CountUpValue from "@/components/CountUpValue";
import { assets, drones } from "@/lib/site-data";
import { marathiDroneName, marathiDroneVariant } from "@/lib/marathi-data";

export const metadata: Metadata = {
  title: "मुख्यपृष्ठ — मराठी",
  description: "मामाचे कृषी ड्रोन, शेतकरी सेवा आणि Pehelwan इलेक्ट्रिक ट्रॅक्टरची माहिती मराठीत.",
  alternates: { canonical: "/marathi" },
};

export default function MarathiHome() {
  return <main className="marathi-page" lang="mr">
    <section className="hero shell" aria-labelledby="marathi-hero-title">
      <div className="hero-copy">
        <p className="eyebrow">मामा / कृषी रोबोटिक्स</p>
        <h1 id="marathi-hero-title">आकाशातून<br /><em>जमिनीपर्यंत.</em></h1>
        <div className="hero-lower"><div><h2>ड्रोनच्या कामातून जाळे उभे राहिले.<br />Pehelwan हे पुढचे यंत्र.</h2><p>मामाने ड्रोन फवारणीपासून सुरुवात केली आणि त्याभोवती सेवा उभी केली. त्याच अनुभवातून Pehelwan ची कल्पना आकाराला आली.</p><div className="button-row"><Link className="button button-dark" href="/marathi/drones">ड्रोन पाहा</Link><Link className="text-link" href="/marathi/electric-tractor">इलेक्ट्रिक ट्रॅक्टर पाहा <span aria-hidden="true">↗</span></Link></div></div><div className="hero-index"><span>०१ / ०५</span><span>शेतातील कामासाठी</span></div></div>
      </div>
      <div className="hero-media"><EditorialImage src={assets.heroFlight} alt="सूर्यास्ताच्या वेळी शेतावर उडणारा कृषी ड्रोन" priority /><span className="image-caption">कृषी ड्रोन / शेतातील उड्डाण</span></div>
      <div className="status-rail"><span><i /> ड्रोन <strong>सध्याचा व्यवसाय</strong></span><span><i /> इलेक्ट्रिक ट्रॅक्टर <strong>Pehelwan</strong></span></div>
    </section>

    <section className="section work-section" id="work"><div className="shell work-grid"><div className="section-intro"><p className="eyebrow">०१ / आजचे काम</p><h2>कामाला येणारे<br />कृषी ड्रोन.</h2><p>फवारणी ही पहिली सेवा होती. त्यानंतर शेतकऱ्यांच्या गरजेनुसार ड्रोन विक्री, प्रशिक्षण आणि दुरुस्ती सुरू झाली.</p><Link className="text-link" href="/marathi/drones">ड्रोन आणि सेवा पाहा <span aria-hidden="true">↗</span></Link></div><div className="work-photo"><EditorialImage src={assets.fieldVisit} alt="कृषी ड्रोनभोवती जमलेले लोक" /><span className="image-caption">ड्रोन उपकरणे / शेतकरी संवाद</span></div><div className="work-services"><span>०१ &nbsp; ड्रोन आणि किट विक्री</span><span>०२ &nbsp; फवारणी सेवा</span><span>०३ &nbsp; प्रशिक्षण आणि मदत</span><span>०४ &nbsp; दुरुस्ती आणि देखभाल</span></div></div></section>

    <section className="section field-section"><div className="shell"><div className="field-heading"><p className="eyebrow">०२ / कंपनीची आकडेवारी</p><h2>कामाची <em>व्याप्ती.</em></h2><p>नोव्हेंबर २०२६ मधील कंपनीने दिलेले आकडे. थेट सेवा आणि ग्राहकांच्या ड्रोनद्वारे झालेली पोहोच या वेगळ्या गोष्टी आहेत.</p></div><div className="insight-grid"><div className="insight-photo"><EditorialImage src={assets.communitySession} alt="कृषी कामाबद्दल चर्चा करणारा शेतकरी समूह" /><span className="image-caption">शेतकऱ्यांशी संवाद</span></div><div className="insights"><article><CountUpValue figure="buyers" language="mr" /><div><h3>ड्रोन खरेदीदार</h3><p>मामाचा ड्रोन खरेदी केलेले शेतकरी.</p></div></article><article><CountUpValue figure="served" language="mr" /><div><h3>थेट सेवा</h3><p>मामाच्या फवारणी टीमने सेवा दिलेले शेतकरी.</p></div></article><article><CountUpValue figure="reached" language="mr" /><div><h3>ग्राहकांमार्फत पोहोच</h3><p>मामाच्या ग्राहकांनी चालवलेल्या ड्रोनद्वारे अंदाजे पोहोचलेले शेतकरी.</p></div></article><article><CountUpValue figure="network" language="mr" /><div><h3>दुकाने आणि विक्रेते</h3><p>महाराष्ट्र आणि गुजरातमधील कंपनीची दुकाने आणि विक्रेते.</p></div></article></div></div></div></section>

    <section className="tractor-section" id="tractor"><div className="shell tractor-content"><div className="tractor-top"><p className="eyebrow">०३ / जमिनीवरील यंत्रे</p></div><h2>Pehelwan आता<br /><em>जमिनीवर.</em></h2><p>Pehelwan हे मामाचे छोटे इलेक्ट्रिक शेतयंत्र आहे. पीक ओळींमधील जागा आणि काम लक्षात घेऊन त्याची सध्याची रचना केली आहे.</p><div className="tractor-descriptors"><span>छोटे.</span><span>इलेक्ट्रिक.</span><span>स्वयंचलित.</span></div><figure className="prototype-visual"><EditorialImage src="/pehelwan-outdoor-wide.webp" alt="झाडांखाली उभे असलेले Pehelwan इलेक्ट्रिक शेतयंत्र" contain /><figcaption className="image-caption">Pehelwan / अंतिम रचना बदलू शकते</figcaption></figure><div className="tractor-bottom"><p>अंतिम तपशील, प्रमाणपत्रे आणि विक्रीची तारीख अद्याप निश्चित नाही.</p><Link className="button button-signal" href="/marathi/electric-tractor">Pehelwan पाहा</Link></div></div></section>

    <section className="section journey-section"><div className="shell"><div className="journey-heading"><p className="eyebrow">०४ / आमचा प्रवास</p><h2>कामातून बदललेली <em>दिशा.</em></h2><Link className="text-link" href="/marathi/our-journey">आमचा प्रवास वाचा <span aria-hidden="true">↗</span></Link></div><div className="journey-layout"><div className="journey-image"><EditorialImage src={assets.founderSession} alt="ड्रोन प्रशिक्षणात बोलताना मामा संस्थापक धीरज बोर्डे" /></div><div className="journey-chapters"><article><span>०१ / सुरुवात</span><h3>शेतीशी नाते.</h3><p>संस्थापक धीरज बोर्डे शेतकरी कुटुंबात वाढले. त्यांनी जवळून पाहिलेल्या प्रश्नांवर काम सुरू केले.</p></article><article><span>०२ / पहिले पाऊल</span><h3>फवारणीपासून सुरुवात.</h3><p>सेवेच्या कामातून टीमचा शेतकरी आणि ड्रोन चालकांशी नियमित संवाद झाला.</p></article><article><span>०३ / पुढची दिशा</span><h3>जमिनीवरील यंत्र.</h3><p>त्याच अनुभवातून छोट्या इलेक्ट्रिक यंत्राचे काम सुरू झाले.</p></article></div></div></div></section>

    <section className="section people-section"><div className="shell people-grid"><div><p className="eyebrow">०५ / मामामागची टीम</p><h2>ड्रोन चालक आणि अभियंते <em>एकत्र.</em></h2><p>कंपनीचे नेतृत्व धीरज बोर्डे करतात. टीममध्ये इलेक्ट्रिक वाहन, सॉफ्टवेअर, डिझाइन आणि शेतातील कामाचा अनुभव आहे.</p></div><EditorialImage src={assets.training} alt="कृषी ड्रोन प्रात्यक्षिकासाठी जमलेले लोक" /></div></section>

    <section className="section product-preview"><div className="shell"><div className="product-heading"><div><p className="eyebrow">ड्रोन संग्रह</p><h2>शेतातील यंत्रे.</h2></div><Link className="text-link" href="/marathi/drones">सर्व ड्रोन पाहा <span aria-hidden="true">↗</span></Link></div><div className="preview-grid">{drones.slice(0, 3).map((drone, index) => <Link className="preview-product" key={drone.slug} href={`/marathi/drones/${drone.slug}`}><span className="product-number">०{index + 1} / कृषी ड्रोन</span><EditorialImage src={drone.image} alt={drone.imageAlt} contain /><h3>{marathiDroneName(drone.slug)}</h3><p>{marathiDroneVariant(drone.slug)}</p><span className="text-link">तपशील पाहा <span aria-hidden="true">↗</span></span></Link>)}</div></div></section>

    <section className="closing-section"><div className="shell"><p className="eyebrow">पुढचे पाऊल</p><h2>आम्ही कशी <em>मदत करू?</em></h2><p>ड्रोन पाहा, Pehelwan ची माहिती वाचा किंवा तुमची गरज आम्हाला सांगा.</p><div className="button-row"><Link className="button button-signal" href="/marathi/drones">ड्रोन पाहा</Link><Link className="button button-outline-light" href="/marathi/electric-tractor">Pehelwan पाहा</Link><Link className="text-link light-link" href="/marathi/contact">संपर्क करा <span aria-hidden="true">↗</span></Link></div></div></section>
  </main>;
}
