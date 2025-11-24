// JsonForm.jsx
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import TriggerScheduleSchema from "./TriggerScheduleSchema";
import TriggerScheduleUiSchema from "./TriggerScheduleUiSchema";
import formWidgets from "../widgets";

const TriggerScheduleForm = () => {
  const log = (type) => console.log.bind(console, type);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <Form
        schema={TriggerScheduleSchema}
        uiSchema={TriggerScheduleUiSchema}
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

export default TriggerScheduleForm;
