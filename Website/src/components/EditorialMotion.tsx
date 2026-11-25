"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Content stays visible until this enhancement runs, and remains visible
// when JavaScript or motion support is unavailable.
const revealSelectors = [
  ".work-section .section-intro",
  ".work-section .work-photo",
  ".work-services span",
  ".field-heading",
  ".insight-photo",
  ".insights article",
  ".tractor-content > h2",
  ".tractor-descriptors span",
  ".prototype-visual",
  ".tractor-bottom",
  ".journey-heading",
  ".journey-image",
  ".journey-chapters article",
  ".people-grid > div:first-child",
  ".people-grid > .editorial-image",
  ".product-heading",
  ".preview-product",
  ".closing-section .shell",
  ".marathi-work-grid > div:first-child",
  ".marathi-work-grid > .editorial-image",
  ".marathi-services span",
  ".marathi-tractor-grid > div:first-child",
  ".marathi-tractor-grid figure",
  ".marathi-drone-card",
  ".marathi-journey-grid > .editorial-image",
  ".marathi-journey-grid > div:last-child",
  ".marathi-centers .shell > h2",
  ".marathi-faq-grid > div:first-child",
  ".marathi-contact-grid > div:first-child",
  ".subpage-hero > h1",
  ".wide-image",
  ".service-list article",
  ".catalogue-product",
  ".journey-chapter",
  ".story-purpose-header",
  ".story-principle",
  ".story-step",
  ".story-people-grid",
  ".story-next-grid",
  ".story-invite .shell",
].join(",");

export default function EditorialMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("motion-visible");
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    for (const target of targets) {
      // Never hide content already in view when hydration completes or a deep link opens.
      if (target.getBoundingClientRect().top < window.innerHeight * 0.95) continue;
      target.classList.add("motion-pending");
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
      for (const target of targets) target.classList.remove("motion-pending", "motion-visible");
    };
  }, [pathname]);

  return null;
}
