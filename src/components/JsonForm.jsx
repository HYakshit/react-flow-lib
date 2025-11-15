// JsonForm.jsx
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import TriggerUiSchema from "../formData/Trigger/TriggerUiSchema";
import TriggerSchema from "../formData/Trigger/TriggerSchema";



const JsonForm = () => {
  const log = (type) => console.log.bind(console, type);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <Form
        schema={TriggerSchema}
        uiSchema={TriggerUiSchema}
        validator={validator}
        // onChange={log("changed")}
        // onSubmit={log("submitted")}
        // onError={log("errors")}
      />
    </div>
  );
};

export default JsonForm;
