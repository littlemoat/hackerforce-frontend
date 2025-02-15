import Icon from "@/components/Icon";
import RotatingMap from "@/components/RotatingMap";

export default function HeroSection() {
  return (
    <section className="relative max-w-[1440px] 3xl:max-w-[2000px]">
      <div className="flex flex-col items-center justify-center gap-5 min-h-screen relative overflow-hidden md:px-5">
        {/* Background Image */}
        <BackgroundImage />

        {/* Rotating Map */}
        <RotatingMap />

        {/* Hero Content */}
        <HeroHeader />
        <HeroText />

        {/* Footer Section */}
        <HeroFooter />
      </div>
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */
// 🔹 Background Image
const BackgroundImage = () => (
  <div className="absolute top-0 left-0 w-full h-full -z-50">
    <div className="lines">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </div>
);

// 🔹 Hero Header (Title & Subtitle)
const HeroHeader = () => (
  <>
    <div className="h-7 px-2 bg-[#972123] flex justify-center items-center md:mt-[170px] mt-[100px]">
      <p className="text-white text-xl font-inconsolata">
        Welcome to HackerForce
      </p>
    </div>

    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-darker 2xl:text-[78px] 3xl:text-[88px] 4xl:text-[100px] md:text-[60px] text-3xl font-bold font-orbitron uppercase xl:leading-[106px] sm:text-[40px] leading-10 md:leading-[70px] text-center">
      Digital pursuit & harness the power of hacking.
    </h1>
  </>
);

// 🔹 Hero Description
const HeroText = () => (
  <p className="lg:w-[856px] text-center text-white xl:text-xl text-base md:text-lg font-inconsolata leading-[30px] p-5">
    Step into the realm of relentless digital pursuit and harness the power of
    hacking. Our content will immerse you in the art of ethical hacking,
    offensively and defensively, while learning the latest and most powerful
    techniques.
  </p>
);

// 🔹 Hero Footer (Icon & Cookie Modal)
const HeroFooter = () => (
  <div className="flex flex-col gap-4 items-center w-full px-7 md:p-7">
    <a href="#about" aria-label="Go to About Section">
      <Icon name="ScrollDownIcon" size={95} />
    </a>
  </div>
);
