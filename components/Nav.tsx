"use client";

import { Seal, Arr } from "@/components/Seal";
import { useClock } from "@/lib/useClock";
import { useUi } from "@/components/UiProvider";

export function Nav() {
  const clock = useClock();
  const { openJoinModal } = useUi();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <Seal />
          <span className="nm">
            S<span className="dot">·</span>ACADEMY
          </span>
        </a>
        <div className="nav-links">
          <a href="#courses">Courses</a>
          <a href="#news">Markets</a>
          <a href="#playbook">Playbook</a>
          <a href="#floor">Community</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="nav-cta">
          <span className="nav-clock">
            <span className="lv">●</span> {clock}
          </span>
          <button className="btn sm" onClick={openJoinModal}>
            Join free <Arr />
          </button>
        </div>
      </div>
    </nav>
  );
}
