import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PropertiesPanel({
  selectedNode,

  onUpdateNode,
}) {
  const [openSections, setOpenSections] = React.useState({
    general: true,
    schedule: true,
    retry: false,
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
          {/* ---------- GENERAL INFO SECTION ---------- */}
          <Section
            title="General information"
            open={openSections.general}
            toggle={() => toggleSection("general")}
          >
            <div className="flex p-3 flex-col gap-4">
              {/* Trigger Type */}
              <label className="text-sm font-medium text-gray-600">
                Trigger Type
              </label>
              <select
                className="input"
                value={selectedNode.triggerType || ""}
                onChange={(e) => onUpdateNode({ triggerType: e.target.value })}
              >
                <option>Time-based Trigger</option>
                <option>Manual Trigger</option>
              </select>

              {/* Title */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Title
                </label>
                <input
                  className="input"
                  value={selectedNode.title || ""}
                  onChange={(e) => onUpdateNode({ title: e.target.value })}
                />
              </div>

              {/* Status */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Status
                </label>
                <select
                  className="input"
                  value={selectedNode.status}
                  onChange={(e) => onUpdateNode({ status: e.target.value })}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Description
                </label>
                <textarea
                  className="input min-h-[70px]"
                  value={selectedNode.description || ""}
                  onChange={(e) =>
                    onUpdateNode({ description: e.target.value })
                  }
                />
              </div>
            </div>
          </Section>

          {/* ---------- TRIGGER SCHEDULE SECTION ---------- */}
          {selectedNode.type === "trigger" && (
            <Section
              title="Trigger Schedule"
              open={openSections.schedule}
              toggle={() => toggleSection("schedule")}
            >
              <div className="flex p-3 flex-col gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  All Day
                </label>

                <div className="flex gap-2">
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Starts
                    </label>
                    <input type="date" className="input" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Time
                    </label>
                    <input type="time" className="input" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Ends
                    </label>
                    <input type="date" className="input" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Time
                    </label>
                    <input type="time" className="input" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Frequency
                  </label>
                  <select className="input">
                    <option>None</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Time zone
                  </label>
                  <select className="input">
                    <option>UTC +5:30</option>
                    <option>UTC -5</option>
                  </select>
                </div>
              </div>
            </Section>
          )}
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
