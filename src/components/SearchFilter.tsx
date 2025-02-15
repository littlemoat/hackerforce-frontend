"use client";

import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useRef, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

const sortingOptions = ["Newest", "Oldest", "Hardest", "Easiest"];

const SearchFilter = () => {
  const elem = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  useOnClickOutside(elem, () => setIsOpen(false));

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Newest");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false); // Close dropdown after selecting
  };

  return (
    <div
      className="flex flex-col sm:flex-row gap-2 items-start mt-5"
      ref={elem}
    >
      <div className="h-9 px-4 py-1.5 bg-[#1d1f20] border border-[#2f3132] rounded-lg flex items-center gap-3">
        <GrSearch color="#a0a0a0" />
        <input
          placeholder="Search"
          className="text-[#a0a0a0] w-[270px] text-base font-medium font-['Orbitron'] bg-transparent outline-none"
        />
      </div>
      <div className="relative w-full md:w-auto">
        {/* Dropdown Trigger */}
        <div
          className="px-4 py-2 bg-[#2f3132] rounded-lg flex items-center justify-between gap-3 cursor-pointer w-full md:w-auto transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-white text-sm font-['Orbitron']">
            {selected}
          </span>
          <IoIosArrowDown
            className={`text-white transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className={`absolute left-0 mt-2 w-full md:w-[150px] bg-[#1d1f20] rounded-lg border border-[#2f3132] shadow-lg z-10
          ${
            isOpen
              ? "opacity-100 duration-300"
              : " opacity-0 pointer-events-auto"
          }`}
          >
            {sortingOptions.map((option, key) => (
              <div
                key={option}
                className={`${`px-4 py-2 text-white text-sm font-['Orbitron'] cursor-pointer hover:bg-red ${
                  key === 0
                    ? "rounded-t-lg"
                    : key === sortingOptions.length - 1
                    ? "rounded-b-lg"
                    : ""
                } transition`}`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
