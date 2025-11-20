### How the UI hangs together

- `src/components/Sidebar.jsx` renders the "Nodes Library". Every card comes from the shared `NODES` list and exposes `onDragStart`, so React Flow can pick up the node type while dragging.
- `src/components/FlowCanvas.jsx` wraps `ReactFlowProvider`, keeps undo/redo history, and wires up `useOnSelectionChange` to broadcast the active node.
- `src/components/PropertiesPanel.jsx` listens for the selection and shows whatever metadata we decide to stash in the node’s `data` payload. 
- `src/components/common/NodeCard.jsx` draws both the sidebar entries and the canvas nodes, so styling stays consistent.
- `src/components/JsonViewer.jsx` is the little toggle in the bottom-right panel that dumps the node/edge arrays for debugging.
- `src/formData` holds all the form schemas/ui-schemas for specific node types.
- `src/utill` (typo retained) contains helpers plus the constants described below.

### Flow of data: from sidebar to properties panel

1. **Pick a node in the sidebar** – dragging a card fires `onDragStart`, storing its `type` in the drag payload (`application/reactflow`).
2. **Drop it on the canvas** – `FlowCanvas` reads that payload inside `onDrop`, converts screen coordinates to flow coordinates, and appends a new node with `data: { type, label, isCanvas: true }`.
3. **Select the node** – React Flow emits selection events. `useOnSelectionChange` forwards the selected node to the `Home` component, which keeps it in `selectedNode`.
4. **Properties panel update** – `PropertiesPanel` receives `selectedNode` as a prop and can render custom editors or JSON based on the node’s `data`. That’s the bridge for any future forms (e.g., action configuration, retry logic).

### Constants cheat sheet

All node-facing strings live in `src/utill/NodeConstants.js`:

- `NODES`: master list that drives both the sidebar menu and the rendering of available node cards. Each entry has a `type` (logic value) and a `label` (UI text).
- `NodeType`: frozen lookup built from `NODES`, so we can reference `NodeType.Trigger` instead of magic strings in forms and select menus.
- `ActionType`, `TriggerType`, `DelayType`, `ConditionalType`, `DecisionType`, `NotificationType`: descriptive labels used to populate dropdowns in `src/formData/nodeTriggerTypes.js` and in the detailed forms under `src/formData`.
- `NODEDESCRIPTION`: single-sentence blurbs used inside the node cards for quick reminders (e.g., Trigger = “Start event”).

Whenever a new node category is introduced, update `NODES`, extend `NodeType`, optionally add an enum (ActionType, etc.), and register any trigger options inside `nodeTriggerTypes`.
