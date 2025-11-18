const ApiCallFormUiSchema = {
  endpointUrl: {
    "ui:placeholder": "https://api.example.com/update_status",
  },

  httpMethod: {
    "ui:widget": "select",
  },

  headers: {
    "ui:widget": "textarea",
    "ui:placeholder": "Type your headers here",
  },

  body: {
    "ui:widget": "textarea",
    "ui:placeholder": "Type your body here",
  },

  responseFormat: {
    "ui:widget": "select",
  },

  storeVariable: {
    "ui:widget": "select",
  },

  retryOnFailure: {
    // "ui:widget": "ToggleWidget",
  },
};

export default ApiCallFormUiSchema;
