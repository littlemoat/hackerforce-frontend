"use client";

import Icon from "@/components/Icon";
import { ModalContext } from "@/contexts/ModalContext";
import { AboutStatsData } from "@/data/data";
import Image from "next/image";
import { useContext } from "react";

export default function About() {
  return (
    <section
      className="relative max-w-[1440px] xl:p-[100px] md:p-10 lg:p-12 p-5 md:mt-10 min-h-screen flex flex-col items-start justify-center"
      id="about"
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-start items-center xl:gap-[100px] gap-10">
        {/* Left Column (Icon & Image) */}
        <div className="flex flex-col gap-6 xl:w-[358px] pt-20">
          <AboutHeader />
          <Image
            src="/imgs/about/about1.png"
            alt="About Image"
            width={350}
            height={343}
            className="rounded-2xl"
            priority
          />
        </div>

        {/* Right Column (Text & Stats) */}
        <div className="flex-1 flex flex-col justify-between gap-10">
          {/* Description */}
          <div className="flex flex-col gap-5">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-darker xl:text-[55px] text-[32px] font-bold font-orbitron uppercase">
              The art of ethical hacking offensively, defensively.
            </h2>
            <p className="text-[#a0a0a0] text-lg font-inconsolata leading-relaxed">
              We take great pride in ensuring the satisfaction of our customers,
              which is why we guarantee that the products we sell will bring
              happiness to each and every customer. Our genuine care for
              customer satisfaction is what sets us apart.
            </p>
          </div>

          {/* Stats Section */}
          <AboutStats />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-start items-center gap-[100px] mt-12">
        {/* Left Column (Description & Actions) */}
        <div className="flex flex-col gap-8 md:w-[345px]">
          <p className="text-[#a0a0a0] text-lg font-inconsolata leading-relaxed">
            We take great pride in ensuring the satisfaction of our customers.
            <br />
            <br />
            That's why we proudly guarantee the quality and reliability of our
            products.
          </p>
          <AboutActions />
        </div>
      </div>
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */

// 🔹 About Header (Icon & Title)
const AboutHeader = () => (
  <div className="flex items-center gap-6">
    <Icon name="SubscriptionIcon" size={80} />
    <h2 className="text-white text-[40px] font-orbitron font-medium">
      About Us
    </h2>
  </div>
);

// 🔹 About Statistics
const AboutStats = () => (
  <div className="flex xl:gap-20 gap-4">
    {AboutStatsData.map((stat, index) => (
      <div key={index} className="flex flex-col xl:items-start gap-1">
        <div className="text-white xl:text-[62px] text-2xl font-orbitron text-center">
          {stat.value} <span className="text-[#e09b6b]">+</span>
        </div>
        <p className="text-[#a0a0a0] text-xl font-inconsolata text-center">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
);
// 🔹 About Actions (Buttons)
const AboutActions = () => {
  const { openLoginModal, openSignupModal } = useContext(ModalContext);
  return (
    <div className="flex gap-4 items-center justify-between md:justify-start">
      <button
        className="px-6 py-3 bg-[#2f3132] duration-200 hover:bg-[#242627] rounded-lg text-white text-base font-orbitron font-medium w-full md:w-auto"
        onClick={openSignupModal}
      >
        Register
      </button>
      <button
        className="px-6 py-3 bg-[#972123] duration-200 hover:bg-[#7a1b1f] rounded-lg text-white text-base font-orbitron font-medium w-full md:w-auto"
        onClick={openLoginModal}
      >
        Login
      </button>
    </div>
  );
};
