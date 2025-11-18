const TriggerScheduleUiSchema = {
  allDay: {
    // "ui:widget": "ToggleWidget",
  },

  starts: {
    "ui:field": "TwoColumnField",
    date: {
      "ui:widget": "date",
      "ui:placeholder": "dd/mm/yyyy",
    },
    time: {
      "ui:widget": "time",
      "ui:placeholder": "--:--",
    },
  },

  ends: {
    "ui:field": "TwoColumnField",
    date: {
      "ui:widget": "date",
      "ui:placeholder": "dd/mm/yyyy",
    },
    time: {
      "ui:widget": "time",
      "ui:placeholder": "--:--",
    },
  },

  frequency: {
    "ui:widget": "select",
  },
};

export default TriggerScheduleUiSchema;
