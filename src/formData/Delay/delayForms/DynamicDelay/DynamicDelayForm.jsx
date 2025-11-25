import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import DynamicDelaySchema from "./DynamicDelaySchema";
import DynamicDelayUiSchema from "./DynamicDelayUiSchema";
import formWidgets from "../../../Forms/widgets";

const DynamicDelayForm = () => {
  const log = (type) => console.log.bind(console, type);
  return (
    <div className="max-w-xl">
      <Form
        schema={DynamicDelaySchema}
        uiSchema={DynamicDelayUiSchema}
        validator={validator}
        widgets={formWidgets}
        onChange={log("dynamic-delay:changed")}
        onSubmit={log("dynamic-delay:submitted")}
        onError={log("dynamic-delay:errors")}
        templates={{
          ButtonTemplates: {
            SubmitButton: () => null,
          },
        }}
      />
    </div>
  );
};

export default DynamicDelayForm;

