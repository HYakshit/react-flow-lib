import React, { useCallback, useState } from "react";
import { getSidebarWidth } from "./Sidebar";
import {
  ReactFlow,
  addEdge,
  Background,
  Controls,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Panel,
} from "@xyflow/react";
import {
  Zap, // Trigger
  Play, // Action
  Bell, // Notification
  GitBranch, // Conditional
  Clock, // Delay
  RefreshCw, // Loop
  Workflow, // Sub-process
  SplitSquareHorizontal, // Parallel
  GitFork, // Decision
} from "lucide-react";
import "@xyflow/react/dist/style.css";
import { iconNode } from "./customNodes/customNodes";
import { Navbar } from "./common/Navbar";
import JsonViewer from "./JsonViewer";
const nodeTypes = {
  Trigger: iconNode,
  Action: iconNode,
  Notification: iconNode,
  Conditional: iconNode,
  Delay: iconNode,
  Loop: iconNode,
  subprocess: iconNode,
  parallel: iconNode,
  Descision: iconNode,
};
const nodeIcons = {
  Trigger: <Zap size={20} />,
  Action: <Play size={20} />,
  Notification: <Bell size={20} />,
  Conditional: <GitBranch size={20} />,
  Delay: <Clock size={20} />,
  Loop: <RefreshCw size={20} />,
  subprocess: <Workflow size={20} />,
  parallel: <SplitSquareHorizontal size={20} />,
  Descision: <GitFork size={20} />,
};
function FlowCanvas() {
  const initialNodes = [];
  const initialEdges = [];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [show, setShow] = useState(false);
  const reactFlowInstance = useReactFlow();

  function handleSetShow(val) {
    setShow(val);
  }
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDrop = useCallback(
    (event) => {
      // event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX - getSidebarWidth(),
        y: event.clientY,
      });
      const id = `${+new Date()}`;
      let newNode = {
        id: id,
        type: type,
        position,
        data: { label: `${type} Node`, icon: nodeIcons[type] },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  return (
    <div
      className="w-full h-full bg-gray-100"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <ReactFlow
       className="bg-black"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      >
        <Panel position="top-center">
          {" "}
          <Navbar></Navbar>{" "}
        </Panel>
        <Panel position="bottom-right">
          {" "}
          <JsonViewer
            nodes={nodes}
            edges={edges}
            show={show}
            handleSetShow={handleSetShow}
          ></JsonViewer>{" "}
        </Panel>
        <Controls />
      </ReactFlow>
    </div>
  );
}
export default function FlowCanvasWrapper() {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
}
