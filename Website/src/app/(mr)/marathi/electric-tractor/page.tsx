import type { Metadata } from "next";
import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import TractorVideo from "@/components/TractorVideo";
import { assets } from "@/lib/site-data";

export const metadata: Metadata = { title: "Pehelwan इलेक्ट्रिक ट्रॅक्टर", description: "Pehelwan ची सध्याची रचना, पीक ओळींसाठी मोजमाप आणि उपलब्धतेची माहिती मराठीत.", alternates: { canonical: "/marathi/electric-tractor" } };

const figures = [
  { value: "३.१–३.२ फूट", title: "सध्याची रुंदी", description: "अरुंद पीक ओळींमधून जाण्यासाठी छोट्या रचनेचा विचार केला आहे." },
  { value: "४ फूट", title: "लक्ष्यित पीक ओळी", description: "शेतात आढळलेल्या ओळींमधील अंतर लक्षात घेऊन यंत्राची रुंदी ठरवली आहे." },
  { value: "१० kWh", title: "सध्याची बॅटरी रचना", description: "नोव्हेंबर २०२६ मधील रचनेतील क्षमता. कामाचा कालावधी अजून शेतात तपासावा लागेल." },
] as const;

const views = [
  { src: "/pehelwan-road-view.webp", alt: "पक्क्या रस्त्यावर Pehelwan", caption: "रस्त्यावरील दृश्य" },
  { src: "/pehelwan-outdoor-close.webp", alt: "बाहेरून जवळून दिसणारे Pehelwan", caption: "जवळून दृश्य" },
] as const;

export default function MarathiTractorPage() {
  return <main lang="mr">
    <section className="tractor-page-hero"><div className="shell"><div className="tractor-top"><p className="eyebrow">जमिनीवरील यंत्रे / Pehelwan</p></div><h1>अरुंद पीक ओळींसाठी<br /><em>इलेक्ट्रिक ट्रॅक्टर.</em></h1><p>Pehelwan हे मामाचे छोटे इलेक्ट्रिक शेतयंत्र आहे. नेहमीच्या ट्रॅक्टरला जिथे जास्त जागा लागते, तिथल्या पीक ओळींमधील कामासाठी टीमने ते तयार केले आहे.</p><div className="tractor-price" role="note"><span>लक्ष्यित किंमत</span><strong>₹४.५ लाखांपेक्षा कमी</strong><small>अंतिम ग्राहक किंमत आणि उपलब्धता निश्चित झालेली नाही.</small></div><figure className="prototype-visual"><EditorialImage src={assets.prototype} alt="बाहेर छायाचित्रित केलेले छोटे इलेक्ट्रिक शेतयंत्र" priority contain /><figcaption className="image-caption">Pehelwan / अंतिम रचना बदलू शकते</figcaption></figure><div className="tractor-page-footer"><Link className="button button-signal" href="/marathi/contact?interest=tractor">रस नोंदवा</Link></div></div></section>

    <section className="tractor-video-section" aria-labelledby="marathi-tractor-video-title"><div className="shell"><p className="eyebrow">Pehelwan / रस्त्यावरील चाचणी</p><h2 id="marathi-tractor-video-title">Pehelwan <em>चालताना पाहा.</em></h2><figure className="tractor-video-figure"><TractorVideo /><figcaption>रस्त्यावरील चाचणी अर्ध्या वेगाने दाखवली आहे. अंतिम रचना बदलू शकते.</figcaption></figure></div></section>

    <section className="section tractor-story"><div className="shell tractor-story-grid"><div><p className="eyebrow">रचनेमागचा प्रश्न</p><h2>पीक ओळींमधील <em>कामासाठी जागा.</em></h2></div><div><p>यंत्रात पुरेशी शक्ती असूनही ते कामासाठी खूप रुंद असू शकते. सध्याची Pehelwan रचना पीक ओळ न वाढवता अरुंद जागेत काम करण्यासाठी आहे.</p><p>इलेक्ट्रिक ड्राइव्ह आणि नेव्हिगेशन या रचनेचा भाग आहेत. अंतिम कार्यक्षमता चाचणी आणि प्रमाणपत्रांवर अवलंबून आहे.</p><Link className="text-link" href="/marathi/our-journey">आमचा प्रवास वाचा <span aria-hidden="true">↗</span></Link></div></div></section>

    <section className="section prototype-gallery" aria-labelledby="marathi-gallery-title"><div className="shell"><div className="prototype-gallery-heading"><div><p className="eyebrow">Pehelwan / शेतातील छायाचित्रे</p><h2 id="marathi-gallery-title">सध्याची <em>रचना पाहा.</em></h2></div><p>टीमच्या कामातील रस्त्यावरील आणि बाहेरील छायाचित्रे. अंतिम रचना बदलू शकते.</p></div><div className="prototype-gallery-grid">{views.map((view) => <figure key={view.src}><EditorialImage src={view.src} alt={view.alt} contain /><figcaption>{view.caption}</figcaption></figure>)}</div></div></section>

    <section className="section tractor-focus"><div className="shell"><p className="eyebrow">रचनेचा संदर्भ / नोव्हेंबर २०२६</p><h2>Pehelwan <em>आकड्यांत.</em></h2><div className="focus-list">{figures.map((item) => <article key={item.value}><span>{item.value}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><p className="design-source">नोव्हेंबर २०२६ मधील कंपनीने दिलेली रचनेची माहिती. अंतिम तपशील बदलू शकतात.</p></div></section>

    <section className="section development-note"><div className="shell"><p className="eyebrow">सध्याची स्थिती</p><h2>आजची माहिती.</h2><div className="note-columns"><p>Pehelwan सध्या खरेदीसाठी उपलब्ध नाही. वर दिलेली किंमत हे लक्ष्य आहे, निश्चित विक्री दर नाही. प्रमाणपत्रे आणि विक्रीची तारीख जाहीर झालेली नाही.</p><div><p>Pehelwan विषयी अपडेट किंवा सहकार्याबद्दल विचारायचे आहे? विद्यमान संपर्क मार्गाने मामाला तुमची गरज सांगा.</p><Link className="button button-dark" href="/marathi/contact?interest=tractor">रस नोंदवा</Link></div></div></div></section>
  </main>;
}
