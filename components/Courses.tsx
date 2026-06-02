"use client";

import { useUi } from "@/components/UiProvider";

interface Course {
  id: string;
  title: string;
  meta: string;
  instructor: string;
  duration: string;
  badge: { cls: "free" | "pro" | "soon"; label: string };
}

const COURSES: Course[] = [
  {
    id: "SA/01",
    title: "Foundations: how markets actually work",
    meta: "8 lessons · introductory",
    instructor: "M. Okonkwo",
    duration: "4h 12m",
    badge: { cls: "free", label: "● FREE" },
  },
  {
    id: "SA/02",
    title: "Reading charts & price action",
    meta: "10 lessons · for traders",
    instructor: "R. Chavez",
    duration: "5h 40m",
    badge: { cls: "free", label: "● FREE" },
  },
  {
    id: "SA/03",
    title: "Reading a balance sheet like a lender",
    meta: "12 lessons · intermediate",
    instructor: "M. Okonkwo",
    duration: "6h 05m",
    badge: { cls: "pro", label: "◆ PRO" },
  },
  {
    id: "SA/04",
    title: "Risk & position sizing without the panic",
    meta: "7 lessons · intermediate",
    instructor: "K. Yamamoto",
    duration: "3h 48m",
    badge: { cls: "pro", label: "◆ PRO" },
  },
  {
    id: "SA/05",
    title: "Building a portfolio for the long horizon",
    meta: "9 lessons · advanced",
    instructor: "R. Chavez",
    duration: "6h 32m",
    badge: { cls: "soon", label: "○ AUG 01" },
  },
];

export function Courses() {
  const { openJoinModal } = useUi();

  return (
    <section className="block" id="courses">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="l">
            <span className="sec-num">01 / CURRICULUM</span>
            <h2 className="h2">
              Courses for traders
              <br />
              &amp; investors.
            </h2>
            <p>
              From your first position to a thirty-year allocation. Structured tracks, each taught by
              a practitioner — short lessons, real worksheets, no filler.
            </p>
          </div>
          <button className="btn ghost" onClick={openJoinModal}>
            See all 24 →
          </button>
        </div>

        <div className="ledger reveal">
          <div className="lh">
            <span>ID</span>
            <span>Course</span>
            <span>Instructor</span>
            <span style={{ textAlign: "right" }}>Length</span>
            <span style={{ textAlign: "right" }}>Access</span>
          </div>
          {COURSES.map((c) => (
            <div className="lr" key={c.id} onClick={openJoinModal}>
              <span className="id">{c.id}</span>
              <div>
                <div className="ti">{c.title}</div>
                <div className="mt">{c.meta}</div>
              </div>
              <span className="ins">{c.instructor}</span>
              <span className="dur" style={{ textAlign: "right" }}>
                {c.duration}
              </span>
              <span className={`bd ${c.badge.cls}`}>{c.badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
