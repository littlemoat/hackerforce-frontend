"use client";

import BackgroundImage from "@/components/BackgroundImage";
import Icon from "@/components/Icon";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { HiKey, HiPuzzlePiece } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

// Mock Data
const user = {
  name: "Jackthefile",
  location: "Vinius, Lithuania",
  avatar: "/imgs/about/about1.png",
  stats: [
    {
      icon: <FaStar className="mt-[3px] text-red" />,
      label: "Beginner",
      subLabel: "1+ Month",
    },
    {
      icon: <HiPuzzlePiece className="mt-[1px] text-red" size={20} />,
      label: "Skilled",
      subLabel: "3 Courses",
      blur: false,
    },
    {
      icon: <HiKey className="text-red" size={20} />,
      label: "Total Keys",
      subLabel: "647",
      blur: false,
    },
    // {
    //   icon: <FaHand className="mt-[3px] text-red" />,
    //   label: "Newbie",
    //   subLabel: "2 Cert",
    //   blur: true,
    // },
    // {
    //   icon: <GiStarsStack className="text-red" size={20} />,
    //   label: "Master",
    //   subLabel: "18 Machs",
    //   blur: true,
    // },
  ],
};

// **Profile Info Component**
const ProfileInfo = ({ name, location, avatar }: typeof user) => (
  <div className="py-[50px] xl:w-[1200px] lg:justify-start lg:items-start items-center justify-center gap-[50px] lg:flex-row flex flex-col">
    <Image
      width={150}
      height={150}
      src={avatar}
      priority
      alt="Avatar"
      className="rounded-full border-2 border-grey"
    />
    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
      <div className="lg:w-auto w-full grow shrink basis-0 flex-col lg:justify-start lg:items-start items-center justify-center gap-2 flex">
        <h1 className="self-stretch text-white text-[32px] font-bold font-['Orbitron'] uppercase text-center lg:text-left">
          {name}
        </h1>
        <div className="rounded-lg justify-start items-center gap-2 inline-flex">
          <IoLocationSharp className="text-white/50" size={22} />
          <p className="text-white text-lg font-medium font-['Inconsolata'] leading-relaxed">
            {location}
          </p>
        </div>
      </div>
      <ProfileStats stats={user.stats} />
    </div>
  </div>
);

// **Profile Stats Component**
const ProfileStats = ({ stats }: { stats: typeof user.stats }) => (
  <div className="self-stretch md:justify-between justify-center gap-4 md:items-center items-center flex flex-col md:flex-row md:w-full font-inconsolata">
    <div className="w-full justify-center items-center gap-2 grid grid-cols-3 md:grid-cols-5">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          blur={stat.blur}
          label={stat.label}
          subLabel={stat.subLabel}
        />
      ))}
    </div>
  </div>
);

// **Reusable Statistic Item**
const StatItem = ({
  icon,
  label,
  subLabel,
  blur,
}: {
  icon: any;
  label: string;
  subLabel: string;
  blur: boolean | undefined;
}) => (
  <div
    className={`justify-start items-start gap-2 flex ${
      blur ? "blur-sm select-none cursor-not-allowed" : ""
    }`}
  >
    {icon}
    <div className="flex-col justify-center items-start inline-flex">
      <p className="text-white text-base font-normal leading-normal font-inconsolata truncate">
        {label}
      </p>
      <p className="text-[#a0a0a0] text-sm font-normal font-['Inconsolata'] leading-tight">
        {subLabel}
      </p>
    </div>
  </div>
);

// **Navigation Tabs**
const NavTab = ({
  label,
  active = false,
  disabled = false,
}: {
  label: string;
  active?: boolean;
  disabled?: boolean;
}) => (
  <div
    className={`px-4 py-4 justify-center items-center gap-3 flex ${
      active
        ? "border-b border-[#d44244]"
        : disabled
        ? "cursor-not-allowed blur-sm"
        : ""
    }`}
  >
    <p
      className={`text-base font-medium font-['Orbitron'] leading-normal ${
        active ? "text-[#d44244]" : "text-white select-none"
      }`}
    >
      {label}
    </p>
  </div>
);

// **Mock Data**
const modules = [
  {
    id: 1,
    title: "Start Trek",
    type: "Module",
    description: "Asrep-Roasting",
    stats: "4/10",
  },
  {
    id: 2,
    title: "Kerberos",
    type: "Module",
    description: "Asrep-Roasting",
    hours: 2,
    stats: "4/10",
  },
  {
    id: 3,
    title: "Demon Hack",
    type: "Colosseum",
    description: "Asrep-Roasting",
    stats: "4/10",
  },
  {
    id: 4,
    title: "Rat X",
    type: "Chambers",
    description: "Asrep-Roasting",
    stats: "4/10",
  },
];

const exams = [
  { id: 1, title: "Exam for Barbados", date: "July 23, 2024 - 08:00 AM" },
  { id: 2, title: "Exam for Barbados", date: "July 23, 2024 - 08:00 AM" },
];

// **Search Input Component**
const SearchInput = () => (
  <div className="h-9 px-4 py-1.5 bg-[#1d1f20] rounded-lg border border-[#2f3132] justify-start items-center gap-3 flex">
    <Icon name="Search" size={20} color="#a0a0a0" />
    <input
      className="text-[#a0a0a0] placeholder:text-grey text-base font-medium font-['Orbitron'] leading-normal w-[130px] outline-none bg-transparent"
      placeholder="search"
    />
  </div>
);

// **Collapsible Module Component**
const ProgressModule = ({ module }: { module: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="self-stretch px-4 py-4 bg-[#1d1f20] rounded-2xl justify-start items-start gap-4 flex flex-col cursor-pointer relative"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="w-full flex items-center justify-between">
        <div className="grow shrink basis-0 h-5 justify-start items-center flex gap-2">
          <p className="text-[#d44244] text-sm font-bold font-['Inconsolata'] leading-tight">
            {module.type}
          </p>
          <p className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
            {module.title}
          </p>
        </div>
        <IoIosArrowDown
          className={`text-white/50 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && module.description && (
        <div className="bg-[#1d1f20] rounded-lg w-full font-inconsolata relative">
          <div className="flex items-start justify-start flex-col md:flex-row gap-2 relative">
            <Image
              src={"/imgs/about/about1.png"}
              alt=""
              width={100}
              height={100}
            />
            <div className="flex md:flex-row flex-col md:items-end justify-between w-full md:gap-3 gap-5">
              <div>
                <p className="text-[#a0a0a0] text-sm">
                  Current Unit:{" "}
                  <span className="text-white font-bold truncate">
                    {module.description}
                  </span>
                </p>
                <p className="text-[#a0a0a0] text-sm">
                  You’ve spent {module.hours} hours on this course
                </p>

                <div className="relative xl:w-[300px] mt-5">
                  <div className="w-full flex items-center justify-between">
                    <p className="text-[#a0a0a0] text-sm">Unit Statistics: </p>
                    <p className="text-[#a0a0a0] text-sm">{module.stats}</p>
                  </div>
                  <div className=" w-full h-2.5 bg-white/20 rounded-full">
                    <div
                      className="absolute w-[58.59px] h-2.5 bg-[#d44245] rounded-full"
                      style={{ width: `${(5 / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="px-3 py-2 bg-red hover:bg-[#b22222cb] duration-200 rounded-lg text-white font-orbitron text-center">
                Continue
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// **Exam Card Component**
const ExamCard = ({ title, date }: { title: string; date: string }) => (
  <div className="self-stretch px-3 py-2 bg-[#1d1f20] rounded-2xl justify-start items-center gap-3 inline-flex">
    <div className="p-2 bg-[#181a1b] rounded-full border border-[#2f3132]"></div>
    <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
      <p className="self-stretch text-white text-sm font-bold font-['Inconsolata'] leading-tight">
        {title}
      </p>
      <p className="self-stretch text-[#a0a0a0] text-xs font-bold font-['Inconsolata'] leading-[18px]">
        {date}
      </p>
    </div>
    <div className="w-4 h-4 relative overflow-hidden"></div>
  </div>
);

// **Main Progress Section Component**
const ProgressSection = () => (
  <div className="w-full flex items-start justify-center gap-10 mt-5 flex-col md:flex-row">
    <div className="flex-col justify-start items-start gap-6 inline-flex w-full">
      {/* Header */}
      <div className="self-stretch flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-between items-center inline-flex gap-3">
          <p className="grow shrink basis-0 self-stretch text-white md:text-xl text-md font-medium font-['Orbitron'] leading-loose">
            In-Progress
          </p>
          <SearchInput />
        </div>

        {/* Modules */}
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          {modules.map((module) => (
            <ProgressModule key={module.id} module={module} />
          ))}
        </div>
      </div>

      {/* Scheduled Exams */}
      {/* <div className="self-stretch flex-col justify-start items-start gap-4 flex blur-sm cursor-not-allowed select-none">
        <p className="grow shrink basis-0 self-stretch text-white text-xl font-medium font-['Orbitron'] leading-loose">
          Scheduled Exams
        </p>
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          {exams.map((exam) => (
            <ExamCard key={exam.id} title={exam.title} date={exam.date} />
          ))}
        </div>
      </div> */}
    </div>
  </div>
);

// **Mock Data**
const statistics = [
  { label: "Chamber owned", value: "4" },
  { label: "Colosseum owned", value: "1" },
  { label: "Hour Studied", value: "71" },
  { label: "Course Completed", value: "5" },
  { label: "Total XP Acquired", value: "4500" },
];

// **Statistic Card Component**
const StatisticCard = ({
  title,
  stats,
}: {
  title: string;
  stats: { label: string; value: string }[];
}) => (
  <div className="flex-col justify-center items-start gap-6 inline-flex w-full blur-sm cursor-not-allowed mt-5 select-none">
    <div className="self-stretch justify-start items-center gap-6 inline-flex">
      <div className="grow shrink basis-0 p-4 bg-[#1d1f20] rounded-2xl border border-[#2f3132] flex-col justify-center items-center gap-3 inline-flex">
        <div className="self-stretch justify-start items-center gap-3 inline-flex">
          <p className="grow shrink basis-0 text-white text-base font-medium font-['Orbitron'] leading-tight">
            {title}
          </p>
        </div>

        {/* Dynamically Render Stats */}
        <div className="self-stretch flex flex-col gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="self-stretch justify-between items-center inline-flex"
            >
              <p className="text-[#6c7174] text-xs font-medium font-['Orbitron'] leading-[18px]">
                {stat.label}
              </p>
              <p className="text-[#eeeeee] text-sm font-medium font-['Orbitron'] leading-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// **Main Dashboard Component**
export default function Dashboard() {
  return (
    <div className="relative max-w-[1440px] xl:p-5 md:p-10 lg:p-12 p-5 md:mt-12 mt-[100px] min-h-screen">
      <BackgroundImage />
      <ProfileInfo
        name={user.name}
        location={user.location}
        avatar={user.avatar}
        stats={[]}
      />

      {/* Navigation Tabs */}
      <div className="h-14 w-full border-b border-[#2f3132] justify-start items-center gap-2 inline-flex">
        <div className="justify-start items-center flex">
          <NavTab label="Dashboard" active />
          {/* <NavTab label="Achieve" disabled />
          <NavTab label="Friends" disabled /> */}
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 items-start gap-5">
        <ProgressSection />
        {/* <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-1 md:gap-3">
            <StatisticCard title="Monthly Statistic" stats={statistics} />
            <div className="relative flex items-start justify-start mt-4 blur-sm select-none cursor-not-allowed">
              <Image
                src={"/imgs/dashboard/Info.png"}
                alt="Info"
                fill
                priority
                className="select-none pointer-events-none"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full flex items-start justify-start md:h-[300px] h-[250px] mt-4 blur-sm select-none cursor-not-allowed">
              <Image
                src={"/imgs/dashboard/title.png"}
                alt="Info"
                fill
                priority
                className="select-none pointer-events-none"
              />
            </div>{" "}
            <div className="relative w-full flex items-start justify-start md:h-[300px] h-[250px] mt-4 blur-sm select-none cursor-not-allowed">
              <Image
                src={"/imgs/dashboard/spider.png"}
                alt="Info"
                fill
                priority
                className="select-none pointer-events-none"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
