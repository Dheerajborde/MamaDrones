import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const translations = {
  en: {
    title: "Frequently Asked Questions",
    q1: "What is Mama Drones?",
    a1: "A one-stop shop for all your agricultural drone needs.",
    q2: "What services do you provide?",
    a2: "Drone commissioning, software training, repairs & maintenance, spare parts management, and logistics.",
    q3: "Which languages do you support for customer service?",
    a3: "We provide multilingual customer support for clear communication.",
    q4: "Do you assist in setting up new agricultural drones?",
    a4: "Yes, we provide commissioning services to make drones flight-ready.",
    q5: "Do you stock spare parts for agricultural drones?",
    a5: "Yes, we manage spare parts inventory for quick replacements.",
    q6: "How fast can you repair drones?",
    a6: "We aim to complete repairs within 2 days.",
  },
  mr: {
    title: "नेहमी विचारले जाणारे प्रश्न",
    q1: "मामा ड्रोन्स काय आहे?",
    a1: "आपल्या सर्व कृषी ड्रोन गरजांसाठी एक स्टॉप शॉप.",
    q2: "आपण कोणती सेवा देत आहात?",
    a2: "ड्रोन कमिशनिंग, सॉफ्टवेअर प्रशिक्षण, दुरुस्ती आणि देखभाल, स्पेअर पार्ट्स व्यवस्थापन, आणि लॉजिस्टिक्स.",
    q3: "आपण ग्राहक समर्थन कोणत्या भाषांमध्ये देत आहात?",
    a3: "आम्ही बहुभाषिक ग्राहक समर्थन प्रदान करतो जेणेकरून संवाद स्पष्ट होईल.",
    q4: "आपण नवीन कृषी ड्रोन सेट अप करण्यात मदत करता का?",
    a4: "होय, आम्ही ड्रोन फ्लाइट-रेडी होण्यासाठी कमिशनिंग सेवा देतो.",
    q5: "आपण कृषी ड्रोनसाठी स्पेअर पार्ट्स साठवता का?",
    a5: "होय, आम्ही स्पेअर पार्ट्स इन्व्हेंटरीचे व्यवस्थापन करतो जेणेकरून जलद बदल करू शकता.",
    q6: "आपण ड्रोन किती वेगाने दुरुस्त करू शकता?",
    a6: "आम्ही दुरुस्तीसाठी २ दिवसांच्या आत सेवा पूर्ण करण्याचा प्रयत्न करतो.",
  },
};

function FAQSection({ language }: { language: "en" | "mr" }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around lg:h-[75vh]  sm:h-[600px] w-full bg-pastelBlue px-5 pb-9">
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h2 className="p-7 font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-black-400">
          {translations[language].title}
        </h2>
      </div>

      <div className="pb-5 pt-1 md:pt-0 w-full md:w-2/3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>{translations[language].q1}</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>{translations[language].a1}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>{translations[language].q2}</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>{translations[language].a2}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>{translations[language].q3}</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>{translations[language].a3}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>{translations[language].q4}</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>{translations[language].a4}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>{translations[language].q5}</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>{translations[language].a5}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>{translations[language].q6}</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>{translations[language].a6}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
