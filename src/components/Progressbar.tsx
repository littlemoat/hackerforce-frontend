"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Progressbar() {
  return (
    <div className="z-[99999]">
      <ProgressBar
        height="3px"
        color="#972123"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </div>
  );
}
