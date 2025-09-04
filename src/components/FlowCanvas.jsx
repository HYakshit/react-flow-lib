import React, { useCallback } from "react";
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

function FlowCanvas() {
    const initialNodes = [];
    const initialEdges = [];

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const reactFlowInstance = useReactFlow();

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

            const newNode = {
                id: `${+new Date()}`,
                type: "default",
                position,
                data: { label: `${type} Node` },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance, setNodes]
    );

    return (
        <div
            className="w-full h-full"
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()} // ✅ allow drop
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
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