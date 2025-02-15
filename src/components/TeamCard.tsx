/* eslint-disable @next/next/no-img-element */

import { TeamMember } from "@/types/type";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="flex flex-col items-center gap-6">
    <div className="overflow-hidden rounded-2xl">
      <img
        className="w-full h-[342.95px] rounded-2xl object-cover hover:scale-105 duration-300"
        src={member.image}
        alt={member.name}
      />
    </div>
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-white text-2xl font-semibold font-['Orbitron'] leading-loose">
        {member.name}
      </h3>
      <p className="text-[#972123] text-lg font-normal font-['Orbitron'] leading-relaxed">
        {member.role}
      </p>
      <p className="text-[#a0a0a0] text-lg font-normal font-['Inconsolata'] leading-relaxed text-center">
        {member.description}
      </p>
      <SocialIcons />
    </div>
  </div>
);

const SocialIcons = () => (
  <div className="flex gap-4">
    {[FaXTwitter, FaTelegramPlane, FaLinkedinIn].map((Icon, index) => (
      <div
        key={index}
        className="p-2 bg-[#2f3132] hover:bg-[#232525] duration-200 rounded-lg flex items-center justify-center cursor-pointer"
      >
        <Icon color="white" size={20} />
      </div>
    ))}
  </div>
);

export default TeamCard;
