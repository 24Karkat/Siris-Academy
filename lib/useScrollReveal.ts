"use client";

import { useEffect } from "react";

/**
 * Self-recovering scroll reveal. CSS keeps `.reveal` VISIBLE by default; this
 * hook arms the hidden state by adding `js-reveal` to <html> only once JS runs,
 * then reveals each element on intersection. A 1.2s safety net reveals anything
 * left so a failed/edge-case observer can never leave content blank.
 */
export function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));

    const safety = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
    }, 1200);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);
}
