 const sidebarWidth = 250; 
  const getSidebarWidth = () => sidebarWidth;

export default function Sidebar() {
  const nodeTypes = [
    { type: "trigger", label: "Trigger" },
    { type: "action", label: "Action" },
    { type: "notification", label: "Notification" },
  ];

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

 
  return (
    <aside style={{ width: `${sidebarWidth}px` }} className={`bg-base-200 p-4`}>
      <h2 className="font-bold mb-2">Nodes Library</h2>
      <div className="flex flex-col gap-2">
        {nodeTypes.map((n) => (
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
