const nodeTriggerTypes = {
  Trigger: [
    "Select Type",
    "Time-based Trigger",
    "Event-based Trigger",
    "Conditional Trigger",
    "System Trigger",
  ],
  Action: [
    "Select Type",

    "API Call",
    "Database Update",
    "Send Email",
    "Webhook",
    "File Operations",
  ],
  Delay: [
    "Select Type",

    "Wait for Duration",
    "Wait until Date/Time",
    "Pause until Condition",
  ],
  Conditional: ["If Condition Met", "If Not Met"],
  Decision: ["Switch/Route Based on Value", "Multi-Branch Decision"],
  Notification: [
    "Send Email Notification",
    "Send Push Notification",
    "Send SMS Notification",
  ],
  "AI Agent": ["Text Analysis", "Image Processing", "Chatbot Response"],
  System: ["Log Event", "Error Handling", "Retry Logic"],
};
export default nodeTriggerTypes;
