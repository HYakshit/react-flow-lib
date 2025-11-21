import { useMemo } from "react";
import Section from "../../utill/Section";
import GeneralForm from "../Forms/GeneralForm/GeneralForm";
import RetrySettingsForm from "../Forms/RetrySettingsForm/RetrySettingsForm";
import TriggerScheduleForm from "../Forms/TriggerScheduleForm/TriggerScheduleForm";
import { TriggerType } from "../../lib/NodeConstants";
import DropdownForm from "../Forms/DropdownForm/DropdownForm";
import { triggerTypeIcons } from "../../lib/TypeIcons";
import eventBasedTriggerOptions from "./constants/eventBasedTriggerOptions";

export const TriggerForm = ({
  options,
  selectedType,
  onTypeChange,
  nodeLabel,
  openSections,
  toggleSection,
}) => {
  const showTriggerSections = selectedType === TriggerType.TimeBased;
  const showEventBased = selectedType === TriggerType.EventBased;
  const shConditional = selectedType === TriggerType.Conditional;
  const shSystem = selectedType === TriggerType.System;
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
      {selectedType === TriggerType.SelectType ? null : (
        <>
          <Section
            title="General Information"
            open={openSections.GeneralInformation}
            toggle={() => toggleSection("GeneralInformation")}
          >
            <GeneralForm nodeLabel={nodeLabel} />
          </Section>
          {showTriggerSections && (
            <>
              <Section
                title="Trigger Schedule"
                open={openSections.TriggerSchedule}
                toggle={() => toggleSection("TriggerSchedule")}
              >
                <TriggerScheduleForm />
              </Section>

              <Section
                title="Retry Settings"
                open={openSections.RetrySettings}
                toggle={() => toggleSection("RetrySettings")}
              >
                <RetrySettingsForm />
              </Section>
            </>
          )}
          {showEventBased && (
            <>
              <Section
                title="Event Based Trigger"
                open={openSections.EventBasedTrigger}
                toggle={() => toggleSection("EventBasedTrigger")}
              >
                <DropdownForm
                  label="Event Type"
                  options={eventBasedTriggerOptions}
                  value={selectedType}
                  onChange={onTypeChange}
                  fieldName="Event Type"
                />
              </Section>
            </>)}
        </>)}

    </div>
  );
};
export default TriggerForm;
