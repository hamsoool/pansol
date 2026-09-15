import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import RelaxUnwind from "@/components/RelaxUnwind";
import VillaGallery from "@/components/VillaGallery";
import EntertainConnect from "@/components/EntertainConnect";
import ComfortDine from "@/components/ComfortDine";
import StayEstimator from "@/components/StayEstimator";
import FaqSection from "@/components/FaqSection";
import Location from "@/components/Location";
import Inquire from "@/components/Inquire";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { ScrollProgressBar } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen relative pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <Intro />
      <RelaxUnwind />
      <VillaGallery />
      <EntertainConnect />
      <ComfortDine />
      <StayEstimator />
      <FaqSection />
      <Location />
      <Inquire />
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
