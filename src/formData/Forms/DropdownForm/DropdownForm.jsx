import { useMemo } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import DropdownWidget from "../widgets/DropdownWidget";

const toOptionObjects = (options = []) =>
  options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }
    if (typeof opt === "object" && opt !== null) {
      return {
        value: opt.value ?? opt.label ?? "",
        label: opt.label ?? opt.value ?? "",
        icon: opt.icon,
      };
    }
    return { value: String(opt), label: String(opt) };
  });

const DropdownForm = ({
  label = "Select an option",
  options = [],
  value = "",
  onChange,
  fieldName = "selection",
  placeholder = "Select an option",
}) => {
  const normalizedOptions = useMemo(() => toOptionObjects(options), [options]);

  const schema = useMemo(
    () => ({
      type: "object",
      properties: {
        [fieldName]: {
          type: "string",
          title: label,
          enum: normalizedOptions.map((opt) => opt.value),
          enumNames: normalizedOptions.map((opt) => opt.label),
        },
      },
      required: normalizedOptions.length ? [fieldName] : [],
    }),
    [fieldName, label, normalizedOptions]
  );

  const uiSchema = useMemo(
    () => ({
      [fieldName]: {
        "ui:widget": "customDropdown",
        "ui:options": {
          optionMeta: normalizedOptions,
          placeholder,
        },
      },
    }),
    [fieldName, normalizedOptions, placeholder]
  );

  const widgets = useMemo(
    () => ({
      customDropdown: (props) => (
        <DropdownWidget {...props} placeholder={placeholder} />
      ),
    }),
    [placeholder]
  );

  const formData = value ? { [fieldName]: value } : {};

  return (
    <div className="w-full">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        validator={validator}
        widgets={widgets}
        onChange={({ formData: nextData }) => {
          const nextValue = nextData?.[fieldName] ?? "";
          if (nextValue !== value) {
            onChange?.(nextValue);
          }
        }}
        templates={{
          ButtonTemplates: {
            SubmitButton: () => null,
          },
        }}
        showErrorList={false}
      >
        {/* Form managed by RJSF */}
      </Form>
    </div>
  );
};

export default DropdownForm;
