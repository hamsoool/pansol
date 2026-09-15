"use client";

import Image from "next/image";
import { Waves, Droplets, Baby, Bath, ShowerHead, Thermometer } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const POOL_FEATURES = [
  {
    icon: Waves,
    label: "Natural Hot Spring Infinity Pool",
    desc: "A warm natural mineral hot-spring pool overlooking the Laguna hillside, perfect for day and night soaks.",
    tag: "Natural Hot Spring",
  },
  {
    icon: Droplets,
    label: "Waterfall Feature",
    desc: "A therapeutic hydrotherapy waterfall pouring under the timber pergola into the swimming pool.",
    tag: "Hydrotherapy",
  },
  {
    icon: Baby,
    label: "Kiddie Pool",
    desc: "A dedicated shallow wading pool built safely for young children and toddlers.",
    tag: "Child-Safe",
  },
  {
    icon: Bath,
    label: "Jacuzzi",
    desc: "Warm-water therapeutic jacuzzi with relaxing bubble jets for deep soothing comfort.",
    tag: "Therapeutic Soak",
  },
  {
    icon: ShowerHead,
    label: "Poolside Rinse",
    desc: "Fresh outdoor rainfall rinse showers situated right on the timber pool deck.",
    tag: "Convenient",
  },
];

export default function RelaxUnwind() {
  return (
    <section id="unwind" className="bg-stone py-24 md:py-32 2xl:py-40">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24">
        <ScrollReveal direction="up" delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-12 2xl:gap-16">
          <div className="max-w-xl lg:max-w-2xl 2xl:max-w-3xl">
            <span className="text-[0.78rem] 2xl:text-[0.9rem] font-display tracking-[0.28em] uppercase text-clay font-medium block mb-3 2xl:mb-4">
              Relax & Unwind
            </span>
            <h2 className="font-display text-ink text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.2rem] 2xl:text-[5rem] 3xl:text-[5.6rem] leading-[1.04] font-normal tracking-tight">
              Natural hot spring infinity pool & jacuzzi
            </h2>
          </div>
          <p className="font-sans text-ink-light text-[1.05rem] lg:text-[1.12rem] 2xl:text-[1.25rem] max-w-md lg:max-w-lg 2xl:max-w-xl leading-relaxed font-normal">
            Step into therapeutic natural hot-spring water drawn directly from Pansol&apos;s volcanic springs,
            complete with a dedicated kiddie pool, soothing jacuzzi, and a revitalizing waterfall feature.
          </p>
        </ScrollReveal>

        {/* Highlight Feature Showcase */}
        <div className="mt-14 lg:mt-16 2xl:mt-24 grid lg:grid-cols-12 gap-x-12 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24 gap-y-12 items-start">
          {/* Feature List: Cohesive, seamless architectural editorial list (no ugly floating boxes) */}
          <ScrollReveal direction="up" delay={0.2} className="lg:col-span-5 flex flex-col divide-y divide-rule/40 border-y border-rule/50">
            {POOL_FEATURES.map((f) => (
              <div
                key={f.label}
                className="py-5 lg:py-6 2xl:py-7 flex items-start gap-4 sm:gap-5 2xl:gap-6"
              >
                <div className="w-12 h-12 2xl:w-14 2xl:h-14 rounded-full bg-clay/10 text-clay flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon size={22} strokeWidth={1.6} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-ink text-[1.25rem] lg:text-[1.35rem] 2xl:text-[1.55rem] font-normal leading-snug">
                      {f.label}
                    </h3>
                    <span className="text-[0.84rem] lg:text-[0.88rem] 2xl:text-[0.98rem] font-sans font-medium text-clay tracking-wide">
                      {f.tag}
                    </span>
                  </div>
                  <p className="font-sans text-ink-light text-[0.98rem] lg:text-[1.04rem] 2xl:text-[1.15rem] mt-2 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </ScrollReveal>

          {/* Authentic Real Photos Showcase */}
          <ScrollReveal direction="up" delay={0.35} className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 2xl:gap-8">
              {/* Primary Waterfall Feature 752583912 */}
              <div className="relative w-full aspect-[3/4] min-w-0 photo-grade rounded-2xl shadow-md overflow-hidden border border-rule/50 group">
                <Image
                  src="/images/752583912_18058692566770428_3910446325817185170_n.jpg"
                  alt="Cascade waterfall pouring into the infinity pool beneath the timber pergola"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 1920px) 700px, (min-width: 1280px) 520px, (min-width: 1024px) 450px, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char/85 via-char/30 to-transparent flex flex-col justify-end p-6 lg:p-7 2xl:p-9 text-linen">
                  <span className="text-[0.78rem] lg:text-[0.82rem] 2xl:text-[0.92rem] uppercase tracking-widest font-sans text-stone mb-1.5 font-medium">
                    Poolside Feature
                  </span>
                  <h3 className="font-display text-[1.4rem] lg:text-[1.55rem] 2xl:text-[1.8rem] text-linen leading-tight">
                    The Pergola Waterfall &amp; Infinity Pool
                  </h3>
                  <p className="font-sans text-[0.92rem] lg:text-[0.96rem] 2xl:text-[1.08rem] text-linen/85 mt-2 leading-relaxed">
                    Listen to natural falling water while relaxing in the private hot-spring pool.
                  </p>
                </div>
              </div>

              {/* Poolside Deck & Social Loungers 480946190 */}
              <div className="relative w-full aspect-[3/4] min-w-0 photo-grade rounded-2xl shadow-md overflow-hidden border border-rule/50 group">
                <Image
                  src="/images/480946190_610740235047319_1654243820664089575_n.jpg"
                  alt="Poolside chaise loungers, blue mosaic pool, and hillside backdrop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 1920px) 700px, (min-width: 1280px) 520px, (min-width: 1024px) 450px, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char/85 via-char/30 to-transparent flex flex-col justify-end p-6 lg:p-7 2xl:p-9 text-linen">
                  <span className="text-[0.78rem] lg:text-[0.82rem] 2xl:text-[0.92rem] uppercase tracking-widest font-sans text-stone mb-1.5 font-medium">
                    Relaxation Deck
                  </span>
                  <h3 className="font-display text-[1.4rem] lg:text-[1.55rem] 2xl:text-[1.8rem] text-linen leading-tight">
                    Sunken Poolside Loungers
                  </h3>
                  <p className="font-sans text-[0.92rem] lg:text-[0.96rem] 2xl:text-[1.08rem] text-linen/85 mt-2 leading-relaxed">
                    Waterfront loungers for effortless transitions between swimming and resting.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Spacious, Highly Legible Highlights Ribbon */}
        <ScrollReveal direction="up" delay={0.4} className="mt-14 lg:mt-18 2xl:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 2xl:gap-12 p-7 lg:p-9 2xl:p-12 rounded-2xl bg-linen/95 border border-rule/50 shadow-sm">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-clay mb-2.5">
              <div className="w-9 h-9 2xl:w-11 2xl:h-11 rounded-full bg-clay/10 flex items-center justify-center text-clay shrink-0">
                <Thermometer size={20} strokeWidth={1.75} />
              </div>
              <h4 className="font-display text-ink text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.55rem] font-normal">
                Hot-Spring Pool
              </h4>
            </div>
            <p className="font-sans text-ink-light text-[0.98rem] lg:text-[1.04rem] 2xl:text-[1.15rem] leading-relaxed">
              Dedicated warm hot-spring pool designed for soothing daytime and evening soaks with mountain views.
            </p>
          </div>

          <div className="flex flex-col md:border-l md:border-rule/40 md:pl-6 lg:pl-8 2xl:pl-10">
            <div className="flex items-center gap-3 text-clay mb-2.5">
              <div className="w-9 h-9 2xl:w-11 2xl:h-11 rounded-full bg-clay/10 flex items-center justify-center text-clay shrink-0">
                <Waves size={20} strokeWidth={1.75} />
              </div>
              <h4 className="font-display text-ink text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.55rem] font-normal">
                Clean Circulation
              </h4>
            </div>
            <p className="font-sans text-ink-light text-[0.98rem] lg:text-[1.04rem] 2xl:text-[1.15rem] leading-relaxed">
              Continuously filtered and crystal-clear pool water maintained fresh for your party&apos;s comfort.
            </p>
          </div>

          <div className="flex flex-col md:border-l md:border-rule/40 md:pl-6 lg:pl-8 2xl:pl-10">
            <div className="flex items-center gap-3 text-clay mb-2.5">
              <div className="w-9 h-9 2xl:w-11 2xl:h-11 rounded-full bg-clay/10 flex items-center justify-center text-clay shrink-0">
                <Droplets size={20} strokeWidth={1.75} />
              </div>
              <h4 className="font-display text-ink text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.55rem] font-normal">
                100% Private Pool
              </h4>
            </div>
            <p className="font-sans text-ink-light text-[0.98rem] lg:text-[1.04rem] 2xl:text-[1.15rem] leading-relaxed">
              Reserved solely for your group with zero public access, no shared decks, and total privacy.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
