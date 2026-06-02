"use client";

import { CountUp } from "@/components/CountUp";
import { useUi } from "@/components/UiProvider";

export function TheFloor() {
  const { openJoinModal } = useUi();

  return (
    <section className="block" id="floor">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="l">
            <span className="sec-num">04 / THE FLOOR</span>
            <h2 className="h2">
              A community
              <br />
              of operators.
            </h2>
            <p>
              Traders and investors who think out loud. Daily discussion, live office hours with
              research, and lectures you can actually ask questions in.
            </p>
          </div>
          <button className="btn ghost" onClick={openJoinModal}>
            Join the floor →
          </button>
        </div>

        <div className="floor reveal">
          <div className="floor-panel">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="caption" style={{ color: "var(--text-hi)" }}>
                #GENERAL · LIVE
              </span>
              <span className="chip g">
                <span className="d pulse" />
                <span>
                  <CountUp target={118} suffix=" ONLINE" />
                </span>
              </span>
            </div>
            <div className="floor-chat">
              <div className="msg">
                <span className="av">RC</span>
                <div className="bub">
                  <b>Rafa C.</b>Anyone else watching that 10Y move? Steepening into the close.
                </div>
              </div>
              <div className="msg">
                <span className="av">EV</span>
                <div className="bub">
                  <b>Elena V.</b>Yeah — trimming duration, not exiting. Holding the core.
                </div>
              </div>
              <div className="msg">
                <span className="av">KY</span>
                <div className="bub">
                  <b>Kenji Y.</b>Posted my position-sizing sheet in #playbook if useful 📎
                </div>
              </div>
              <div className="msg">
                <span className="av" style={{ color: "var(--green)" }}>
                  ●
                </span>
                <div className="bub" style={{ color: "var(--mute)" }}>
                  <b style={{ color: "var(--mute)" }}>12 more typing…</b>
                </div>
              </div>
            </div>
          </div>

          <div className="floor-panel">
            <span className="caption" style={{ color: "var(--text-hi)" }}>
              LIVE · NEXT 7 DAYS
            </span>
            <div className="live-list" style={{ marginTop: "16px" }}>
              <div className="live-row">
                <div className="dt">
                  AUG 14
                  <br />
                  16:00
                </div>
                <div className="ev">
                  <div className="t">Compounding &amp; the yield curve</div>
                  <div className="s">Okonkwo · lecture · 60 min</div>
                </div>
              </div>
              <div className="live-row">
                <div className="dt">
                  AUG 16
                  <br />
                  14:00
                </div>
                <div className="ev">
                  <div className="t">Office hours: ask anything</div>
                  <div className="s">Chavez · open Q&amp;A · 45 min</div>
                </div>
              </div>
              <div className="live-row">
                <div className="dt">
                  AUG 21
                  <br />
                  17:00
                </div>
                <div className="ev">
                  <div className="t">Live chart teardown</div>
                  <div className="s">Yamamoto · workshop · 50 min</div>
                </div>
              </div>
            </div>
            <button
              className="btn sm"
              onClick={openJoinModal}
              style={{ marginTop: "20px", width: "100%", justifyContent: "center" }}
            >
              Reserve a spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
