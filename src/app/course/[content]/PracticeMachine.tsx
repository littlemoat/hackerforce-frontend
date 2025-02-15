const PracticeMachine = () => (
  <div className="h-[300px] p-4 bg-[#1d1f20] rounded-2xl flex-col justify-center items-start gap-4 inline-flex blur-sm select-none cursor-not-allowed">
    <div className="self-stretch h-[38px] flex-col justify-center items-start flex">
      <div className="self-stretch text-white text-sm font-medium font-['Orbitron'] leading-tight">
        Practice Machine
      </div>
      <div className="self-stretch text-[#a0a0a0] text-xs font-normal font-['Inconsolata'] leading-[18px]">
        Practice down here
      </div>
    </div>
    <div className="self-stretch grow shrink basis-0 p-3 bg-[#181a1b] rounded-lg border border-[#2f3132] flex-col justify-start items-start gap-1 flex">
      <div className="self-stretch grow shrink basis-0 text-center text-[#a0a0a0] text-sm font-normal font-['Inconsolata'] leading-tight">
        Practice here
      </div>
    </div>
    <div className="text-white font-orbitron pointer-events-none self-stretch px-6 py-2 duration-200 bg-[#972123] hover:bg-[#7a1b1f] rounded-lg justify-center items-center gap-1 inline-flex">
      Spawn
    </div>
  </div>
);

export default PracticeMachine;
