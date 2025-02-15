import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="xl:w-[862px] text-center text-transparent bg-clip-text bg-gradient-to-r from-darker via-white to-darker xl:text-[100px] text-[50px]  md:text-[70px] font-semibold font-['Orbitron']">
        Coming Soon
      </h1>

      <Link
        href={"/"}
        className="px-6 py-3 bg-[#972123] duration-200 rounded-lg text-white text-base font-orbitron font-medium hover:bg-[#7a1b1f]"
      >
        Take me back{" "}
      </Link>
    </div>
  );
}
