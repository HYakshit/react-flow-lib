import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import JsonForm from "./JsonForm";

export default function PropertiesPanel({ selectedNode, onUpdateNode }) {
  const allOpen = false;
  const [openSections, setOpenSections] = React.useState({
    general: allOpen,
    schedule: allOpen,
    retry: allOpen,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  //  COLLAPSED VIEW (NO NODE SELECTED)

  if (!selectedNode) {
    return (
      <div className="p-1 ">
        <div className="w-[80px] border-l bg-white rounded-2xl shadow-sm flex items-center px-4 py-3 text-gray-700 font-medium">
          <span>Properties</span>
          <span className="ml-auto text-xl font-bold">⋯</span>
        </div>
      </div>
    );
  }

  //  FULL VIEW (NODE SELECTED)
  return (
    <div className=" bg-gray-100 ">
      <div className="w-[330px]  h-full  rounded-2xl bg-white  border-0 shadow-sm  ">
        {/* HEADER */}
        <div className="px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">{selectedNode.label}</h2>
          <p className="text-xs text-gray-500">{selectedNode.type}</p>
        </div>
        <div className="  overflow-y-auto h-[calc(100%-72px)] flex flex-col">
          {/* ---------- Form SECTION ---------- */}
          <div>
            {/* sub HEADER */}
            <div className="px-5 py-4 border-b">
              <h2 className="text-lg font-semibold">{selectedNode.label}</h2>
              <p className="text-xs text-gray-500">{selectedNode.type}</p>
            </div>
          </div>
          <Section
            title="Form information"
            open={openSections.Form}
            toggle={() => toggleSection("Form")}
          >
            <JsonForm></JsonForm>
          </Section>
        </div>
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
