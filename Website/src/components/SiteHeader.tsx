"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLink = { href: string; label: string };

const englishLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/drones", label: "Drones" },
  { href: "/electric-tractor", label: "Electric Tractor" },
  { href: "/our-journey", label: "Our Journey" },
  { href: "/contact", label: "Contact" },
];

const marathiLinks: NavLink[] = [
  { href: "/marathi", label: "मुख्यपृष्ठ" },
  { href: "/marathi/drones", label: "ड्रोन" },
  { href: "/marathi/electric-tractor", label: "इलेक्ट्रिक ट्रॅक्टर" },
  { href: "/marathi/our-journey", label: "आमचा प्रवास" },
  { href: "/marathi/contact", label: "संपर्क" },
];

export default function SiteHeader({ language = "en" }: { language?: "en" | "mr" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const marathi = language === "mr";
  const links = marathi ? marathiLinks : englishLinks;
  const englishPath = marathi ? pathname.replace(/^\/marathi/, "") || "/" : "/";

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="brand" href={marathi ? "/marathi" : "/"} aria-label="MAMA Agricultural Robotics by Shanik AG Private Limited, home" onClick={() => setOpen(false)}>
          <Image className="brand-icon" src="/mama_drones.svg" width={42} height={42} alt="" />
          <span className="brand-type">MAMA<span>AGRICULTURAL ROBOTICS</span><small>by Shanik AG Private Limited</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-nav" aria-label={open ? (marathi ? "मेनू बंद करा" : "Close menu") : (marathi ? "मेनू उघडा" : "Open menu")} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav id="primary-nav" className={`primary-nav ${open ? "is-open" : ""}`} aria-label={marathi ? "मुख्य नेव्हिगेशन" : "Primary navigation"}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
          {marathi && <Link className="language-switch" href={englishPath} lang="en" onClick={() => setOpen(false)}>English</Link>}
          <a className="nav-call" href="tel:+919322418319">{marathi ? "फोन करा" : "Call us"}</a>
        </nav>
      </div>
    </header>
  );
}
