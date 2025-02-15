"use client";

import { useAuth } from "@/contexts/AuthContext";

export default function CookieModal() {
  const auth = useAuth();

  if (auth.isAcceptedCookies) return null; // Hide modal if dismissed

  return (
    <div className="lg:w-[700px] w-full px-5 py-4 bg-[#1d1f20] lg:rounded-2xl rounded-none border border-[#2f3132] fixed md:flex-row flex-col gap-2 justify-between items-center lg:bottom-2 bottom-0 z-40 flex">
      {/* Left: Cookie Info */}
      <div className="flex flex-col gap-1">
        <h2 className="text-white text-sm font-orbitron font-medium">
          We use cookies!
        </h2>
        <p className="text-[#a0a0a0] text-sm font-inconsolata">
          By using hackerforce.com, you agree to our{" "}
          <button className="text-white underline cursor-pointer hover:text-gray-300">
            Cookie Policy.
          </button>
        </p>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex gap-4">
        <button
          className="px-6 py-2 bg-red hover:bg-[#7a1b1f] duration-200 rounded-lg text-white text-sm font-orbitron font-medium"
          onClick={() => auth.acceptCookie()}
        >
          Accept
        </button>
        <button className="px-6 py-2 bg-[#2f3132] hover:bg-[#212424] duration-200 rounded-lg text-white text-sm font-orbitron font-medium">
          Decline
        </button>
      </div>
    </div>
  );
}
