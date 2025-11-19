// JsonForm.jsx
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import DatabaseUpdateUiSchema from "./DatabaseUpdateUiSchema";
import DatabaseUpdateSchema from "./DatabaseUpdateSchema";

const DatabaseUpdateForm = ({ nodeLabel }) => {
  const log = (type) => console.log.bind(console, type);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <Form
        schema={DatabaseUpdateSchema}
        uiSchema={ DatabaseUpdateUiSchema }
      
        validator={validator}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        templates={{
          ButtonTemplates: {
            SubmitButton: () => null, // fully hide submit
          },
        }}
      />
    </div>
  );
};

export default DatabaseUpdateForm;
