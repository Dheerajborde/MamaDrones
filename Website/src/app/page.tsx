"use client"

import { useState, useEffect } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import FAQSection from "@/components/sections/FAQSection"
import HeroSection from "@/components/sections/HeroSection"
import ContactUsSection from "@/components/sections/ContactUsSection"

import NewSteps from "@/components/sections/Steps"
import Advantages from "@/components/sections/Advantages"
import useMediaQuery from "@/utils/useMediaQuery"
import DronebuddyCenters from "@/components/sections/DronebuddyCenters"
import { LanguageProvider } from "../contexts/LanguageContext"
import DroneStore from "@/components/sections/DroneStore"
import ClientsPage from "@/components/sections/ClientsPage" 
import DroneServices from "@/components/sections/DroneServices"
import StartupActivities from "@/components/sections/StartupActivities"

const translations = {
  en: {
    hero: "Welcome to Our Website",
    droneStore: "Our Drone Collection",
    whyDB: "Why Choose Us?",
    steps: "Steps to Follow",
    advantages: "Our Advantages",
    dronebuddyCenters: "Dronebuddy Centers",
    gallery: "Gallery",
    faq: "Frequently Asked Questions",
    contact: "Contact Us",
    switchLanguage: "\u092E\u0930\u093E\u0920\u0940",
  },
  mr: {
    hero: "\u0906\u092E\u091A\u094D\u092F\u093E \u0935\u0947\u092C\u0938\u093E\u0907\u091F\u0935\u0930 \u0906\u092A\u0932\u0947 \u0938\u094D\u0935\u093E\u0917\u0924 \u0906\u0939\u0947",
    droneStore: "\u0906\u092E\u091A\u0947 \u0921\u094D\u0930\u094B\u0928 \u0938\u0902\u0917\u094D\u0930\u0939",
    whyDB: "\u0906\u092E\u0939\u093E\u0932\u093E \u0915\u093E \u0928\u093F\u0935\u0921\u093E\u0935\u0947?",
    steps: "\u0905\u0928\u0941\u0938\u0930\u0923 \u0915\u0930\u0923\u094D\u092F\u093E\u091A\u0947 \u091F\u092A\u094D\u092A\u0947",
    advantages: "\u0906\u092E\u091A\u0947 \u092B\u093E\u092F\u0926\u0947",
    dronebuddyCenters: "\u0921\u094D\u0930\u094B\u0928\u092C\u0921\u0940 \u0915\u0947\u0902\u0926\u094D\u0930\u0947",
    gallery: "\u0917\u0945\u0932\u0930\u0940",
    faq: "\u0928\u0947\u0939\u092E\u0940 \u0935\u093F\u091A\u093E\u0930\u0932\u0947 \u091C\u093E\u0923\u093E\u0930\u0940 \u092A\u094D\u0930\u0936\u094D\u0928",
    contact: "\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u093E",
    switchLanguage: "English",
  },
}

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [language, setLanguage] = useState<"en" | "mr">("mr")
  const md = useMediaQuery("(min-width: 800px)")

  useEffect(() => {
    setIsClient(true)
    const savedLang = localStorage.getItem("language")
    if (savedLang === "en" || savedLang === "mr") {
      setLanguage(savedLang)
    }
 
 

    // const script1 = document.createElement("script")
    // script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js"
    // script1.async = true
    // document.body.appendChild(script1)

    // const script2 = document.createElement("script")
    // script2.src = "https://files.bpcontent.cloud/2025/03/16/16/20250316160453-PH0KMYB2.js"
    // script2.async = true
    // document.body.appendChild(script2)

    // return () => {
    //   document.body.removeChild(script1)
    //   document.body.removeChild(script2)
    // }
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <LanguageProvider>
      
      <main className="min-h-screen relative">
        <Header language={language} setLanguage={setLanguage} />

        <section id="hero">
          <HeroSection language={language} />
        </section>
        <section>
          <DroneStore language={language}/>
        </section>
        <section>
          <DroneServices language={language} />
        </section>
       
        <section id="steps">
          <NewSteps language={language} />
        </section>
        <section id="advantages">
          <Advantages language={language} />
        </section>
        <section>
          <StartupActivities language={language} />
        </section>
        <section id="dronebuddy-centers">
          <DronebuddyCenters language={language} />
        </section>
        <section id="faq">
          <FAQSection language={language} />
        </section>
        <section id="contact">
          <ContactUsSection language={language} />
        </section>
        <section>
          <ClientsPage language={language} />
        </section>
        <Footer language={language} />
      </main>
    </LanguageProvider>
  )
}