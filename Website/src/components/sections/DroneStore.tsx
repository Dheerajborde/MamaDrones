"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { useState } from "react"
import Link from "next/link"

const drones = [
  {
    name: "DGCA Certified 10L Drone(Without Sensors)",
    flightTime: "22 minutes",
    payload: "10 litres",
    weight: "24.5 kg",
    type: "Hexacopter",
    battery: "22000 mAh Li-ion",
    price: "₹4,30,000",
    image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1740153316/Pi7_Tool_drone-on-field_pcgtzg.jpg",
  },
  {
    name: "DGCA Certified 10L Drone(With Sensors)",
    flightTime: "20 minutes",
    payload: "10 litres",
    weight: "29 kg",
    type: "Hexacopter",
    battery: "22000 mAh LiPo",
    price: "₹5,25,000",
    image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1740153316/Pi7_Tool_drone-on-field_pcgtzg.jpg",
  },
  {
    name: "MAMA DRONES 10L Kit ",
    flightTime: "22 minutes",
    payload: "10 litres",
    weight: "28 kg",
    type: "Hexacopter",
    battery: "22000 mAh LiPo",
    price: "₹3,00,000",
    image: "https://res.cloudinary.com/disoamdue/image/upload/v1750669758/10L_drone_1_hqdmkv.png",
  },
  {
    name: "MAMA DRONES 16L Kit",
    flightTime: "25 minutes",
    payload: "16 litres",
    weight: "43 kg",
    type: "Hexacopter",
    battery: "30000 mAh LiPo",
    price: "₹3,80,000",
    image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1740068885/drone-folded_zxrrjd.png",
  },
]

const DroneCard = ({
  drone,
  language,
  onPurchase,
  index,
}: {
  drone: (typeof drones)[0]
  language: string
  onPurchase: () => void
  index: number
}) => {
  return (
    <Card className="w-full max-w-sm border-2 border-green-500 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl ">{drone.name}</CardTitle>
        <CardDescription>{language === "en" ? "Agricultural Drone" : "कृषी ड्रोन"}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-32 sm:h-40 md:h-48 mb-4 overflow-hidden rounded-lg shadow-md">
          <Image
            src={drone.image || "/placeholder.svg"}
            alt={drone.name}
            width={500}
            height={500}
            layout="responsive"
            objectFit="contain"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <ul className="space-y-2 text-sm sm:text-base">
          <li>
            <strong>{language === "en" ? "Flight Time:" : "उड्डाण वेळ:"}</strong> {drone.flightTime}
          </li>
          <li>
            <strong>{language === "en" ? "Payload:" : "पेलोड:"}</strong> {drone.payload}
          </li>
          <li>
            <strong>{language === "en" ? "Max Weight:" : "कमाल वजन:"}</strong> {drone.weight}
          </li>
          <li>
            <strong>{language === "en" ? "Type:" : "प्रकार:"}</strong> {drone.type}
          </li>
          <li>
            <strong>{language === "en" ? "Battery Capacity:" : "बॅटरी क्षमता:"}</strong> {drone.battery}
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-semibold">{drone.price}</span>
        <Button onClick={onPurchase} className="bg-green-500 hover:bg-green-600 text-white transition-all duration-200">
          {language === "en" ? "Buy Now" : "आता खरेदी करा"}
        </Button>
      </CardFooter>
    </Card>
  )
}

const DroneStore = ({ language }: { language: string }) => {
  const [showForm, setShowForm] = useState(false)

  const handlePurchase = () => {
    setShowForm(true)
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center mb-6 text-green-700 py-6 md:py-12">
          {language === "en" ? "Our Drone Collection" : "आमचा ड्रोन संग्रह"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {drones.map((drone, index) => (
            <DroneCard key={index} drone={drone} language={language} onPurchase={handlePurchase} index={index} />
          ))}
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-2xl w-full max-w-md sm:max-w-lg lg:max-w-2xl">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdpDjN5SudOMl7jEDnG54EAVEoZiBelnPecw26mN8WDFXwE8w/viewform?usp=header"
              width="100%"
              height="450"
              frameBorder="0"
              className="w-full"
            ></iframe>
            <Button
              onClick={() => setShowForm(false)}
              className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white transition-all duration-200"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DroneStore
