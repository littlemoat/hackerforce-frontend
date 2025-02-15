import BackgroundImage from "@/components/BackgroundImage";
import { TermsData } from "@/data/data";

export default function Term() {
  return (
    <div className="flex flex-col items-center justify-center w-full md:mt-[100px] mt-[60px] max-w-[1440px] p-5">
      <BackgroundImage />
      <HeaderSection />
      <TermsContent />
    </div>
  );
}

const HeaderSection = () => (
  <div className="xl:px-[100px] py-[50px] flex flex-col items-center gap-5">
    <div className="px-2 bg-[#972123] flex items-center gap-2.5">
      <p className="text-white text-xl font-normal font-['Inconsolata'] leading-7">
        Learn
      </p>
    </div>
    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-grey xl:text-[88px] text-[50px] md:text-[60px] font-bold font-['Orbitron'] uppercase text-center">
      Terms & Conditions
    </h1>
    <p className="text-center text-[#a0a0a0] md:text-xl text-md font-normal font-['Inconsolata'] leading-[30px]">
      Step into the realm of relentless digital pursuit and harness the power of
      hacking. Our content will immerse you in the art of ethical hacking, both
      offensively and defensively, while learning the latest and most powerful
      techniques.
    </p>
  </div>
);

const TermsContent = () => (
  <div className="xl:px-[100px] pb-[100px] flex flex-col gap-8 w-full">
    {TermsData.map(({ title, content }, index) => (
      <TermSection key={index} title={title} content={content} />
    ))}
  </div>
);

interface TermSectionProps {
  title: string;
  content: string[];
}

const TermSection = ({ title, content }: TermSectionProps) => (
  <div className="flex flex-col gap-1">
    <h2 className="text-white text-2xl font-bold font-['Orbitron'] uppercase">
      {title}
    </h2>
    <ul className="text-white text-lg font-medium font-['Inconsolata'] leading-relaxed list-disc pl-5">
      {content.map((item, index) => (
        <li key={index} className="text-base xl:text-md">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
