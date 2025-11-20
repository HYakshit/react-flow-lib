export const NODES = [
  { type: "Trigger", label: "Trigger" },
  { type: "Action", label: "Action" },
  { type: "Notification", label: "Notification" },
  { type: "Conditional", label: "Conditional" },
  { type: "Delay", label: "Delay" },
  { type: "Loop", label: "Loop" },
  { type: "SubProcess", label: "Sub-process" },
  { type: "Parallel", label: "Parallel" },
  { type: "Decision", label: "Decision" },
];
export const NodeType = Object.freeze(
  NODES.reduce((acc, node) => {
    acc[node.type] = node.type; // { Trigger: "Trigger", Action: "Action", ... }
    return acc;
  }, {})
);

export const ActionType = Object.freeze({
  APICall: "API Call",
  DatabaseUpdate: "Database Update",
  SendEmail: "Send Email",
  Webhook: "Webhook",
  FileOperations: "File Operations",
});
export const TriggerType = Object.freeze({
  TimeBased: "Time-based Trigger",
  EventBased: "Event-based Trigger",
  Conditional: "Conditional Trigger",
  System: "System Trigger",
});
export const DelayType = Object.freeze({
  WaitDuration: "Wait for Duration",
  WaitUntil: "Wait until Date/Time",
  PauseUntil: "Pause until Condition",
});
export const ConditionalType = Object.freeze({
  IfMet: "If Condition Met",
  IfNotMet: "If Not Met",
});
export const DecisionType = Object.freeze({
  SwitchRoute: "Switch/Route Based on Value",
  MultiBranch: "Multi-Branch Decision",
});
export const NotificationType = Object.freeze({
  Email: "Send Email Notification",
  Push: "Send Push Notification",
  SMS: "Send SMS Notification",
});

export const NODEDESCRIPTION = {
  Trigger: "Start event",
  Action: "Perform task",
  Notification: "Send alert",
  Conditional: "Check condition",
  Delay: "Add pause",
  Loop: "Repeat task",
  SubProcess: "Nested flow",
  Parallel: "Run simultaneously",
  Decision: "Make choice",
};
