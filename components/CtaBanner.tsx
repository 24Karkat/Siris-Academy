"use client";

import { Arr, Seal } from "@/components/Seal";
import { useUi } from "@/components/UiProvider";

export function CtaBanner() {
  const { openJoinModal } = useUi();

  return (
    <section className="block" style={{ borderBottom: "none" }}>
      <div className="wrap">
        <div className="cta-banner reveal">
          <div className="seal-bg">
            <Seal />
          </div>
          <div style={{ position: "relative" }}>
            <span className="eyebrow">
              <span className="tick">▸</span> WAITING LIST OPEN · LAUNCHES AUG 01
            </span>
            <h2 className="h2" style={{ margin: "20px 0 16px", fontSize: "clamp(32px,5vw,56px)" }}>
              Get in before the doors open.
            </h2>
            <p className="lede" style={{ margin: "0 auto 28px" }}>
              Create a free account today. We&rsquo;ll hold your seat and email you the moment the new
              track goes live.
            </p>
            <button
              className="btn"
              onClick={openJoinModal}
              style={{ fontSize: "13px", padding: "15px 24px" }}
            >
              Join free <Arr size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
