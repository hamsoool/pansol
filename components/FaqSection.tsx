"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is included with our private booking?",
    answer:
      "Every booking grants your group 100% exclusive, private use of the entire Glasshill property. This includes all 7 ensuite air-conditioned bedrooms, our private hot-spring pool, kiddie pool, jacuzzi, waterfall feature, acoustic karaoke lounge, full-size billiard table, kitchen appliances, BBQ grill, and secure gated parking inside Laguna Hills Subdivision.",
  },
  {
    question: "Does the villa feature a hot-spring pool?",
    answer:
      "Yes! The villa features a dedicated hot-spring pool where your group can unwind in soothing warm water day and night, alongside our poolside loungers and waterfall feature.",
  },
  {
    question: "Can we bring our own food and alcoholic drinks? Are there corkage fees?",
    answer:
      "You are welcome to bring all your own groceries, food, and drinks with absolutely NO corkage fees. We supply refrigerator, gas stoves, microwave oven, rice cooker, water dispenser, and BBQ grill. Simply bring charcoal and your group's favorite ingredients.",
  },
  {
    question: "How many vehicles can park on the premises?",
    answer:
      "Our gated, private driveway comfortably accommodates 4 to 5 sedans or large SUVs inside Laguna Hills Subdivision. The access roads through the subdivision all the way to our gate are fully paved, requiring no 4x4 or high-clearance vehicles.",
  },
  {
    question: "Is the villa accessible for seniors or PWD guests?",
    answer:
      "Yes, Glasshill features a dedicated ramp providing step-free access to the lower lounge areas, poolside terrace, and ground-level accommodations.",
  },
  {
    question: "What are the karaoke and quiet hours?",
    answer:
      "In accordance with local community guidelines, outdoor amplified sound is requested to lower by 10:00 PM. However, our indoor entertainment room is sound-insulated so you can continue singing and bonding indoors responsibly.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-linen py-24 md:py-32 2xl:py-40 border-t border-rule/30 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="grid lg:grid-cols-12 gap-x-12 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24 gap-y-12 items-start">
          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-4">
            <h2 className="font-display text-ink text-[2.4rem] sm:text-[3rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4.6rem] 3xl:text-[5.2rem] leading-[1.06] font-normal tracking-tight">
              Frequently asked questions
            </h2>
            <p className="mt-4 2xl:mt-6 font-sans text-ink-light text-[0.98rem] lg:text-[1.04rem] 2xl:text-[1.22rem] leading-relaxed font-normal">
              Everything you need to know before packing your bags for a hillside getaway in Pansol.
            </p>

            <div className="mt-8 2xl:mt-10 p-6 2xl:p-8 rounded-2xl bg-stone/50 border border-rule/40 text-[0.88rem] 2xl:text-[1.02rem] font-sans text-ink">
              <p className="font-medium text-ink 2xl:text-[1.12rem]">Need a custom arrangement?</p>
              <p className="mt-1.5 text-ink-light text-[0.82rem] 2xl:text-[0.95rem]">
                Corporate seminars, prenup shoots, and extended stays can be arranged directly.
              </p>
              <a
                href="#inquire"
                className="mt-3.5 inline-block font-sans text-[0.85rem] 2xl:text-[0.95rem] font-medium text-clay hover:underline"
              >
                Inquire with our team &rarr;
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25} className="lg:col-span-8 flex flex-col divide-y divide-rule/40 border-y border-rule/40">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.question} className="py-5 2xl:py-7">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-ink text-[1.18rem] md:text-[1.32rem] 2xl:text-[1.55rem] group-hover:text-clay transition-colors font-normal">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 2xl:w-9 2xl:h-9 rounded-full flex items-center justify-center bg-stone/70 text-ink shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-clay text-linen" : ""
                      }`}
                    >
                      <ChevronDown size={16} className="2xl:w-5 2xl:h-5" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3.5 2xl:pt-4 pr-8 font-sans text-ink-light text-[0.95rem] 2xl:text-[1.12rem] leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
