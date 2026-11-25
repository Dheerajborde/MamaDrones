import Link from "next/link";

export default function SiteFooter({ language = "en" }: { language?: "en" | "mr" }) {
  const marathi = language === "mr";
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Link className="footer-brand" href={marathi ? "/marathi" : "/"} aria-label="MAMA Agricultural Robotics, home">MAMA<span>.</span></Link>
          <div className="footer-brand-detail">AGRICULTURAL ROBOTICS<br /><span>by Shanik AG Private Limited</span></div>
          <p>{marathi ? "कृषी ड्रोन आणि इलेक्ट्रिक यंत्रे." : "Agricultural drones and electric field machinery."}</p>
        </div>
        <div className="footer-links">
          {marathi ? <>
            <div><span className="eyebrow">पाहा</span><Link href="/marathi/drones">ड्रोन</Link><Link href="/marathi/electric-tractor">इलेक्ट्रिक ट्रॅक्टर</Link><Link href="/marathi/our-journey">आमचा प्रवास</Link><Link href="/" lang="en">English</Link></div>
            <div><span className="eyebrow">संपर्क</span><Link href="/marathi/contact">संपर्क करा</Link><a href="tel:+919322418319">+91 93224 18319</a><a href="tel:+919834512803">+91 98345 12803</a></div>
          </> : <>
            <div><span className="eyebrow">Explore</span><Link href="/drones">Drones</Link><Link href="/electric-tractor">Electric Tractor</Link><Link href="/our-journey">Our Journey</Link><Link href="/marathi" lang="mr">मराठी आवृत्ती</Link></div>
            <div><span className="eyebrow">Connect</span><Link href="/contact">Contact</Link><a href="tel:+919322418319">+91 93224 18319</a><a href="tel:+919834512803">+91 98345 12803</a></div>
          </>}
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Shanik AG Private Limited</span><span>{marathi ? "छत्रपती संभाजीनगर, महाराष्ट्र, भारत" : "Chhatrapati Sambhajinagar, Maharashtra, India"}</span></div>
    </footer>
  );
}
