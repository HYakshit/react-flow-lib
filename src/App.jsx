import FlowCanvas from "./components/FlowCanvas";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <FlowCanvas />
      </div>
    </div>
  );
}
