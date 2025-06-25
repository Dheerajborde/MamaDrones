import classNames from "classnames";
import React from "react";
import { motion } from "framer-motion";

function AdvatageCard({
  children,
  bg,
  delay
}: {
  children: React.ReactNode;
  bg: string;
  delay:number
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 0.75,
          delay:delay // Animation duration
        },
      }}
      viewport={{ once: true }}
      className={classNames(
        "  flex flex-col items-center justify-center shadow-md shadow-gray-300 mx-10 my-4 md:w-[40%] gap-6 p-8 rounded-xl ",
        bg
      )}
    >
      {children}
    </motion.div>
  );
}

export default AdvatageCard;
