"use client";

import { useUi } from "@/components/UiProvider";

export function Pricing() {
  const { openJoinModal } = useUi();

  return (
    <section className="block" id="pricing">
      <div className="wrap">
        <div className="sec-head reveal" style={{ justifyContent: "flex-start" }}>
          <div className="l">
            <span className="sec-num">05 / ACCESS</span>
            <h2 className="h2">
              Start free.
              <br />
              Upgrade when ready.
            </h2>
            <p>
              Everyone gets the foundations at no cost. Upgrade only if the academy earns it — and
              learn live with a cohort when you&rsquo;re ready to go deeper.
            </p>
          </div>
        </div>

        <div className="price-grid reveal">
          <div className="price-card">
            <div className="pl">Free</div>
            <div className="pp">€0</div>
            <p className="caption" style={{ color: "var(--mute)" }}>
              For getting started
            </p>
            <ul>
              <li>2 full foundation courses</li>
              <li>The Tape — market news</li>
              <li>The Playbook — all tips</li>
              <li>Read-only community access</li>
            </ul>
            <button className="btn ghost" onClick={openJoinModal}>
              Join free
            </button>
          </div>
          <div className="price-card feat">
            <div className="pl" style={{ color: "var(--accent)" }}>
              Member
            </div>
            <div className="pp">
              €18<small>/mo</small>
            </div>
            <p className="caption" style={{ color: "var(--mute)" }}>
              For the serious
            </p>
            <ul>
              <li>All 24 courses + new tracks</li>
              <li>Live lectures &amp; office hours</li>
              <li>Full community + groups</li>
              <li>Worksheets, tools &amp; certificates</li>
            </ul>
            <button className="btn" onClick={openJoinModal}>
              Join the waiting list
            </button>
          </div>
          <div className="price-card">
            <div className="pl">Cohort</div>
            <div className="pp">€490</div>
            <p className="caption" style={{ color: "var(--mute)" }}>
              Live · 6 weeks · once a season
            </p>
            <ul>
              <li>Everything in Member</li>
              <li>Live 6-week guided cohort</li>
              <li>Small-group office hours</li>
              <li>Certificate of completion</li>
            </ul>
            <button className="btn ghost" onClick={openJoinModal}>
              Join the waiting list
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
