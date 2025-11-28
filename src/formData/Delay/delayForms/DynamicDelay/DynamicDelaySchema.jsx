const DynamicDelaySchema = {
  type: "object",
  required: ["durationExpression", "maxWaitTime"],
  properties: {
    durationExpression: {
      type: "string",
      title: "Duration Expression",
      default: "order.processing_time * 2",
    },
    maxWaitTime: {
      type: "string",
      title: "Max Wait Time",
      enum: ["15 minutes", "1 hour", "6 hours", "12 hours", "24 hours"],
      default: "24 hours",
    },
  },
};

export default DynamicDelaySchema;


