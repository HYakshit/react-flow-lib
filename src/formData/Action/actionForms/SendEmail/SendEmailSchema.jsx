const SendEmailSchema = {
  type: "object",
  properties: {
    sendTo: {
      type: "string",
      title: "Send To",
      format: "email",
      default: "",
    },
    ccBcc: {
      type: "string",
      title: "CC / BCC",
      default: "",
    },
    subject: {
      type: "string",
      title: "Subject",
      default: "",
    },
    emailBody: {
      type: "string",
      title: "Email Body",
      default: "",
    },
    priority: {
      type: "string",
      title: "Priority",
      enum: ["Low", "Normal", "High"],
      default: "Normal",
    },
    retryOnFailure: {
      type: "boolean",
      title: "Retry on Failure",
      default: false,
    },
    numberOfRetries: {
      type: "integer",
      title: "Number of retries",
      default: 3,
      minimum: 0,
      maximum: 10,
    },
  },
  required: ["sendTo", "subject", "emailBody"],
};

export default SendEmailSchema;
