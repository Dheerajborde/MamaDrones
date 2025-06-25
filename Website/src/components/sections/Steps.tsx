"use client"
import { FaSprayCan, FaTools, FaShoppingCart } from "react-icons/fa"

interface NewStepsProps {
  language: "en" | "mr"
}

function NewSteps({ language }: NewStepsProps) {
  const content = {
    en: {
      title: "Revolutionizing Agriculture with Agri Drones",
      description:
        "Kisan Agri Drone is an advanced agricultural tool designed to revolutionize farming. provides accurate, reliable, and sustainable solutions for effective crop management.",
      features: [
        {
          icon: <FaTools className="w-8 h-8 text-blue-600 group-hover:text-blue-800" />,
          title: "Expert Repairs",
          description: "Our experts ensure your drones are always mission-ready.",
        },
        {
          icon: <FaShoppingCart className="w-8 h-8 text-yellow-600 group-hover:text-yellow-800" />,
          title: "Buy Drones",
          description: "Get the best drones designed for modern agricultural needs.",
        },
                {
          icon: <FaSprayCan className="w-8 h-8 text-green-600 group-hover:text-green-800" />,
          title: "Precision Spraying",
          description: "Ensure precise spraying for better crop yield and reduced wastage.",
        },
      ],
    },
    mr: {
      title: "कृषी ड्रोन केंद्राने शेतीमध्ये क्रांती",
      description:
        "किसान कृषी ड्रोन हे एक अत्याधुनिक कृषी उपकरण आहे जे शेतीच्या कार्यक्षमता मध्ये क्रांती घडविण्यासाठी डिझाइन केले आहे. हे प्रभावी पिक व्यवस्थापनासाठी अचूक, विश्वासार्ह आणि शाश्वत उपाय प्रदान करते.",
      features: [
        {
          icon: <FaSprayCan className="w-8 h-8 text-green-600 group-hover:text-green-800" />,
          title: "अचूक फवारणी",
          description: "चांगल्या पिक उत्पादनासाठी आणि कमी वाया जाण्यासाठी अचूक फवारणी करा.",
        },
        {
          icon: <FaTools className="w-8 h-8 text-blue-600 group-hover:text-blue-800" />,
          title: "तज्ञ दुरुस्ती",
          description: "आमचे तज्ञ सुनिश्चित करतात की तुमचे ड्रोन नेहमी मिशनसाठी तयार असतात.",
        },
        {
          icon: <FaShoppingCart className="w-8 h-8 text-yellow-600 group-hover:text-yellow-800" />,
          title: "ड्रोन खरेदी करा",
          description: "आधुनिक कृषी गरजांसाठी डिझाइन केलेले सर्वोत्तम ड्रोन मिळवा.",
        },
      ],
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="p-7 font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-black-400">
            {content[language].title}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{content[language].description}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <img
              src="https://res.cloudinary.com/disoamdue/image/upload/v1750500684/eft_drone_white-removebg-preview_e8bqpa.png"
              alt="Drone"
              className="w-4/5 h-auto rounded-lg transform hover:scale-105 transition duration-300 mx-auto"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-10">
            {content[language].features.map((feature, index) => (
              <div key={index} className="flex items-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-gray-200 transition duration-300">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewSteps

