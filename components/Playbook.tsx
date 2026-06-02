"use client";

import { useUi } from "@/components/UiProvider";

interface Card {
  n: string;
  title: string;
  desc: string;
  tag: string;
}

const CARDS: Card[] = [
  {
    n: "01",
    title: "Size the position, not the conviction",
    desc: "How much you bet matters more than how right you are. A simple framework for risking a fixed fraction — so one bad call never ends the game.",
    tag: "RISK · 5 MIN",
  },
  {
    n: "02",
    title: "Average in, don’t time the top",
    desc: "Dollar-cost averaging beats hesitation almost every time. Why a boring schedule outperforms your best guess — with the math to prove it.",
    tag: "INVESTING · 4 MIN",
  },
  {
    n: "03",
    title: "Read the tape before the news",
    desc: "Price moves before the story does. A trader’s checklist for reading volume, range, and momentum — so the headline confirms what you already saw.",
    tag: "TRADING · 6 MIN",
  },
];

export function Playbook() {
  const { openJoinModal } = useUi();

  return (
    <section className="block" id="playbook">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="l">
            <span className="sec-num">03 / THE PLAYBOOK</span>
            <h2 className="h2">
              Tips &amp; strategies
              <br />
              that actually hold up.
            </h2>
            <p>
              The handful of ideas that survive contact with real markets — written as quick reads,
              free to everyone. Steal them.
            </p>
          </div>
        </div>

        <div className="play-grid reveal">
          {CARDS.map((c) => (
            <article className="play-card" key={c.n} onClick={openJoinModal}>
              <div className="pn">{c.n}</div>
              <div className="pt">{c.title}</div>
              <p className="pd">{c.desc}</p>
              <div className="pf">
                <span className="caption">{c.tag}</span>
                <span className="caption" style={{ color: "var(--accent)" }}>
                  READ ▸
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
