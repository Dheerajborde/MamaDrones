"use client";

import { useEffect, useRef } from "react";

export default function TractorVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    video.playbackRate = 0.5;
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.playbackRate = 0.5;
        void video.play().catch(() => { /* The poster remains if autoplay is blocked. */ });
      } else {
        video.pause();
      }
    }, { threshold: 0.2 });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, []);

  return <video ref={videoRef} className="tractor-video" muted playsInline loop preload="none" poster="/pehelwan-road-run-poster.webp" aria-label="Pehelwan electric ground vehicle moving on a road at half speed">
    <source src="/pehelwan-road-run.webm" type="video/webm" />
    <source src="/pehelwan-road-run.mp4" type="video/mp4" />
    Your browser does not support this video.
  </video>;
}
