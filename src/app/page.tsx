import RotatingMap from "@/components/RotatingMap";
import About from "@/landing/About";
import FindPath from "@/landing/FindPath";
import HeroSection from "@/landing/Hero";
import Question from "@/landing/Question";
import Security from "@/landing/Security";
import Subscription from "@/landing/Subscription";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
        <HeroSection />
        <RotatingMap />
      </div>
      <About />
      <Subscription />
      <FindPath />
      <Security />
      <Question />
    </>
  );
}
