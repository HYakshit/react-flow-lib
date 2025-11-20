import Section from "../../utill/Section";
import GeneralForm from "../Forms/GeneralForm/GeneralForm";
import ApiCallForm from "./actionForms/ApiCallForm/ApiCallForm";
import DatabaseUpdateForm from "./actionForms/DatabaseUpdate/DatabaseUpdateForm";
import { ActionType } from "../../utill/NodeConstants";

export const ActionForm = ({
  options,
  selectedType,
  onTypeChange,
  nodeLabel,
  openSections,
  toggleSection,
}) => {
  function getFormComponent(type) {
    switch (type) {
      case ActionType.APICall:
        return {
          label: "API Call Settings",
          component: <ApiCallForm />,
        };

      case ActionType.DatabaseUpdate:
        return {
          label: "Database Update Settings",
          component: <DatabaseUpdateForm />,
        };

      case ActionType.SendEmail:
        return {
          label: "Email Settings",
        };

      case ActionType.Webhook:
        return {
          label: "Webhook Settings",
        };

      case ActionType.FileOperations:
        return {
          label: "File Operation Settings",
        };

      default:
        return {
          label: "General Configuration",
          component: <GeneralForm nodeLabel={nodeLabel} />,
        };
    }
  }

  const { label: dynamicSectionLabel, component: dynamicForm } =
    getFormComponent(selectedType);

  return (
    <div className="overflow-y-auto h-[calc(100%-72px)] flex flex-col">
      {/* HEADER */}
      <div className="px-5 py-4 border-b">
        <h2 className="text-lg font-semibold">{nodeLabel} Type</h2>

        {options.length ? (
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <p className="mt-3 text-xs text-gray-500">
            No configuration available for this node type.
          </p>
        )}
      </div>
      {selectedType == "Select Type" || undefined ? null : (
        <>
          {/* ==== Section 1: General Information ==== */}
          <Section
            title="General Information"
            open={openSections.GeneralInformation}
            toggle={() => toggleSection("GeneralInformation")}
          >
            <GeneralForm nodeLabel={nodeLabel} />
          </Section>

          {/* ==== Section 2: Dynamic Settings Form ==== */}
          <Section
            title={dynamicSectionLabel}
            open={openSections.DynamicSection}
            toggle={() => toggleSection("DynamicSection")}
          >
            {dynamicForm && dynamicForm}
          </Section>
        </>
      )}
    </div>
  );
};

export default ActionForm;
