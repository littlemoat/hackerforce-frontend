import SecurityCard from "@/components/SecurityCard";
import { SecurityCategoriesData } from "@/data/data";

export default function Security() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#5f0001] to-[#972123] flex flex-col items-center gap-[50px]">
      <div className="w-full max-w-[1440px] gap-10 flex flex-col items-center xl:p-[100px] md:p-10 lg:p-12 p-5">
        {/* Header */}
        <SecurityHeader />

        {/* Security Categories Grid */}
        <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {SecurityCategoriesData.map((category, index) => (
            <SecurityCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */

// 🔹 Header Section
const SecurityHeader = () => (
  <div className="flex flex-col items-start md:items-start gap-6">
    {/* Training Tag */}
    <div className="px-2 bg-[#181a1b] flex items-center">
      <span className="text-white text-xl font-inconsolata">Training</span>
    </div>

    {/* Title */}
    <h2 className="flex-1 text-white text-[40px] font-orbitron font-medium capitalize leading-[48px]">
      Security Training
    </h2>

    {/* Description */}
    <p className="flex-1 text-white text-lg font-inconsolata leading-relaxed">
      We specialize in hardware Pentesting, Physical Pentesting, Cloud
      Pentesting, Network Pentesting, Programming, and more, fostering expertise
      in the dynamic field of offensive cyber security training.
    </p>
  </div>
);
