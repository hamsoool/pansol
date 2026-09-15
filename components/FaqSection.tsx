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
      "Every booking grants your group 100% exclusive, private use of the entire Glasshill property. Accommodating up to 40 overnight guests, this includes all 7 private rooms with dedicated ensuite toilet & bath, natural hot spring infinity pool, kiddie pool, jacuzzi, waterfall feature, entertainment & karaoke room, tournament billiard lounge, al fresco dining area, bar, kitchen with essentials provided, BBQ grilling area, complimentary WiFi, PWD-friendly ramp access, and spacious private parking.",
  },
  {
    question: "Does the villa feature a natural hot spring pool?",
    answer:
      "Yes! Glasshill features a natural hot spring infinity pool, accompanied by a dedicated kiddie pool, therapeutic jacuzzi, and cascading waterfall feature where your group can soak in warm mineral waters day and night surrounded by hillside nature.",
  },
  {
    question: "Can we bring our own food and drinks? What kitchen essentials are provided?",
    answer:
      "You are welcome to bring all your own groceries, food, and drinks with 100% zero corkage fees. Our kitchen provides essentials including refrigerator, gas stove, microwave, water dispenser, kettle, and pots & pans. An outdoor BBQ grilling area is also ready for poolside cookouts.",
  },
  {
    question: "How many overnight guests can Glasshill accommodate?",
    answer:
      "Glasshill comfortably accommodates up to 40 overnight guests across our 7 private air-conditioned bedrooms, each with its own dedicated ensuite toilet and bath with heated shower.",
  },
  {
    question: "Is the villa accessible for seniors or PWD guests?",
    answer:
      "Yes, Glasshill is thoughtfully designed with PWD-friendly ramp access providing step-free movement to the main social decks, dining hall, and primary villa levels, alongside a spacious private on-site parking area.",
  },
  {
    question: "What are the karaoke and quiet hours?",
    answer:
      "In accordance with local community guidelines, outdoor sound is requested to lower by 10:00 PM. However, our indoor entertainment room is sound-insulated so you can continue singing karaoke and playing billiards indoors with your group.",
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
