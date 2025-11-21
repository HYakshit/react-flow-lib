import { useMemo, useState, useRef, useEffect } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { ChevronDown } from "lucide-react";

const DropdownWidget = ({
  id,
  value,
  required,
  disabled,
  readonly,
  onChange,
  options,
  placeholder,
}) => {
  const { optionMeta = [] } = options || {};
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const selectedOption = optionMeta.find((opt) => opt.value === value) || null;

  const handleSelect = (nextValue) => {
    onChange(nextValue);
    setOpen(false);
  };

  const canInteract = !disabled && !readonly;

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        id={id}
        className={`select select-bordered w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white text-left text-sm font-medium text-gray-800 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 ${
          canInteract ? "" : "cursor-not-allowed opacity-70"
        }`}
        onClick={() => canInteract && setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 truncate">
          {selectedOption?.icon && (
            <span className="inline-flex items-center justify-center">
              {selectedOption.icon}
            </span>
          )}
          <span className="truncate">
            {selectedOption?.label || placeholder || "Select an option"}
            {!value && required && <span className="text-red-500">*</span>}
          </span>
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {open && (
        <ul
          className="absolute z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-xl"
          role="listbox"
          aria-activedescendant={value}
        >
          {optionMeta.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li key={opt.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between px-4 py-3 text-sm transition hover:bg-indigo-50 ${
                    isSelected
                      ? "bg-indigo-100 text-indigo-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleSelect(opt.value)}
                >
                  <span className="flex items-center gap-3">
                    {opt.icon && (
                      <span className="inline-flex items-center justify-center">
                        {opt.icon}
                      </span>
                    )}
                    <span className="font-medium">{opt.label}</span>
                  </span>
                  {isSelected && (
                    <span className="text-xs font-semibold uppercase text-indigo-500">
                      Selected
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

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
