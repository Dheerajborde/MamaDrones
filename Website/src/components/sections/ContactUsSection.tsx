"use client";
import "../../styles/ContactUsSection.css";
import FormfacadeEmbed from "@formfacade/embed-react";

interface ContactSectionProps {
  language: "en" | "mr";
  compact?: boolean;
}

const translations = {
  en: {
    title: "Contact Us Today",
    dataNote: "This form sends your details through Formfacade and Google Forms so our team can respond. Please do not include sensitive personal information.",
  },
  mr: {
    title: "आजच संपर्क साधा",
    dataNote: "तुमची माहिती Formfacade आणि Google Forms द्वारे आमच्या टीमकडे जाते, जेणेकरून आम्ही उत्तर देऊ शकू. कृपया संवेदनशील वैयक्तिक माहिती लिहू नका.",
  },
};

export default function ContactSection({ language, compact = false }: ContactSectionProps) {
  return (
    <section className={compact ? "contact-embed" : "flex flex-col justify-between w-full max-w-[1200px] mx-auto py-20 px-6"}>
      {!compact && <h2 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-green-600 text-center">
        {translations[language]?.title || translations.en.title}
      </h2>}

      <div className={compact ? "contact-embed-content" : "my-6"}>
        <p className="contact-data-note">{translations[language].dataNote}</p>
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/114439240189022900817/form/1FAIpQLSdiCHB2E2kx2amJp_fCILp8rLRrwjjM3lCNic_htIGSBc6V_Q/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log("Form submitted")}
        />
      </div>
    </section>
  );
}
