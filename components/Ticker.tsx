const ITEMS = (
  <>
    <span>
      <b>SIRIS ACADEMY</b>
    </span>
    <span className="sep">{"//"}</span>
    <span className="am">NEW COURSE TRACK LAUNCHES AUG 01</span>
    <span className="sep">{"//"}</span>
    <span>
      FOUNDATIONS <span className="up">▲ FREE</span>
    </span>
    <span className="sep">{"//"}</span>
    <span>
      US10Y <span className="dn">▼ 4.188</span>
    </span>
    <span>
      BTC <span className="up">▲ 71,240</span>
    </span>
    <span>
      SPX <span className="up">▲ 5,431</span>
    </span>
    <span>
      GOLD <span className="dn">▼ 2,318</span>
    </span>
    <span className="sep">{"//"}</span>
    <span>
      LIVE LECTURE · OKONKWO <span className="am">AUG 14</span>
    </span>
    <span className="sep">{"//"}</span>
    <span>
      WAITING LIST <span className="up">▲ OPEN</span>
    </span>
    <span className="sep">{"//"}</span>
  </>
);

export function Ticker() {
  // Content duplicated inline so the marquee loops seamlessly (translateX -50%).
  return (
    <div className="ticker">
      <div className="ticker-track">
        {ITEMS}
        {ITEMS}
      </div>
    </div>
  );
}
