"use client";
import { Mail, Navigation, Phone } from "lucide-react";
import "../../styles/ContactUsSection.css";
import FormfacadeEmbed from "@formfacade/embed-react";

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
  return (
    <section className="flex flex-col justify-between w-full max-w-[1200px] mx-auto py-20 px-6">
      <h1 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-green-600 text-center">
        {translations[language]?.title || translations.en.title}
      </h1>

      <div className="my-6">
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/114439240189022900817/form/1FAIpQLSdiCHB2E2kx2amJp_fCILp8rLRrwjjM3lCNic_htIGSBc6V_Q/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log("Form submitted")}
        />
      </div>
    </section>
  );
}
