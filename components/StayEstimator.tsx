"use client";

import React, { useState } from "react";
import { Clock, Users, Check, ArrowRight, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ShiftPlan {
  id: string;
  name: string;
  badge?: string;
  hours: string;
  duration: string;
  basePrice: number;
  basePax: number;
  maxPax: number;
  description: string;
  features: string[];
}

const SHIFTS: ShiftPlan[] = [
  {
    id: "day",
    name: "Day Shift",
    hours: "8:00 AM – 5:00 PM",
    duration: "9 Hours",
    basePrice: 18000,
    basePax: 20,
    maxPax: 25,
    description: "Ideal for birthday celebrations, day pool parties, and daytime corporate planning sessions.",
    features: [
      "Access to private hot-spring pool, kiddie pool & jacuzzi",
      "Full kitchen & BBQ grill facility",
      "Karaoke & billiard lounge access",
      "Gated parking for 4–5 vehicles in Laguna Hills Subd.",
    ],
  },
  {
    id: "night",
    name: "Night Shift",
    badge: "Popular",
    hours: "7:00 PM – 6:00 AM",
    duration: "11 Hours",
    basePrice: 22000,
    basePax: 20,
    maxPax: 25,
    description: "Night swim under the stars with our hot-spring pool, midnight BBQ, and indoor karaoke.",
    features: [
      "Warm hot-spring pool open for evening & night swims",
      "Illuminated jacuzzi and pool lighting",
      "Indoor entertainment room with karaoke",
      "Ensuite bedroom access for rest",
    ],
  },
  {
    id: "overnight",
    name: "22-Hour Overnight",
    badge: "Best Value",
    hours: "2:00 PM – 12:00 NN (Next Day)",
    duration: "22 Hours",
    basePrice: 38000,
    basePax: 20,
    maxPax: 25,
    description: "The complete Glasshill retreat. Settle into all 7 ensuite bedrooms, soak at sunrise, and savor full privacy.",
    features: [
      "All 7 ensuite private air-conditioned bedrooms",
      "Full 22-hour unhurried access to all amenities",
      "Sunset and sunrise hillside views",
      "Early drop-off of luggage & pool seating",
    ],
  },
];

export default function StayEstimator() {
  const [selectedShiftId, setSelectedShiftId] = useState<string>("overnight");
  const [guestCount, setGuestCount] = useState<number>(20);

  const activeShift = SHIFTS.find((s) => s.id === selectedShiftId) || SHIFTS[2];

  const extraGuests = Math.max(0, guestCount - activeShift.basePax);
  const extraGuestFee = extraGuests * 500;
  const totalPrice = activeShift.basePrice + extraGuestFee;

  const handleSelectPlan = (shiftName: string) => {
    const inputDates = document.querySelector('input[name="dates"]') as HTMLInputElement | null;
    const inputGuests = document.querySelector('input[name="guests"]') as HTMLInputElement | null;
    const inputMsg = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement | null;
    
    if (inputGuests) {
      inputGuests.value = `${guestCount} guests (${shiftName})`;
      inputGuests.dispatchEvent(new Event("input", { bubbles: true }));
    }
    if (inputMsg && !inputMsg.value) {
      inputMsg.value = `Interested in the ${shiftName} for ${guestCount} pax.`;
      inputMsg.dispatchEvent(new Event("input", { bubbles: true }));
    }

    const inquireSection = document.getElementById("inquire");
    inquireSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="rates" className="bg-stone py-24 md:py-32 2xl:py-40">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-2xl lg:max-w-3xl 2xl:max-w-4xl">
            <h2 className="font-display text-ink text-[2.5rem] sm:text-[3.2rem] lg:text-[3.6rem] xl:text-[4rem] 2xl:text-[5rem] 3xl:text-[5.6rem] leading-[1.04] font-normal tracking-tight">
              Choose your stay schedule
            </h2>
            <p className="mt-4 2xl:mt-6 font-sans text-ink-light text-[1.02rem] lg:text-[1.08rem] 2xl:text-[1.22rem] leading-relaxed font-normal">
              One group per shift. No hidden resort fees or corkage charges, bring your favorite food,
              drinks, and loved ones.
            </p>
          </div>

          {/* Guest Count Slider / Selector */}
          <div className="mt-10 2xl:mt-14 p-6 lg:p-8 2xl:p-10 rounded-2xl bg-linen/90 border border-rule/50 shadow-xs max-w-xl lg:max-w-2xl 2xl:max-w-3xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Users size={20} className="text-clay 2xl:w-6 2xl:h-6" />
                <span className="font-sans text-ink font-medium text-[0.95rem] lg:text-[1rem] 2xl:text-[1.15rem]">Estimated Guests:</span>
              </div>
              <span className="font-display text-[1.5rem] lg:text-[1.75rem] 2xl:text-[2.2rem] text-ink font-semibold">
                {guestCount} Pax
              </span>
            </div>

            <div className="mt-4 2xl:mt-6 flex items-center gap-4">
              <input
                type="range"
                min="10"
                max="25"
                step="1"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-clay cursor-pointer h-2.5 bg-rule/40 rounded-lg"
                aria-label="Number of guests"
              />
            </div>
            <div className="mt-2.5 flex justify-between text-[0.78rem] lg:text-[0.82rem] 2xl:text-[0.92rem] font-sans text-clay">
              <span>10 pax (Intimate)</span>
              <span>20 pax (Base)</span>
              <span>25 pax (Max)</span>
            </div>

            {extraGuests > 0 && (
              <p className="mt-3.5 text-[0.82rem] lg:text-[0.86rem] 2xl:text-[0.96rem] font-sans text-clay flex items-center gap-2">
                <ShieldCheck size={16} className="2xl:w-5 2xl:h-5" />
                Includes {extraGuests} additional guest{extraGuests > 1 ? "s" : ""} (+₱{extraGuestFee.toLocaleString()})
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* Shift Options Cards */}
        <ScrollReveal direction="up" delay={0.25} className="mt-10 lg:mt-12 2xl:mt-16 grid md:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10">
          {SHIFTS.map((shift) => {
            const isSelected = shift.id === selectedShiftId;
            const shiftTotal = shift.basePrice + Math.max(0, guestCount - shift.basePax) * 500;

            return (
              <div
                key={shift.id}
                onClick={() => setSelectedShiftId(shift.id)}
                className={`relative rounded-2xl p-7 2xl:p-9 cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-linen border-2 border-clay shadow-md ring-1 ring-clay/30 -translate-y-1"
                    : "bg-linen/70 border border-rule/50 hover:bg-linen hover:border-rule"
                }`}
              >
                {shift.badge && (
                  <span className="absolute top-4 right-4 2xl:top-5 2xl:right-5 px-2.5 py-0.5 2xl:px-3 2xl:py-1 rounded-full text-[0.72rem] 2xl:text-[0.82rem] font-sans tracking-wide uppercase font-semibold bg-clay text-linen">
                    {shift.badge}
                  </span>
                )}

                <div>
                  <h3 className="font-display text-[1.6rem] 2xl:text-[1.95rem] text-ink">{shift.name}</h3>
                  <div className="mt-2 flex items-center gap-2 text-clay text-[0.85rem] 2xl:text-[0.95rem] font-sans">
                    <Clock size={15} className="2xl:w-4 2xl:h-4" />
                    <span>{shift.hours}</span>
                  </div>

                  <p className="mt-4 2xl:mt-5 font-sans text-ink-light text-[0.92rem] 2xl:text-[1.04rem] leading-relaxed">
                    {shift.description}
                  </p>

                  <div className="my-6 2xl:my-8 border-t border-rule/40 pt-4 2xl:pt-6">
                    <div className="text-[0.78rem] 2xl:text-[0.88rem] uppercase tracking-wider font-sans text-clay">
                      Estimated Total
                    </div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="font-display text-[2.2rem] 2xl:text-[2.75rem] text-ink font-semibold">
                        ₱{shiftTotal.toLocaleString()}
                      </span>
                      <span className="font-sans text-[0.85rem] 2xl:text-[0.95rem] text-clay">/ shift</span>
                    </div>
                    <span className="text-[0.78rem] 2xl:text-[0.88rem] font-sans text-ink-light block mt-0.5">
                      for {guestCount} guests
                    </span>
                  </div>

                  <ul className="space-y-2.5 2xl:space-y-3.5 font-sans text-[0.88rem] 2xl:text-[1rem] text-ink-light">
                    {shift.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 2xl:gap-3">
                        <Check size={16} className="text-clay shrink-0 mt-0.5 2xl:w-5 2xl:h-5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedShiftId(shift.id);
                    handleSelectPlan(shift.name);
                  }}
                  className={`mt-8 2xl:mt-10 w-full py-3 2xl:py-4 px-4 rounded-xl font-sans text-[0.88rem] 2xl:text-[1rem] tracking-wide font-medium flex items-center justify-center gap-2 transition-colors ${
                    isSelected
                      ? "bg-ink text-linen hover:bg-ink-light shadow-xs"
                      : "border border-ink/40 text-ink hover:bg-ink hover:text-linen"
                  }`}
                >
                  <span>Select &amp; Inquire</span>
                  <ArrowRight size={15} className="2xl:w-4 2xl:h-4" />
                </button>
              </div>
            );
          })}
        </ScrollReveal>

        {/* Booking policy note */}
        <div className="mt-8 2xl:mt-10 rounded-2xl bg-linen/60 border border-rule/40 p-4 2xl:p-6 text-[0.85rem] 2xl:text-[0.98rem] font-sans text-ink-light flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            * Peak holiday rates and customized multi-day corporate reservations are accommodated upon request.
          </p>
          <a
            href="#inquire"
            className="text-clay hover:underline whitespace-nowrap font-medium"
          >
            Ask about long stays &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
