import { Handle } from "@xyflow/react";
import { nodeIcons } from "../../utill/Icons";
import { nodeDescription } from "../../utill/NodeConstants";

export const NodeCard = ({ data, onDragStart }) => {
  console.log("data in NodeCard:", data);
  if (!data) return null; // prevent errors

  return (
    <div
      key={data.type}
      draggable={!!onDragStart}
      onDragStart={(e) => onDragStart && onDragStart(e, data.type)}
      className={`flex cursor-pointer items-center gap-3 p-1.5 border rounded-xl hover:shadow-sm transition-shadow bg-white ${
        data.isCanvas ? `w-50 h-15` : ""
      }`}
    >
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-blue-500`}
      >
        {nodeIcons[data.type]}
      </div>

      <div className="flex flex-col">
        <span className="font-medium text-gray-800">
          {data.label || data.type}
        </span>
        <span className="text-sm text-gray-500">
          {nodeDescription[data.type]}
        </span>
      </div>
      {data.isCanvas && ( <>  <Handle type="source" position="top" />
          <Handle type="target" position="bottom" />
          </>)}
    </div>
  );
};
