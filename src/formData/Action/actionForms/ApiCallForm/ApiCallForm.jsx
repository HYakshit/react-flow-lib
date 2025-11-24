// JsonForm.jsx
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import ApiCallFormSchema from "./ApiCallFormSchema";
import ApiCallFormUiSchema from "./ApiCallFormUiSchema";
import formWidgets from "../../../Forms/widgets";

const ApiCallForm = ({ nodeLabel }) => {
  const log = (type) => console.log.bind(console, type);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <Form
        schema={ApiCallFormSchema}
        uiSchema={ApiCallFormUiSchema}
        validator={validator}
        widgets={formWidgets}
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

export default ApiCallForm;
