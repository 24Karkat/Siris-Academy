import { NextResponse } from "next/server";

// Basic RFC-ish email check — good enough to reject obvious garbage at the boundary.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_TYPES = new Set(["waiting_list", "newsletter"]);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const type = typeof body.type === "string" ? body.type : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!VALID_TYPES.has(type)) {
    return NextResponse.json({ ok: false, error: "invalid_type" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const id = typeof body.id === "string" && body.id ? body.id : "SA-" + Date.now().toString(36).toUpperCase();

  // The single seam to swap when the real SIRISHub API exists.
  const endpoint = process.env.SIRISHUB_ENDPOINT;
  if (endpoint) {
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, id }),
      });
    } catch (e) {
      // Don't fail the lead capture if the downstream forward fails — log and move on.
      console.error("SIRISHub forward failed:", e);
    }
  } else {
    console.log("[lead]", JSON.stringify({ ...body, id }));
  }

  return NextResponse.json({ ok: true, id });
}
