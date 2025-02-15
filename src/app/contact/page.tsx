"use client";

import BackgroundImage from "@/components/BackgroundImage";
import { successAlert } from "@/components/ToastGroup";
import { useState } from "react";

export default function Contact() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen p-5 relative">
      <BackgroundImage />
      <div className="mt-[70px] lg:w-[700px] w-full md:p-8 p-3 bg-[#1d1f20] rounded-2xl border border-[#2f3132] flex flex-col items-center gap-6">
        <ContactHeader />
        <ContactForm />
      </div>
    </div>
  );
}

const ContactHeader = () => (
  <div className="flex flex-col items-center gap-2 w-full">
    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-grey md:text-[55px] text-[40px] font-bold font-orbitron uppercase text-center">
      Contact Us
    </h2>
    <p className="text-[#a0a0a0] md:text-xl text-md font-inconsolata text-center">
      Contact us 24/7, we are always here for you.
    </p>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    successAlert("Your message has been delivered.");
    // Add API call or further processing here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      {/* Full Name */}
      <FormField
        label="Full Name"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        placeholder="Enter your name"
        required
      />

      {/* Email */}
      <FormField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        type="email"
        required
      />

      {/* Subject */}
      <FormField
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter your message"
        textarea
        required
      />

      <button
        type="submit"
        className="w-full px-6 py-3 bg-[#972123] hover:bg-[#7a1b1f] rounded-lg text-white text-base font-orbitron font-medium transition duration-200"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </form>
  );
};

const FormField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea = false,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-[#a0a0a0] text-base font-inconsolata">
      {label} {required && <span className="text-[#d44244]">*</span>}
    </label>

    {textarea ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full min-h-[150px] max-h-[271px] p-3 bg-[#141516] placeholder:text-grey rounded-lg text-[#a0a0a0] text-base font-inconsolata outline-none resize-none"
        required={required}
      />
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 bg-[#141516] rounded-lg text-[#a0a0a0] text-base placeholder:text-grey font-inconsolata outline-none"
        required={required}
      />
    )}
  </div>
);
