"use client";

import Challenges from "./Challenges";
import CodeTerminal from "./CodeTerminal";
import ModuleProgress from "@/app/course/[content]/ModuleProgress";
import PracticeMachine from "@/app/course/[content]/PracticeMachine";
import FileTree from "@/app/course/[content]/TreeView";
import { ModalContext } from "@/contexts/ModalContext";
import { TaskDetailsData } from "@/data/data";
import { useContext } from "react";

export default function Content({
  params,
}: {
  params: Promise<{ content: string }>;
}) {
  const getParams = async () => {
    const { content } = await params;
    console.log(content);
  };

  getParams();

  const { openGetHelpModal } = useContext(ModalContext);

  return (
    <div className="relative max-w-[1440px] xl:p-[100px] md:p-10 lg:p-12 p-5 md:mt-12 mt-[100px]">
      <div className="pb-[100px] flex flex-col lg:flex-row gap-[50px]">
        <Sidebar />
        <MainContent openGetHelpModal={openGetHelpModal} />
      </div>
    </div>
  );
}

const Sidebar = () => (
  <div className="lg:w-auto w-full flex flex-col gap-6 lg:max-w-[300px]">
    <ModuleProgress />
    <FileTree />
    {/* <PracticeMachine /> */}
  </div>
);

const MainContent = ({
  openGetHelpModal,
}: {
  openGetHelpModal: () => void;
}) => (
  <div className="w-full flex flex-col gap-8">
    <TaskSection title="SeImpersonate Privilege" details={TaskDetailsData} />
    <TaskSection title="Build Our Exploit" details={TaskDetailsData} />
    <CodeTerminal />
    <Challenges />
    <NavigationButtons openGetHelpModal={openGetHelpModal} />
  </div>
);

const TaskSection = ({
  title,
  details,
}: {
  title: string;
  details: string[];
}) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-white text-2xl font-bold font-['Orbitron']">{title}</h2>
    <div className="text-[#a0a0a0] xl:text-lg text-sm font-normal font-['Inconsolata']">
      {details.map((detail, index) => (
        <p key={index}>{detail}</p>
      ))}
    </div>
  </div>
);

const NavigationButtons = ({
  openGetHelpModal,
}: {
  openGetHelpModal: () => void;
}) => (
  <div className="h-12 justify-between items-start flex-col md:flex-row flex gap-2">
    <div
      className="text-red w-full md:w-auto font-orbitron px-6 py-3 rounded-lg border border-[#d44244] cursor-pointer backdrop-blur-[32px] justify-center items-center gap-3 flex"
      onClick={openGetHelpModal}
    >
      Get Help
    </div>
    <div className="justify-start items-center gap-3 flex w-full md:w-auto">
      <div className="text-white w-full md:w-auto font-orbitron px-4 py-3 bg-[#2f3132] duration-200 hover:bg-[#2f3132a1] cursor-pointer rounded-lg justify-center items-center gap-1 flex">
        Back
      </div>
      <div className="text-white w-full md:w-auto font-orbitron px-6 py-3 bg-[#972123] hover:bg-[#7a1b1f] duration-200 cursor-pointer rounded-lg justify-center items-center gap-1 flex">
        Next
      </div>
    </div>
  </div>
);
