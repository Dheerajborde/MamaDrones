import Image from "next/image";
import TractorVideo from "@/components/TractorVideo";

const translations = {
  en: {
    nav: ["Overview", "Machine", "Road test", "Design"],
    enquiry: "Register interest",
    intro: "Electric ground systems / MAMA Agricultural Robotics",
    title: "Made for the space between.",
    lead: "Pehelwan is a compact electric tractor shaped by the reality of working between narrow crop rows.",
    explore: "Explore Pehelwan",
    storyLabel: "The machine",
    storyTitle: "A narrower way to get the work done.",
    story: "The team saw how a conventional tractor can need more room than a crop row allows. Pehelwan brings electric drive and a compact chassis to that challenge.",
    aboutTitle: "Engineering around the work.",
    aboutIntro: "Pehelwan brings machine design, vision AI and a largely Indian technology stack together around the needs of smaller fields.",
    aboutSections: [
      ["Vision AI", "Work on autonomous navigation, plant detection and plant health data collection. The roadmap also includes GPS guided sowing and vision guided weeding with targeted micro spray."],
      ["Machine innovation", "A multi speed gearbox, Quadra steer steering for tight spaces, a custom three point linkage, and control through either a remote or a steering wheel are part of the design."],
      ["Built in India", "The team is developing most of the technology stack in India, including a custom battery pack now in the making."],
    ],
    gallery: "Current build",
    galleryNote: "Photographs from the team’s work. Production design may change.",
    firstPhoto: "Pehelwan on the road",
    secondPhoto: "Pehelwan outdoors",
    thirdPhoto: "Pehelwan close view",
    videoLabel: "Road test / half speed",
    videoTitle: "See it move.",
    videoNote: "Road test shown at half speed. Production design may change.",
    figuresLabel: "Design reference / November 2026",
    figuresTitle: "A compact footprint, in numbers.",
    figures: [["3.1–3.2 ft", "Current width", "A narrow chassis intended for work between crop rows."], ["4 ft", "Target crop rows", "Sized around the spacing encountered in the field."], ["10 kWh", "Battery design", "Operating time still needs field validation."]],
    priceLabel: "Target price",
    price: "Below ₹4.5 lakh",
    caveat: "Company-reported design figures. Final price, specifications and availability are unconfirmed.",
    closeTitle: "Move the conversation forward.",
    closeText: "Tell us where you work and what you need from an electric tractor.",
    journey: "Our journey",
    footer: "Pehelwan by MAMA Agricultural Robotics · Shanik AG Private Limited",
  },
  mr: {
    nav: ["ओळख", "यंत्र", "चाचणी", "रचना"],
    enquiry: "रस नोंदवा",
    intro: "इलेक्ट्रिक शेतयंत्रे / मामा ॲग्रिकल्चरल रोबोटिक्स",
    title: "दोन ओळींमधल्या कामासाठी.",
    lead: "Pehelwan हा अरुंद पीक ओळींमधील कामाचा विचार करून बनवलेला छोटा इलेक्ट्रिक ट्रॅक्टर आहे.",
    explore: "Pehelwan पहा",
    storyLabel: "यंत्र",
    storyTitle: "कमी जागेत कामाची नवी दिशा.",
    story: "नेहमीच्या ट्रॅक्टरला पीक ओळींमधील कामासाठी जास्त जागा लागू शकते. त्या गरजेसाठी Pehelwan मध्ये इलेक्ट्रिक ड्राइव्ह आणि अरुंद रचना आहे.",
    aboutTitle: "शेतातील कामासाठी अभियांत्रिकी.",
    aboutIntro: "Pehelwan मध्ये यंत्ररचना, व्हिजन AI आणि प्रामुख्याने भारतीय तंत्रज्ञान एकत्र आणण्याचे काम सुरू आहे.",
    aboutSections: [
      ["व्हिजन AI", "स्वयंचलित मार्गक्रमण, रोपांची ओळख आणि पिकांच्या आरोग्याची माहिती गोळा करण्यावर काम सुरू आहे. GPS आधारित पेरणी आणि लक्ष्यित सूक्ष्म फवारणीद्वारे तण नियंत्रणही नियोजनात आहे."],
      ["यंत्रातील नवकल्पना", "बहुगती गिअरबॉक्स, कमी जागेत वळण्यासाठी Quadra steer स्टीयरिंग, खास तीन बिंदू जोडणी आणि रिमोट किंवा स्टीयरिंगद्वारे नियंत्रण या रचनेचा भाग आहेत."],
      ["भारतात विकसित", "बहुतेक तंत्रज्ञान भारतात विकसित केले जात आहे. खास बॅटरी पॅकवरही काम सुरू आहे."],
    ],
    gallery: "सध्याची रचना",
    galleryNote: "टीमच्या कामातील छायाचित्रे. अंतिम रचना बदलू शकते.",
    firstPhoto: "रस्त्यावरचा Pehelwan",
    secondPhoto: "बाहेरचा Pehelwan",
    thirdPhoto: "जवळून Pehelwan",
    videoLabel: "रस्त्यावरील चाचणी / अर्धा वेग",
    videoTitle: "चालताना पहा.",
    videoNote: "रस्त्यावरील चाचणी अर्ध्या वेगाने दाखवली आहे. अंतिम रचना बदलू शकते.",
    figuresLabel: "रचनेचा संदर्भ / नोव्हेंबर २०२६",
    figuresTitle: "छोट्या आकाराचे महत्त्वाचे आकडे.",
    figures: [["३.१–३.२ फूट", "सध्याची रुंदी", "पीक ओळींमधील कामासाठी अरुंद रचना."], ["४ फूट", "लक्ष्यित पीक ओळी", "शेतात आढळलेल्या अंतरानुसार आकार ठरवला."], ["१० kWh", "बॅटरी रचना", "कामाचा कालावधी अजून शेतात तपासावा लागेल."]],
    priceLabel: "लक्ष्यित किंमत",
    price: "₹४.५ लाखांपेक्षा कमी",
    caveat: "कंपनीने दिलेली रचनेची माहिती. अंतिम किंमत, तपशील आणि उपलब्धता निश्चित झालेली नाही.",
    closeTitle: "पुढील संवाद इथून सुरू करा.",
    closeText: "तुम्ही कुठे शेती करता आणि इलेक्ट्रिक ट्रॅक्टरकडून काय अपेक्षा आहेत ते आम्हाला सांगा.",
    journey: "आमचा प्रवास",
    footer: "Pehelwan · मामा ॲग्रिकल्चरल रोबोटिक्स · शानिक एजी प्रायव्हेट लिमिटेड",
  },
} as const;

export default function PehelwanSite({ language }: { language: "en" | "mr" }) {
  const c = translations[language];
  const marathi = language === "mr";
  const contact = `https://www.mamaapp.live/${marathi ? "marathi/" : ""}contact?interest=tractor`;
  const journey = `https://www.mamaapp.live/${marathi ? "marathi/" : ""}our-journey`;
  const targets = ["#overview", "#machine", "#road-test", "#design"];

  return <>
    <header className="ph-header"><div className="ph-container ph-nav">
      <a className="ph-wordmark" href={marathi ? "/marathi" : "/"}>PEHELWAN<span>®</span></a>
      <nav aria-label={marathi ? "मुख्य नेव्हिगेशन" : "Main navigation"}>{c.nav.map((label, index) => <a href={targets[index]} key={label}>{label}</a>)}</nav>
      <div className="ph-nav-actions"><a className="ph-language" href={marathi ? "/" : "/marathi"} hrefLang={marathi ? "en" : "mr"}>{marathi ? "EN" : "मराठी"}</a><a className="ph-button ph-button-small" href={contact}>{c.enquiry} ↗</a></div>
    </div></header>
    <main id="main">
      <section className="ph-hero" id="overview"><div className="ph-container ph-hero-copy"><p className="ph-label">{c.intro}</p><h1>{c.title}</h1><p className="ph-lead">{c.lead}</p><div className="ph-hero-actions"><a className="ph-button" href={contact}>{c.enquiry} ↗</a><a className="ph-text-link" href="#machine">{c.explore} ↓</a></div></div><div className="ph-hero-photo"><Image src="/pehelwan-road-view.webp" alt={c.firstPhoto} fill priority sizes="100vw" /></div><div className="ph-hero-bottom ph-container"><span>01 / PEHELWAN</span><span>{c.storyLabel}</span></div></section>
      <section className="ph-story ph-section" id="machine"><div className="ph-container ph-story-grid"><div><p className="ph-label">02 / {c.storyLabel}</p><h2>{c.storyTitle}</h2><p className="ph-story-copy">{c.story}</p></div><figure><Image src="/pehelwan-prototype.webp" alt={c.secondPhoto} fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>{c.gallery}</figcaption></figure></div></section>
      <section className="ph-about ph-section" id="about"><div className="ph-container"><p className="ph-label">PEHELWAN / ABOUT</p><div className="ph-section-heading"><h2>{c.aboutTitle}</h2><p>{c.aboutIntro}</p></div><div className="ph-about-grid">{c.aboutSections.map(([heading, detail]) => <article key={heading}><h3>{heading}</h3><p>{detail}</p></article>)}</div></div></section>
      <section className="ph-gallery ph-section" aria-label={c.gallery}><div className="ph-container"><div className="ph-section-heading"><h2>{c.gallery}</h2><p>{c.galleryNote}</p></div><div className="ph-gallery-grid"><figure><Image src="/pehelwan-outdoor-wide.webp" alt={c.secondPhoto} fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>{c.secondPhoto}</figcaption></figure><figure><Image src="/pehelwan-outdoor-close.webp" alt={c.thirdPhoto} fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>{c.thirdPhoto}</figcaption></figure></div></div></section>
      <section className="ph-film ph-section" id="road-test"><div className="ph-container"><div className="ph-section-heading"><div><p className="ph-label">03 / {c.videoLabel}</p><h2>{c.videoTitle}</h2></div><p>{c.videoNote}</p></div><TractorVideo /></div></section>
      <section className="ph-specs ph-section" id="design"><div className="ph-container"><p className="ph-label">04 / {c.figuresLabel}</p><h2>{c.figuresTitle}</h2><div className="ph-figures">{c.figures.map(([value, title, description]) => <article key={value}><strong>{value}</strong><h3>{title}</h3><p>{description}</p></article>)}</div><div className="ph-price"><span>{c.priceLabel}</span><strong>{c.price}</strong></div><p className="ph-caveat">{c.caveat}</p></div></section>
      <section className="ph-cta ph-section"><div className="ph-container"><p className="ph-label">PEHELWAN / MAMA</p><h2>{c.closeTitle}</h2><p>{c.closeText}</p><div className="ph-cta-actions"><a className="ph-button" href={contact}>{c.enquiry} ↗</a><a className="ph-text-link" href={journey}>{c.journey} ↗</a></div></div></section>
    </main>
    <footer className="ph-footer"><div className="ph-container"><span>PEHELWAN®</span><a href="https://www.mamaapp.live/">{c.footer}</a></div></footer>
  </>;
}
