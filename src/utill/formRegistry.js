// Form Registry - Central configuration for all node type forms
// This registry maps form types to their components and metadata
// Add new form types here to make them available across all node forms

import ApiCallForm from "../formData/Action/actionForms/ApiCallForm/ApiCallForm";
import DatabaseUpdateForm from "../formData/Action/actionForms/DatabaseUpdate/DatabaseUpdateForm";
import GeneralForm from "../formData/Forms/GeneralForm/GeneralForm";
import EventBasedForm from "../formData/Trigger/triggerForms/Event-based/EventBasedForm";
import ConditionalTriggerForm from "../formData/Trigger/triggerForms/Conditional/DatabaseUpdateForm";
import TimeBasedTriggerForm from "../formData/Trigger/triggerForms/TimeBased/TimeBasedTriggerForm";
import { Action, TriggerType } from "../lib/NodeConstants";

// Form registry configuration
// Each entry maps a form type identifier to its component and metadata
const FORM_REGISTRY = {
  // Action Forms
  [Action.APICall.label]: {
    component: ApiCallForm,
    label: Action.APICall.description,
    category: "Action",
  },
  [Action.DatabaseUpdate.label]: {
    component: DatabaseUpdateForm,
    label: Action.DatabaseUpdate.description,
    category: "Action",
  },
  [Action.SendEmail.label]: {
    component: null, // Component not yet implemented
    label: Action.SendEmail.description,
    category: "Action",
  },
  [Action.Webhook.label]: {
    component: null, // Component not yet implemented
    label: Action.Webhook.description,
    category: "Action",
  },
  [Action.FileOperations.label]: {
    component: null, // Component not yet implemented
    label: Action.FileOperations.description,
    category: "Action",
  },
  // Trigger Forms
  [TriggerType.TimeBased]: {
    component: TimeBasedTriggerForm,
    label: "Time-based Trigger Settings",
    category: "Trigger",
  },
  [TriggerType.EventBased]: {
    component: EventBasedForm,
    label: "Event Based Trigger Settings",
    category: "Trigger",
  },
  [TriggerType.Conditional]: {
    component: ConditionalTriggerForm,
    label: "Conditional Trigger Settings",
    category: "Trigger",
  },
  [TriggerType.System]: {
    component: null, // Component not yet implemented
    label: "System Trigger Settings",
    category: "Trigger",
  },
  // Default fallback form
  default: {
    component: GeneralForm,
    label: "General Configuration",
    category: "General",
  },
};

/**
 * Get form configuration from registry
 * @param {string} formType - The form type identifier (e.g., "API Call", "Database Update")
 * @param {object} nodeLabel - Optional node label object for context
 * @returns {object} Form configuration with component and label
 */
export const getFormFromRegistry = (formType, nodeLabel = null) => {
  // Try to find the form in the registry
  const formConfig = FORM_REGISTRY[formType] || FORM_REGISTRY.default;

  // If no component is available, fall back to default
  if (!formConfig.component) {
    return {
      ...FORM_REGISTRY.default,
      label: formConfig.label || FORM_REGISTRY.default.label,
    };
  }

  return formConfig;
};

/**
 * Register a new form type in the registry
 * This allows dynamic registration of new form types
 * @param {string} formType - The form type identifier
 * @param {React.Component} component - The form component
 * @param {string} label - The form label/description
 * @param {string} category - The form category (optional)
 */
export const registerForm = (formType, component, label, category = "General") => {
  FORM_REGISTRY[formType] = {
    component,
    label,
    category,
  };
};

export default FORM_REGISTRY;

