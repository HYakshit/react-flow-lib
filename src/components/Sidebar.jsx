import { useCallback } from "react";

const sidebarWidth = 250;
const getSidebarWidth = () => sidebarWidth;

export default function Sidebar() {
  // const nodeTypes = [
  //   { type: "rectangle", label: "Process" },
  //   { type: "circle", label: "Connector" },
  //   { type: "diamond", label: "Decision" },
  //   { type: "oval", label: "Start/End" },
  //   { type: "parallelogram", label: "Input/Output" },
  // ];

  const nodes = [
    { type: "Trigger", label: "Trigger" },
    { type: "Action", label: "Action" },
    { type: "Notification", label: "Notification" },
    { type: "Conditional", label: "Conditional" },
    { type: "Delay", label: "Delay" },
    { type: "Loop", label: "Loop" },
    { type: "subprocess", label: "sub-process" },
    { type: "parallel", label: "parallel" },
    { type: "Descision", label: "Descision" },
  ];

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside style={{ width: `${sidebarWidth}px` }} className={`bg-base-200 p-4`}>
      <h2 className="font-bold mb-2">Flow Diagrams</h2>
      <div className="flex flex-col gap-2">
        {nodes.map((n) => (
          <div
            key={n.type}
            className="btn btn-outline"
            draggable
            onDragStart={(e) => onDragStart(e, n.type)}
          >
            {n.label}
          </div>
        ))}
      </div>
    </aside>
  );
}

export { getSidebarWidth };
