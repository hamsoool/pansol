"use client";

import { MapPin, Clock, Car } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const NOTES = [
  { icon: Clock, text: "Check-in 2:00 PM · Check-out 12:00 NN: early arrivals seated by the pool while we prep your rooms" },
  { icon: Car, text: "Gated entry within Laguna Hills Subdivision; paved private roads all the way to our gate, no 4x4 required" },
  { icon: MapPin, text: "Exact gate directions and Waze pin sent directly once your reservation dates are locked in" },
];

export default function Location() {
  return (
    <section id="location" className="bg-char overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24 py-24 md:py-32 2xl:py-40">
        <div className="grid lg:grid-cols-12 gap-x-12 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24 gap-y-14 items-center">
          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-5">
            <h2 className="font-display text-linen text-[2.1rem] sm:text-[2.7rem] lg:text-[3.2rem] xl:text-[3.8rem] 2xl:text-[4.6rem] 3xl:text-[5.2rem] leading-[1.08]">
              Find your way up
            </h2>
            <p className="mt-5 2xl:mt-7 font-sans text-linen/70 text-[1.02rem] lg:text-[1.08rem] 2xl:text-[1.22rem] leading-[1.75] max-w-sm lg:max-w-md 2xl:max-w-xl">
              Glasshill is perched within Laguna Hills Subdivision in Brgy. Pansol, Calamba, Laguna, under two hours south of Manila via SLEX.
            </p>

            {/* Verified Address Card */}
            <div className="mt-6 2xl:mt-8 p-4 2xl:p-6 rounded-2xl bg-linen/5 border border-linen/15 max-w-md 2xl:max-w-xl">
              <span className="text-[0.72rem] 2xl:text-[0.82rem] tracking-widest uppercase text-stone font-sans block mb-1">
                Official Property Address
              </span>
              <p className="font-sans text-linen text-[0.88rem] 2xl:text-[1.02rem] leading-relaxed">
                Lot 39 Block 2 Laguna Hills Subdivision, Brgy. Pansol, Calamba, Laguna, Philippines, 4027
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Laguna+Hills+Subdivision%2C+Pansol%2C+Calamba%2C+Laguna"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 2xl:mt-8 inline-flex items-center rounded-full bg-linen text-ink px-6 py-3 2xl:px-8 2xl:py-4 font-sans text-[0.88rem] 2xl:text-[1rem] tracking-wide hover:bg-linen/90 transition-colors"
            >
              Get Directions
            </a>

            <ul className="mt-10 2xl:mt-12 flex flex-col gap-5 2xl:gap-6 max-w-sm lg:max-w-md 2xl:max-w-xl">
              {NOTES.map((n) => (
                <li key={n.text} className="flex items-start gap-4 2xl:gap-5">
                  <n.icon className="text-stone shrink-0 mt-0.5 2xl:w-6 2xl:h-6" size={22} strokeWidth={1.4} />
                  <p className="font-sans text-linen/75 text-[0.92rem] 2xl:text-[1.05rem] leading-relaxed">{n.text}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25} className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] 2xl:h-[580px] rounded-2xl overflow-hidden border border-linen/10 shadow-lg">
              <iframe
                title="Map showing Laguna Hills Subdivision, Pansol, Calamba, Laguna"
                src="https://maps.google.com/maps?q=Laguna%20Hills%20Subdivision%2C%20Pansol%2C%20Calamba%2C%20Laguna&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 h-full w-full grayscale-[15%] contrast-[1.05] opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
