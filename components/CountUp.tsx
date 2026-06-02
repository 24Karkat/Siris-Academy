"use client";

import { useCountUp } from "@/lib/useCountUp";

export function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, display } = useCountUp(target, suffix);
  return <span ref={ref}>{display}</span>;
}
