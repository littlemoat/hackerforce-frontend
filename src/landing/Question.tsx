"use client";

import Icon from "@/components/Icon";
import { FaqItemsData } from "@/data/data";
import Link from "next/link";
import { useState } from "react";

export default function Question() {
  return (
    <section
      className="relative max-w-[1440px] xl:p-[100px] md:p-10 lg:p-12 p-5"
      id="faq"
    >
      <div className="xl:w-[700px] w-full flex flex-col items-center gap-10 pt-20 md:pt-5">
        {/* Section Header */}
        <FAQHeader />

        {/* FAQ List */}
        <div className="flex flex-col gap-4 w-full">
          {FaqItemsData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        {/* Contact Us Footer */}
        <FAQFooter />
      </div>
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */

// 🔹 FAQ Section Header
const FAQHeader = () => (
  <div className="flex flex-col items-center gap-2 w-full">
    <div className="px-2 bg-[#972123] flex justify-center items-center">
      <span className="text-white text-xl font-inconsolata">FAQ</span>
    </div>
    <h2 className="text-white text-[40px] font-orbitron font-medium leading-[48px] text-center">
      Frequently Asked Questions
    </h2>
    <p className="lg:w-[650px] text-center text-[#a0a0a0] text-lg font-inconsolata leading-relaxed">
      Whether you’re looking to pay monthly, or save some money in the long run
      and purchase a yearly subscription, we’ve got you covered.
    </p>
  </div>
);

// 🔹 FAQ Item (Collapsible)
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`p-4 ${
        isOpen ? "bg-[#972123]/10 border border-[#972123]" : "bg-[#1d1e1f]"
      } rounded-lg flex justify-between items-center cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col gap-2 md:max-w-[600px] w-full">
        <p className="text-white text-base font-orbitron font-medium">
          {question}
        </p>
        {isOpen && (
          <p className="text-[#a0a0a0] text-base font-inconsolata">{answer}</p>
        )}
      </div>
      <div className="w-[20px]">
        <Icon
          name="UpIcon"
          color="#ffffff"
          className={`text-white transition-transform w-7 ${
            isOpen ? "rotate-90" : ""
          }`}
          size={22}
        />
      </div>
    </div>
  );
};

// 🔹 FAQ Footer (Contact CTA)
const FAQFooter = () => (
  <div className="flex flex-col items-center gap-5 py-12 md:py-0">
    <p className="text-[#a0a0a0] text-2xl font-inconsolata text-center">
      Have a question? Contact us here
    </p>
    <Link
      href={"/contact"}
      className="px-6 py-3 bg-[#972123] duration-200 rounded-lg text-white text-base font-orbitron font-medium hover:bg-[#7a1b1f]"
    >
      Contact Us
    </Link>
  </div>
);
