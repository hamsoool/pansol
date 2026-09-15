"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandMark } from "./Logo";

const LINKS = [
  { href: "#villa", label: "The Villa", id: "villa" },
  { href: "#unwind", label: "Hot Springs", id: "unwind" },
  { href: "#gallery", label: "Gallery", id: "gallery" },
  { href: "#stay", label: "Suites & Dining", id: "stay" },
  { href: "#rates", label: "Rates", id: "rates" },
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#location", label: "Location", id: "location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sectionElements = LINKS.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 160;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(LINKS[i].id);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
      className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ${
        scrolled || open
          ? "bg-linen/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(59,46,34,0.1)] py-3.5"
          : "bg-gradient-to-b from-char/70 via-char/30 to-transparent py-5"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-3.5 group">
          <BrandMark
            className={`w-9 sm:w-10 2xl:w-12 h-auto transition-colors ${
              scrolled || open ? "text-ink" : "text-linen"
            }`}
          />
          <div className="flex flex-col items-start leading-none">
            <span
              className={`font-display tracking-[0.24em] uppercase text-[1.05rem] sm:text-[1.12rem] 2xl:text-[1.28rem] transition-colors font-medium ${
                scrolled || open ? "text-ink" : "text-linen"
              }`}
            >
              GLASSHILL
            </span>
            <span
              className={`font-display tracking-[0.32em] uppercase text-[0.55rem] sm:text-[0.6rem] 2xl:text-[0.7rem] transition-colors mt-1 font-light ${
                scrolled || open ? "text-clay" : "text-linen/75"
              }`}
            >
              — PANSOL —
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul
          className={`hidden lg:flex items-center gap-8 2xl:gap-12 font-sans text-[0.88rem] 2xl:text-[1rem] tracking-wide transition-colors ${
            scrolled ? "text-ink-light" : "text-linen/90"
          }`}
        >
          {LINKS.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative pb-1 transition-colors ${
                    isActive
                      ? scrolled
                        ? "text-ink font-medium"
                        : "text-linen font-medium"
                      : "hover:text-clay"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute left-0 bottom-0 right-0 h-[2px] bg-clay rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Group */}
        <div className="flex items-center gap-2 sm:gap-4">
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#inquire"
            className={`hidden sm:inline-flex items-center rounded-full px-5 py-2.5 2xl:px-7 2xl:py-3 font-sans text-[0.84rem] 2xl:text-[0.95rem] tracking-wide font-medium transition-all shadow-xs ${
              scrolled
                ? "bg-ink text-linen hover:bg-ink-light"
                : "bg-linen text-ink hover:bg-stone"
            }`}
          >
            Check Availability
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-btn"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-xl transition-colors cursor-pointer relative z-50 ${
              scrolled || open ? "text-ink hover:bg-stone/50" : "text-linen hover:bg-linen/15"
            }`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>
    </header>

    {/* Clean Mobile Dropdown Menu - Directly attached under header, no full-screen takeover */}
    <AnimatePresence>
      {open && (
        <>
          {/* Soft Dimmed Backdrop - Tap below dropdown to dismiss */}
          <motion.div
            key="mobile-dropdown-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setOpen(false)}
            className="lg:hidden fixed inset-0 z-[60] bg-char/50 backdrop-blur-xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Dropdown Panel attached beneath header - 100% solid linen background for AAA contrast */}
          <motion.nav
            key="mobile-dropdown-panel"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed top-[calc(env(safe-area-inset-top)+3.75rem)] inset-x-0 z-[70] bg-[#F5EFE3] border-b border-[#C3B291]/60 shadow-[0_20px_50px_rgba(33,24,18,0.25)] px-6 py-5 max-h-[calc(100svh-4.5rem)] overflow-y-auto"
          >
            {/* Pure Navigation Links */}
            <ul className="flex flex-col divide-y divide-[#C3B291]/35 mb-4">
              {LINKS.map((l, i) => {
                const isActive = activeSection === l.id;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-3 transition-all group ${
                        isActive
                          ? "text-[#3B2E22] font-semibold pl-2.5 border-l-2 border-[#8B7457]"
                          : "text-[#3B2E22]/90 hover:text-[#3B2E22] hover:translate-x-1"
                      }`}
                    >
                      <span className="font-display text-[1.12rem] tracking-[0.08em] uppercase font-medium">
                        {l.label}
                      </span>
                      <span className="font-mono text-[0.72rem] text-[#8B7457] tracking-widest font-medium">
                        0{i + 1}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Direct Actions */}
            <div className="pt-3.5 border-t border-[#C3B291]/40 flex flex-col gap-2">
              <a
                href="#inquire"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#3B2E22] text-[#F5EFE3] hover:bg-[#211812] py-3.5 px-4 font-sans text-[0.9rem] font-medium tracking-wide shadow-sm active:scale-[0.99] transition-all text-center"
              >
                Check Availability &amp; Rates
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://m.me/glasshillpansol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#C3B291] bg-[#F5EFE3] text-[#3B2E22] font-sans text-[0.8rem] font-medium active:bg-[#E9DEC7] transition-colors"
                >
                  <MessageCircle size={15} className="text-[#8B7457]" />
                  <span>Messenger</span>
                </a>
                <a
                  href="tel:+639171234567"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#C3B291] bg-[#F5EFE3] text-[#3B2E22] font-sans text-[0.8rem] font-medium active:bg-[#E9DEC7] transition-colors"
                >
                  <Phone size={15} className="text-[#8B7457]" />
                  <span>Call Host</span>
                </a>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
