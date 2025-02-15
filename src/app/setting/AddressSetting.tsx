import { successAlert } from "@/components/ToastGroup";

const AddressSetting = ({ show }: { show: boolean }) => {
  if (!show) return null;

  const addressFields = [
    { label: "Street Address 1", placeholder: "66 Gray Street" },
    { label: "Street Address 2", placeholder: "First" },
    { label: "City", placeholder: "Linconshine" },
    { label: "State", placeholder: "Cherry" },
    { label: "Postal Code", placeholder: "8832-2" },
    { label: "Country", placeholder: "Terraria" },
    {
      label: "Address Type",
      placeholder: "ex. floor number, corner",
      fullWidth: true,
    },
  ];

  const handleAddressSave = () => {
    successAlert("Address has been updated.");
  };

  return (
    <div className="grow shrink basis-0 self-stretch flex flex-col items-end gap-8">
      {/* Section Header */}
      <SectionHeader title="Address Settings" description="Manage address" />

      {/* Form Fields */}
      <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4">
        {addressFields.map(({ label, placeholder, fullWidth }, index) => (
          <InputField
            key={index}
            label={label}
            placeholder={placeholder}
            fullWidth={fullWidth}
          />
        ))}
      </div>

      <div className="w-full border border-grey/50" />

      {/* Save Changes Button */}
      <SaveButton label="Save Change" onClick={() => handleAddressSave()} />
    </div>
  );
};

export default AddressSetting;

/* ========================
 *  REUSABLE COMPONENTS
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
  label,
  placeholder,
  fullWidth = false,
}: {
  label: string;
  placeholder: string;
  fullWidth?: boolean;
}) => (
  <div className={`flex flex-col gap-1 ${fullWidth ? "w-full" : "md:w-auto"}`}>
    <label className="text-[#a0a0a0] text-base font-normal font-['Inconsolata']">
      {label}
    </label>
    <div className="px-4 py-3 bg-[#141516] rounded-lg">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full text-white text-base font-medium font-['Inconsolata'] bg-transparent outline-none placeholder:text-grey"
      />
    </div>
  </div>
);

// Save Button Component
const SaveButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <button
    className="px-6 py-3 bg-[#972123] hover:bg-[#7a1b1f] transition duration-200 rounded-lg text-white text-base font-medium font-['Orbitron'] w-full md:w-auto"
    onClick={onClick}
  >
    {label}
  </button>
);
