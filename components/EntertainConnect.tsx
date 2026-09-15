"use client";

import Image from "next/image";
import { Mic, CircleDot, Martini, UtensilsCrossed, Tv, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ENTERTAINMENT_ITEMS = [
  {
    icon: Mic,
    title: "Entertainment / Karaoke Room",
    desc: "Private indoor entertainment & karaoke room with multi-mic sound system, large screen, and comfortable seating.",
  },
  {
    icon: CircleDot,
    title: "Billiard Lounge",
    desc: "Full tournament-grade billiard table with dedicated lighting, cues, and social lounge seating.",
  },
  {
    icon: Martini,
    title: "Bar Area",
    desc: "Dedicated beverage and service counter with glassware, ice prep station, and modern hanging bar pendant lights.",
  },
  {
    icon: UtensilsCrossed,
    title: "Al Fresco Dining & Lounging Area",
    desc: "Expansive solid-slab dining tables and open-air terrace lounge seating crafted for group feasts and celebrations.",
  },
];

export default function EntertainConnect() {
  return (
    <section id="entertain" className="bg-linen py-24 md:py-32 2xl:py-40 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24">
        <ScrollReveal direction="up" delay={0.1} className="max-w-xl lg:max-w-2xl 2xl:max-w-4xl">
          <span className="text-[0.78rem] 2xl:text-[0.9rem] font-display tracking-[0.28em] uppercase text-clay font-medium block mb-3 2xl:mb-4">
            Entertain & Connect
          </span>
          <h2 className="font-display text-ink text-[2.5rem] sm:text-[3.2rem] lg:text-[3.6rem] xl:text-[4rem] 2xl:text-[5rem] 3xl:text-[5.6rem] leading-[1.04] font-normal tracking-tight">
            Karaoke, billiards &amp; al fresco dining
          </h2>
          <p className="mt-4 2xl:mt-6 font-sans text-ink-light text-[1.02rem] lg:text-[1.08rem] 2xl:text-[1.22rem] leading-relaxed font-normal">
            Whether you&apos;re singing late into the night in the karaoke lounge, challenging friends at billiards,
            or sharing sunset drinks by the bar, everyone has an inviting place to gather.
          </p>
        </ScrollReveal>

        <div className="mt-14 lg:mt-16 2xl:mt-20 grid lg:grid-cols-12 gap-x-10 lg:gap-x-14 xl:gap-x-16 2xl:gap-x-20 gap-y-12 items-center">
          {/* Photo Collage Featuring 481079700 (Billiards) & 480785567 (Dining Hall) */}
          <ScrollReveal direction="up" delay={0.2} className="lg:col-span-8 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:gap-6">
              {/* Billiards High-Res 481079700 */}
              <div className="relative aspect-[4/3] photo-grade rounded-2xl shadow-md overflow-hidden border border-rule/40 group">
                <Image
                  src="/images/481079700_610754145045928_5190545637851903415_n.jpg"
                  alt="Full-size tournament billiard table in the private game lounge"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 1920px) 600px, (min-width: 1024px) 450px, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char/80 via-transparent to-transparent flex items-end p-5 2xl:p-7 text-linen">
                  <div>
                    <span className="font-display text-[1.2rem] 2xl:text-[1.45rem] block font-normal">Billiard Lounge</span>
                    <span className="font-sans text-[0.8rem] 2xl:text-[0.92rem] text-linen/75">Full tournament table &amp; cues</span>
                  </div>
                </div>
              </div>

              {/* Dining & Bar Hall High-Res 480785567 */}
              <div className="relative aspect-[4/3] photo-grade rounded-2xl shadow-md overflow-hidden border border-rule/40 group">
                <Image
                  src="/images/480785567_610740338380642_6191362958488388344_n.jpg"
                  alt="Solid timber dining banquet tables and bar lounge"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 1920px) 600px, (min-width: 1024px) 450px, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char/80 via-transparent to-transparent flex items-end p-5 2xl:p-7 text-linen">
                  <div>
                    <span className="font-display text-[1.2rem] 2xl:text-[1.45rem] block font-normal">Grand Dining Hall</span>
                    <span className="font-sans text-[0.8rem] 2xl:text-[0.92rem] text-linen/75">Communal tables seating all 25 pax</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row: Acoustic Karaoke Spec Card & Rooftop Terrace Photo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:gap-6 mt-4 2xl:mt-6">
              {/* Acoustic Karaoke Lounge Spec Card */}
              <div className="rounded-2xl bg-char p-6 2xl:p-8 text-linen flex flex-col justify-between border border-rule/20 shadow-md">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-display text-[1.3rem] 2xl:text-[1.55rem] text-linen font-normal">
                      Acoustic Karaoke Lounge
                    </h4>
                    <div className="w-9 h-9 2xl:w-11 2xl:h-11 rounded-full bg-clay/20 flex items-center justify-center text-stone shrink-0">
                      <Mic size={18} className="2xl:w-5 2xl:h-5" />
                    </div>
                  </div>
                  <p className="font-sans text-[0.84rem] 2xl:text-[0.96rem] text-linen/75 mt-2 leading-relaxed">
                    Acoustically insulated room equipped with dual wireless microphones, smart display,
                    and comfortable seating. Sound-buffered from bedroom suites so celebrations can continue.
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-linen/10 flex items-center gap-3 text-[0.75rem] 2xl:text-[0.85rem] text-stone">
                  <span>Wireless Mics</span>
                  <span>·</span>
                  <span>Smart Screen</span>
                  <span>·</span>
                  <span>Song Library</span>
                </div>
              </div>

              {/* Rooftop Terrace Lounge High-Res 481667782 */}
              <div className="relative aspect-[4/3] sm:aspect-auto photo-grade rounded-2xl shadow-md overflow-hidden border border-rule/40 group">
                <Image
                  src="/images/481667782_615724207882255_2054461621971933467_n.jpg"
                  alt="Upper rooftop sundeck and terrace lounge with mountain greenery"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 1920px) 600px, (min-width: 1024px) 450px, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char/80 via-transparent to-transparent flex items-end p-5 2xl:p-7 text-linen">
                  <div>
                    <span className="font-display text-[1.2rem] 2xl:text-[1.45rem] block">Upper Sun Deck &amp; Terrace</span>
                    <span className="font-sans text-[0.8rem] 2xl:text-[0.92rem] text-linen/75">Woven lounge sofas with panoramic forest breeze</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature List */}
          <ScrollReveal direction="up" delay={0.35} className="lg:col-span-4 order-1 lg:order-2 flex flex-col gap-5 2xl:gap-7">
            {ENTERTAINMENT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="p-4 2xl:p-6 rounded-2xl bg-stone/50 border border-rule/50 hover:bg-stone/80 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 2xl:p-3 rounded-xl bg-clay/15 text-clay shrink-0">
                    <item.icon size={20} className="2xl:w-6 2xl:h-6" />
                  </div>
                  <h3 className="font-sans font-medium text-ink text-[1rem] 2xl:text-[1.18rem]">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-ink-light text-[0.88rem] 2xl:text-[1.02rem] mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
