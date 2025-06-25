"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
    },
    mr: {
      tagline: "भारताची पहिली एकत्रित ड्रोन सेवा कंपनी.",
      socialMedia: "सोशल मीडिया",
      office: "कार्यालय",
      address:
        "मामा ड्रोन, नवभारत सोसायटी, प्लॉट क्रमांक ५, गुरुनगर हाऊसिंग सोसायटी, नवभारत हाऊसिंग सोसायटी, एन ८, सिडको, छत्रपती संभाजीनगर, महाराष्ट्र ४३१००३ भा.क्र.: ९८३४५१२८०३",
    },
  };

  return (
    <section>
      <footer
        className="bg-green-700 text-white flex flex-col md:flex-row justify-between items-start md:items-center w-full p-12 md:px-32 md:py-24 relative"
      >


        {/* Middle Section */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col w-full md:w-1/3 mt-6 md:mt-0"
        >
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="h-5 w-5 md:h-6 md:w-6" />
            <h3 className="font-semibold text-lg md:text-xl">{content[language].office}</h3>
          </div>
          <p className="text-sm md:text-base">{content[language].address}</p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col w-full md:w-1/4 mt-6 md:mt-0"
        >
          <h4 className="font-semibold text-lg md:text-xl">{content[language].socialMedia}</h4>
          <div className="flex flex-col gap-4 mt-3">
            <motion.a href="https://facebook.com" target="_blank" whileHover={{ scale: 1.1 }} className="flex items-center gap-2 text-sm md:text-lg">
              <FaFacebook className="h-5 w-5 md:h-6 md:w-6" /> Facebook
            </motion.a>
            <motion.a href="https://instagram.com" target="_blank" whileHover={{ scale: 1.1 }} className="flex items-center gap-2 text-sm md:text-lg">
              <FaInstagram className="h-5 w-5 md:h-6 md:w-6" /> Instagram
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank" whileHover={{ scale: 1.1 }} className="flex items-center gap-2 text-sm md:text-lg">
              <FaTwitter className="h-5 w-5 md:h-6 md:w-6" /> Twitter
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank" whileHover={{ scale: 1.1 }} className="flex items-center gap-2 text-sm md:text-lg">
              <FaLinkedin className="h-5 w-5 md:h-6 md:w-6" /> LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </footer>

      {/* Centered Logo at the End */}
      <div className="w-full bg-green-700 py-6 sm:py-8 md:py-10 flex flex-col justify-center items-center">
        <Image
          src="/MamaDronesLogo.png"
          alt="Mama Drone Logo"
          width={210}
          height={210}
          className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto object-contain"
        />
      </div>

    </section>
  );
}

export default Footer;
