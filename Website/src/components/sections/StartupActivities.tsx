"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface StartupActivitiesProps {
  language: "en" | "mr"
}

function StartupActivities({ language }: StartupActivitiesProps): JSX.Element {
  const content = {
    en: {
      title: "In the News",
      activities: [
        {
          title: "Agricultural Awareness & Farmer Training",
          desc: "Mama Drones educates farmers on drone technology for precision farming. Through hands-on demonstrations, we show how drones improve crop health, boost yields, and reduce manual labor, bridging the gap between tradition and innovation.",
          image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1741183428/IMG_20250131_122113866_jkloaf.jpg",
        },
        {
          title: "Customer Support & Service Assistance",
          desc: "Mama Drones provides expert support, guiding customers on drone usage, maintenance, and regulations. Our hands-on assistance ensures reliable service and tailored solutions for every need.",
          image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1741193415/IMG_9321_1_uvzyil.jpg",
        },
        {
          title: "Drone Flight Training & Awareness Program",
          desc: "Mama Drones conducts live drone training sessions, demonstrating flight capabilities, safety, and industry applications. These events promote awareness and accessibility of drone technology.",
          image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1741183416/FullSizeRender-10_fuke34.jpg",
        },
      ],
    },
    mr: {
      title: "आमच्या इतर बातम्या",
      activities: [
        {
          title: "कृषी जागरूकता आणि शेतकरी प्रशिक्षण",
          desc: "मामा ड्रोन शेतकऱ्यांना अचूक शेतीसाठी ड्रोन तंत्रज्ञानाबद्दल शिक्षित करते. प्रत्यक्ष प्रात्यक्षिकांद्वारे, आम्ही दाखवतो की ड्रोन पिकांचे आरोग्य कसे सुधारतात, उत्पादन वाढवतात आणि मॅन्युअल श्रम कमी करतात, परंपरा आणि नवकल्पना यांच्यातील अंतर कमी करतात.",
          image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1741183428/IMG_20250131_122113866_jkloaf.jpg",
        },
        {
          title: "ग्राहक सहाय्य आणि सेवा सहाय्य",
          desc: "मामा ड्रोन वापर, देखभाल आणि नियमांवर ग्राहकांना मार्गदर्शन करून तज्ञ समर्थन प्रदान करते. आमचे प्रत्यक्ष सहाय्य विश्वासार्ह सेवा आणि प्रत्येक गरजेसाठी अनुकूलित उपाय सुनिश्चित करते.",
          image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1741193415/IMG_9321_1_uvzyil.jpg",
        },
        {
          title: "ड्रोन उड्डाण प्रशिक्षण आणि जागरूकता कार्यक्रम",
          desc: "मामा ड्रोन लाइव्ह ड्रोन प्रशिक्षण सत्रे आयोजित करते, उड्डाण क्षमता, सुरक्षा आणि उद्योग अनुप्रयोग प्रदर्शित करते. हे कार्यक्रम ड्रोन तंत्रज्ञानाची जागरूकता आणि प्रवेशयोग्यता प्रोत्साहित करतात.",
          image: "https://res.cloudinary.com/dfly9upu9/image/upload/v1741183416/FullSizeRender-10_fuke34.jpg",
        },
      ],
    },
  }

  const ActivityItem = ({ activity, index }: { activity: any; index: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const controls = useAnimation()

    useEffect(() => {
      if (isInView) {
        controls.start("visible")
      }
    }, [isInView, controls])

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
        }}
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-500"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3"

            >
              {activity.title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="text-gray-600"
            >
              {activity.desc}
            </motion.p>
          </div>
          <motion.div
            className="md:w-2/5 h-64 relative overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: index * 0.3 }}
          >
            <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center mb-12 text-gray-800"
        >
          {content[language].title}
        </motion.h2>
        <div className="space-y-12">
          {content[language].activities.map((activity, index) => (
            <ActivityItem key={index} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StartupActivities
