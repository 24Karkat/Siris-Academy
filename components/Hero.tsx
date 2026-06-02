"use client";

import { Arr } from "@/components/Seal";
import { CountUp } from "@/components/CountUp";
import { useUi } from "@/components/UiProvider";

export function Hero() {
  const { openJoinModal } = useUi();

  return (
    <header className="hero" id="top">
      <div className="hero-grid-bg" />
      <div className="hero-seal-ghost">
        <svg viewBox="0 0 522.86 424.79">
          <use href="#s-glyph" />
        </svg>
      </div>
      <div className="wrap hero-inner">
        <span className="eyebrow reveal">
          <span className="tick">▸</span> SIRIS ACADEMY · EST 2026
        </span>
        <h1 className="display reveal">
          Learn to invest
          <br />
          &amp; trade
          <br />
          <span className="accent">the smart way.</span>
        </h1>
        <p className="lede reveal">
          Structured courses, live market news, and a community of traders and long-horizon
          investors — taught by people who actually move capital. Free to join. New track opens
          August 1.
        </p>
        <div className="hero-ctas reveal">
          <button className="btn" onClick={openJoinModal}>
            Join free <Arr size={11} />
          </button>
          <a href="#courses" className="btn ghost">
            Browse courses
          </a>
        </div>
        <div className="hero-sub reveal">
          <div className="item">
            <span className="v">
              <CountUp target={600} suffix="+" />
            </span>
            <span className="caption">On the waiting list</span>
          </div>
          <div className="item">
            <span className="v">
              <CountUp target={24} />
            </span>
            <span className="caption">Courses at launch</span>
          </div>
          <div className="item">
            <span className="v mono">AUG 01</span>
            <span className="caption">Track goes live</span>
          </div>
          <div className="item">
            <span className="v mono">FREE</span>
            <span className="caption">To get started</span>
          </div>
        </div>
      </div>
    </header>
  );
}
