/* eslint-disable @next/next/no-img-element */

import { SectionCardProps } from "@/types/type";
import Link from "next/link";

const SectionCard = ({
  title,
  description,
  coursesCompleted,
  totalCourses,
  bgImage,
  blur,
}: SectionCardProps) => (
  <Link href={!blur ? "/course" : ""} className="w-full">
    <div
      className={`w-full xl:p-[100px] p-5 bg-cover group relative bg-center overflow-hidden bg-no-repeat flex justify-between items-center lg:gap-[100px] gap-3 ${
        blur && "blur-md cursor-not-allowed select-none"
      }`}
    >
      <img
        src={bgImage}
        alt="SectionBg"
        className={`w-full h-full absolute bottom-0 top-0 right-0 left-0 -z-10 duration-200 ${
          !blur && "group-hover:scale-105"
        } object-cover pointer-events-none`}
      />
      <div className="flex flex-col gap-4">
        <div className="text-white md:text-[60px] text-[40px] font-medium font-['Orbitron'] uppercase">
          {title}
        </div>
        <p className="text-[#a0a0a0] lg:text-xl xl:text-2xl text-sm font-['Inconsolata'] leading-loose sm:w-[400px] md:w-full">
          {description}
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex items-center gap-2">
            <span className="text-white text-lg font-['Inconsolata']">
              Courses:
            </span>
            <div className="relative w-[150px] h-2">
              <div className="absolute w-full h-2.5 bg-white/20 rounded-full"></div>
              <div
                className="absolute w-[58.59px] h-2.5 bg-[#d44245] rounded-full"
                style={{ width: `${(coursesCompleted / totalCourses) * 100}%` }}
              ></div>
            </div>
            <span className="text-[#d44245] text-lg font-['Inconsolata']">
              {coursesCompleted}/{totalCourses}
            </span>
          </div>
          <span className="text-white text-lg font-['Inconsolata']">
            One new course since April 23
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default SectionCard;
