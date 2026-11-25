"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FloatingEnquiry() {
  const pathname = usePathname();
  const isMarathi = pathname.startsWith("/marathi");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const nearFooter = (document.querySelector(".site-footer")?.getBoundingClientRect().top ?? Infinity) < window.innerHeight;
      const nearMarathiForm = pathname === "/marathi/contact";
      setVisible(window.scrollY > 320 && !nearFooter && !nearMarathiForm);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [isMarathi, pathname]);

  if (pathname === "/contact" || pathname === "/marathi/contact" || !visible) return null;

  return (
    <Link className="floating-enquiry" href={isMarathi ? "/marathi/contact" : "/contact"} lang={isMarathi ? "mr" : "en"}>
      <span>{isMarathi ? "चौकशी करा" : "Enquire now"}</span>
      <span className="floating-enquiry-arrow" aria-hidden="true">↗</span>
    </Link>
  );
}
