const UntilSpecificDateUiSchema = {
  targetDateTime: {
    "ui:widget": "styledText",
    "ui:placeholder": "2024-12-01T09:00",
  },
  timezone: {
    "ui:widget": "customDropdown",
  },
  fallbackAfter: {
    "ui:widget": "customDropdown",
  },
};

export default UntilSpecificDateUiSchema;


