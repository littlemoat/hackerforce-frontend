import BackgroundImage from "@/components/BackgroundImage";
import ComingSoon from "@/components/ComingSoon";

export default function Shop() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full flex-col">
      <BackgroundImage />
      <div className="text-center text-white text-xl font-normal bg-red px-1 font-inconsolata">
        Hacker Shop
      </div>
      <ComingSoon />
    </div>
  );
}
