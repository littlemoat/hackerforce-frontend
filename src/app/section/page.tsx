import BackgroundImage from "@/components/BackgroundImage";
import Icon from "@/components/Icon";
import SectionCard from "@/components/SectionCard";
import { SectionCardData } from "@/data/data";

export default function Section() {
  return (
    <div className="w-full md:mt-12 mt-[70px] relative flex flex-col items-center justify-center pb-20">
      <div className="w-full max-w-[1440px] xl:p-[100px]  min-h-screen md:p-10 lg:p-12 p-5 flex flex-col items-center justify-center relative">
        <BackgroundImage />
        <HeaderSection />
        <ContentSection />
        {/* <a href="#sectioncards" className="mt-10 animate-bounce cursor-pointer">
          <TbArrowBigDownLinesFilled size={85} color="white" />
        </a> */}
      </div>
      <div id="sectioncards" className="pt-20 w-full">
        {SectionCardData.map((section, index) => (
          <SectionCard key={index} {...section} />
        ))}
      </div>
    </div>
  );
}

const HeaderSection = () => (
  <div className="py-[50px] flex flex-col items-center gap-5">
    <div className="px-2 bg-[#972123] flex items-center gap-2.5">
      <span className="text-white text-xl font-['Inconsolata']">Learn</span>
    </div>
    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-grey md:text-[88px] text-[40px] font-bold font-['Orbitron'] uppercase">
      Sections
    </h1>
    <p className="text-[#a0a0a0] md:text-xl text-base font-['Inconsolata'] text-center">
      Step into the realm of relentless digital pursuit and harness the power of
      hacking.
    </p>
  </div>
);

const ContentSection = () => (
  <div className="flex flex-col md:flex-row justify-center items-center gap-[60px] mt-5">
    {["Study", "Practice", "Rewards"].map((title, index) => (
      <div key={index} className="flex flex-col items-center gap-4">
        <Icon name={"UpIcon"} className="w-10 h-10 text-white" size={30} />
        <h2 className="text-white text-2xl font-semibold font-['Orbitron']">
          {title}
        </h2>
        <p className="text-[#a0a0a0] text-lg font-['Inconsolata'] text-center">
          Our genuine care for customer satisfaction is what sets us apart.
        </p>
      </div>
    ))}
  </div>
);
