/* eslint-disable @next/next/no-img-element */

"use client";

import { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const AccountSetting = ({ show }: { show: boolean }) => {
  const { openImageUploadModalShowModal } = useContext(ModalContext);
  if (!show) return null;

  const formFields = [
    { blur: false, label: "Username", type: "text", placeholder: "Jack" },
    {
      blur: true,
      label: "Skill category",
      type: "text",
      placeholder: "Hardware hacking",
      readOnly: true,
    },
    {
      blur: false,
      label: "Email",
      type: "email",
      placeholder: "Jack@gmail.com",
    },
    {
      blur: false,
      label: "Phone number",
      type: "text",
      placeholder: "+14247409208",
    },
  ];

  return (
    <div className="grow shrink basis-0 self-stretch flex flex-col items-start gap-8">
      {/* Section Header */}
      <SectionHeader
        title="Account Setting"
        description="Personalize your account"
      />

      {/* Profile Image & Upload Button */}
      <div className="flex items-center gap-4">
        <img
          className="w-[150px] h-[149px] rounded-full border-2 border-[#2f3132]"
          src="/imgs/about/about1.png"
          alt="Avatar"
        />
        <UploadButton
          label="Change photo"
          icon={<MdOutlineFileUpload size={25} color="white" />}
          onClick={openImageUploadModalShowModal}
        />
      </div>

      {/* Form Fields */}
      <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4">
        {formFields.map(
          ({ label, type, placeholder, readOnly, blur }, index) => (
            <InputField
              blur={blur}
              key={index}
              label={label}
              type={type}
              placeholder={placeholder}
              readOnly={readOnly}
            />
          )
        )}
      </div>

      <div className="w-full border border-grey/50" />

      {/* Save Changes Button */}
      <SaveButton label="Save changes" />
    </div>
  );
};

export default AccountSetting;

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
  <div className="self-stretch border-grey">
    <h2 className="text-white text-2xl font-bold font-['Orbitron']">{title}</h2>
    <p className="text-[#a0a0a0] text-base font-normal font-['Inconsolata']">
      {description}
    </p>
  </div>
);

// Input Field Component
const InputField = ({
  blur,
  label,
  type,
  placeholder,
  readOnly = false,
}: {
  blur: boolean;
  label: string;
  type: string;
  placeholder: string;
  readOnly?: boolean;
}) => (
  <div
    className={`flex flex-col gap-1 ${blur && "blur-sm cursor-not-allowed"}`}
  >
    <label className="text-[#a0a0a0] text-base font-normal font-['Inconsolata']">
      {label}
    </label>
    <div className="px-4 py-3 bg-[#141516] rounded-lg flex items-center">
      <input
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full text-white text-base font-medium font-['Inconsolata'] bg-transparent outline-none placeholder:text-grey ${
          blur && "blur-sm cursor-not-allowed"
        }`}
      />
    </div>
  </div>
);

// Upload Button Component
const UploadButton = ({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className="p-3 bg-grey hover:bg-[#292929] transition duration-200 rounded-lg flex items-center gap-3"
    onClick={onClick}
  >
    {icon}
    <span className="text-white md:text-base text-sm font-medium font-['Orbitron']">
      {label}
    </span>
  </button>
);

// Save Button Component
const SaveButton = ({ label }: { label: string }) => (
  <button className="px-6 py-3 bg-[#972123] hover:bg-[#7a1b1f] transition duration-200 rounded-lg text-white text-base font-medium font-['Orbitron'] w-full md:w-auto">
    {label}
  </button>
);
