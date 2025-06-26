"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

interface FooterProps {
  language: "en" | "mr";
}

function Footer({ language }: FooterProps): JSX.Element {
  const controls = useAnimation();
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1 });
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  const content = {
    en: {
      tagline: "India’s First Integrated Drone Service Company.",
      socialMedia: "Social Media",
      office: "Office",
      address:
        "Mama Drone, Navbharat Society, Plot No. 5, Gurunagar Housing Society, Navbharat Housing Society, N-8, CIDCO, Chhatrapati Sambhajinagar, Maharashtra 431003 Ph: 9834512803",
      about:
        "Mama Drones is a leading provider of drone-based agricultural solutions, offering high-quality spare parts and expert maintenance across Maharashtra. Whether you're a farmer, dealer, or agritech enthusiast, Mama Drones empowers you with cutting-edge drone technology to increase efficiency, reduce labor costs, and maximize crop yields. Our trusted network of Mama Drones Centers ensures reliable service and support, while our digital platform makes it easy to locate service centers and order spare parts. Join the drone revolution with Mama Drones — where agriculture meets innovation.",
    },
    mr: {
      tagline: "भारताची पहिली एकत्रित ड्रोन सेवा कंपनी.",
      socialMedia: "सोशल मीडिया",
      office: "कार्यालय",
      address:
        "मामा ड्रोन, नवभारत सोसायटी, प्लॉट क्रमांक ५, गुरुनगर हाऊसिंग सोसायटी, नवभारत हाऊसिंग सोसायटी, एन ८, सिडको, छत्रपती संभाजीनगर, महाराष्ट्र ४३१००३ भा.क्र.: ९८३४५१२८०३",
      about:
        "मामा ड्रोन हे कृषी क्षेत्रासाठी ड्रोन-आधारित उपाययोजनांचे आघाडीचे प्रदाता आहेत, जे महाराष्ट्रभर उच्च-गुणवत्तेचे स्पेअर पार्ट्स आणि तज्ज्ञ सेवा सुविधा देतात. तुम्ही शेतकरी असाल, डीलर असाल किंवा एग्रिटेक क्षेत्रातील उत्साही व्यक्ती असाल, मामा ड्रोन तुम्हाला अत्याधुनिक ड्रोन तंत्रज्ञानाद्वारे कार्यक्षमतेत वाढ, श्रम खर्चात बचत आणि पीक उत्पादनात वाढ मिळवून देतो. आमचे विश्वासार्ह मामा ड्रोन सेंटर्सचे जाळे दर्जेदार सेवा आणि सहाय्य पुरवते, तर आमचे डिजिटल प्लॅटफॉर्म तुम्हाला सेवा केंद्रे शोधण्यास आणि स्पेअर पार्ट्स सहज मागवण्यास मदत करते. मामा ड्रोनसोबत ड्रोन क्रांतीचा भाग व्हा — जिथे शेती आणि नवोपक्रम यांचा संगम होतो.",
    },
  };

  return (
    <section>
      <footer className="bg-green-700 text-white flex flex-col md:flex-row justify-between items-start md:items-start w-full px-6 md:px-20 py-12 md:py-16 gap-10 md:gap-6">
        {/* About Section */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <h3 className="font-semibold text-lg md:text-xl mb-2">
            {language === "en" ? "About Us" : "आमच्याबद्दल"}
          </h3>
          <p className="text-sm md:text-base">{content[language].about}</p>
        </motion.div>

        {/* Office Info */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-1"
        >
          <a
            href="https://maps.app.goo.gl/zmYw1L3tHXgAw1oAA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-gray-200 mb-2"
          >
            <FaMapMarkerAlt className="h-5 w-5 md:h-6 md:w-6" />
            <h3 className="font-semibold text-lg md:text-xl">{content[language].office}</h3>
          </a>
          <p className="text-sm md:text-base leading-relaxed">
            {content[language].address.split(" Ph:")[0]}
            <br />
            <span className="font-bold">
              {language === "en" ? "Ph:" : "भा.क्र.:"} 9834512803
            </span>
          </p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex-1"
        >
          <h4 className="font-semibold text-lg md:text-xl mb-2">{content[language].socialMedia}</h4>
          <div className="flex flex-col gap-3">
            <motion.a href="https://facebook.com" target="_blank" whileHover={{ scale: 1.1 }} className="flex items-center gap-2 text-sm md:text-base">
              <FaFacebook className="h-5 w-5 md:h-6 md:w-6" /> Facebook
            </motion.a>
            <motion.a href="https://instagram.com" target="_blank" whileHover={{ scale: 1.1 }} className="flex items-center gap-2 text-sm md:text-base">
              <FaInstagram className="h-5 w-5 md:h-6 md:w-6" /> Instagram
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank" whileHover={{ scale: 1.1 }} className="flex items-center gap-2 text-sm md:text-base">
              <FaTwitter className="h-5 w-5 md:h-6 md:w-6" /> Twitter
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank" whileHover={{ scale: 1.1 }} className="flex items-center gap-2 text-sm md:text-base">
              <FaLinkedin className="h-5 w-5 md:h-6 md:w-6" /> LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </footer>

      {/* Footer Logo */}
      <div className="w-full bg-green-700 py-4 flex justify-center items-center">
        <Image
          src="/MamaDronesLogo.png"
          alt="Mama Drone Logo"
          width={180}
          height={180}
          className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default Footer;
