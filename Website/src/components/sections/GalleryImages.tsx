import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const translations = {
  en: {
    title: "Explore Our Drone Services",
    images: [
      {
        url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736740115/repairing_uokl10.jpg",
        title: "Expert Maintenance",
        description: "Our expert technicians ensure your drone is always in top condition.",
      },
      {
        url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736748182/part_namiqw.webp",
        title: "Quality Parts & Accessories",
        description: "Enhance your drone's capabilities with our high-quality components.",
      },
      {
        url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736747168/teaching_xcpitk.webp",
        title: "Comprehensive Training",
        description: "Learn from industry experts and master drone piloting skills.",
      },
      {
        url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736740092/price_ms31pt.jpg",
        title: "Affordable Pricing",
        description: "Get the best value for top-notch drone services and products.",
      },
    ],
  },
  mr: {
    title: "आमच्या ड्रोन सेवा एक्सप्लोर करा",
    images: [
      {
        url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736740115/repairing_uokl10.jpg",
        title: "तज्ञ देखभाल",
        description: "आमचे तज्ञ तंत्रज्ञ तुमचे ड्रोन नेहमी सर्वोत्तम स्थितीत असलेले सुनिश्चित करतात.",
      },
      {
        url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736748182/part_namiqw.webp",
        title: "गुणवत्तेचे भाग आणि अॅक्सेसरीज",
        description: "आमच्या उच्च दर्जाच्या घटकांमधून तुमच्या ड्रोनची क्षमता वाढवा.",
      },
      {
        url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736747168/teaching_xcpitk.webp",
        title: "व्यापक प्रशिक्षण",
        description: "उद्योग तज्ञांकडून शिका आणि ड्रोन पायलटिंग कौशल्ये आत्मसात करा.",
      },
      {
        url: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736740092/price_ms31pt.jpg",
        title: "परवडणारी किंमती",
        description: "सर्वोत्तम ड्रोन सेवा आणि उत्पादनांसाठी सर्वोत्तम मूल्य मिळवा.",
      },
    ],
  },
};

const optimizedUrl = (url: string): string =>
  url.replace("/upload/", "/upload/f_auto,q_auto/");

function GalleryImages({ language }: { language: "en" | "mr" }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? translations[language].images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === translations[language].images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-white pt-12 px-4 lg:mb-10">
      <h2 className="text-center font-bold text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-gray-800 mb-8">
        {translations[language].title}
      </h2>
      <div className="w-full max-w-4xl">
        <Carousel className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100">
          <CarouselContent
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {translations[language].images.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 w-full h-[400px] sm:h-[600px] md:h-[600px] relative rounded-2xl overflow-hidden"
              >
                <Image
                  src={optimizedUrl(image.url)}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-transparent">
                  <h3 className="text-white text-base sm:text-lg md:text-2xl font-bold mb-2 ml-8">
                    {image.title}
                  </h3>
                  <p className="text-white text-xs sm:text-sm md:text-lg ml-7">
                    {image.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            onClick={handlePrevious}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-4 bg-gray-700 bg-opacity-70 hover:bg-opacity-90 rounded-full shadow-lg"
          />
          <CarouselNext
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-4 bg-gray-700 bg-opacity-70 hover:bg-opacity-90 rounded-full shadow-lg"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default GalleryImages;
