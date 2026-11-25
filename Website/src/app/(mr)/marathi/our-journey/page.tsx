import type { Metadata } from "next";
import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import { assets } from "@/lib/site-data";
import "../../../journey.css";

export const metadata: Metadata = { title: "आमचा प्रवास", description: "ड्रोन फवारणीपासून Pehelwan पर्यंत मामाचा प्रवास मराठीत.", alternates: { canonical: "/marathi/our-journey" } };

const chapters = [
  { number: "०१", year: "मुळे", label: "शेतीशी नाते", title: "प्रश्न घराजवळच होता.", copy: "संस्थापक धीरज बोर्डे शेतकरी कुटुंबात वाढले. त्यांनी जवळून पाहिलेल्या प्रश्नांवर काम करण्याचे ठरवले." },
  { number: "०२", year: "२०२३", label: "सप्टेंबर २०२३", title: "ड्रोन फवारणी सुरू झाली.", copy: "टीमने कृषी ड्रोन शेतात वापरले आणि प्रत्येक उड्डाणानंतर ग्राहकांना कशाची गरज भासते ते समजून घेतले." },
  { number: "०३", year: "२०२४", label: "एप्रिल २०२४", title: "दहा दिवसांचा प्रवास.", copy: "पुणे ते यवतमाळ दौऱ्यात टीम शेतकऱ्यांच्या शेतात गेली आणि यंत्रे कुठे अपुरी पडतात ते ऐकले." },
  { number: "०४", year: "२०२६", label: "सेवेचे जाळे", title: "सेवा वाढत गेली.", copy: "अधिक शेतकरी मामा ड्रोन वापरू लागल्यावर विक्रीसोबत प्रशिक्षण आणि दुरुस्तीही वाढली." },
  { number: "०५", year: "आज", label: "Pehelwan", title: "Pehelwan ची सुरुवात.", copy: "टीमने पीक ओळींमधील उपलब्ध जागा लक्षात घेऊन छोटे इलेक्ट्रिक शेतयंत्र तयार केले." },
] as const;

export default function MarathiJourneyPage() {
  return <main className="story-page" lang="mr">
    <section className="story-hero"><div className="shell"><p className="eyebrow">मामा / आमचा प्रवास</p><h1>फवारणीपासून <span>Pehelwan पर्यंत.</span></h1><figure className="story-hero-figure"><EditorialImage src={assets.communityDrone} alt="मामा कृषी ड्रोनभोवती बाहेर जमलेले लोक" priority /><figcaption>शेतातील लोक आणि कृषी ड्रोन</figcaption></figure><div className="story-hero-bottom"><p>ड्रोन सेवा व्यवसायातून जमिनीवरील यंत्राचे काम कसे सुरू झाले.</p><div className="story-hero-actions"><Link className="button button-signal" href="/marathi/contact">आमच्याशी बोला</Link><Link className="story-secondary-link" href="#story-timeline">प्रवास पाहा</Link></div></div></div></section>

    <section className="story-purpose"><div className="shell"><div className="story-purpose-header"><div><p className="eyebrow">काय बदलले</p><h2>सेवेतून <em>यंत्राची दिशा ठरली.</em></h2></div><p>फवारणीच्या कामात वेळेचे महत्त्व स्पष्ट झाले. उशीर, सुटा भाग न मिळणे किंवा दूरची दुरुस्ती यांमुळे काम थांबू शकते.</p></div><div className="story-principles"><article className="story-principle"><span>जाळे</span><h3>आधी विश्वास.</h3><p>जमिनीवरील यंत्राचा विचार सुरू होण्याआधी ड्रोन सेवेमुळे टीम शेतकऱ्यांशी जोडली गेली.</p></article><article className="story-principle"><span>सेवा</span><h3>मदत जवळ असावी.</h3><p>यंत्र विकल्यानंतरही प्रशिक्षण आणि दुरुस्ती उपलब्ध असणे गरजेचे आहे.</p></article><article className="story-principle"><span>अभियांत्रिकी</span><h3>ओळीत बसणारी रचना.</h3><p>पीक ओळींसाठीचे यंत्र मोकळ्या शेतासाठीच्या यंत्रापेक्षा वेगळे असते.</p></article></div></div></section>

    <section className="story-timeline" id="story-timeline"><div className="shell story-timeline-grid"><div className="story-timeline-head"><p className="eyebrow">आमचा प्रवास</p><h2>वर्षानुवर्षे <em>शेताजवळ.</em></h2><p>नोव्हेंबर २०२६ मधील कंपनीच्या माहितीनुसार महत्त्वाचे टप्पे.</p></div><ol className="story-steps">{chapters.map((chapter) => <li className="story-step" key={chapter.number}><div className="story-step-marker"><span className="story-step-number">{chapter.number} / ०५</span><span className="story-step-year">{chapter.year}</span></div><div className="story-step-content"><p className="story-step-label">{chapter.label}</p><h3>{chapter.title}</h3><p>{chapter.copy}</p></div></li>)}</ol></div></section>

    <section className="story-people"><div className="shell story-people-grid"><div className="story-people-copy"><p className="eyebrow">कामामागची माणसे</p><h2>शेतातून आलेले <em>प्रश्न.</em></h2><p>टीमने पीक ओळींमधील जागा, यंत्र बंद पडल्यावर होणारा विलंब आणि जवळची मदत याबद्दल शेतकऱ्यांशी चर्चा केली. या उत्तरांचा जमिनीवरील यंत्राच्या रचनेत वापर होत आहे.</p><Link className="story-secondary-link" href="/marathi/contact">संपर्क करा</Link></div><figure><EditorialImage src={assets.farmDroneGroup} alt="कृषी ड्रोनसोबत मामा टीम आणि शेतकरी" /><figcaption>कामामागच्या लोकांसोबत</figcaption></figure></div></section>

    <section className="story-next"><div className="shell story-next-grid"><div className="story-next-mark" aria-hidden="true"><span>२०२३</span><i /> <span>२०२६</span><strong>ड्रोन सेवा → Pehelwan</strong></div><div><p className="eyebrow">पुढचे पाऊल</p><h2>यंत्र <em>पाहा.</em></h2><p>Pehelwan ची सध्याची मोजमापे, बॅटरीची रचना आणि उपलब्धतेची माहिती त्याच्या पानावर पाहा.</p><p className="story-development-note">अंतिम तपशील आणि विक्रीची तारीख अद्याप निश्चित नाही.</p><Link className="button button-signal" href="/marathi/electric-tractor">Pehelwan पाहा</Link></div></div></section>

    <section className="story-invite"><div className="shell"><p className="eyebrow">संवाद पुढे नेऊया</p><h2>तुमच्या शेतातील <em>प्रश्न सांगा.</em></h2><Link className="button button-signal" href="/marathi/contact">मामाशी संपर्क करा</Link></div></section>
  </main>;
}
