import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import UntilSpecificDateSchema from "./UntilSpecificDateSchema";
import UntilSpecificDateUiSchema from "./UntilSpecificDateUiSchema";
import formWidgets from "../../../Forms/widgets";

const UntilSpecificDateForm = () => {
  const log = (type) => console.log.bind(console, type);
  return (
    <div className="max-w-xl">
      <Form
        schema={UntilSpecificDateSchema}
        uiSchema={UntilSpecificDateUiSchema}
        validator={validator}
        widgets={formWidgets}
        onChange={log("until-date:changed")}
        onSubmit={log("until-date:submitted")}
        onError={log("until-date:errors")}
        templates={{
          ButtonTemplates: {
            SubmitButton: () => null,
          },
        }}
      />
    </div>
  );
};

export default UntilSpecificDateForm;


