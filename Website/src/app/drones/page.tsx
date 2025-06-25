"use client"
import { useState, useEffect } from "react"
import Footer from "@/components/Footer"

import FAQSection from "@/components/sections/FAQSection"
import HeroSection from "@/components/sections/HeroSection"
import ContactUsSection from "@/components/sections/ContactUsSection"
import WhyDB from "@/components/sections/WhyDB"
import NewSteps from "@/components/sections/Steps"
import Advantages from "@/components/sections/Advantages"
import useMediaQuery from "@/utils/useMediaQuery"


import DroneStore from "@/components/sections/DroneStore" // Import the


import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
export default function DronesPage() {
   const [isClient, setIsClient] = useState(false)
    const [language, setLanguage] = useState<"en" | "mr">("en")
    const md = useMediaQuery("(min-width: 800px)")
  
    useEffect(() => {
      setIsClient(true)
      const savedLang = localStorage.getItem("language")
      if (savedLang === "en" || savedLang === "mr") {
        setLanguage(savedLang)
      }
  
      
    }, [])
  
    const toggleLanguage = () => {
      const newLang = language === "en" ? "mr" : "en"
      setLanguage(newLang)
      localStorage.setItem("language", newLang)
    }
  
    if (!isClient) {
      return null
    }
  

  return (
    
     
    <>


     <Header language={language} setLanguage={setLanguage} />

      <DroneStore language={language} />
  </>
  )
}
