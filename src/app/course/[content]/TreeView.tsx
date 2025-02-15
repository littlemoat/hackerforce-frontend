"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const treeData: TreeNode[] = [
  {
    name: "Foor",
    children: [
      { name: "x" },
      {
        name: "y",
        children: [{ name: "xer ewr" }, { name: "eey" }, { name: "rewz" }],
      },
      { name: "z" },
    ],
  },
  {
    name: "Bar",
    children: [
      { name: "a" },
      {
        name: "b",
        children: [{ name: "aff" }, { name: "bewr" }, { name: "crwe" }],
      },
      { name: "v" },
    ],
  },
];

const TreeView = ({
  node,
  onSelect,
  activeNode,
}: {
  node: TreeNode;
  onSelect: (name: string) => void;
  activeNode: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full border-b border-white/5 font-inconsolata">
      <div
        className={`flex items-center cursor-pointer p-1 font-inconsolata ${
          activeNode === node.name
            ? "text-white font-bold bg-white/5"
            : "hover:bg-grey/20 duration-200"
        }`}
        onClick={() => onSelect(node.name)}
      >
        {node.children ? (
          <span onClick={handleToggle} className="mr-1">
            <ChevronDown
              className={`w-4 h-4 font-inconsolata ${
                expanded ? "rotate-0 duration-200" : "-rotate-90 duration-200"
              }`}
            />
          </span>
        ) : (
          <span className="w-4 h-4 mr-1" />
        )}
        <span
          onClick={handleToggle}
          className={`w-full text-base ${
            node.children
              ? "font-extrabold text-[17px]"
              : "font-normal text-[15px]"
          }`}
        >
          {node.name}
        </span>
      </div>
      {expanded && node.children && (
        <div className="pl-4 text-base font-inconsolata">
          {node.children.map((child, index) => (
            <TreeView
              key={`${node.name}-${index}`}
              node={child}
              onSelect={onSelect}
              activeNode={activeNode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function FileTree() {
  const [activeNode, setActiveNode] = useState("");

  return (
    <div className="w-full bg-[#1D1F21] rounded-sm font-mono text-white/60 text-sm p-2">
      {treeData.map((node, index) => (
        <TreeView
          key={index}
          node={node}
          onSelect={setActiveNode}
          activeNode={activeNode}
        />
      ))}
    </div>
  );
}
