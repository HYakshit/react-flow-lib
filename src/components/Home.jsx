import FlowCanvasWrapper from "./FlowCanvas";
import PropertiesPanel from "./PropertiesPanel";
import Sidebar from "./Sidebar";

export const Home = () => {
  const imageTemplate = {
    id: "img-1",
    width: 200,
    height: 120,
    rounded: true,
    alt: "Node Icon",
  };

  const triggerNodeTemplate = {
    id: "node-trigger-1",
    type: "trigger",
    label: "Trigger",

    title: "Trigger",
    description: "Runs at a scheduled interval",
    status: "active",

    triggerType: "Time-based Trigger",

    schedule: {
      allDay: false,
      starts: "2025-01-10T10:00:00",
      ends: "2025-01-10T18:00:00",
      frequency: "none",
      timeZone: "UTC-5:00",
    },
  };
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <FlowCanvasWrapper />
      </div>
      <PropertiesPanel
        selectedNode={triggerNodeTemplate}
        selectedImage={imageTemplate}
        onUpdateNode={(updated) => console.log(updated)}
      ></PropertiesPanel>
    </div>
  );
};
