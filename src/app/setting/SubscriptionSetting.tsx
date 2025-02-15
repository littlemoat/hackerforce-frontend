"use client";

import Icon from "@/components/Icon";
import { successAlert } from "@/components/ToastGroup";
import { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";

const SubscriptionSetting = ({ show }: { show: boolean }) => {
  const { openCancelPlanModal } = useContext(ModalContext);
  if (!show) return null;

  const subscriptionDetails = [
    {
      label: "Plan",
      value: "One Person Plan",
      icon: "StarIcon",
      highlight: true,
    },
    { label: "Duration", value: "1 month" },
    { label: "Next payment", value: "July 23, 2024" },
    { label: "Plan start", value: "June 23, 2024" },
  ];

  const handleCanclePlan = () => {
    successAlert(
      "Are you sure you want to cancel your plan? We'd love to help if you're having any issues. Please contact us at…"
    );
  };

  return (
    <div className="grow shrink basis-0 self-stretch flex flex-col items-end justify-end gap-8 ">
      {/* Section Header */}
      <SectionHeader title="Subscription" description="Manage address" />

      {/* Subscription Plan Card */}
      <div className="self-stretch p-4 bg-[#1d1f20] rounded-2xl border border-[#2f3132] flex flex-col md:flex-row justify-center items-center gap-6">
        <PlanCard title="One Person Plan" icon="StarIcon" />
        <div className="grow shrink basis-0 flex flex-col gap-3">
          {subscriptionDetails.map(
            ({ label, value, icon, highlight }, index) => (
              <DetailRow
                key={index}
                label={label}
                value={value}
                icon={icon}
                highlight={highlight}
              />
            )
          )}
        </div>
      </div>

      {/* Payment Method Card */}
      {/* <PaymentMethod method="Paypal" account="Jack Paypal account" /> */}

      <div className="w-full border border-grey/50" />

      {/* Cancel Plan Button */}
      <CancelPlanButton onClick={() => openCancelPlanModal()} />
    </div>
  );
};

export default SubscriptionSetting;

/* ========================
 * REUSABLE COMPONENTS
 * ======================= */

// Section Header Component
const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="self-stretch flex flex-col justify-start gap-1 border-grey">
    <h2 className="text-white text-2xl font-bold font-['Orbitron']">{title}</h2>
    <p className="text-[#a0a0a0] text-base font-normal font-['Inconsolata']">
      {description}
    </p>
  </div>
);

// Plan Card Component
const PlanCard = ({ title, icon }: { title: string; icon: string }) => (
  <div className="self-stretch px-6 py-2 bg-[#181a1b] rounded-lg border border-[#2f3132] flex flex-col items-center gap-2">
    <div className="p-4 rounded-full border border-[#e09b6b] flex items-center justify-center">
      <Icon name={"StarIcon"} size={20} />
    </div>
    <p className="text-[#e09b6b] text-sm font-medium font-['Orbitron'] text-center">
      {title}
    </p>
  </div>
);

// Detail Row Component
const DetailRow = ({
  label,
  value,
  icon,
  highlight,
}: {
  label: string;
  value: string;
  icon?: string;
  highlight?: boolean;
}) => (
  <div className="self-stretch flex justify-between items-center">
    <span className="text-[#6c7174] text-sm font-medium font-['Orbitron']">
      {label}
    </span>
    <div className="flex items-center gap-2">
      {icon && <Icon name={"StarIcon"} size={20} />}
      <span
        className={`${
          highlight ? "text-[#e09b6b]" : "text-[#eeeeee]"
        } text-sm font-medium font-['Orbitron']`}
      >
        {value}
      </span>
    </div>
  </div>
);

// Payment Method Component
const PaymentMethod = ({
  method,
  account,
}: {
  method: string;
  account: string;
}) => (
  <div className="self-stretch p-4 bg-[#1d1f20] rounded-2xl border border-[#2f3132] flex flex-col gap-3">
    <div className="flex justify-between items-center">
      <h3 className="text-white text-base font-medium font-['Orbitron']">
        Payment Method
      </h3>
      <button className="text-[#d44244] text-base font-medium font-['Orbitron']">
        Edit
      </button>
    </div>
    <DetailRow label={method} value={account} />
  </div>
);

// Cancel Plan Button
const CancelPlanButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="self-stretch md:w-[300px] w-full px-6 py-3 rounded-lg border border-[#d44244] hover:border-red duration-200 text-[#d44244] text-base font-medium font-['Orbitron']"
    onClick={onClick}
  >
    Cancel Plan
  </button>
);
