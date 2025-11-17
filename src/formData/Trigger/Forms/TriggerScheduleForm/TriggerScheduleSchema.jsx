const TriggerScheduleSchema = {
  "type": "object",
  "properties": {
    "allDay": {
      "type": "boolean",
      "title": "All Day"
    },

    "starts": {
      "type": "object",
      "title": "Starts",
      "properties": {
        "date": {
          "type": "string",
          "format": "date",
          "title": ""
        },
        "time": {
          "type": "string",
          "format": "time",
          "title": ""
        }
      }
    },

    "ends": {
      "type": "object",
      "title": "Ends",
      "properties": {
        "date": {
          "type": "string",
          "format": "date",
          "title": ""
        },
        "time": {
          "type": "string",
          "format": "time",
          "title": ""
        }
      }
    },

    "frequency": {
      "type": "string",
      "title": "Frequency",
      "enum": ["None", "Hourly", "Daily", "Weekly", "Monthly"],
      "default": "None"
    }
  }
};

export default TriggerScheduleSchema;
