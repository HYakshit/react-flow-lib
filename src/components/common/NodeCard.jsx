import { Handle } from "@xyflow/react";
import { nodeIcons } from "../../utill/Icons";
import { NODEDESCRIPTION } from "../../lib/NodeConstants";

export const NodeCard = ({ data, onDragStart }) => {
  if (!data) return null; // prevent errors

  return (
    <div
      tabIndex={0}
      key={data.type}
      draggable={!!onDragStart}
      onDragStart={(e) => onDragStart && onDragStart(e, data.type)}
      className={`flex cursor-pointer items-center gap-3 p-1.5 border border-gray-100 rounded-md 
              hover:shadow-sm transition-shadow bg-white
              focus:outline-none focus:border-blue-500 focus:shadow-md
              ${data.isCanvas ? "w-25 h-6" : "w-50 h-15"}`}
    >
      {/* icon */}
      <div
        className={`flex items-center justify-center   rounded-sm bg-gray-100 text-blue-500 ${
          data.isCanvas ? "w-4 h-4" : "w-8 h-8"
        }`}
      >
        {nodeIcons[data.type]}
      </div>

      <div className="flex flex-col">
        {/* label */}
        <span
          className={`font-medium  text-gray-800 ${
            data.isCanvas ? " text-[8px]" : " text-md"
          }`}
        >
          {data.label || data.type}
        </span>
        {/* description */}
        <span
          className={` text-gray-500 ${
            data.isCanvas ? "text-[6px]" : "text-sm"
          }`}
        >
          {NODEDESCRIPTION[data.type]}
        </span>
      </div>
      {data.isCanvas && (
        <>
          {" "}
          <Handle type="source" position="bottom" />
          <Handle type="target" position="top" />
        </>
      )}
    </div>
  );
};
