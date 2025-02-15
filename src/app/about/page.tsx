/* eslint-disable @next/next/no-img-element */

import BackgroundImage from "@/components/BackgroundImage";
import TeamCard from "@/components/TeamCard";
import { TeamMembersData } from "@/data/data";

export default function About() {
  return (
    <div className="relative max-w-[1440px] xl:p-[100px] md:p-10 lg:p-12 p-5 md:mt-12 mt-[100px] min-h-screen flex items-center justify-center flex-col">
      <BackgroundImage />
      <div className="flex flex-col md:flex-row gap-[20px] lg:gap-[100px] w-full relative">
        <div className="flex flex-col gap-5 md:gap-[30px] w-full">
          <SectionTitle title="About Us" />
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-darker text-[32px] md:text-[30px] lg:text-[52px] font-bold font-['Orbitron'] uppercase">
            The Art of Ethical Hacking Offensively, Defensively.
          </h2>
          <p className="text-[#a0a0a0] text-base md:text-xl font-normal font-['Inconsolata'] leading-[30px]">
            We take great pride in ensuring the satisfaction of our customers,
            which is why we guarantee that the products we sell will bring
            happiness to each and every customer. Our genuine care for customer
            satisfaction is what sets us apart.
          </p>
          <Stats />
        </div>
        <img
          className="xl:w-[394px] w-full md:w-[300px] md:h-[500px] lg:w-[350px] lg:h-[500px] rounded-xl object-cover"
          src="/imgs/about/main.png"
          alt="About Us"
        />
      </div>
      <MeetTheTeam />
    </div>
  );
}

const SectionTitle = ({ title }: { title: string }) => (
  <div className="px-2 bg-[#972123] inline-flex items-center justify-center w-[100px]">
    <span className="text-white text-xl font-normal font-['Inconsolata'] leading-7">
      {title}
    </span>
  </div>
);

const Stats = () => {
  const stats = [
    { value: "350+", label: "Tools Made" },
    { value: "5+", label: "Years of Experience" },
    { value: "100+", label: "Subs Members" },
  ];

  return (
    <div className="flex md:justify-start justify-center gap-2 md:gap-8 xl:gap-20">
      {stats.map(({ value, label }, index) => (
        <div
          key={index}
          className="flex flex-col items-center md:items-start gap-3"
        >
          <span className="text-white text-2xl md:text-[32px] lg:text-[52px] font-['Orbitron']">
            {value}
          </span>
          <p className="text-[#a0a0a0] text-xl font-medium font-['Inconsolata'] text-center md:text-left">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

const MeetTheTeam = () => (
  <div className="mt-[100px] flex flex-col items-center gap-[50px] w-full">
    <h2 className="text-white text-[40px] font-medium font-['Orbitron'] leading-[48px] text-center">
      Meet The Team
    </h2>
    <div className="max-w-[1440px] grid xl:grid-cols-3 md:grid-cols-2 gap-[50px]">
      {TeamMembersData.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </div>
  </div>
);
