// Process (Rectangle)
export const RectangleNode = ({ data }) => (
  <div className="px-4 py-2 bg-blue-500 text-white rounded shadow-md">
    {data.label}
  </div>
);
// Decision (Diamond)
export const DiamondNode = ({ data }) => (
  <div className="relative w-32 h-32">
    <div className="absolute inset-0 transform rotate-45 bg-green-500 text-white flex items-center justify-center shadow-md">
      {data.label}
    </div>
  </div>
);
// Connector (Circle)
export const CircleNode = ({ data }) => (
  <div className="w-24 h-24 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-md">
    {data.label}
  </div>
);
// Start / End (Oval)
export const Oval = ({ data }) => (
  <div className="w-32 h-16 bg-pink-500 text-white flex items-center justify-center shadow-md rounded-full">
    {data.label}
  </div>
);

// Input / Output (Parallelogram)
export const Parallelogram = ({ data }) => (
  <div className="w-40 h-16 bg-indigo-500 text-white flex items-center justify-center shadow-md transform skew-x-12">
    <div className="-skew-x-12">{data.label}</div>
  </div>
);
