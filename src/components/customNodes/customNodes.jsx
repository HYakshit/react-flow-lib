import { Handle } from "@xyflow/react";

export const iconNode = ({ data }) => (
  <>
    <div className="py-2 px-1 text-sm  w-40 h-10  bg-white  rounded shadow-md">
      <div className="flex justify-center items-center gap-2">
        {data.icon && <span className="text-blue-500">{data.icon}</span>}
        <span>{data.label}</span>
      </div>
    </div>
    <Handle type="source" position="top" />
    <Handle type="target" position="bottom" />
  </>
);
