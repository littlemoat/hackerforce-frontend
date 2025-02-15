import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ExpandableSection = ({
  title,
  content,
}: {
  title: string;
  content: { title: string; content: string }[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-start justify-center w-full">
      <span className="text-white text-md font-medium font-orbitron mb-3">
        {title}
      </span>
      {content.map(({ title, content }, index) => (
        <div
          className={`${
            openIndex === index ? "border" : ""
          } w-full border-r border-[#2f3132]`}
          key={index}
        >
          <div
            className={`px-3 py-1 bg-[#141616] ${
              openIndex === index && "border-b border-[#2f3132]"
            } flex justify-between items-center cursor-pointer`}
            onClick={() => toggleOpen(index)}
          >
            <span className="text-[#a0a0a0] text-sm font-medium font-['Inconsolata']">
              {title}
            </span>
            <IoIosArrowUp
              color="white"
              className={`${
                openIndex === index
                  ? "rotate-180 duration-200"
                  : "rotate-0 duration-200"
              }`}
            />
          </div>
          {openIndex === index && (
            <div className="px-3 py-2">
              <p className="text-white text-sm font-inconsolata">{content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
