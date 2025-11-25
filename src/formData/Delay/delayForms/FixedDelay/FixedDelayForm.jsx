import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import FixedDelaySchema from "./FixedDelaySchema";
import FixedDelayUiSchema from "./FixedDelayUiSchema";
import formWidgets from "../../../Forms/widgets";

const FixedDelayForm = () => {
  const log = (type) => console.log.bind(console, type);
  return (
    <div className="max-w-xl">
      <Form
        schema={FixedDelaySchema}
        uiSchema={FixedDelayUiSchema}
        validator={validator}
        widgets={formWidgets}
        onChange={log("fixed-delay:changed")}
        onSubmit={log("fixed-delay:submitted")}
        onError={log("fixed-delay:errors")}
        templates={{
          ButtonTemplates: {
            SubmitButton: () => null,
          },
        }}
      />
    </div>
  );
};

export default FixedDelayForm;

