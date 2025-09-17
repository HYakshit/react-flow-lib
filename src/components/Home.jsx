import FlowCanvasWrapper from "./FlowCanvas";
import Sidebar from "./Sidebar";

export const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <FlowCanvasWrapper />
      </div>
    </div>
  );
};
