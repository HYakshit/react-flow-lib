const ConditionalDelaySchema = {
  type: "object",
  required: ["conditionExpression", "pollingInterval"],
  properties: {
    conditionExpression: {
      type: "string",
      title: "Condition Expression",
      default: "order.status === 'READY'",
    },
    pollingInterval: {
      type: "string",
      title: "Polling Interval",
      enum: ["30 seconds", "1 minute", "5 minutes", "15 minutes"],
      default: "1 minute",
    },
    timeoutMinutes: {
      type: "number",
      title: "Timeout (minutes)",
      default: 60,
      minimum: 1,
    },
    timeoutBehavior: {
      type: "string",
      title: "On Timeout",
      enum: ["Continue workflow", "Raise alert", "Fail workflow"],
      default: "Continue workflow",
    },
  },
};

export default ConditionalDelaySchema;

