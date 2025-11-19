import React, { useEffect, useState } from "react";
import nodeTriggerTypes from "../formData/nodeTriggerTypes";
import TriggerForm from "../formData/Trigger/TriggerForm";
import ActionForm from "../formData/Action/ActionForm";
import Section from "../utill/Section";
import NotificationForm from "../formData/Notification/NotificationForm";
import DelayForm from "../formData/Delay/DelayForm";
import ConditionalForm from "../formData/Conditional/ConditionalForm";
import DecisionForm from "../formData/Decision/DecisionForm";
import LoopForm from "../formData/Loop/LoopForm";
import ParallelForm from "../formData/Parallel/ParallelForm";
import SubProcessForm from "../formData/SubProcessForm/SubProcessForm";
export default function PropertiesPanel({ selectedNode, onUpdateNode }) {
  const options = nodeTriggerTypes[selectedNode?.type] || [];
  const [selectedType, setSelectedType] = useState(
    selectedNode?.data?.triggerType || options[0] || ""
  );
  console.log("selectedNode", selectedType);
  const allOpen = false;
  const [openSections, setOpenSections] = React.useState({
    GeneralInformation: allOpen,
    TriggerSchedule: allOpen,
    RetrySettings: allOpen,
    DynamicSection: allOpen,
  });
  const FormCategoryMap = {
    Action: ActionForm,
    Conditional: ConditionalForm,
    Decision: DecisionForm,
    Delay: DelayForm,
    Loop: LoopForm,
    Notification: NotificationForm,
    Parallel: ParallelForm,
    Trigger: TriggerForm,
    SubProcess: SubProcessForm, //fix name it is(Sub-process as key in map)
  };
  useEffect(() => {
    setOpenSections({
      GeneralInformation: false,
      TriggerSchedule: false,
      RetrySettings: false,
      DynamicSection: false,
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
  const CategoryComponent = FormCategoryMap[nodeLabel];
  console.log(
    "PropertiesPanel rendered AA",
    selectedType,
    nodeLabel,
    selectedNode,
    CategoryComponent
  );
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
