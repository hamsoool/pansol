"use client";

import React, { useState } from "react";
import { Facebook, Instagram, Send, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import ScrollReveal from "./ScrollReveal";

export default function Inquire() {
  const [form, setForm] = useState({ name: "", phone: "", dates: "", guests: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#F5EFE3", "#E9DEC7", "#8B7457", "#C3B291"],
      });
    } catch {
      // non-blocking
    }

    const body = encodeURIComponent(
      `Name: ${form.name}\nContact Phone: ${form.phone}\nPreferred dates: ${form.dates}\nGuests: ${form.guests}\n\nNote / Special Request: ${form.message}`
    );
    window.location.href = `mailto:stay@glasshillpansol.com?subject=Glasshill%20Pansol%20Reservation%20Inquiry&body=${body}`;
    setSent(true);
  }

  return (
    <section id="inquire" className="bg-char relative py-24 md:py-32 2xl:py-40">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-char/20 via-transparent to-char/30 pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="grid lg:grid-cols-12 gap-x-12 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24 gap-y-14 items-start">
          {/* Left Column: Direct Info */}
          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-5 text-linen">
            <span className="text-[0.78rem] 2xl:text-[0.9rem] font-display tracking-[0.28em] uppercase text-stone/90 font-medium block mb-3 2xl:mb-4">
              Reserve Your Hillside Escape
            </span>
            <h2 className="font-display text-[2.6rem] sm:text-[3.2rem] lg:text-[3.6rem] xl:text-[4rem] 2xl:text-[5rem] 3xl:text-[5.6rem] leading-[1.04] font-normal tracking-tight">
              Ready for the hills?
            </h2>
            <p className="mt-4 2xl:mt-6 font-sans text-linen/85 text-[1.02rem] lg:text-[1.08rem] 2xl:text-[1.22rem] leading-relaxed max-w-md lg:max-w-lg 2xl:max-w-xl font-normal">
              Thoughtfully designed for meaningful gatherings, celebrations, and quiet escapes surrounded by nature.
              Send your preferred dates and group size (accommodates up to 40 overnight guests). We confirm availability directly with
              zero middleman markups.
            </p>

            {/* Quick Instant Channels */}
            <div className="mt-8 2xl:mt-10 flex flex-col gap-3.5 2xl:gap-4 max-w-sm 2xl:max-w-md">
              <a
                href="https://m.me/glasshillpansol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 2xl:p-4.5 rounded-xl bg-linen/10 hover:bg-linen/15 border border-linen/20 transition-colors"
              >
                <div className="flex items-center gap-3 2xl:gap-4 font-sans text-[0.95rem] 2xl:text-[1.05rem]">
                  <MessageCircle size={20} className="text-stone 2xl:w-6 2xl:h-6" />
                  <span>Chat on Facebook Messenger</span>
                </div>
                <span className="text-[0.78rem] 2xl:text-[0.88rem] font-sans text-stone/80 font-normal">
                  Fastest
                </span>
              </a>

              <a
                href="https://instagram.com/glasshillpansol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 2xl:gap-4 p-3.5 2xl:p-4.5 rounded-xl bg-linen/10 hover:bg-linen/15 border border-linen/20 transition-colors font-sans text-[0.95rem] 2xl:text-[1.05rem]"
              >
                <Instagram size={20} className="text-stone 2xl:w-6 2xl:h-6" />
                <span>Follow @glasshillpansol</span>
              </a>

              <a
                href="tel:+639171234567"
                className="flex items-center gap-3 2xl:gap-4 p-3.5 2xl:p-4.5 rounded-xl bg-linen/10 hover:bg-linen/15 border border-linen/20 transition-colors font-sans text-[0.95rem] 2xl:text-[1.05rem]"
              >
                <Phone size={20} className="text-stone 2xl:w-6 2xl:h-6" />
                <span>Call Host Directly: +63 917 123 4567</span>
              </a>
            </div>

            {/* Privacy Assurance */}
            <div className="mt-8 2xl:mt-10 text-[0.82rem] 2xl:text-[0.92rem] font-sans text-linen/60">
              * Your personal details are kept strictly confidential and used solely to verify dates.
            </div>
          </ScrollReveal>

          {/* Right Column: Form */}
          <ScrollReveal direction="up" delay={0.25} className="lg:col-span-7">
            {sent ? (
              <div className="rounded-2xl bg-linen/10 border border-linen/30 p-8 2xl:p-12 text-linen animate-rise">
                <div className="flex items-center gap-3 text-stone mb-4">
                  <CheckCircle2 size={32} className="2xl:w-10 2xl:h-10" />
                  <h3 className="font-display text-[1.8rem] 2xl:text-[2.2rem]">Inquiry Prepared!</h3>
                </div>
                <p className="font-sans text-linen/90 leading-relaxed text-[1.02rem] 2xl:text-[1.18rem]">
                  Your email draft has been generated. Please tap &ldquo;Send&rdquo; in your mail app,
                  and our reservations team will get back to you with confirmed availability and payment details within a few hours.
                </p>
                <p className="font-sans text-linen/70 mt-4 text-[0.88rem] 2xl:text-[1rem]">
                  For an even quicker confirmation, reach out immediately via{" "}
                  <a
                    href="https://m.me/glasshillpansol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-stone hover:text-linen"
                  >
                    Messenger
                  </a>.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 2xl:mt-8 inline-flex items-center rounded-full bg-linen text-ink px-6 py-2.5 2xl:px-8 2xl:py-3.5 font-sans text-[0.88rem] 2xl:text-[1rem] hover:bg-linen/90 transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-char/30 backdrop-blur-md border border-linen/20 p-7 sm:p-9 2xl:p-12 flex flex-col gap-6 2xl:gap-8"
              >
                <div className="grid sm:grid-cols-2 gap-5 2xl:gap-7">
                  <label className="flex flex-col gap-2 2xl:gap-2.5">
                    <span className="font-sans text-linen/85 text-[0.85rem] 2xl:text-[0.96rem] font-medium">
                      Full Name *
                    </span>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="bg-linen/10 border border-linen/25 rounded-xl px-3.5 py-2.5 2xl:px-4.5 2xl:py-3.5 text-linen font-sans placeholder:text-linen/40 focus:border-linen focus:bg-linen/15 outline-none transition-all 2xl:text-[1.05rem]"
                      placeholder="e.g. Maria Santos"
                    />
                  </label>

                  <label className="flex flex-col gap-2 2xl:gap-2.5">
                    <span className="font-sans text-linen/85 text-[0.85rem] 2xl:text-[0.96rem] font-medium">
                      Mobile / WhatsApp Number *
                    </span>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="bg-linen/10 border border-linen/25 rounded-xl px-3.5 py-2.5 2xl:px-4.5 2xl:py-3.5 text-linen font-sans placeholder:text-linen/40 focus:border-linen focus:bg-linen/15 outline-none transition-all 2xl:text-[1.05rem]"
                      placeholder="e.g. 0917 123 4567"
                    />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 2xl:gap-7">
                  <label className="flex flex-col gap-2 2xl:gap-2.5">
                    <span className="font-sans text-linen/85 text-[0.85rem] 2xl:text-[0.96rem] font-medium">
                      Preferred Dates *
                    </span>
                    <input
                      required
                      name="dates"
                      value={form.dates}
                      onChange={handleChange}
                      className="bg-linen/10 border border-linen/25 rounded-xl px-3.5 py-2.5 2xl:px-4.5 2xl:py-3.5 text-linen font-sans placeholder:text-linen/40 focus:border-linen focus:bg-linen/15 outline-none transition-all 2xl:text-[1.05rem]"
                      placeholder="e.g. Oct 24–25, 2026"
                    />
                  </label>

                  <label className="flex flex-col gap-2 2xl:gap-2.5">
                    <span className="font-sans text-linen/85 text-[0.85rem] 2xl:text-[0.96rem] font-medium">
                      Estimated Guests &amp; Shift
                    </span>
                    <input
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="bg-linen/10 border border-linen/25 rounded-xl px-3.5 py-2.5 2xl:px-4.5 2xl:py-3.5 text-linen font-sans placeholder:text-linen/40 focus:border-linen focus:bg-linen/15 outline-none transition-all 2xl:text-[1.05rem]"
                      placeholder="e.g. 20 pax (22-Hour Overnight)"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 2xl:gap-2.5">
                  <span className="font-sans text-linen/85 text-[0.85rem] 2xl:text-[0.96rem] font-medium">
                    Special Requests / Notes (Optional)
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="bg-linen/10 border border-linen/25 rounded-xl px-3.5 py-2.5 2xl:px-4.5 2xl:py-3.5 text-linen font-sans placeholder:text-linen/40 focus:border-linen focus:bg-linen/15 outline-none resize-none transition-all 2xl:text-[1.05rem]"
                    placeholder="Occasion (e.g. Birthday, Family Reunion, Corporate Retreat), early arrival, etc."
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 2xl:mt-4 inline-flex items-center justify-center gap-2.5 rounded-full bg-linen text-ink px-8 py-4 2xl:px-10 2xl:py-4.5 font-sans text-[0.95rem] 2xl:text-[1.05rem] font-medium tracking-wide hover:bg-stone active:scale-[0.98] transition-all shadow-md self-start"
                >
                  <Send size={17} className="2xl:w-5 2xl:h-5" />
                  <span>Send Reservation Request</span>
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
