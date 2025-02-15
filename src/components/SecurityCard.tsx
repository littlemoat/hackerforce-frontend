import Icon from "@/components/Icon";
import { IconName } from "@/types/type";

const SecurityCard = ({
  category,
}: {
  category: { name: string; icon: IconName; description: string };
}) => (
  <div className="p-6 bg-white/5 rounded-lg flex gap-4 items-start">
    <Icon name={category.icon} className="w-9 h-9 text-white" />
    <div className="flex flex-col gap-2">
      <h3 className="text-white text-xl font-orbitron font-medium">
        {category.name}
      </h3>
      <p className="text-white text-base font-inconsolata leading-normal">
        {category.description}
      </p>
    </div>
  </div>
);

export default SecurityCard;
