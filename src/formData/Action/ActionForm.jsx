import { useMemo } from "react";
import Section from "../../utill/Section";
import GeneralForm from "../Forms/GeneralForm/GeneralForm";
import { Action } from "../../lib/NodeConstants";
import DropdownForm from "../Forms/DropdownForm/DropdownForm";
import { actionTypeIcons } from "../../lib/TypeIcons";
import { useNodeForm } from "../../hooks/useNodeForm";

export const ActionForm = ({
  options,
  selectedType,
  onTypeChange,
  nodeLabel,
  openSections,
  toggleSection,
  selectedNode,
  onUpdateNode,
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

  // Use the custom hook to get the appropriate form component
  const { FormComponent: DynamicFormComponent, label: dynamicSectionLabel } =
    useNodeForm(selectedType, nodeLabel);

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
      {selectedType === Action.SelectType.label ? null : (
        <>
          {/* ==== Section 1: General Information ==== */}
          <Section
            title="General Information"
            open={openSections.GeneralInformation}
            toggle={() => toggleSection("GeneralInformation")}
          >
            <GeneralForm 
              nodeLabel={nodeLabel} 
              selectedNode={selectedNode}
              onUpdateNode={onUpdateNode}
            />
          </Section>

          {/* ==== Section 2: Dynamic Settings Form ==== */}
          {DynamicFormComponent && (
            <Section
              title={dynamicSectionLabel}
              open={openSections.DynamicSection}
              toggle={() => toggleSection("DynamicSection")}
            >
              <DynamicFormComponent nodeLabel={nodeLabel} />
            </Section>
          )}
        </>
      )}
    </div>
  );
};

export default ActionForm;
