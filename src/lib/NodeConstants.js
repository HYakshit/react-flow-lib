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

export const Action = {
  SelectType: {
    label: "Select Type",
    description: "Select a type for this action",
  },

  APICall: {
    label: "API Call",
    description: "API Call Settings",
  },

  UserAction: {
    label: "User Action",
    description: "User Action Settings",
  },

  UpdateRecord: {
    label: "Update Record",
    description: "Update Record Settings",
  },

  SendEmail: {
    label: "Send Email",
    description: "Email Settings",
  },

  Webhook: {
    label: "Webhook",
    description: "Webhook Settings",
  },

  CreateRecord: {
    label: "Create Record",
    description: "Create Record Settings",
  },
};

export const TriggerType = {
  SelectType: {
    label: "Select Type",
    description: "Select a trigger type",
  },
  formAction: {
    label: "Form Action",
    description: "Create Form Trigger",
  },
  TimeBased: {
    label: "Time-based Trigger",
    description: "Trigger based on specific time or schedule",
  },
  EventBased: {
    label: "Event-based Trigger",
    description: "Trigger when an event occurs",
  },
  Conditional: {
    label: "Conditional Trigger",
    description: "Trigger when a condition becomes true",
  },
  System: {
    label: "System Trigger",
    description: "Trigger based on system-level events",
  },
};

export const DelayType = {
  SelectType: {
    label: "Select Delay Type",
    description: "Choose how long to pause this workflow",
  },
  Fixed: {
    label: "Fixed Delay",
    description: "Pause for a fixed amount of time",
  },
  Dynamic: {
    label: "Dynamic Delay",
    description: "Calculate the delay from data or expressions",
  },
  Conditional: {
    label: "Conditional Delay",
    description: "Wait until a condition evaluates to true",
  },
  UntilSpecificDate: {
    label: "Until Specific Date/Time",
    description: "Resume the workflow at a scheduled moment",
  },
};

export const ConditionalType = {
  IfMet: {
    label: "If Condition Met",
    description: "Run this branch if the condition is met",
  },
  IfNotMet: {
    label: "If Not Met",
    description: "Run this branch if the condition is not met",
  },
};

export const DecisionType = {
  SwitchRoute: {
    label: "Switch/Route Based on Value",
    description: "Route workflow based on a selected value",
  },
  MultiBranch: {
    label: "Multi-Branch Decision",
    description: "Create multiple branches based on conditions",
  },
};

export const NotificationType = {
  SelectType: {
    label: "Select Type",
    description: "Select a type for this action",
  },
  Email: {
    label: "Send Email Notification",
    description: "Email notification settings",
  },
  Push: {
    label: "Send Push Notification",
    description: "Push notification settings",
  },
  SMS: {
    label: "Send SMS Notification",
    description: "SMS notification settings",
  },
  Call: {
    label: "Call Notification",
    description: "Call notification settings",
  },
};

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
