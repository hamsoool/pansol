"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mountain, Flame, Key, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HIGHLIGHTS = [
  {
    icon: Flame,
    title: "Warm Hot-Spring Pool",
    desc: "A dedicated hot-spring pool built into the terrace deck for soothing daytime and evening soaks.",
  },
  {
    icon: Key,
    title: "100% Private Buyout",
    desc: "Zero shared common areas. The entire villa, deck, and grounds are reserved exclusively for your party.",
  },
  {
    icon: Mountain,
    title: "Laguna Hills Subdivision",
    desc: "Gated and perched high within Laguna Hills Subdivision, wrapped by mountain trees and fresh breezes.",
  },
  {
    icon: ShieldCheck,
    title: "Convenient & Secure",
    desc: "Gated subdivision security, parking for up to 5 vehicles, and step-free ramp access to the main deck.",
  },
];

const STATS = [
  { n: "7", label: "Ensuite Suites" },
  { n: "20–25", label: "Guest Capacity" },
  { n: "3", label: "Terrace Pools" },
  { n: "< 2 hrs", label: "Drive from Manila" },
];

export default function Intro() {
  return (
    <section id="villa" className="bg-linen relative py-24 md:py-32 2xl:py-40">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="grid lg:grid-cols-12 gap-x-12 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-28 gap-y-16 items-center">
          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-6">
            <span className="text-[0.78rem] 2xl:text-[0.9rem] font-sans tracking-[0.22em] uppercase text-clay font-medium block mb-3 2xl:mb-4">
              The Glasshill Experience
            </span>
            <h2 className="font-display text-ink text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.2rem] 2xl:text-[5rem] 3xl:text-[5.6rem] leading-[1.04] font-normal tracking-tight">
              A whole hillside villa,
              <br />
              <span className="italic font-light text-ink-light">just for your group.</span>
            </h2>

            <p className="mt-6 font-sans text-ink-light text-[1.02rem] lg:text-[1.08rem] 2xl:text-[1.2rem] 3xl:text-[1.28rem] leading-[1.8] font-normal max-w-xl lg:max-w-2xl 2xl:max-w-3xl">
              Pansol has been Laguna&apos;s favorite getaway for generations, and
              Glasshill sits elevated within Laguna Hills Subdivision above the roadside crowds.
              Built into a private hillside perch, the villa combines contemporary floor-to-ceiling glass
              architecture with forest solitude and a private hot-spring pool terraced below.
            </p>
            <p className="mt-4 font-sans text-ink-light text-[1.02rem] lg:text-[1.08rem] 2xl:text-[1.2rem] 3xl:text-[1.28rem] leading-[1.8] font-normal max-w-xl lg:max-w-2xl 2xl:max-w-3xl">
              Every booking reserves the entire property. No shared pool, no other families on the
              next balcony: just your group, seven private suites, and however many days you&apos;ve
              set aside to slow down and reconnect.
            </p>

            {/* Grid of Key Features */}
            <div className="mt-10 2xl:mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8 2xl:gap-10 pt-8 border-t border-rule/40 max-w-xl lg:max-w-2xl 2xl:max-w-3xl">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <item.icon size={20} className="text-clay shrink-0" strokeWidth={1.5} />
                    <h4 className="font-sans font-medium text-ink text-[0.98rem] lg:text-[1.05rem] 2xl:text-[1.15rem]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-sans text-clay text-[0.88rem] lg:text-[0.94rem] 2xl:text-[1rem] leading-relaxed pl-7 font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Stat Bar */}
            <dl className="mt-12 2xl:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8 p-5 sm:p-6 lg:p-7 2xl:p-9 rounded-2xl bg-stone/40 border border-rule/40 max-w-xl lg:max-w-2xl 2xl:max-w-3xl">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="font-display text-ink text-[1.85rem] sm:text-[1.95rem] lg:text-[2.25rem] 2xl:text-[2.75rem] leading-none font-normal whitespace-nowrap">
                    {s.n}
                  </dt>
                  <dd className="font-sans text-clay text-[0.82rem] lg:text-[0.88rem] 2xl:text-[0.98rem] mt-2 leading-snug font-normal">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>

          {/* Dual Image Collage with Real Authentic Assets */}
          <ScrollReveal direction="up" delay={0.25} className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl photo-grade rounded-2xl shadow-xl overflow-hidden border border-rule/40 group">
              <Image
                src="/images/480984373_610895961698413_4922993019588934443_n.jpg"
                alt="Private balcony lounger and potted palm overlooking the hillside canopy"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1920px) 900px, (min-width: 1280px) 700px, (min-width: 1024px) 500px, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-char/60 via-transparent to-transparent flex items-end p-5 lg:p-7 2xl:p-9">
                <span className="font-display text-linen text-[1.1rem] lg:text-[1.25rem] 2xl:text-[1.45rem]">
                  Hillside Balcony Lounger
                </span>
              </div>
            </div>

            {/* Floating Overlapping Card with High-Res Sundeck Asset */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="hidden sm:block absolute -bottom-10 -left-6 lg:-left-12 2xl:-left-16 w-60 lg:w-72 xl:w-84 2xl:w-96 3xl:w-[440px] aspect-[4/3] rounded-2xl photo-grade shadow-2xl border-2 border-linen overflow-hidden group"
            >
              <Image
                src="/images/481667782_615724207882255_2054461621971933467_n.jpg"
                alt="Open sun deck with lounge sofas overlooking the hillside canopy"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1920px) 500px, (min-width: 1280px) 400px, 260px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-char/70 via-transparent to-transparent flex items-end p-3.5 lg:p-4 2xl:p-6">
                <span className="font-display text-linen text-[0.95rem] lg:text-[1.05rem] 2xl:text-[1.25rem]">
                  Rooftop Sun Deck
                </span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
