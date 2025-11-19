import { useCallback, useState, useRef, useEffect } from "react";
import { getSidebarWidth } from "./Sidebar";
import {
  ReactFlow,
  addEdge,
  Controls,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Panel,
  MarkerType,
  useOnSelectionChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Navbar } from "./common/Navbar";
import JsonViewer from "./JsonViewer";
import { NodeCard } from "./common/NodeCard";
const nodeTypes = {
  Trigger: NodeCard,
  Action: NodeCard,
  Notification: NodeCard,
  Conditional: NodeCard,
  Delay: NodeCard,
  Loop: NodeCard,
  SubProcess: NodeCard,
  Parallel: NodeCard,
  Decision: NodeCard,
};

function FlowCanvas({ onNodeSelect }) {
  const initialNodes = [];
  const initialEdges = [{ markerEnd: { type: MarkerType.ArrowClosed } }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [show, setShow] = useState(false);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const reactFlowInstance = useReactFlow();

  // Undo/Redo state management
  const historyRef = useRef([{ nodes: initialNodes, edges: initialEdges }]);
  const historyIndexRef = useRef(0);
  const isUndoRedoRef = useRef(false);

  // Update undo/redo availability
  const updateUndoRedoState = useCallback(() => {
    setCanUndo(historyIndexRef.current > 0);
    setCanRedo(historyIndexRef.current < historyRef.current.length - 1); // if we have historyRef array of greater length than current index, we can redo
  }, []);

  // Save state to history
  const saveToHistory = useCallback((nodesToSave, edgesToSave) => {
    if (isUndoRedoRef.current) {
      isUndoRedoRef.current = false;
      return;
    }

    const currentState = { nodes: nodesToSave, edges: edgesToSave };
    const currentIndex = historyIndexRef.current;
    const newHistory = historyRef.current.slice(0, currentIndex + 1);

    // Only save if state actually changed
    const lastState = newHistory[newHistory.length - 1];
    if (
      JSON.stringify(lastState.nodes) !== JSON.stringify(currentState.nodes) ||
      JSON.stringify(lastState.edges) !== JSON.stringify(currentState.edges)
    ) {
      newHistory.push(currentState);
      historyRef.current = newHistory;
      historyIndexRef.current = newHistory.length - 1;

      // Limit history size to prevent memory issues
      if (historyRef.current.length > 50) {
        historyRef.current.shift();
        historyIndexRef.current--;
      }
    }
  }, []);

  // Initialize undo/redo state
  useEffect(() => {
    updateUndoRedoState();
  }, [updateUndoRedoState]);

  // Save to history when nodes or edges change
  useEffect(() => {
    if (!isUndoRedoRef.current) {
      const timeoutId = setTimeout(() => {
        saveToHistory(nodes, edges);
        updateUndoRedoState();
      }, 300); // Debounce to avoid too many history entries

      return () => clearTimeout(timeoutId);
    }
  }, [nodes, edges, saveToHistory, updateUndoRedoState]);

  // Undo function
  const undo = useCallback(() => {
    if (historyIndexRef.current > 0) {
      historyIndexRef.current--;
      const previousState = historyRef.current[historyIndexRef.current];
      isUndoRedoRef.current = true;
      setNodes(previousState.nodes);
      setEdges(previousState.edges, {
        markerEnd: { type: MarkerType.ArrowClosed },
      });
      updateUndoRedoState();
    }
  }, [setNodes, setEdges, updateUndoRedoState]);

  // Redo function
  const redo = useCallback(() => {
    if (historyIndexRef.current < historyRef.current.length - 1) {
      historyIndexRef.current++;
      const nextState = historyRef.current[historyIndexRef.current];
      isUndoRedoRef.current = true;
      setNodes(nextState.nodes);
      setEdges(nextState.edges, {
        markerEnd: { type: MarkerType.ArrowClosed },
      });
      updateUndoRedoState();
    }
  }, [setNodes, setEdges, updateUndoRedoState]);

  // Reset function - clears all nodes, edges, and history
  const reset = useCallback(() => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset the flowchart?"
    );
    if (!confirmReset) return;

    // Clear nodes and edges
    isUndoRedoRef.current = true;
    setNodes(initialNodes);
    setEdges(initialEdges);

    // Reset history
    historyRef.current = [{ nodes: initialNodes, edges: initialEdges }];
    historyIndexRef.current = 0;

    // Update undo/redo state
    updateUndoRedoState();

    // Reset viewport to fit view
    setTimeout(() => {
      reactFlowInstance.fitView();
    }, 0);
  }, [setNodes, setEdges, updateUndoRedoState, reactFlowInstance]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "z" &&
        !event.shiftKey
      ) {
        event.preventDefault();
        undo();
      } else if (
        ((event.ctrlKey || event.metaKey) && event.key === "y") ||
        ((event.ctrlKey || event.metaKey) &&
          event.shiftKey &&
          event.key === "Z")
      ) {
        event.preventDefault();
        redo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo, redo]);

  function handleSetShow(val) {
    setShow(val);
  }
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: { type: MarkerType.ArrowClosed },
          },
          eds
        )
      ),
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
      const nodedata = { type, label: type, isCanvas: true };

      const newNode = {
        id,
        type, // tells React Flow which nodeType to render
        position,
        data: nodedata, // pass plain data, not components
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  useOnSelectionChange({
    onChange: ({ nodes: selectedNodes }) => {
      if (onNodeSelect) {
        onNodeSelect(selectedNodes[0] || null);
      }
    },
  });

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
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      >
        <Panel position="top-center">
          {" "}
          <Navbar
            onUndo={undo}
            onRedo={redo}
            onReset={reset}
            canUndo={canUndo}
            canRedo={canRedo}
          ></Navbar>{" "}
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
        {/* <Panel position="center-right">
          {" "}
         {" "}
        </Panel> */}
        <Controls />
      </ReactFlow>
    </div>
  );
}
export default function FlowCanvasWrapper(props) {
  return (
    <ReactFlowProvider>
      <FlowCanvas {...props} />
    </ReactFlowProvider>
  );
}
