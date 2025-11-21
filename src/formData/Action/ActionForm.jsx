import { useMemo } from "react";
import Section from "../../utill/Section";
import GeneralForm from "../Forms/GeneralForm/GeneralForm";
import ApiCallForm from "./actionForms/ApiCallForm/ApiCallForm";
import DatabaseUpdateForm from "./actionForms/DatabaseUpdate/DatabaseUpdateForm";
import { ActionType } from "../../lib/NodeConstants";
import DropdownForm from "../Forms/DropdownForm/DropdownForm";
import { actionTypeIcons } from "../../lib/TypeIcons";
import GetForm from "../../utill/GetForm";

export const ActionForm = ({
  options,
  selectedType,
  onTypeChange,
  nodeLabel,
  openSections,
  toggleSection,
}) => {
  const dropdownOptions = useMemo(
    () =>
      options.map((opt) => {
        const Icon = actionTypeIcons[opt];
        const iconElement = Icon ? (
          <Icon className="w-4 h-4 text-indigo-500" strokeWidth={2} />
        ) : null;
        return {
          value: opt,
          label: opt,
          icon: iconElement,
        };
      }),
    [options]
  );


  const { label: dynamicSectionLabel, component: dynamicForm } =
   GetForm(nodeLabel, selectedType);

  return (
    <div className="overflow-y-auto h-[calc(100%-72px)] flex flex-col">
      {/* HEADER */}
      <div className="px-5 py-4 border-b">
        <h2 className="text-lg font-semibold">{nodeLabel} Type</h2>

        {dropdownOptions.length ? (
          <div className="mt-3">
            <DropdownForm
              label={`${nodeLabel} Type`}
              options={dropdownOptions}
              value={selectedType}
              onChange={onTypeChange}
              fieldName="actionType"
            />
          </div>
        ) : (
          <p className="mt-3 text-xs text-gray-500">
            No configuration available for this node type.
          </p>
        )}
      </div>
      {selectedType === ActionType.SelectType.label ? null : (
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
