import { useState, useMemo } from "react";
import DropdownForm from "../../../Forms/DropdownForm/DropdownForm";
import eventBasedTriggerOptions from "../../../../lib/Trigger/eventBasedTriggerOptions";

const EventBasedForm = ({ nodeLabel }) => {
  const [selectedEventType, setSelectedEventType] = useState("");

  // Transform eventBasedTriggerOptions to match DropdownForm's expected format
  // Convert Icon components to rendered icon elements
  const dropdownOptions = useMemo(
    () =>
      eventBasedTriggerOptions.map((opt) => {
        const Icon = opt.Icon;
        const iconElement = Icon ? (
          <Icon className="w-4 h-4 text-indigo-500" strokeWidth={2} />
        ) : null;
        return {
          value: opt.value,
          label: opt.label,
          icon: iconElement,
        };
      }),
    []
  );

  const handleEventTypeChange = (value) => {
    setSelectedEventType(value);
    console.log("Selected event type:", value);
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <DropdownForm
        label="Event Type"
        options={dropdownOptions}
        value={selectedEventType}
        onChange={handleEventTypeChange}
        fieldName="eventType"
        placeholder="Select an event type"
      />
    </div>
  );
};

export default EventBasedForm;
