import { useMemo } from "react";
import { getFormFromRegistry } from "../utill/formRegistry";

/**
 * Custom hook to get the appropriate form component and label for a node type
 * This hook resolves the form based on the selected type and node context
 * 
 * @param {string} selectedType - The currently selected form type (e.g., "API Call", "Database Update")
 * @param {string|object} nodeLabel - The node label (string) or node label object for context
 * @returns {object} Object containing form component, label, and metadata
 * 
 * @example
 * const { FormComponent, label } = useNodeForm("API Call", "Action");
 * return <FormComponent nodeLabel={nodeLabel} />;
 */
export const useNodeForm = (selectedType, nodeLabel = null) => {
  const formConfig = useMemo(() => {
    if (!selectedType) {
      return {
        FormComponent: null,
        label: "Select a type",
        category: null,
      };
    }

    const config = getFormFromRegistry(selectedType, nodeLabel);
    console.log("useNodeForm - Resolved form config:", { selectedType, nodeLabel, config });
    return {
      FormComponent: config.component,
      label: config.label,
      category: config.category,
    };
  }, [selectedType, nodeLabel]);

  return formConfig;
};

export default useNodeForm;

