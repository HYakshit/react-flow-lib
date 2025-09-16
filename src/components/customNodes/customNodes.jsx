import { Handle } from "@xyflow/react";
import { useState } from "react";

// Process (Rectangle)
export const RectangleNode = ({ data }) => (
  <div className="py-2 px-2  flex justify-center items-center w-50 h-25  bg-blue-500 text-white rounded shadow-md">
    <div>
      <textarea
        className="resize-none border-0 focus:outline-none"
        rows="3"
        placeholder={data.label}
        type="text"
        id="RectangleNode"
      />
    </div>
    <Handle type="source" position="top" />
    <Handle type="target" position="bottom" />
    <Handle type="source" position="left" />
    <Handle type="target" position="right" />
  </div>
);
// Decision (Diamond)
export const DiamondNode = ({ data }) => {
  return (
    <div className="relative w-32 h-32">
      {/* Diamond background (rotated square) */}
      <div className="absolute  inset-0 transform rotate-45 bg-green-500 shadow-md flex items-center justify-center">
        {/* Counter-rotate content back to normal */}
        <div className="transform -rotate-45 flex items-center justify-center w-full h-full p-2">
          <textarea
            className="mt-4 w-full h-full resize-none bg-transparent text-white text-center border-0 focus:outline-none overflow-hidden"
            rows="3"
            placeholder={data.label}
          />
        </div>
      </div>

      {/* Handles */}
      <Handle type="source" position="top" />
      <Handle type="target" position="bottom" />
      <Handle type="source" position="left" />
      <Handle type="target" position="right" />
    </div>
  );
};

// Connector (Circle)
export const CircleNode = ({ data }) => {
  const [value, setValue] = useState(data.label || "");

  return (
    <div className="w-24 h-24 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-md p-2 text-center relative">
      <textarea
        className="resize-none border-0 focus:outline-none"
        rows="3"
        placeholder={data.label}
        type="text"
        id="CircleNode"
      />
      <Handle type="source" position="top" />
      <Handle type="target" position="bottom" />
      <Handle type="source" position="left" />
      <Handle type="target" position="right" />
    </div>
  );
};
// Start / End (Oval)
export const Oval = ({ data }) => {
  return (
    <div className="w-32 h-16 bg-pink-500 text-white flex items-center justify-center shadow-md rounded-full">
      <select
        className="text-black rounded p-1"
        value={data.value}
        onChange={(e) => data.onovalChange(e.target.value)}
      >
        <option value="start">Start</option>
        <option value="end">End</option>
      </select>

      <Handle type="source" position="top" />
      <Handle type="target" position="bottom" />
    </div>
  );
};

// textarea / Output (Parallelogram)
export const Parallelogram = ({ data }) => (
  <div className="w-50 h-25 bg-indigo-500 text-white flex items-center justify-center shadow-md transform skew-x-12">
    <div>
      <textarea
        className="resize-none border-0 focus:outline-none"
        rows="3"
        placeholder={data.label}
        type="text"
        id="Parallelogram"
      />{" "}
    </div>
    <Handle type="source" position="top" />
    <Handle type="target" position="bottom" />
    <Handle type="source" position="left" />
    <Handle type="target" position="right" />
  </div>
);
