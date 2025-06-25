"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ClientsPageProps {
  language: "en" | "mr";
}

const translations = {
  en: {
    title: "Our Partners",
    description: "We are proud to collaborate with leading companies in the industry.",
  },
  mr: {
    title: "आमचे ग्राहक",
    description: "आम्हाला उद्योगातील अग्रगण्य कंपन्यांसोबत सहकार्य करण्याचा अभिमान आहे."
  }
};

const ClientsPage = ({ language }: ClientsPageProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center py-10 sm:py-16 bg-gray-100 px-4 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="text-center w-full max-w-4xl"
      >
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900">
          {translations[language].title}
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
          {translations[language].description}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 place-items-center w-full max-w-3xl">
          <Image 
            src="https://res.cloudinary.com/dfly9upu9/image/upload/v1741181797/logo_cmyyxv.png"
            alt="Client Logo 1"
            width={200}
            height={100}
            className="w-32 sm:w-48 md:w-56 h-auto"
          />
          <Image 
            src="https://res.cloudinary.com/dfly9upu9/image/upload/v1741181808/images_y1gygc.png"
            alt="Client Logo 2"
            width={200}
            height={100}
            className="w-32 sm:w-48 md:w-56 h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ClientsPage;
