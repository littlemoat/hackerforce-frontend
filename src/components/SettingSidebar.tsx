import { SettingsMenu } from "@/data/data";
import Link from "next/link";

const SettingsSidebar = ({ tabParam }: { tabParam: string | null }) => {
  return (
    <div className="flex-col items-center lg:flex hidden">
      {SettingsMenu.map(({ id, label, icon: Icon }) => {
        const isActive =
          tabParam === id || (id === "account" && tabParam === null);
        return (
          <Link
            key={id}
            href={`/setting?tab=${id}`}
            className={`self-stretch p-3 border-r-2 flex items-center gap-2.5 ${
              isActive ? "border-red text-red" : "border-[#2f3132] text-white"
            }`}
          >
            <Icon size={23} className={isActive ? "text-red" : "text-white"} />
            <div className="text-lg font-semibold font-['Inconsolata'] leading-relaxed">
              {label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SettingsSidebar;
