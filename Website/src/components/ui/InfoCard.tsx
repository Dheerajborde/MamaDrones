import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import useMediaQuery from "@/utils/useMediaQuery";

const InfoCard = ({
  i,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  progress: any;
  range: any;
  targetScale: any;
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const md = useMediaQuery("(min-width: 800px");

  return (
    <div className="flex h-[60vh] items-center justify-center sticky top-0">
      <motion.div
        className={`flex flex-col h-[300px] w-[600px] rounded-lg p-16 shadow-lg relative origin-top overflow-hidden`}
        style={{
          background: color,
          scale,
          top: `${
            md ? `calc(-5vh + ${i * 90}px)` : `calc(-5vh + ${i * 100}px)`
          }`,
        }}
      >
        <h3 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold">
          {title}
        </h3>
        <div className="flex md:flex-row flex-col h-full">
          <div className="w-full relative top-5">
            <p className="text-center leading-loose text-sm sm:text-base lg:text-lg">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InfoCard;