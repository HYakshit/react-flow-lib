const GeneralUiSchema = {
  title: {
    "ui:placeholder": "Enter title",
  },
  status: {
    "ui:widget": "select",
    "ui:options": {
      // this tells RJSF you'll use a custom component (to match green dot style)
      // "widget": "StatusWidget"
      // Status: { "ui:widget": "select" },
    },
  },
  description: {
    "ui:placeholder": "Enter description",
  },
};

export default GeneralUiSchema;
