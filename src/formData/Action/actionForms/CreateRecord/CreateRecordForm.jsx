import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import CreateRecordSchema from "./CreateRecordSchema";
import CreateRecordUiSchema from "./CreateRecordUiSchema";
import formWidgets from "../../../Forms/widgets";

const CreateRecordForm = () => {
  const log = (type) => console.log.bind(console, type);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <Form
        schema={CreateRecordSchema}
        uiSchema={CreateRecordUiSchema}
        validator={validator}
        widgets={formWidgets}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        templates={{
          ButtonTemplates: {
            SubmitButton: () => null,
          },
        }}
      />
    </div>
  );
};

export default CreateRecordForm;

