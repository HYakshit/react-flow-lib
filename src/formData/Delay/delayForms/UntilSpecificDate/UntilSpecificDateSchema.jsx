const UntilSpecificDateSchema = {
  type: "object",
  required: ["targetDateTime"],
  properties: {
    targetDateTime: {
      type: "string",
      format: "date-time",
      title: "Target Date/Time",
    },
    timezone: {
      type: "string",
      title: "Timezone",
      enum: [
        "UTC",
        "America/Los_Angeles",
        "America/New_York",
        "Europe/London",
        "Asia/Kolkata",
      ],
      default: "UTC",
    },
    fallbackAfter: {
      type: "string",
      title: "Fallback After",
      enum: ["No fallback", "1 hour", "6 hours", "24 hours"],
      default: "No fallback",
    },
  },
};

export default UntilSpecificDateSchema;

