import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import ConditionalDelaySchema from "./ConditionalDelaySchema";
import ConditionalDelayUiSchema from "./ConditionalDelayUiSchema";
import formWidgets from "../../../Forms/widgets";

const ConditionalDelayForm = () => {
  const log = (type) => console.log.bind(console, type);
  return (
    <div className="max-w-xl">
      <Form
        schema={ConditionalDelaySchema}
        uiSchema={ConditionalDelayUiSchema}
        validator={validator}
        widgets={formWidgets}
        onChange={log("conditional-delay:changed")}
        onSubmit={log("conditional-delay:submitted")}
        onError={log("conditional-delay:errors")}
        templates={{
          ButtonTemplates: {
            SubmitButton: () => null,
          },
        }}
      />
    </div>
  );
};

export default ConditionalDelayForm;


