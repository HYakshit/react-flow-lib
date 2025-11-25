const CreateRecordSchema = {
  title: "Create Record Settings",
  type: "object",
  required: ["dataSource", "objectType", "fieldsToUpdate", "assignTo"],
  properties: {
    dataSource: {
      type: "string",
      title: "Data Source",
      enum: ["CRM System", "ERP System", "Custom DB"],
    },
    objectType: {
      type: "string",
      title: "Object Type",
      enum: ["Order", "Customer", "Product", "Custom Object"],
    },
    recordId: {
      type: "string",
      title: "Record ID",
      default: "{{order.id}}",
    },
    fieldsToUpdate: {
      type: "string",
      title: "Fields to Create",
      description:
        "Specify the fields and initial values (JSON or key:value pairs)",
    },
    conditionsForUpdate: {
      type: "string",
      title: "Conditions",
      description: "Specify any preconditions (optional)",
    },
    assignTo: {
      type: "string",
      title: "Assign to User/Team",
      enum: [
        "Sales Team",
        "Marketing Team",
        "Fulfillment Team",
        "Custom Assignee",
      ],
      default: "Sales Team",
    },
  },
};

export default CreateRecordSchema;
