import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const data = [
  {
    id: 1,
    text: "Canyon",
    url: "/img.jpg",
  },
  {
    id: 2,
    text: "Kyoto",
    url: "/img.jpg",
  },
  {
    id: 3,
    text: "Forest",
    url: "/img.jpg",
  },
  {
    id: 4,
    text: "Vietnam",
    url: "/img.jpg",
  },
];

function Images({ text, url }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);
  return (
    <section className="mb-12">
      <Image src={url} alt={text} width={100} height={100} />
      <div ref={ref}></div>
      <motion.h2 style={{ y }} className="absolute bottom-5">
        {text}
      </motion.h2>
    </section>
  );
}

export default function Demo() {
  return (
    <div className="flex min-h-screen">
      <h2 className="fixed ">Demo Text</h2>
      <div className="w-1/2 ml-auto pl-48">
        {data.map((img) => (
          <Images key={img.id} text={img.text} url={img.url} />
        ))}
      </div>
    </div>
  );
}

