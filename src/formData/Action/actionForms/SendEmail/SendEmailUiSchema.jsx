const SendEmailUiSchema = {
  sendTo: {
    "ui:widget": "styledText",
    "ui:placeholder": "user@example.com",
  },
  ccBcc: {
    "ui:widget": "styledText",
    "ui:placeholder": "manager@example.com",
  },
  subject: {
    "ui:widget": "styledText",
    "ui:placeholder": "Type your subject here...",
  },
  emailBody: {
    "ui:widget": "styledTextarea",
    "ui:placeholder": "Type your message here...",
    "ui:options": {
      rows: 5,
    },
  },
  priority: {
    "ui:widget": "customDropdown",
  },
  retryOnFailure: {
    "ui:widget": "styledToggle",
  },
  numberOfRetries: {
    "ui:widget": "styledText",
  },
};

export default SendEmailUiSchema;
