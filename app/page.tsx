import HeroCarousel from "./components/HeroCarousel";
import VideoSection from "./components/VideoSection";
import VehicleSection from "./components/VehicleSection";
import SpecialOffers from "./components/SpecialOffers";
import SpecialFeatures from "./components/SpecialFeatures";
import FinanceOffers from "./components/FinanceOffers";
import Testimonials from "./components/Testimonials";
import TestRideForm from "./components/TestRideForm";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhyAswatha from "./components/WhyAswatha";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <VehicleSection />
      <SpecialOffers />
      <WhyAswatha />
      <VideoSection src="/video/HOME/TVS-Apache.mp4" />
      <SpecialFeatures />
      <FinanceOffers />
      <TestRideForm />
      <Testimonials />
      <Location />
      <Footer />
    </>
  );
}
