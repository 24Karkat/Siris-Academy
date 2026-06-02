"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { JoinModal } from "@/components/JoinModal";
import { Toast } from "@/components/Toast";

interface UiContextValue {
  openJoinModal: () => void;
  showToast: (msg: string) => void;
}

const UiContext = createContext<UiContextValue | null>(null);

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be used within UiProvider");
  return ctx;
}

export function UiProvider({ children }: { children: React.ReactNode }) {
  useScrollReveal();

  const [modalOpen, setModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastShown, setToastShown] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openJoinModal = useCallback(() => setModalOpen(true), []);
  const closeJoinModal = useCallback(() => setModalOpen(false), []);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastShown(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastShown(false), 3200);
  }, []);

  return (
    <UiContext.Provider value={{ openJoinModal, showToast }}>
      {children}
      <JoinModal open={modalOpen} onClose={closeJoinModal} />
      <Toast message={toastMsg} show={toastShown} />
    </UiContext.Provider>
  );
}
