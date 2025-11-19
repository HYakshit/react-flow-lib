const DatabaseUpdateSchema = {
  "type": "object",
  "properties": {
    "dataSource": {
      "type": "string",
      "title": "Data Source",
      "enum": ["CRM System"]
    },
    "objectType": {
      "type": "string",
      "title": "Object Type",
      "enum": ["Order"]
    },
    "recordId": {
      "type": "string",
      "title": "Record ID",
      "default": "{{order.id}}"
    },
    "fieldsToUpdate": {
      "type": "string",
      "title": "Fields to Update"
    },
    "conditionsForUpdate": {
      "type": "string",
      "title": "Conditions for Update"
    },
    "includeUpdatedData": {
      "type": "boolean",
      "title": "Include Updated Data in Workflow"
    }
  },
  "required": ["dataSource", "objectType", "recordId"]
}
export default DatabaseUpdateSchema;