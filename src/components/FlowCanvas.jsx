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
import "@xyflow/react/dist/style.css";
import { iconNode } from "./customNodes/customNodes";
import { Navbar } from "./common/Navbar";
import JsonViewer from "./JsonViewer";
import { nodeIcons } from "../utill/Icons";
import { NodeCard } from "./common/NodeCard";
const nodeTypes = {
  Trigger: NodeCard,
  Action: NodeCard,
  Notification: NodeCard,
  Conditional: NodeCard,
  Delay: NodeCard,
  Loop: NodeCard,
  Subprocess: NodeCard,
  Parallel: NodeCard,
  Decision: NodeCard,
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
    event.preventDefault();
    const type = event.dataTransfer.getData("application/reactflow");
    if (!type) return;

    const position = reactFlowInstance.screenToFlowPosition({
      x: event.clientX - getSidebarWidth(),
      y: event.clientY,
    });

    const id = `${Date.now()}`;
    const nodedata = { type, label: type, isCanvas:true };

    const newNode = {
      id,
      type,         // tells React Flow which nodeType to render
      position,
      data: nodedata, // pass plain data, not components
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
