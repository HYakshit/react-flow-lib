const GeneralSchema = {
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "title": "Title",
      "default": "Trigger"
    },
    "status": {
      "type": "string",
      "title": "Status",
      "enum": ["Active", "Inactive"],
      "default": "Active"
    },
    "description": {
      "type": "string",
      "title": "Description",
      "default": "Initiate workflows"
    }
  },
  "required": ["title", "status"]
};

export default GeneralSchema;
