import Icon from "./Icon";

const SubscriptionCard = ({
  plan,
}: {
  plan: {
    plan: number;
    price: string;
    type: string;
    duration: string;
    benefits: string[];
    bgColor: string;
    buttonBg: string;
    textColor: string;
  };
}) => (
  <div
    className={`p-6 ${plan.bgColor} rounded-lg flex flex-col gap-6 hover:translate-y-1 duration-200`}
  >
    {/* Plan Icon */}
    <div className="w-20 h-20 relative">
      <Icon
        name={`${
          plan.plan === 1
            ? "SubscriptionIcon"
            : plan.plan === 2
            ? "SubscriptionIcon2"
            : "SubscriptionIcon3"
        }`}
        size={80}
      />
    </div>

    {/* Pricing & Plan Type */}
    <div className="flex flex-col gap-2">
      <h3 className="text-white text-[40px] font-orbitron font-medium leading-[48px]">
        {plan.price}
      </h3>
      <div className="flex items-center gap-2">
        <div className="px-2 bg-[#2f3132] flex justify-center items-center">
          <span className="text-white text-xl font-inconsolata">
            {plan.type}
          </span>
        </div>
        <p
          className={`${plan.textColor} text-lg font-inconsolata leading-relaxed`}
        >
          - {plan.duration}
        </p>
      </div>
    </div>

    {/* Benefits List */}
    <ul className={`${plan.textColor} text-lg font-inconsolata leading-normal`}>
      {plan.benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>

    {/* Select Subscription Button */}
    <button
      className={`w-full px-6 py-3 ${plan.buttonBg} rounded-lg text-center`}
    >
      <span
        className={`text-base font-orbitron font-medium ${
          plan.buttonBg === "bg-white" ? "text-[#181a1b]" : "text-white"
        }`}
      >
        Select Subscription
      </span>
    </button>
  </div>
);

export default SubscriptionCard;
