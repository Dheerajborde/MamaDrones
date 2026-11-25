"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

interface HeroSectionProps {
  language: "en" | "mr";
}

const translations = {
  en: {
    title: "Agricultural drone products and services.",
    subtitle:
      "Mama works with agricultural drones in the field and offers equipment, training, repair and customer support.",
    buttonText: "Buy Agricultural Drone",
  },
  mr: {
    title: "कृषी ड्रोन उत्पादने आणि सेवा.",
    subtitle:
      "मामा कृषी ड्रोन, प्रशिक्षण, दुरुस्ती आणि ग्राहक सहाय्य यावर काम करते.",
    buttonText: "कृषी ड्रोन खरेदी करा",
  },
};

function HeroSection({ language }: HeroSectionProps) {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-[80vh] sm:min-h-[90vh] md:min-h-[100vh] lg:min-h-[110vh] flex items-center justify-center overflow-hidden">
        <Image src="https://res.cloudinary.com/disoamdue/image/upload/v1750657615/DroneSpraying_chdqrp.jpg" alt="Agricultural drone spraying a field" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="relative z-10 flex flex-col items-center justify-center text-center w-[90%] md:w-[70%] h-full px-4"
        >
          <h1 className="font-bold text-white text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] leading-tight">
            {translations[language].title}
          </h1>

          <h4 className="font-medium text-white text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem] leading-relaxed mt-4">
            {translations[language].subtitle}
          </h4>

          <Link href="/drones" passHref>
            <Button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110">
              {translations[language].buttonText}
            </Button>
          </Link>
        </motion.div>

        {/* Phone Button - Mobile Only */}
        <div className="fixed bottom-6 right-6 md:hidden flex flex-col items-center gap-3 z-50">
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "tel:9322418319")}
            className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center rounded-full shadow-lg transition-all duration-300"
          >
            <FaPhoneAlt className="text-2xl" />
          </motion.button>
        </div>
      </section>

      {/* New PNG Image - Placed JUST BELOW the video section */}
      <div className="bg-white py-8 md:py-12 flex justify-center">
        <div className="max-w-5xl w-full px-4">
          <Image
            src="/Mama_app_soon.png"
            alt="Mama Drones Spraying in Action"
            width={1200}
            height={800}
            className="w-full rounded-2xl shadow-xl border border-gray-200"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
