const RetrySettingsSchema = {
  "type": "object",
  "properties": {
    "retryInterval": {
      "type": "string",
      "title": "Retry Interval",
      "enum": [
        "Every 5 min",
        "Every 10 min",
        "Every 15 min",
        "Every 30 min",
        "Every 1 hour"
      ],
      "default": "Every 15 min"
    },

    "maxRetries": {
      "type": "string",
      "title": "Max Retries",
      "enum": ["1", "2", "3", "4", "5", "10"],
      "default": "5"
    },

    "timeout": {
      "type": "string",
      "title": "Timeout",
      "enum": [
        "5 min",
        "10 min",
        "15 min",
        "30 min",
        "1 hour"
      ],
      "default": "30 min"
    }
  }
};

export default RetrySettingsSchema;
