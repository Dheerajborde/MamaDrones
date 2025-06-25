'use client'
import { useEffect, useMemo, useState } from "react";

export default function useMediaQuery(query: string) {
  const getMatch = () => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false; // or any default value you find appropriate
  };

  const [match, setMatch] = useState(getMatch);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    const onChange = () => setMatch(mediaQuery.matches);

    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [query]);

  return match;
}
