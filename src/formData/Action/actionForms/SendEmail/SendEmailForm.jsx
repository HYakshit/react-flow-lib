import { useMemo, useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import SendEmailSchema from "./SendEmailSchema";
import SendEmailUiSchema from "./SendEmailUiSchema";
import formWidgets from "../../../Forms/widgets";

const DEFAULT_FORM_DATA = {
  sendTo: "",
  ccBcc: "",
  subject: "",
  emailBody: "",
  priority: SendEmailSchema.properties.priority.default,
  retryOnFailure: SendEmailSchema.properties.retryOnFailure.default,
  numberOfRetries: SendEmailSchema.properties.numberOfRetries.default,
};

const SendEmailForm = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  // Disable retries input when toggle is off so UI matches design
  const derivedUiSchema = useMemo(
    () => ({
      ...SendEmailUiSchema,
      numberOfRetries: {
        ...SendEmailUiSchema.numberOfRetries,
        "ui:disabled": !formData.retryOnFailure,
      },
    }),
    [formData.retryOnFailure]
  );

  const handleChange = ({ formData: nextData }) => {
    setFormData(nextData);
  };

  return (
    <div className="max-w-xl">
      <Form
        schema={SendEmailSchema}
        uiSchema={derivedUiSchema}
        validator={validator}
        widgets={formWidgets}
        formData={formData}
        formContext={formData}
        onChange={handleChange}
        onSubmit={() => console.log("SendEmail submitted", formData)}
        onError={(errors) => console.warn("SendEmail errors", errors)}
        templates={{
          ButtonTemplates: {
            SubmitButton: () => null,
          },
        }}
      />
    </div>
  );
};

export default SendEmailForm;
