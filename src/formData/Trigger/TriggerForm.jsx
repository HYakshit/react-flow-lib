import { useMemo } from "react";
import Section from "../../utill/Section";
import GeneralForm from "../Forms/GeneralForm/GeneralForm";
import { TriggerType } from "../../lib/NodeConstants";
import DropdownForm from "../Forms/DropdownForm/DropdownForm";
import { triggerTypeIcons } from "../../lib/TypeIcons";
import { useNodeForm } from "../../hooks/useNodeForm";

export const TriggerForm = ({
  options,
  selectedType,
  onTypeChange,
  nodeLabel,
  openSections,
  toggleSection,
  selectedNode,
  onUpdateNode,
}) => {
  console.log("TriggerForm Rendered with:", {
    options,
    selectedType,
    nodeLabel,
  });
  // Use the custom hook to get the appropriate form component based on selected trigger type
  const { FormComponent: DynamicFormComponent, label: dynamicSectionLabel } =
    useNodeForm(selectedType, nodeLabel);

  const dropdownOptions = useMemo(
    () =>
      options.map((opt) => {
        const Icon = triggerTypeIcons[opt];
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

  return (
    <div className="  overflow-y-auto h-[calc(100%-72px)] flex flex-col">
      {/* ---------- Form SECTION ---------- */}
      <div>
        {/* sub HEADER */}
        <div className="px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">{nodeLabel} Type</h2>

          {dropdownOptions.length ? (
            <div className="mt-3">
              <DropdownForm
                label={`${nodeLabel} Type`}
                options={dropdownOptions}
                value={selectedType}
                onChange={onTypeChange}
                fieldName="triggerType"
              />
            </div>
          ) : (
            <p className="mt-3 text-xs text-gray-500">
              No configuration available for this node type.
            </p>
          )}
        </div>
      </div>
      {selectedType === TriggerType.SelectType.label ? null : (
        <>
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

          {/* Dynamic trigger-specific form section */}
          {DynamicFormComponent && (
            <Section
              title={dynamicSectionLabel}
              open={openSections.DynamicSection}
              toggle={() => toggleSection("DynamicSection")}
            >
              <DynamicFormComponent nodeLabel={nodeLabel} />
            </Section>
          )}
        </>)}

    </div>
  );
};
export default TriggerForm;
