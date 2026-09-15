"use client";

import React, { useEffect, useState } from "react";
import { Calendar, MessageCircle, PhoneCall } from "lucide-react";

export default function MobileBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-linen/95 backdrop-blur-md border-t border-rule/50 px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] rounded-t-2xl shadow-[0_-4px_20px_rgba(33,24,18,0.08)] transition-all duration-300 animate-rise"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="https://m.me/glasshillpansol"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-rule bg-linen text-ink font-sans text-[0.82rem] font-medium tracking-wide active:bg-stone transition-colors"
        >
          <MessageCircle size={16} className="text-clay" />
          <span>Chat Messenger</span>
        </a>

        <a
          href="#inquire"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-ink text-linen font-sans text-[0.85rem] font-medium tracking-wide shadow-sm active:bg-char transition-colors"
        >
          <Calendar size={16} />
          <span>Book Villa</span>
        </a>
      </div>
    </aside>
  );
}
