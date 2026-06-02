"use client";

import { useEffect, useRef, useState } from "react";
import { Seal, Arr } from "@/components/Seal";
import { submitToSIRISHub } from "@/lib/leads";

export function JoinModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [done, setDone] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reset success view each time the modal opens
      setDone(false);
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => nameRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
    document.body.style.overflow = "";
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    await submitToSIRISHub("waiting_list", {
      name: (f.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (f.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (f.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      note: (f.elements.namedItem("note") as HTMLTextAreaElement).value.trim(),
    });
    f.reset();
    setDone(true);
  };

  return (
    <div
      className={`modal-bg${open ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <div className="modal-head">
          <div className="ttl">
            <Seal />
            <span
              className="mono"
              style={{ fontSize: "13px", letterSpacing: "0.1em", color: "var(--text-hi)" }}
            >
              JOIN · WAITING LIST
            </span>
          </div>
          <button className="x" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        {!done ? (
          <div className="modal-body">
            <p className="caption" style={{ marginBottom: "20px", lineHeight: 1.7 }}>
              &gt; Create your free SIRIS Academy account.
              <br />
              &gt; New course track opens{" "}
              <span style={{ color: "var(--accent)" }}>Aug 01, 2026</span>. We&rsquo;ll hold your
              seat.
            </p>
            <form id="join-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="j-name">Full name</label>
                <input ref={nameRef} type="text" id="j-name" name="name" placeholder="Elena Voss" required />
              </div>
              <div className="field">
                <label htmlFor="j-email">Email</label>
                <input type="email" id="j-email" name="email" placeholder="you@email.com" required />
              </div>
              <div className="field">
                <label htmlFor="j-phone">Phone</label>
                <input type="tel" id="j-phone" name="phone" placeholder="+44 7700 900000" />
              </div>
              <div className="field">
                <label htmlFor="j-note">
                  Note <span style={{ opacity: 0.6 }}>— optional</span>
                </label>
                <textarea
                  id="j-note"
                  name="note"
                  rows={2}
                  placeholder="Trader or investor? What do you want to learn?"
                />
              </div>
              <button
                type="submit"
                className="btn"
                style={{ width: "100%", justifyContent: "center", marginTop: "6px" }}
              >
                Reserve my seat <Arr />
              </button>
              <p className="caption" style={{ marginTop: "14px", textAlign: "center", opacity: 0.6 }}>
                No spam. We store this securely for launch.
              </p>
            </form>
          </div>
        ) : (
          <div className="modal-ok">
            <div className="big">✓ You&rsquo;re on the list</div>
            <p className="body" style={{ color: "var(--text)" }}>
              Welcome to SIRIS Academy. We&rsquo;ll email you before the Aug 01 launch with early
              access.
            </p>
            <button className="btn ghost" onClick={onClose} style={{ marginTop: "24px" }}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
