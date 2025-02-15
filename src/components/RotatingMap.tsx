/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

const RotatingMap = () => (
  <div className="-z-[40] absolute w-[983px] lg:w-[1200px] lg:h-[1200px] 3xl:w-[1700px] h-[985px] 3xl:h-[1700px] top-[47%] 3xl:top-[45%] !bg-dark  rounded-full overflow-hidden shadow-[inset_0px_0px_112px_20px_#434343,0px_0px_114px_#434343cc,0px_0px_20px_5px_#434343] [background:radial-gradient(50%_50%_at_50%_50%,rgba(24,26,27,0.6)_0%,rgba(24,26,27,0)_100%)]">
    <motion.div
      className="flex w-[14860px] h-full"
      animate={{ x: ["0%", "-50%"] }} // Moves left continuously
      transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
    >
      <img
        width={14860}
        height={1000}
        style={{ objectFit: "cover" }}
        src="/WorldMap.png"
        alt="Map"
      />
    </motion.div>
  </div>
);

export default RotatingMap;
