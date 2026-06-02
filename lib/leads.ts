export type LeadType = "waiting_list" | "newsletter";

export interface WaitingListPayload {
  name: string;
  email: string;
  phone?: string;
  note?: string;
}

export interface NewsletterPayload {
  email: string;
  list: string;
}

export type LeadPayload = WaitingListPayload | NewsletterPayload;

export interface LeadRecord {
  id: string;
  type: LeadType;
  source: "landing";
  submittedAt: string;
  userAgent: string;
  [key: string]: unknown;
}

const LOCAL_KEY = "siris_academy_leads";

/**
 * Single seam for all lead capture. Always keeps a local copy so nothing is
 * lost pre-API, then POSTs to the internal /api/leads route (which forwards to
 * the real SIRISHub endpoint when SIRISHUB_ENDPOINT is configured server-side).
 */
export async function submitToSIRISHub(type: LeadType, payload: LeadPayload): Promise<LeadRecord> {
  const record: LeadRecord = {
    id: "SA-" + Date.now().toString(36).toUpperCase(),
    type,
    ...payload,
    source: "landing",
    submittedAt: new Date().toISOString(),
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
  };

  // Always keep a local copy so nothing is lost pre-API.
  try {
    const all = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
    all.push(record);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(all));
  } catch {
    /* storage full / blocked — ignore */
  }

  try {
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
  } catch (e) {
    console.warn("Lead POST failed; record kept locally.", e);
  }

  return record;
}
