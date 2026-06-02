import { CountUp } from "@/components/CountUp";

export function StatBar() {
  return (
    <section className="block" style={{ padding: "56px 0" }}>
      <div className="wrap">
        <div className="stat-bar reveal">
          <div className="cell">
            <div className="v">
              <CountUp target={600} suffix="+" />
            </div>
            <div className="l caption">Members waiting</div>
          </div>
          <div className="cell">
            <div className="v">
              <CountUp target={24} /> <span style={{ color: "var(--mute)" }}>tracks</span>
            </div>
            <div className="l caption">Courses &amp; modules</div>
          </div>
          <div className="cell">
            <div className="v">
              <CountUp target={40} />
              <span style={{ color: "var(--mute)" }}>+ hrs</span>
            </div>
            <div className="l caption">Lessons recorded</div>
          </div>
          <div className="cell">
            <div className="v">
              4.9<span style={{ color: "var(--mute)" }}>/5</span>
            </div>
            <div className="l caption">Beta cohort rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
