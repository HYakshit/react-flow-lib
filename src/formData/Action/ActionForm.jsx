import GeneralForm from "../Forms/GeneralForm/GeneralForm";
import RetrySettingsForm from "../Forms/RetrySettingsForm/RetrySettingsForm";
import TriggerScheduleForm from "../Forms/TriggerScheduleForm/TriggerScheduleForm";
import { Section } from "../../components/PropertiesPanel";
import ApiCallForm from "./actionForms/ApiCallForm/ApiCallForm";

export const ActionForm = ({
  options,
  selectedType,
  onTypeChange,
  nodeLabel,
  openSections,
  toggleSection,
}) => {
  console.log("ActionForm - selectedType:", selectedType);
  function FormRenderer({ selectedType, nodeData }) {
    switch (selectedType) {
      case "API Call":
        return <ApiCallForm data={nodeData} />;

      case "Database Update":
        return <DatabaseUpdateForm data={nodeData} />;

      case "Send Email":
        return <SendEmailForm data={nodeData} />;

      case "Webhook":
        return <WebhookForm data={nodeData} />;

      case "File Operations":
        return <FileOperationForm data={nodeData} />;

      default:
        return <GeneralForm nodeLabel={nodeData?.label} />;
    }
  }
  return (
    <div className="overflow-y-auto h-[calc(100%-72px)] flex flex-col">
      {/* ---------- Form SECTION ---------- */}
      <div>
        {/* sub HEADER */}
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
      </div>
      <Section
        title="General Information"
        open={openSections.GeneralInformation}
        toggle={() => toggleSection("GeneralInformation")}
      >
        <FormRenderer selectedType={selectedType} nodeData={nodeLabel} />{" "}
      </Section>
    </div>
  );
};
export default ActionForm;
