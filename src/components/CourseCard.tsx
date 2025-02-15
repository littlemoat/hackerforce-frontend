/* eslint-disable @next/next/no-img-element */

import { CourseCardProps } from "@/types/type";
import Link from "next/link";

const CourseCard = ({
  title,
  xp,
  difficulty,
  reward,
  progress,
  image,
  content,
}: CourseCardProps) => (
  <div className="lg:w-[392px] w-full flex flex-col gap-4">
    <div className="w-full h-[286px] relative overflow-hidden rounded-3xl">
      <img
        className="w-full h-full rounded-3xl object-cover hover:scale-105 duration-200"
        src={image}
        alt={title}
      />
      <div className="w-full px-4 py-2 absolute bottom-0 bg-[#2f3132] rounded-bl-2xl rounded-br-2xl flex justify-between items-center gap-3">
        <div className="h-[8.88px] w-full relative">
          <div className="w-full h-full bg-[#181a1b] rounded-full"></div>
          <div
            className="absolute top-0 left-0 h-full bg-[#d44244] rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-white text-sm font-bold">{progress}%</span>
      </div>
      {/* <div className="px-2 py-1 left-[8px] top-[8px] absolute bg-[#2f3132] rounded-[100px] justify-start items-center gap-1 inline-flex">
        <Icon name="StarIcon" className="w-4 h-4 text-white" />
        <div className="text-center text-white text-sm font-bold font-['Inconsolata'] leading-tight">
          {rating}
        </div>
        <div className="text-center text-[#a0a0a0] text-sm font-normal font-['Inconsolata'] leading-tight">
          ({reviews} Reviews)
        </div>
      </div> */}
    </div>
    <h2 className="text-white text-2xl font-['Orbitron']">{title}</h2>
    <div className="flex gap-2 font-inconsolata w-full items-center justify-start">
      <span className="text-[#a0a0a0] text-sm font-bold rounded-md bg-[#25252586] p-1">
        Aquirable XP: {xp}
      </span>
      <span className="text-[#a0a0a0] text-sm font-bold rounded-md bg-[#25252586] p-1">
        Difficulty: {difficulty}
      </span>
      <span className="text-[#d44244] text-sm font-bold rounded-md bg-[#25252586] p-1">
        {reward}
      </span>
    </div>
    <Link
      href={`/course/${content}`}
      className="flex items-center justify-center font-orbitron w-full h-10 bg-[#972123] hover:bg-[#7a1b1f] duration-200 rounded-lg text-white text-base font-medium"
    >
      Begin
    </Link>
  </div>
);

export default CourseCard;
