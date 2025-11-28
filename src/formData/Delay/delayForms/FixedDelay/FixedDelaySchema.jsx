const FixedDelaySchema = {
  type: "object",
  required: ["timeUnits", "delayAmount"],
  properties: {
    timeUnits: {
      type: "string",
      title: "Time Units",
      enum: ["Seconds", "Minutes", "Hours", "Days"],
      default: "Minutes",
    },
    delayAmount: {
      type: "number",
      title: "Delay Amount",
      minimum: 0,
      default: 3,
    },
  },
};

export default FixedDelaySchema;


