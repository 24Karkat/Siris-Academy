"use client";

import { Seal } from "@/components/Seal";
import { useUi } from "@/components/UiProvider";

export function Footer() {
  const { openJoinModal } = useUi();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col foot-brand">
            <Seal />
            <div
              className="mono"
              style={{
                fontSize: "15px",
                color: "var(--text-hi)",
                letterSpacing: "0.04em",
                marginBottom: "10px",
              }}
            >
              S<span style={{ color: "var(--accent)" }}>·</span>ACADEMY
            </div>
            <p className="caption" style={{ lineHeight: 1.7, maxWidth: "240px" }}>
              Patient capital, patiently taught. An independent school for traders and long-horizon
              investors alike.
            </p>
          </div>
          <div className="foot-col">
            <h4>Learn</h4>
            <a href="#courses">Courses</a>
            <a href="#playbook">The Playbook</a>
            <a href="#floor">Community</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="foot-col">
            <h4>Markets</h4>
            <a href="#news">The Tape</a>
            <a onClick={openJoinModal}>Newsletter</a>
            <a href="#news">Research</a>
            <a href="#floor">Live lectures</a>
          </div>
          <div className="foot-col">
            <h4>Academy</h4>
            <a onClick={openJoinModal}>Join free</a>
            <a>About</a>
            <a>Contact</a>
            <a>Careers</a>
          </div>
        </div>
        <div className="foot-bot">
          <span className="caption">© 2026 SIRIS ACADEMY</span>
          <span className="caption" style={{ opacity: 0.6 }}>
            INDEPENDENT EDUCATION PROVIDER · NOT A BROKER OR INVESTMENT ADVISER · EDUCATIONAL CONTENT
            ONLY
          </span>
        </div>
      </div>
    </footer>
  );
}
