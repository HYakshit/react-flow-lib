const ConditionalSchema = {
  "type": "object",
  "properties": {
    "condition": {
      "type": "string",
      "title": "Title",
      "default": "Trigger"
    },
  },
  "required": ["title", ]
};

export default ConditionalSchema;
