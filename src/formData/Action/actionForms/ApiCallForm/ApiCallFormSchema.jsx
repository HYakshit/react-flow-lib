const ApiCallFormSchema = {
  type: "object",
  properties: {
    endpointUrl: {
      type: "string",
      title: "API Endpoint URL",
      default: "https://api.example.com/update_status",
    },

    httpMethod: {
      type: "string",
      title: "HTTP Method",
      enum: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      default: "GET",
    },

    headers: {
      type: "string",
      title: "Headers",
      default: "",
      description: "",
    },

    body: {
      type: "string",
      title: "Body/Payload",
      default: "",
    },

    responseFormat: {
      type: "string",
      title: "Expected Response Format",
      enum: ["JSON", "XML", "Text"],
      default: "JSON",
    },

    storeVariable: {
      type: "string",
      title: "Store Response in Variable",
      enum: [
        "orderUpdateResponse",
        "apiResponse",
        "workflowVariable",
        "customVariable",
      ],
      default: "orderUpdateResponse",
    },

    retryOnFailure: {
      type: "boolean",
      title: "Retry on Failure",
    },
  },
};

export default ApiCallFormSchema;
