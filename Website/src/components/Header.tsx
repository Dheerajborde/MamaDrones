"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const translations = {
  en: {
    "why-db": "Why Us",
    advantages: "Advantages",
    faq: "FAQ",
    contact: "Contact",
    callUs: "Call Us",
    close: "Close",
  },
  mr: {
    "why-db": "आम्ही का",
    advantages: "फायदे",
    faq: "सामान्य प्रश्न",
    contact: "संपर्क करा",
    callUs: "आम्हाला कॉल करा",
    close: "बंद करा",
  },
} as const;

type Language = keyof typeof translations;
type TranslationKeys = keyof typeof translations["en"];

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

function Header({ language, setLanguage }: HeaderProps): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowMenu(false);
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId || "");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-green-600 shadow-md text-white h-20 w-full">
        <div className="w-full h-full flex items-center justify-between">

          {/* Logo (Flush to LHS) */}
          <Link href="/" className="flex items-center gap-2 pl-2">
            <Image
              src="/MamaDronesLogo.png"
              alt="Mama Drones Logo"
              width={220}
              height={70}
              className="w-auto max-h-[60px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 text-base lg:text-lg font-bold items-center">
            {["#why-db", "#advantages", "#faq", "#contact"].map((section, index) => (
              <a
                key={index}
                onClick={handleScroll}
                href={section}
                className="hover:text-yellow-400 transition duration-300"
              >
                {translations[language]?.[section.substring(1) as TranslationKeys] || section.substring(1)}
              </a>
            ))}
            <p
              className="cursor-pointer hover:text-yellow-400 transition duration-300"
              onClick={() => window.open("tel:9322418319")}
            >
              {translations[language].callUs}
            </p>

          </nav>

          {/* Language Toggle + Mobile Menu (Flush to RHS) */}
          <div className="flex items-center gap-2 pr-2">
            <button
              onClick={() => setLanguage(language === "en" ? "mr" : "en")}
              className="px-3 py-2 text-sm font-bold border border-white rounded-md hover:bg-green-500 transition"
            >
              {language === "en" ? "मराठी" : "English"}
            </button>
            {/* Mobile menu button visible on small screens */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="relative z-50 md:hidden"
            >
              <div className="w-5 h-0.5 bg-white mb-1" />
              <div className="w-5 h-0.5 bg-white mb-1" />
              <div className="w-5 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-1/2 h-full bg-green-600 z-40 shadow-lg flex flex-col items-end px-6 py-10 gap-6 text-lg font-semibold text-right"
          >
            {["#why-db", "#advantages", "#faq", "#contact"].map((section, index) => (
              <a
                key={index}
                onClick={handleScroll}
                href={section}
                className="hover:text-yellow-400 transition duration-300"
              >
                {translations[language]?.[section.substring(1) as TranslationKeys] || section.substring(1)}
              </a>
            ))}
            <p
              className="cursor-pointer hover:text-yellow-400 transition duration-300"
              onClick={() => window.open("tel:9322418319")}
            >
              {translations[language].callUs}
            </p>
            <a
              href="https://mamaapp.live"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300"
            >
              Mama A.I
            </a>

            <button
              onClick={() => setShowMenu(false)}
              className="px-4 py-2 bg-white text-green-500 rounded-md hover:bg-gray-200 transition"
            >
              {translations[language].close}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
