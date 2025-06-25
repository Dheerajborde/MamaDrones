"use client";
import { useEffect } from "react";
import { Mail, Navigation, Phone } from "lucide-react";
import "../../styles/ContactUsSection.css";

interface ContactSectionProps {
  language: "en" | "mr";
}

const translations = {
  en: {
    title: "Contact Us Today",
  },
  mr: {
    title: "आजच संपर्क साधा",
  },
};

export default function ContactSection({ language }: ContactSectionProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://formfacade.com/include/100008665769197071428/form/1FAIpQLSdpDjN5SudOMl7jEDnG54EAVEoZiBelnPecw26mN8WDFXwE8w/classic.js?div=ff-compose";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="flex flex-col justify-between w-full max-w-[1200px] mx-auto py-20 px-6">
      <h1 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-green-600 text-center">
        {translations[language]?.title || translations.en.title}
      </h1>

      <div id="ff-compose" className="my-6">
        {/* Form will be dynamically injected here */}
      </div>
    </section>
  );
}