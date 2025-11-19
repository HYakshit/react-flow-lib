 const DatabaseUpdateUiSchema = {
  "dataSource": {
    "ui:widget": "select"
  },
  "objectType": {
    "ui:widget": "select"
  },
  "recordId": {
    "ui:placeholder": "e.g. {{order.id}}"
  },
  "fieldsToUpdate": {
    "ui:widget": "textarea",
    "ui:placeholder": "Type your fields here"
  },
  "conditionsForUpdate": {
    "ui:widget": "textarea",
    "ui:placeholder": "Type your conditions here"
  },
  "includeUpdatedData": {
    "ui:widget": "checkbox"
  },
  "ui:order": [
    "dataSource",
    "objectType",
    "recordId",
    "fieldsToUpdate",
    "conditionsForUpdate",
    "includeUpdatedData"
  ]
}
export default DatabaseUpdateUiSchema;