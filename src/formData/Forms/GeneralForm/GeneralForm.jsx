// JsonForm.jsx
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import GeneralSchema from "./GeneralSchema";
import GeneralUiSchema from "./GeneralUiSchema";
import { NODEDESCRIPTION } from "../../../lib/NodeConstants";

const GeneralForm = ({ nodeLabel }) => {
  const log = (type) => console.log.bind(console, type);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <Form
        schema={GeneralSchema}
        uiSchema={GeneralUiSchema}
        formData={{
          description: NODEDESCRIPTION[nodeLabel],
        }}
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

export default GeneralForm;
