/* eslint-disable @next/next/no-img-element */

import BackgroundImage from "@/components/BackgroundImage";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <BackgroundImage />
      <BackgroundImage2 />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="xl:w-[862px] text-center text-white xl:text-[140px] text-[90px] font-semibold font-['Orbitron']">
          404
        </h1>
        <p className="text-center text-[#a0a0a0] text-xl font-normal font-['Inconsolata']">
          Uh-oh you still got haven’t what your’re looking for?
        </p>
        <Link
          href={"/"}
          className="px-6 py-3 bg-[#972123] duration-200 rounded-lg text-white text-base font-orbitron font-medium hover:bg-[#7a1b1f]"
        >
          Take me back{" "}
        </Link>
      </div>
    </div>
  );
}

// 🔹 Background Image
const BackgroundImage2 = () => (
  <div className="absolute left-0 top-0 right-0 bottom-0 -z-[51] ">
    <img alt="Background" src="/Bg3.png" className="w-full" />
  </div>
);
