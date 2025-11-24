const DatabaseUpdateSchema = {
  title: "Update Record Settings",
  type: "object",
  required: ["dataSource", "objectType", "recordId", "fieldsToUpdate"],
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
      title: "Fields to Update",
      description:
        "Specify the fields and values to update (JSON or key:value pairs)",
    },
    conditionsForUpdate: {
      type: "string",
      title: "Conditions for Update",
      description: "Specify any conditions (optional)",
    },
    includeUpdatedData: {
      type: "boolean",
      title: "Include Updated Data in Workflow",
    },
  },
};

export default DatabaseUpdateSchema;
