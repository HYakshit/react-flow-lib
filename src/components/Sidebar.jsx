import { useCallback } from "react";
import { nodeIcons } from "../utill/Icons";
import { nodeDescription, nodes } from "../utill/NodeConstants";
import { NodeCard } from "./common/NodeCard";

const sidebarWidth = 250;
const getSidebarWidth = () => sidebarWidth;

export default function Sidebar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className=" bg-gray-100" style={{ width: `${sidebarWidth}px` }}>
      <aside className={`bg-white h-screen rounded-2xl p-4`}>
        <h2 className="font-bold mb-8">Nodes Library</h2>
        <div className="flex flex-col gap-2">
          {nodes.map((data) => NodeCard({ data , onDragStart, isCanvas:false}))}
        </div>
      </aside>
    </div>
  );
}

export { getSidebarWidth };
