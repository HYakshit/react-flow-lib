import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import nodeTriggerTypes from "../formData/nodeTriggerTypes";
import TriggerForm from "../formData/Trigger/TriggerForm";
import ApiCallForm from "../formData/Action/actionForms/ApiCallForm/ApiCallForm";
import ActionForm from "../formData/Action/ActionForm";

export default function PropertiesPanel({ selectedNode, onUpdateNode }) {
  const options = nodeTriggerTypes[selectedNode?.type] || [];
  const [selectedType, setSelectedType] = useState(
    selectedNode?.data?.triggerType || options[0] || ""
  );
  const allOpen = false;
  const [openSections, setOpenSections] = React.useState({
    GeneralInformation: allOpen,
    TriggerSchedule: allOpen,
    RetrySettings: allOpen,
  });
  const FormCategoryMap = {
    Trigger: TriggerForm, // You create this
    Action: ActionForm,         // This will internally choose API/DB/Email/etc.
    // Delay: DelayFormSelector,
    // Conditional: ConditionalFormSelector,
    // Decision: DecisionFormSelector,
    // Notification: NotificationFormSelector,
    // "AI Agent": AIAgentFormSelector,
    // System: SystemFormSelector
  };
  useEffect(() => {
    setOpenSections({
      GeneralInformation: false,
      TriggerSchedule: false,
      RetrySettings: false,
    });
  }, [selectedNode?.id]);

  useEffect(() => {
    if (!selectedNode) {
      setSelectedType("");
      return;
    }

    setSelectedType(selectedNode?.data?.triggerType || options[0] || "");
  }, [selectedNode, options]);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const onTypeChange = (type) => {
    setSelectedType(type);

    if (onUpdateNode && selectedNode) {
      onUpdateNode({
        ...selectedNode,
        data: { ...selectedNode.data, triggerType: type },
      });
    }
  };

  const nodeLabel =
    selectedNode?.data?.label || selectedNode?.label || selectedNode?.type;
  const showAdditionalSections = selectedType === "Time-based Trigger";
console.log("PropertiesPanel - nodeLabel:", nodeLabel);
  const CategoryComponent = FormCategoryMap[nodeLabel];

  //  function FormRenderer({ selectedCategory, selectedSubtype, nodeData,  ...restProps    }) {
  //   const CategoryComponent = FormCategoryMap[selectedCategory] || GeneralForm;

  //   return (
  //     <CategoryComponent
  //       subtype={selectedSubtype}
  //       nodeData={nodeData}
  //     />
  //   );
  // }

  //  COLLAPSED VIEW (NO NODE SELECTED)
  if (!selectedNode) {
    return (
      <div className=" bg-gray-100">
        <div className="w-[230px] border-l mt-8 bg-white rounded-2xl shadow-sm flex items-center px-4 py-3 text-gray-700 font-medium">
          <span>Properties</span>
        </div>
      </div>
    );
  }

  //  FULL VIEW (NODE SELECTED)
  return (
    <div className=" bg-gray-100 ">
      <div className="w-[330px]  h-full  rounded-2xl bg-white  border-0 shadow-sm  ">
        {/* HEADER */}
        <span className="mt-8 font-bold ml-4">Properties</span>
        <div className="px-5 py-2 border-b">
          <h2 className="text-lg font-semibold">{nodeLabel}</h2>
          <p className="text-xs text-gray-500">{selectedNode.type}</p>
        </div>
        <CategoryComponent
          // subtype={selectedSubtype}
          // nodeData={nodeData}
          nodeLabel={nodeLabel}
          options={options}
          selectedType={selectedType}
          onTypeChange={onTypeChange}
          toggleSection={toggleSection}
          openSections={openSections}
          showAdditionalSections={showAdditionalSections}
          Section={Section}
        />
        {/* <TriggerForm
          nodeLabel={nodeLabel}
          options={options}
          selectedType={selectedType}
          onTypeChange={onTypeChange}
          toggleSection={toggleSection}
          openSections={openSections}
          showAdditionalSections={showAdditionalSections}
          Section={Section}
        /> */}
      </div>
    </div>
  );
}

// SECTION COMPONENT
function Section({ title, children, open, toggle, noToggle = false }) {
  return (
    <div className="border-gray-200 border-t border-b ">
      <div
        className="flex justify-between items-center px-3 py-6 cursor-pointer"
        onClick={!noToggle ? toggle : undefined}
      >
        <h3 className="font-semibold text-sm">{title}</h3>
        {!noToggle &&
          (open ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
      </div>

      {open && <div className="p-3">{children}</div>}
    </div>
  );
}
export { Section };
