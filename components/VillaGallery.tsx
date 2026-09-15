"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "all" | "pools" | "rooms" | "social" | "terraces" | "night";
  categoryLabel: string;
  aspect: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "waterfall",
    src: "/images/752583912_18058692566770428_3910446325817185170_n.jpg",
    title: "Pergola Waterfall & Pool",
    category: "pools",
    categoryLabel: "Hot Springs",
    aspect: "aspect-[4/3]",
    caption: "Water cascading under the timber pergola into the private pool, framed by hillside trees.",
  },
  {
    id: "night-exterior",
    src: "/images/480700500_610740108380665_461491699173164153_n.jpg",
    title: "Glasshill Villa at Night",
    category: "night",
    categoryLabel: "Night Architecture",
    aspect: "aspect-[4/3]",
    caption: "The entire multi-tiered glass villa illuminated at dusk in the hills of Pansol.",
  },
  {
    id: "billiards",
    src: "/images/481079700_610754145045928_5190545637851903415_n.jpg",
    title: "Tournament Billiard Lounge",
    category: "social",
    categoryLabel: "Lounge & Games",
    aspect: "aspect-[4/3]",
    caption: "Tournament-grade pool table with custom wall sconce lighting and dedicated cue sets.",
  },
  {
    id: "sundeck",
    src: "/images/481667782_615724207882255_2054461621971933467_n.jpg",
    title: "Upper Sun Deck & Pool Terrace",
    category: "terraces",
    categoryLabel: "Terraces & Outdoors",
    aspect: "aspect-[4/3]",
    caption: "Expansive rooftop deck with woven lounge sofas, potted palms, and open mountain breeze.",
  },
  {
    id: "bedroom-master",
    src: "/images/481076882_610740388380637_7701463924300992259_n.jpg",
    title: "Hillside Forest View Suite",
    category: "rooms",
    categoryLabel: "Suites & Rooms",
    aspect: "aspect-[4/3]",
    caption: "Crisp white linens, hardwood headboards, and floor-to-ceiling glass looking into the lush canopy.",
  },
  {
    id: "poolside-deck",
    src: "/images/480946190_610740235047319_1654243820664089575_n.jpg",
    title: "Poolside Chaise & Social Deck",
    category: "pools",
    categoryLabel: "Hot Springs",
    aspect: "aspect-[4/3]",
    caption: "Sun loungers resting right at the water's edge for seamless transitions between swimming and resting.",
  },
  {
    id: "chaise-portrait",
    src: "/images/480984373_610895961698413_4922993019588934443_n.jpg",
    title: "Private Balcony Lounger",
    category: "terraces",
    categoryLabel: "Terraces & Outdoors",
    aspect: "aspect-[4/3]",
    caption: "Quiet corner on the terrace with views of Mt. Makiling's lush foothills.",
  },
  {
    id: "grand-dining",
    src: "/images/480785567_610740338380642_6191362958488388344_n.jpg",
    title: "Banquet Dining Hall & Bar",
    category: "social",
    categoryLabel: "Dining & Social",
    aspect: "aspect-[4/3]",
    caption: "Spacious solid-slab dining tables crafted to bring 20–25 guests together for memorable meals.",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Highlights" },
  { id: "pools", label: "Hot Springs & Pools" },
  { id: "rooms", label: "Suites & Rooms" },
  { id: "social", label: "Social & Dining" },
  { id: "terraces", label: "Terraces & Outdoors" },
  { id: "night", label: "Night Architecture" },
] as const;

export default function VillaGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const currentItem = selectedIdx !== null ? filteredItems[selectedIdx] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === 0 ? filteredItems.length - 1 : selectedIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === filteredItems.length - 1 ? 0 : selectedIdx + 1);
    }
  };

  return (
    <section id="gallery" className="bg-linen relative py-24 md:py-32 2xl:py-40">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-12 2xl:gap-16">
            <div>
              <h2 className="font-display text-ink text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.2rem] 2xl:text-[5rem] 3xl:text-[5.6rem] font-normal leading-[1.04] tracking-tight">
                Every corner, exclusively yours
              </h2>
            </div>
            <p className="font-sans text-ink-light text-[1.02rem] lg:text-[1.08rem] 2xl:text-[1.22rem] max-w-md lg:max-w-lg 2xl:max-w-xl leading-relaxed font-normal">
              From the private hot-spring pool to the panoramic sundecks and midnight lounge,
              tap any space to explore.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs (Clean editorial tab style, no pill badges) */}
        <div className="mt-10 2xl:mt-14 flex items-center gap-6 sm:gap-8 lg:gap-10 2xl:gap-14 overflow-x-auto pb-2 2xl:pb-3.5 scrollbar-none no-scrollbar border-b border-rule/40 text-[0.92rem] lg:text-[0.98rem] 2xl:text-[1.12rem]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedIdx(null);
              }}
              className={`whitespace-nowrap pb-3.5 2xl:pb-4 transition-all shrink-0 font-sans ${
                activeCategory === cat.id
                  ? "text-ink font-semibold border-b-2 border-clay -mb-[1px]"
                  : "text-clay hover:text-ink font-normal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid - Evenly Distributed */}
        <div className="mt-8 lg:mt-10 2xl:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 2xl:gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedIdx(index)}
                className="w-full group relative cursor-pointer overflow-hidden rounded-2xl border border-rule/30 shadow-md"
              >
                <div className={`relative w-full ${item.aspect} photo-grade`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1920px) 520px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {/* Gradient to ensure overlay caption is always crisp and legible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-char/90 via-char/30 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                  {/* Card Overlay info directly inside the photo container */}
                  <div className="absolute inset-x-0 bottom-0 p-5 2xl:p-7 text-linen transition-transform duration-300 pointer-events-none">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <span className="text-[0.72rem] 2xl:text-[0.82rem] tracking-wider uppercase font-sans text-stone/90 block mb-1">
                          {item.categoryLabel}
                        </span>
                        <h3 className="font-display text-[1.18rem] 2xl:text-[1.4rem] leading-tight text-linen font-normal">
                          {item.title}
                        </h3>
                      </div>
                      <div className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-linen/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                        <Maximize2 size={14} className="text-linen 2xl:w-4 2xl:h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 bg-char/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 2xl:p-12"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="text-linen">
                <span className="text-[0.75rem] 2xl:text-[0.88rem] uppercase tracking-widest2 font-sans text-stone">
                  {currentItem.categoryLabel}
                </span>
                <h4 className="font-display text-[1.4rem] sm:text-[1.8rem] 2xl:text-[2.2rem]">
                  {currentItem.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedIdx(null)}
                aria-label="Close image preview"
                className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-linen/10 hover:bg-linen/20 text-linen flex items-center justify-center transition-colors"
              >
                <X size={20} className="2xl:w-6 2xl:h-6" />
              </button>
            </div>

            {/* Central Media Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl 2xl:max-w-7xl mx-auto h-[60vh] sm:h-[70vh] 2xl:h-[78vh] flex items-center justify-center my-auto"
            >
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1920px) 1800px, (max-width: 1200px) 100vw, 1200px"
              />

              {/* Prev / Next Nav Buttons */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    className="absolute left-2 sm:-left-6 2xl:-left-10 top-1/2 -translate-y-1/2 w-11 h-11 2xl:w-14 2xl:h-14 rounded-full bg-linen/20 hover:bg-linen/40 text-linen flex items-center justify-center backdrop-blur-md transition-colors"
                  >
                    <ChevronLeft size={22} className="2xl:w-7 2xl:h-7" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next photo"
                    className="absolute right-2 sm:-right-6 2xl:-right-10 top-1/2 -translate-y-1/2 w-11 h-11 2xl:w-14 2xl:h-14 rounded-full bg-linen/20 hover:bg-linen/40 text-linen flex items-center justify-center backdrop-blur-md transition-colors"
                  >
                    <ChevronRight size={22} className="2xl:w-7 2xl:h-7" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption */}
            <div className="max-w-2xl 2xl:max-w-3xl mx-auto text-center z-10">
              <p className="font-sans text-linen/80 text-[0.92rem] sm:text-[1.02rem] 2xl:text-[1.18rem] leading-relaxed">
                {currentItem.caption}
              </p>
              <span className="font-sans text-linen/40 text-[0.78rem] 2xl:text-[0.9rem] mt-2 block">
                {selectedIdx !== null ? selectedIdx + 1 : 1} of {filteredItems.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
