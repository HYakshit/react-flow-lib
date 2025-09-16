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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  RectangleNode,
  CircleNode,
  DiamondNode,
  Oval,
  Parallelogram,
} from "./customNodes/customNodes";
const nodeTypes = {
  rectangle: RectangleNode,
  circle: CircleNode,
  diamond: DiamondNode,
  oval: Oval,
  parallelogram: Parallelogram,
};
function FlowCanvas() {
  const initialNodes = [];
  const initialEdges = [];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isStart, setIsStart] = useState(true);
  const reactFlowInstance = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  function onovalChange(id, newValue) {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? {
              ...node,
              data: { ...node.data, value: newValue }, // update node data
            }
          : node
      )
    );
  }

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
        data: { label: `${type} Node` },
      };

      if (type === "oval") {
        const id = `${+new Date()}`;
        newNode = {
          id: id,
          type,
          position,
          data: {
            label: `${type} Node`,
            value: "start", // default
            onovalChange: (val) => onovalChange(id, val),
          },
        };
      }

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  return (
    <div
      className="w-full h-full"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      >
        <Background />
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
