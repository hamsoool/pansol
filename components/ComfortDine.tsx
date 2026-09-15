"use client";

import Image from "next/image";
import { BedDouble, Users, Accessibility, Car, ChefHat, Flame, Wifi, Utensils } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SUITE_FEATURES = [
  {
    icon: BedDouble,
    title: "7 Private Ensuite Rooms",
    desc: "Every room features its own dedicated private toilet and bath with heated shower.",
  },
  {
    icon: Users,
    title: "Up to 40 Overnight Guests",
    desc: "Spacious group accommodations tailored for milestone celebrations and family reunions.",
  },
  {
    icon: Accessibility,
    title: "Ramp Access for PWD",
    desc: "Step-free ramp access thoughtfully integrated for elderly guests and PWD accessibility.",
  },
  {
    icon: Car,
    title: "Spacious Private Parking",
    desc: "Dedicated gated parking area safely accommodating multiple guest vehicles.",
  },
];

const DINE_FEATURES = [
  {
    icon: ChefHat,
    title: "Kitchen with Essentials",
    desc: "Refrigerator, gas stove, microwave, water dispenser, kettle, pots & pans provided.",
  },
  {
    icon: Flame,
    title: "BBQ Grilling Area",
    desc: "Outdoor charcoal grilling station for poolside barbecues and evening feasts.",
  },
  {
    icon: Wifi,
    title: "Complimentary WiFi",
    desc: "Fast, reliable wireless internet coverage across suites, dining hall, and pool decks.",
  },
  {
    icon: Utensils,
    title: "100% Zero Corkage",
    desc: "Bring your favorite food, ingredients, and beverages freely with zero corkage fees.",
  },
];

export default function ComfortDine() {
  return (
    <section id="stay" className="bg-stone py-24 md:py-32 2xl:py-40 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="grid lg:grid-cols-2 gap-x-12 xl:gap-x-20 2xl:gap-x-28 gap-y-16">
          {/* Comfort & Convenience Column */}
          <ScrollReveal direction="up" delay={0.1} className="flex flex-col">
            <span className="text-[0.78rem] 2xl:text-[0.9rem] font-display tracking-[0.28em] uppercase text-clay font-medium block mb-3 2xl:mb-4">
              Comfort &amp; Convenience
            </span>
            <h2 className="font-display text-ink text-[2.4rem] sm:text-[3rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4.5rem] 3xl:text-[5rem] leading-[1.06] font-normal tracking-tight">
              7 private rooms with ensuite bath
            </h2>
            <p className="mt-4 2xl:mt-6 font-sans text-ink-light text-[1.02rem] lg:text-[1.1rem] 2xl:text-[1.22rem] leading-relaxed font-normal max-w-xl 2xl:max-w-2xl">
              Accommodates up to 40 overnight guests with dedicated ensuite toilet &amp; bath in every room,
              step-free PWD ramp access, and spacious private parking.
            </p>

            {/* Featured High-Res Suite Photo: 481076882 */}
            <div className="mt-8 2xl:mt-10 relative aspect-[16/10] lg:aspect-[16/9.5] 2xl:aspect-[16/9] photo-grade rounded-2xl shadow-md overflow-hidden border border-rule/40 group">
              <Image
                src="/images/481076882_610740388380637_7701463924300992259_n.jpg"
                alt="Ensuite bedroom with twin beds and hillside forest window view"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1920px) 900px, (min-width: 1280px) 700px, (min-width: 1024px) 550px, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-char/80 via-transparent to-transparent flex items-end p-5 lg:p-6 2xl:p-8 text-linen">
                <div>
                  <p className="font-display text-[1.35rem] lg:text-[1.48rem] 2xl:text-[1.75rem] leading-tight text-linen font-normal">
                    Hillside Forest View Suite
                  </p>
                  <p className="font-sans text-[0.88rem] lg:text-[0.94rem] 2xl:text-[1.05rem] text-linen/90 mt-1 font-light">
                    Crisp hotel linens, split inverter A/C, and private heated bathroom.
                  </p>
                </div>
              </div>
            </div>

            {/* Evenly Spaced 2x2 Suite Feature Cards */}
            <div className="mt-8 2xl:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4.5 2xl:gap-5">
              {SUITE_FEATURES.map((item) => (
                <div
                  key={item.title}
                  className="p-5 2xl:p-6 rounded-2xl bg-linen border border-rule/50 shadow-xs flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 2xl:w-11 2xl:h-11 rounded-xl bg-clay/15 text-clay flex items-center justify-center shrink-0">
                      <item.icon size={20} className="2xl:w-5 2xl:h-5" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-display text-ink text-[1.18rem] lg:text-[1.28rem] 2xl:text-[1.42rem] font-normal leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[0.85rem] lg:text-[0.9rem] 2xl:text-[0.98rem] text-ink-light font-normal mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Dine & Cook Column */}
          <ScrollReveal direction="up" delay={0.25} className="flex flex-col lg:border-l lg:border-rule/50 lg:pl-12 xl:pl-20 2xl:pl-28">
            <span className="text-[0.78rem] 2xl:text-[0.9rem] font-display tracking-[0.28em] uppercase text-clay font-medium block mb-3 2xl:mb-4">
              Dine &amp; Cook
            </span>
            <h2 className="font-display text-ink text-[2.4rem] sm:text-[3rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4.5rem] 3xl:text-[5rem] leading-[1.06] font-normal tracking-tight">
              Kitchen with essentials &amp; BBQ grill
            </h2>
            <p className="mt-4 2xl:mt-6 font-sans text-ink-light text-[1.02rem] lg:text-[1.1rem] 2xl:text-[1.22rem] leading-relaxed font-normal max-w-xl 2xl:max-w-2xl">
              Cook your group&apos;s favorite family recipes or grill seafood fresh from the Laguna markets.
              Refrigerator, gas stove, microwave, water dispenser, kettle, pots &amp; pans provided — with 100% zero corkage.
            </p>

            {/* Featured High-Res Dining Hall & Bar Photo: 480785567 */}
            <div className="mt-8 2xl:mt-10 relative aspect-[16/10] lg:aspect-[16/9.5] 2xl:aspect-[16/9] photo-grade rounded-2xl shadow-md overflow-hidden border border-rule/40 group">
              <Image
                src="/images/480785567_610740338380642_6191362958488388344_n.jpg"
                alt="Solid timber dining banquet tables, bar lounge, and architectural staircase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1920px) 900px, (min-width: 1280px) 700px, (min-width: 1024px) 550px, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-char/80 via-transparent to-transparent flex items-end p-5 lg:p-6 2xl:p-8 text-linen">
                <div>
                  <p className="font-display text-[1.35rem] lg:text-[1.48rem] 2xl:text-[1.75rem] leading-tight text-linen font-normal">
                    Banquet Dining Hall &amp; Bar
                  </p>
                  <p className="font-sans text-[0.88rem] lg:text-[0.94rem] 2xl:text-[1.05rem] text-linen/90 mt-1 font-light">
                    Solid-slab tables seating groups comfortably together, with prep bar and staircase atrium.
                  </p>
                </div>
              </div>
            </div>

            {/* Evenly Spaced 2x2 Dine Feature Cards */}
            <div className="mt-8 2xl:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4.5 2xl:gap-5">
              {DINE_FEATURES.map((item) => (
                <div
                  key={item.title}
                  className="p-5 2xl:p-6 rounded-2xl bg-linen border border-rule/50 shadow-xs flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 2xl:w-11 2xl:h-11 rounded-xl bg-clay/15 text-clay flex items-center justify-center shrink-0">
                      <item.icon size={20} className="2xl:w-5 2xl:h-5" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-display text-ink text-[1.18rem] lg:text-[1.28rem] 2xl:text-[1.42rem] font-normal leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[0.85rem] lg:text-[0.9rem] 2xl:text-[0.98rem] text-ink-light font-normal mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
