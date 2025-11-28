const ConditionalDelayUiSchema = {
  conditionExpression: {
    "ui:widget": "styledTextarea",
    "ui:placeholder": "order.status === 'READY'",
  },
  pollingInterval: {
    "ui:widget": "customDropdown",
  },
  timeoutMinutes: {
    "ui:widget": "styledText",
    "ui:placeholder": "60",
  },
  timeoutBehavior: {
    "ui:widget": "customDropdown",
  },
};

export default ConditionalDelayUiSchema;


