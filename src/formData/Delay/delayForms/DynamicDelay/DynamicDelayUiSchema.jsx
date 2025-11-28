const DynamicDelayUiSchema = {
  durationExpression: {
    "ui:widget": "styledText",
    "ui:placeholder": "order.processing_time * 2",
  },
  maxWaitTime: {
    "ui:widget": "customDropdown",
  },
};

export default DynamicDelayUiSchema;


