"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

interface HeroSectionProps {
  language: "en" | "mr";
}

const translations = {
  en: {
    title: "India's First Drone Service Company.",
    subtitle:
      "India's fastest drone network, we deploy agricultural drones in rural areas, provide excellent drone education, repair services, and multilingual customer support, all with speed and superior quality.",
    buttonText: "Buy Agricultural Drone",
  },
  mr: {
    title: "भारतातील पहिली ड्रोन सेवा कंपनी.",
    subtitle:
      "भारतातील सर्वात वेगवान ड्रोन नेटवर्क, आम्ही ग्रामीण भागात कृषी ड्रोन तैनात करतो, उत्कृष्ट ड्रोन शिक्षण, दुरुस्ती सेवा आणि बहुभाषिक ग्राहक समर्थन प्रदान करतो, तेही वेगाने आणि उत्कृष्ट गुणवत्तेसह.",
    buttonText: "कृषी ड्रोन खरेदी करा",
  },
};

function HeroSection({ language }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-[80vh] sm:min-h-[90vh] md:min-h-[100vh] lg:min-h-[110vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://res.cloudinary.com/disoamdue/video/upload/v1750755028/videoplayback_online-video-cutter.com_rediws.mp4"
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
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
          <img
            src="/Mama_app_soon.png"        // ← Make sure this name is correct
            alt="Mama Drones Spraying in Action"
            className="w-full rounded-2xl shadow-xl border border-gray-200"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;