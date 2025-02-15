import SubscriptionCard from "@/components/SubscriptionCard";
import { SubscriptionPlansData } from "@/data/data";

export default function Subscription() {
  return (
    <section
      className="relative max-w-[1440px] 2xl:min-w-[1440px] xl:p-[100px] md:p-10 lg:p-12 p-5"
      id="pricing"
    >
      <div className="flex flex-col items-center gap-[50px] pt-20 xl:pt-0">
        {/* Header Section */}
        <SubscriptionHeader />

        {/* Subscription Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 gap-4 w-full">
          {SubscriptionPlansData.map((plan, index) => (
            <SubscriptionCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */

// 🔹 Subscription Header
const SubscriptionHeader = () => (
  <div className="flex flex-col items-center text-center gap-2">
    {/* Pricing Label */}
    <div className="px-2 bg-[#972123] flex justify-center items-center ">
      <span className="text-white text-xl font-inconsolata">Pricing</span>
    </div>

    {/* Title */}
    <h2 className="text-white text-[40px] font-orbitron font-medium leading-[48px]">
      Subscriptions
    </h2>

    {/* Description */}
    <p className="lg:w-[650px] text-[#a0a0a0] text-lg font-inconsolata leading-relaxed">
      Whether you’re looking to pay monthly, or save some money in the long run
      and purchase a yearly subscription, we’ve got you covered.
    </p>
  </div>
);
