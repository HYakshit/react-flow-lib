// JsonForm.jsx
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import RetrySettingsSchema from "./RetrySettingsSchema";
import RetrySettingsUiSchema from "./RetrySettingsUiSchema";
import formWidgets from "../widgets";

const RetrySettingsForm = () => {
  const log = (type) => console.log.bind(console, type);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <Form
        schema={RetrySettingsSchema}
        uiSchema={RetrySettingsUiSchema}
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

export default RetrySettingsForm;
