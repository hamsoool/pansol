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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-linen/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(59,46,34,0.1)] py-3.5"
          : "bg-gradient-to-b from-char/70 via-char/30 to-transparent py-5"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <BrandMark
            className={`w-7 sm:w-8 2xl:w-9 h-auto transition-colors ${
              scrolled || open ? "text-ink" : "text-linen"
            }`}
          />
          <div className="flex flex-col">
            <span
              className={`font-display tracking-[0.16em] uppercase text-[1.1rem] 2xl:text-[1.25rem] transition-colors leading-none font-medium ${
                scrolled || open ? "text-ink" : "text-linen"
              }`}
            >
              Glasshill
            </span>
            <span
              className={`font-sans tracking-[0.2em] uppercase text-[0.62rem] 2xl:text-[0.72rem] transition-colors mt-1 font-normal ${
                scrolled || open ? "text-clay" : "text-linen/75"
              }`}
            >
              Pansol · Laguna
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
        <div className="flex items-center gap-3 sm:gap-4">
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#inquire"
            className={`inline-flex items-center rounded-full px-5 py-2.5 2xl:px-7 2xl:py-3 font-sans text-[0.84rem] 2xl:text-[0.95rem] tracking-wide font-medium transition-all shadow-xs ${
              scrolled
                ? "bg-ink text-linen hover:bg-ink-light"
                : "bg-linen text-ink hover:bg-stone"
            }`}
          >
            Check Availability
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-1.5 rounded-lg transition-colors ${
              scrolled || open ? "text-ink hover:bg-stone/50" : "text-linen hover:bg-linen/10"
            }`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer with Smooth AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-linen flex flex-col justify-between px-6 py-6 overflow-y-auto border-t border-rule/40"
          >
            <ul className="flex flex-col divide-y divide-rule/30 font-sans text-ink">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-[1.1rem] font-display text-ink hover:text-clay transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6 mt-4 border-t border-rule/40 flex flex-col gap-3">
              <a
                href="#inquire"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-ink text-linen hover:bg-ink-light px-5 py-3.5 font-sans text-[0.92rem] font-medium shadow-sm"
              >
                Check Rates &amp; Availability
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://m.me/glasshillpansol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 p-2.5 rounded-xl border border-rule font-sans text-[0.82rem] text-ink"
                >
                  <MessageCircle size={15} className="text-clay" />
                  <span>Messenger</span>
                </a>
                <a
                  href="tel:+639171234567"
                  className="inline-flex items-center justify-center gap-1.5 p-2.5 rounded-xl border border-rule font-sans text-[0.82rem] text-ink"
                >
                  <Phone size={15} className="text-clay" />
                  <span>Call Host</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
