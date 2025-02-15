import { ModuleProgressData } from "@/data/data";

const ModuleProgress = () => (
  <div className="flex flex-col gap-3">
    <h2 className="text-[#eeeeee] text-2xl font-medium font-['Orbitron']">
      {ModuleProgressData.title}
    </h2>
    <div className="flex flex-col gap-1">
      <TaskProgress />
    </div>
  </div>
);

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm font-bold font-['Inconsolata'] text-[#a0a0a0]">
    <span>{label}</span>
    <span className="text-white">{value}</span>
  </div>
);

const TaskProgress = () => (
  <div className="flex flex-col gap-3">
    <div className="h-3 justify-between items-start inline-flex">
      <div className="text-[#d44245] text-xs font-medium font-['Orbitron'] leading-3">
        {ModuleProgressData.completedModules} of{" "}
        {ModuleProgressData.totalModules} modules completed
      </div>
      <div className="text-[#d44245] text-xs font-medium font-['Orbitron'] leading-3">
        {ModuleProgressData.progress}%
      </div>
    </div>

    <div className="w-full h-1.5 relative bg-[#2f3132] rounded-[100px]">
      <div
        className="h-1.5 bg-[#d44245] rounded-[100px]"
        style={{ width: `${ModuleProgressData.progress}%` }}
      />
    </div>
    <InfoRow label="Acquirable XP:" value={`+${ModuleProgressData.xp}`} />
    <InfoRow label="Difficulty:" value={ModuleProgressData.difficulty} />
    <InfoRow label="Reward:" value={ModuleProgressData.reward} />
  </div>
);

export default ModuleProgress;
