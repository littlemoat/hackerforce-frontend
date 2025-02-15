import Icon from "@/components/Icon";
import { PathsData } from "@/data/data";

export default function FindPath() {
  return (
    <section className="relative max-w-[1440px] 2xl:min-w-[1440px] xl:p-[100px] md:p-10 lg:p-12 p-5">
      <div className="w-full flex lg:flex-row flex-col items-start gap-[50px]">
        {/* Header */}
        <PathHeader />

        {/* Path Cards Grid */}
        <div className="grid grid-cols-1 gap-5 w-full">
          {PathsData.map((path, index) => (
            <PathCard key={index} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */

// 🔹 Header Section
const PathHeader = () => (
  <div className="lg:w-[480px] flex flex-col gap-2">
    {/* Path Label */}
    <div className="px-2 bg-[#972123] w-[100px] flex justify-center items-center">
      <span className="text-white text-xl font-inconsolata">Path</span>
    </div>

    {/* Title */}
    <h2 className="text-white text-[40px] font-orbitron font-medium capitalize leading-[48px]">
      Find your path
    </h2>

    {/* Description */}
    <p className="text-[#a0a0a0] text-lg font-inconsolata leading-relaxed">
      Whether you’re just starting out, have some experience, or consider
      yourself an advanced practitioner, there’s an exciting and tailored path
      waiting for you to advance your skills.
    </p>
  </div>
);

// 🔹 Path Card Component
const PathCard = ({
  path,
}: {
  path: { title: string; description: string; icon: string };
}) => (
  <div className="p-6 bg-[#1d1e1f] rounded-lg flex gap-4">
    <div className="w-[30px]">
      <Icon name={"UpIcon"} className="w-7 h-7 text-white" size={18} />
    </div>
    <div className="flex flex-col gap-2 max-w-[700px]">
      <h3 className="text-white text-xl font-orbitron font-medium">
        {path.title}
      </h3>
      <p className="text-[#a0a0a0] text-base font-inconsolata">
        {path.description}
      </p>
    </div>
  </div>
);
