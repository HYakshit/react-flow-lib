import { useMemo } from "react";
import { getFormFromRegistry } from "./formRegistry";

/**
 * Get form component and label based on type
 * This function now uses the form registry pattern for better maintainability
 * 
 * @param {string|object} nodeLabel - Node label string or object for context
 * @param {string} type - The selected form type (e.g., "API Call", "Database Update")
 * @returns {object} Object with label and component
 * 
 * @deprecated Consider using useNodeForm hook instead for React components
 * This function is kept for backward compatibility but will be phased out
 */
function GetForm(nodeLabel, type) {
  const formConfig = getFormFromRegistry(type, nodeLabel);
  
  // Handle component instantiation
  // If it's a React component (function), we need to create an element
  // Otherwise, return null
  const FormComponent = formConfig.component;
  const component = FormComponent 
    ? <FormComponent nodeLabel={nodeLabel} />
    : null;

  return {
    label: formConfig.label,
    component: component,
  };
}

export default GetForm;
