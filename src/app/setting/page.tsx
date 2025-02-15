"use client";

import AccountSetting from "./AccountSetting";
import AddressSetting from "./AddressSetting";
import SecuritySetting from "./SecuritySetting";
import SubscriptionSetting from "./SubscriptionSetting";
import BackgroundImage from "@/components/BackgroundImage";
import MobileSettingSidebar from "@/components/MobileSettingSidebar";
import SettingsSidebar from "@/components/SettingSidebar";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Setting() {
  return (
    <Suspense>
      <div className="flex flex-col items-center justify-start w-full md:mt-[80px] mt-[40px] max-w-[1440px] p-5 min-h-screen">
        <BackgroundImage />
        <Settings />
      </div>
    </Suspense>
  );
}

const Settings = () => {
  const tabParam = useSearchParams().get("tab");

  return (
    <div className="py-[50px] justify-start items-start gap-[50px] inline-flex w-full flex-col lg:flex-row">
      <MobileSettingSidebar tabParam={tabParam} />
      <SettingsSidebar tabParam={tabParam} />
      <AccountSetting show={tabParam === "account" || tabParam === null} />
      <SecuritySetting show={tabParam === "security"} />
      <AddressSetting show={tabParam === "address"} />
      <SubscriptionSetting show={tabParam === "subscription"} />
    </div>
  );
};
