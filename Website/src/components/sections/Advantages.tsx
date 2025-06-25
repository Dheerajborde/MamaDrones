import React, { useEffect } from "react";
import AdvantageCard from "./AdvantageCard";
import { motion } from "framer-motion";

interface AdvantagesProps {
  language: "en" | "mr";
}

const translations = {
  en: {
    title: "Our Advantages",
    subtitle: "Experience the future of drone services with our cutting-edge solutions and unique expertise.",
    advantages: [
      {
        title: "Innovative Solutions",
        description: "We handle operational complexities, allowing you to focus on innovation and stay ahead in the drone industry.",
        icon: "innovation",
        bgColor: "bg-blue-100",
        hoverColor: "hover:bg-blue-200",
        iconColor: "text-blue-600",
      },
      {
        title: "Nationwide Network",
        description: "Expand your services across India from day one with our vast network and ensure seamless operations.",
        icon: "network",
        bgColor: "bg-green-100",
        hoverColor: "hover:bg-green-200",
        iconColor: "text-green-600",
      },
      {
        title: "Advanced Software",
        description: "Leverage our cutting-edge software for accountability, flexibility, and business efficiency.",
        icon: "software",
        bgColor: "bg-purple-100",
        hoverColor: "hover:bg-purple-200",
        iconColor: "text-purple-600",
      },
    ],
    cta: "Get Started Today",
  },
  mr: {
    title: "आमचे फायदे",
    subtitle: "आमच्या अत्याधुनिक उपायांद्वारे आणि अद्वितीय कौशल्याद्वारे ड्रोन सेवांचे भविष्य अनुभवा.",
    advantages: [
      {
        title: "नाविन्यपूर्ण उपाय",
        description: "ऑपरेशनल गुंतागुंती आम्ही हाताळतो, ज्यामुळे तुम्ही उत्पादन नाविन्यावर लक्ष केंद्रित करू शकता आणि ड्रोन उद्योगात पुढे राहू शकता.",
        icon: "innovation",
        bgColor: "bg-blue-100",
        hoverColor: "hover:bg-blue-200",
        iconColor: "text-blue-600",
      },
      {
        title: "संपूर्ण भारतात जाळे",
        description: "आमच्या विस्तृत नेटवर्कच्या मदतीने पहिल्याच दिवशी भारतभर तुमच्या सेवांचा विस्तार करा आणि सुरळीत कार्यक्षमतेची खात्री द्या.",
        icon: "network",
        bgColor: "bg-green-100",
        hoverColor: "hover:bg-green-200",
        iconColor: "text-green-600",
      },
      {
        title: "प्रगत सॉफ्टवेअर",
        description: "जवाबदारी, लवचिकता आणि व्यवसाय सुलभतेसाठी आमच्या अत्याधुनिक सॉफ्टवेअरचा लाभ घ्या.",
        icon: "software",
        bgColor: "bg-purple-100",
        hoverColor: "hover:bg-purple-200",
        iconColor: "text-purple-600",
      },
    ],
    cta: "आजच सुरुवात करा",
  },
};

const Advantages: React.FC<AdvantagesProps> = ({ language }) => {
  // Ensure that translations[language] exists and has a fallback for an invalid language
  const { title, subtitle, advantages, cta } = translations[language] || translations.en;  // Default to English

  useEffect(() => {
    console.log(language); // Log the language to check if it's correct
  }, [language]);

  return (
    <section id="advantages" className="flex flex-col py-16 px-8 w-full bg-gradient-to-b bg-blue-50">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="text-center p-7 font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-black-400 text-black-600 mb-6">
        {title}
      </motion.h2>

      <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {advantages.map((advantage, index) => (
          <AdvantageCard key={index} icon={advantage.icon} title={advantage.title}
            description={advantage.description} delay={0.3 + index * 0.2} bgColor={advantage.bgColor}
            hoverColor={advantage.hoverColor} iconColor={advantage.iconColor} centerContent={true} />
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }}
        className="mt-12 text-center">
        <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300">
          {cta}
        </a>
      </motion.div>
    </section>
  );
};

export default Advantages;
