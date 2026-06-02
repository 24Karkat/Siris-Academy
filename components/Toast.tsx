"use client";

export function Toast({ message, show }: { message: string; show: boolean }) {
  return (
    <div className={`toast${show ? " show" : ""}`} role="status" aria-live="polite">
      <span className="d" />
      <span>{message}</span>
    </div>
  );
}
