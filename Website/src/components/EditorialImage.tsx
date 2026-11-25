import Image from "next/image";

export default function EditorialImage({ src, alt, className = "", priority = false, contain = false }: { src: string; alt: string; className?: string; priority?: boolean; contain?: boolean }) {
  return <div className={`editorial-image ${contain ? "contain" : ""} ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 720px) 100vw, 65vw" priority={priority} className="image-fill" /></div>;
}
