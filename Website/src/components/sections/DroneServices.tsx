import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"

const services = [
  {
    title: { en: "Drone Training", mr: "ड्रोन प्रशिक्षण" },
    description: {
      en: "Comprehensive drone piloting and operation training programs for all skill levels.",
      mr: "सर्व कौशल्य पातळ्यांसाठी सर्वसमावेशक ड्रोन पायलटिंग आणि ऑपरेशन प्रशिक्षण कार्यक्रम.",
    },
    image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736748182/part_namiqw.webp",
  },
  {
    title: { en: "Drone Sales", mr: "ड्रोन विक्री" },
    description: {
      en: "Flexible drone rental options for various agricultural and industrial applications.",
      mr: "विविध कृषी आणि औद्योगिक अनुप्रयोगांसाठी लवचिक ड्रोन भाड्याने पर्याय.",
    },
    image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1741194092/IMG_6348_yhkqua.jpg",
  },
  {
    title: { en: "Drone Repairing", mr: "ड्रोन दुरुस्ती" },
    description: {
      en: "Expert drone repair and maintenance services to keep your equipment in top condition.",
      mr: "तुमचे उपकरण सर्वोत्तम स्थितीत ठेवण्यासाठी तज्ञ ड्रोन दुरुस्ती आणि देखभाल सेवा.",
    },
    image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736740115/repairing_uokl10.jpg",
  },
    {
    title: { en: "Drone Spraying", mr: "ड्रोन स्प्रेइंग" },
    description: {
      en: "Efficient and precise agricultural spraying services using state-of-the-art drones.",
      mr: "अत्याधुनिक ड्रोन वापरून कार्यक्षम आणि अचूक कृषी फवारणी सेवा.",
    },
    image:
    "https://res.cloudinary.com/disoamdue/image/upload/v1750657615/DroneSpraying_chdqrp.jpg",
  },
]

const ServiceCard = ({
  title,
  description,
  image,
  language,
}: {
  title: { en: string; mr: string }
  description: { en: string; mr: string }
  image: string
  language: "en" | "mr"
}) => (
  <Card className="overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex flex-col h-full">
    <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
      <Image
        src={image || "/placeholder.svg"}
        alt={title[language]}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
    </div>
    <CardHeader className="flex-grow">
      <CardTitle className="text-xl font-bold text-green-700">{title[language]}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600">{description[language]}</CardDescription>
    </CardContent>
  </Card>
)

interface DroneServicesProps {
  language: "en" | "mr"
}

export default function DroneServices({ language }: DroneServicesProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]  text-green-800 mb-12">
          {language === "en" ? "Our Services" : "आमच्या सेवा"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} language={language} />
          ))}
        </div>
      </div>
    </div>
  )
}
