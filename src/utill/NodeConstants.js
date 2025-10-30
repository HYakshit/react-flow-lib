export  const nodes = [
    { type: "Trigger", label: "Trigger" },
    { type: "Action", label: "Action" },
    { type: "Notification", label: "Notification" },
    { type: "Conditional", label: "Conditional" },
    { type: "Delay", label: "Delay" },
    { type: "Loop", label: "Loop" },
    { type: "Subprocess", label: "Sub-process" },
    { type: "Parallel", label: "Parallel" },
    { type: "Decision", label: "Decision" },
  ];

 export const nodeDescription = {
  Trigger: "Start event",
  Action: "Perform task",
  Notification: "Send alert",
  Conditional: "Check condition",
  Delay: "Add pause",
  Loop: "Repeat task",
  Subprocess: "Nested flow",
  Parallel: "Run simultaneously",
  Decision: "Make choice",
};
