"use client";

import { useUi } from "@/components/UiProvider";
import { submitToSIRISHub } from "@/lib/leads";

interface FeedItem {
  tk: string;
  tkCls?: "up" | "dn";
  time: string;
  title: string;
}

const FEED: FeedItem[] = [
  { tk: "SPX ▲", tkCls: "up", time: "14:08 UTC", title: "Index melts up on soft inflation print — breadth still narrow." },
  { tk: "BTC ▼", tkCls: "dn", time: "13:21 UTC", title: "Crypto cools after ETF inflows slow. What the on-chain data shows." },
  { tk: "OIL", time: "11:55 UTC", title: "Energy holds range as supply headlines fade into the weekend." },
  { tk: "GOLD ▲", tkCls: "up", time: "09:30 UTC", title: "The case for a permanent 5% allocation — revisited for 2026." },
];

export function TheTape() {
  const { openJoinModal, showToast } = useUi();

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const email = (f.elements.namedItem("email") as HTMLInputElement).value.trim();
    await submitToSIRISHub("newsletter", { email, list: "tape" });
    f.reset();
    showToast("✓ Subscribed to The Tape");
  };

  return (
    <section className="block" id="news">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="l">
            <span className="sec-num">02 / THE TAPE</span>
            <h2 className="h2">
              Hottest news
              <br />
              from the market.
            </h2>
            <p>
              A live wire in plain language. The moves that matter, why they matter, and what a
              patient operator should — and shouldn&rsquo;t — do about them.
            </p>
          </div>
          <span className="chip g">
            <span className="d pulse" />
            LIVE FEED
          </span>
        </div>

        <div className="tape reveal">
          <article className="tape-lead">
            <div>
              <div className="meta" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span className="chip">
                  <span className="d" />
                  BREAKING
                </span>
                <span className="caption">06:42 UTC · 3 MIN</span>
              </div>
              <div className="hl">
                Fed holds. The yield curve quietly steepens — here&rsquo;s what it signals.
              </div>
            </div>
            <div>
              <p className="body" style={{ color: "var(--text)", marginBottom: "20px" }}>
                Markets read a pause; we read positioning. A short note on why the long end matters
                more than the headline, and what it means if your horizon is measured in years, not
                days.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="caption">M. OKONKWO · HEAD OF RESEARCH</span>
                <a className="caption" style={{ color: "var(--accent)", cursor: "pointer" }} onClick={openJoinModal}>
                  READ ▸
                </a>
              </div>
            </div>
          </article>

          <div className="tape-feed">
            {FEED.map((item, i) => (
              <div className="tape-item" key={i} onClick={openJoinModal}>
                <div className="meta">
                  <span className={`tk${item.tkCls ? ` ${item.tkCls}` : ""}`}>{item.tk}</span>
                  <span className="tm">{item.time}</span>
                </div>
                <div className="tt">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="reveal"
          style={{
            marginTop: "28px",
            border: "1px solid var(--line)",
            background: "var(--surface)",
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              className="mono"
              style={{
                fontSize: "18px",
                color: "var(--text-hi)",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              Get The Tape in your inbox
            </div>
            <p className="caption" style={{ marginTop: "8px" }}>
              Two emails a week. Markets, decoded — no hype, no urgency.
            </p>
          </div>
          <form className="news-cap" onSubmit={handleSubscribe}>
            <input type="email" name="email" placeholder="you@email.com" required />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
