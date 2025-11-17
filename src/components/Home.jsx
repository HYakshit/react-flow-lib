import { useState } from "react";
import FlowCanvasWrapper from "./FlowCanvas";
import PropertiesPanel from "./PropertiesPanel";
import Sidebar from "./Sidebar";

export const Home = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <FlowCanvasWrapper onNodeSelect={setSelectedNode} />
      </div>
      <PropertiesPanel
        selectedNode={selectedNode}
        onUpdateNode={(updated) => console.log(updated)}
      ></PropertiesPanel>
    </div>
  );
};
