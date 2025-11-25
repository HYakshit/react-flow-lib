// Form Registry - Central configuration for all node type forms
// This registry maps form types to their components and metadata
// Add new form types here to make them available across all node forms

import ApiCallForm from "../formData/Action/actionForms/ApiCallForm/ApiCallForm";
import DatabaseUpdateForm from "../formData/Action/actionForms/DatabaseUpdate/DatabaseUpdateForm";
import CreateRecordForm from "../formData/Action/actionForms/CreateRecord/CreateRecordForm";
import SendEmailForm from "../formData/Action/actionForms/SendEmail/SendEmailForm";
import FixedDelayForm from "../formData/Delay/delayForms/FixedDelay/FixedDelayForm";
import DynamicDelayForm from "../formData/Delay/delayForms/DynamicDelay/DynamicDelayForm";
import ConditionalDelayForm from "../formData/Delay/delayForms/ConditionalDelay/ConditionalDelayForm";
import UntilSpecificDateForm from "../formData/Delay/delayForms/UntilSpecificDate/UntilSpecificDateForm";
import GeneralForm from "../formData/Forms/GeneralForm/GeneralForm";
import EventBasedForm from "../formData/Trigger/triggerForms/Event-based/EventBasedForm";
import ConditionalTriggerForm from "../formData/Trigger/triggerForms/Conditional/DatabaseUpdateForm";
import TimeBasedTriggerForm from "../formData/Trigger/triggerForms/TimeBased/TimeBasedTriggerForm";
import {
  Action,
  DelayType,
  NotificationType,
  TriggerType,
} from "../lib/NodeConstants";
import FormTrigger from "../formData/Trigger/triggerForms/FormTrigger/FormTrigger";

// Form registry configuration
// Each entry maps a form type identifier to its component and metadata
const FORM_REGISTRY = {
  // Action Forms
  [Action.APICall.label]: {
    component: ApiCallForm,
    label: Action.APICall.description,
    category: "Action",
  },
  [Action.UpdateRecord.label]: {
    component: DatabaseUpdateForm,
    label: Action.UpdateRecord.description,
    category: "Action",
  },
  [Action.SendEmail.label]: {
    component: SendEmailForm,
    label: Action.SendEmail.description,
    category: "Action",
  },
  [Action.Webhook.label]: {
    component: null, // Component not yet implemented
    label: Action.Webhook.description,
    category: "Action",
  },
  [Action.CreateRecord.label]: {
    component: CreateRecordForm,
    label: Action.CreateRecord.description,
    category: "Action",
  },

  // Delay Forms
  [DelayType.SelectType.label]: {
    component: null,
    label: DelayType.SelectType.description,
    category: "Delay",
  },
  [DelayType.Fixed.label]: {
    component: FixedDelayForm,
    label: DelayType.Fixed.description,
    category: "Delay",
  },
  [DelayType.Dynamic.label]: {
    component: DynamicDelayForm,
    label: DelayType.Dynamic.description,
    category: "Delay",
  },
  [DelayType.Conditional.label]: {
    component: ConditionalDelayForm,
    label: DelayType.Conditional.description,
    category: "Delay",
  },
  [DelayType.UntilSpecificDate.label]: {
    component: UntilSpecificDateForm,
    label: DelayType.UntilSpecificDate.description,
    category: "Delay",
  },

  // Trigger Forms
  [TriggerType.TimeBased.label]: {
    component: TimeBasedTriggerForm,
    label: TriggerType.TimeBased.description,
    category: "Trigger",
  },
  [TriggerType.EventBased.label]: {
    component: EventBasedForm,
    label: TriggerType.EventBased.description,
    category: "Trigger",
  },
  [TriggerType.formAction.label]: {
    component: FormTrigger,
    label: TriggerType.formAction.description,
    category: "Trigger",
  },
  [TriggerType.Conditional.label]: {
    component: ConditionalTriggerForm,
    label: TriggerType.Conditional.description,
    category: "Trigger",
  },
  [TriggerType.System.label]: {
    component: null, // Component not yet implemented
    label: TriggerType.System.description,
    category: "Trigger",
  },

  // notification Forms
  [NotificationType.Email.label]: {
    component: SendEmailForm, // Component not yet implemented
    label: NotificationType.Email.description,
    category: "Notification",
  },
  [NotificationType.Push.label]: {
    component: null, // Component not yet implemented
    label: NotificationType.Push.description,
    category: "Notification",
  },

  [NotificationType.SMS.label]: {
    component: null, // Component not yet implemented
    label: NotificationType.SMS.description,
    category: "Notification",
  },

  [NotificationType.Call.label]: {
    component: null, // Component not yet implemented
    label: NotificationType.Call.description,
    category: "Notification",
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
  // if (!formConfig.component) {
  //   return {
  //     ...FORM_REGISTRY.default,
  //     label: formConfig.label || FORM_REGISTRY.default.label,
  //   };
  // }

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
export const registerForm = (
  formType,
  component,
  label,
  category = "General"
) => {
  FORM_REGISTRY[formType] = {
    component,
    label,
    category,
  };
};

export default FORM_REGISTRY;
