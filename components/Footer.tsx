import { Facebook, Instagram } from "lucide-react";
import { BrandMark } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-char">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 3xl:px-24 py-14 2xl:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 2xl:gap-12">
          <div className="flex items-center gap-3.5">
            <BrandMark className="w-8 2xl:w-10 h-auto text-linen/80" />
            <div className="flex flex-col items-start leading-none">
              <span className="font-display uppercase tracking-[0.24em] text-linen/90 text-[0.98rem] 2xl:text-[1.18rem] font-medium">
                GLASSHILL
              </span>
              <span className="font-display uppercase tracking-[0.32em] text-stone/70 text-[0.52rem] 2xl:text-[0.62rem] mt-1 font-light">
                — PANSOL —
              </span>
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-8 2xl:gap-x-12 gap-y-3 font-sans text-linen/60 text-[0.88rem] 2xl:text-[1.02rem]">
            <li><a href="#villa" className="hover:text-linen transition-colors">The Villa</a></li>
            <li><a href="#unwind" className="hover:text-linen transition-colors">Hot Springs</a></li>
            <li><a href="#stay" className="hover:text-linen transition-colors">Rooms</a></li>
            <li><a href="#location" className="hover:text-linen transition-colors">Location</a></li>
            <li><a href="#inquire" className="hover:text-linen transition-colors">Inquire</a></li>
          </ul>

          <div className="flex items-center gap-5 2xl:gap-7">
            <a href="https://facebook.com/glasshillpansol" target="_blank" rel="noopener noreferrer" className="text-linen/60 hover:text-linen transition-colors">
              <Facebook size={19} className="2xl:w-6 2xl:h-6" strokeWidth={1.5} />
            </a>
            <a href="https://instagram.com/glasshillpansol" target="_blank" rel="noopener noreferrer" className="text-linen/60 hover:text-linen transition-colors">
              <Instagram size={19} className="2xl:w-6 2xl:h-6" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-10 2xl:mt-14 pt-6 2xl:pt-8 border-t border-linen/10 flex flex-col sm:flex-row justify-between gap-3 text-[0.78rem] 2xl:text-[0.92rem]">
          <p className="font-sans text-linen/40">
            © {new Date().getFullYear()} Glasshill Pansol. All rights reserved.
          </p>
          <p className="font-sans text-linen/40">
            Lot 39 Block 2 Laguna Hills Subdivision, Brgy. Pansol, Calamba, Laguna 4027, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
