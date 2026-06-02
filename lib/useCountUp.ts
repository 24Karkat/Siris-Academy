"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1400;

export function useCountUp(target: number, suffix = "") {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- final value, no animation
      setDisplay(target.toLocaleString() + suffix);
      return;
    }

    let raf = 0;
    const animate = () => {
      const start = performance.now();
      const frame = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(target * eased).toLocaleString() + suffix);
        if (t < 1) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, suffix]);

  return { ref, display };
}
