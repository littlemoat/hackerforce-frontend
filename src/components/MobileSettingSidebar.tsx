import { SettingsMenu } from "@/data/data";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const MobileSettingSidebar = ({ tabParam }: { tabParam: string | null }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Get the active menu item or default to "Account Settings"
  const activeMenuItem =
    SettingsMenu.find((item) => item.id === tabParam) || SettingsMenu[0];

  return (
    <div className="lg:hidden w-full md:max-w-full relative">
      {/* Toggle Button */}
      <div
        className="px-4 py-2 bg-[#2f3132] rounded-lg flex items-center justify-between cursor-pointer w-full relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 text-white text-lg font-semibold font-['Inconsolata']">
          <activeMenuItem.icon size={20} className="text-white" />
          {activeMenuItem.label}
        </div>
        <RiArrowDownSLine
          className={`text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 right-0 rounded-lg px-4 py-2 bg-[#2F3132] z-50 shadow-lg">
          {SettingsMenu.map(({ id, label, icon: Icon }) => {
            const isActive =
              tabParam === id || (id === "account" && tabParam === null);
            return (
              <Link
                key={id}
                href={`/setting?tab=${id}`}
                className={`w-full flex items-center gap-2 py-2 border-b border-white/15 last:border-none text-white font-inconsolata ${
                  isActive ? "text-red font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)} // Close menu on selection
              >
                <Icon
                  size={20}
                  className={isActive ? "text-red" : "text-white"}
                />
                <p className={isActive ? "text-red" : "text-white"}>{label}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileSettingSidebar;
