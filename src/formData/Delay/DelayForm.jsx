import { useMemo } from "react";
import GeneralForm from "../Forms/GeneralForm/GeneralForm";
import Section from "../../utill/Section";
import { DelayTypeIcons } from "../../lib/TypeIcons";
import DropdownForm from "../Forms/DropdownForm/DropdownForm";
import { useNodeForm } from "../../hooks/useNodeForm";
import { DelayType } from "../../lib/NodeConstants";

export const DelayForm = ({
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
        const Icon = DelayTypeIcons[opt];
        const iconElement = Icon ? (
          <Icon className="w-4 h-4 text-indigo-400" strokeWidth={2} />
        ) : null;
        return {
          value: opt,
          label: opt,
          icon: iconElement,
        };
      }),
    [options]
  );

  const { FormComponent: DynamicFormComponent, label: dynamicSectionLabel } =
    useNodeForm(selectedType, nodeLabel);

  const showSections =
    selectedType && selectedType !== DelayType.SelectType.label;

  return (
    <div className="overflow-y-auto h-[calc(100%-72px)] flex flex-col">
      <div className="px-5 py-4 border-b">
        <h2 className="text-lg font-semibold">{nodeLabel} Type</h2>

        {dropdownOptions.length ? (
          <div className="mt-3">
            <DropdownForm
              label="Delay Type"
              options={dropdownOptions}
              value={selectedType}
              onChange={onTypeChange}
              fieldName="delayType"
              placeholder="Select Delay Type"
            />
          </div>
        ) : (
          <p className="mt-3 text-xs text-gray-500">
            No configuration available for this node type.
          </p>
        )}
      </div>
      {showSections && (
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

          {DynamicFormComponent && (
            <Section
              title={dynamicSectionLabel || "Duration"}
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
export default DelayForm;
