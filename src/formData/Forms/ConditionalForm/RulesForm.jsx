import React, { useEffect, useMemo, useState } from "react";
import ConditionalEditorModal from "../../../components/ConditionalEditor/ConditionalEditorModal";
import { getConditionOperatorLabel } from "../../../lib/conditionOperators";

const RulesForm = ({ selectedNode, onUpdateNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [conditions, setConditions] = useState(
    () => selectedNode?.data?.conditions || []
  );
  const [connector, setConnector] = useState(
    () => selectedNode?.data?.conditionsConnector || "and"
  );

  useEffect(() => {
    setConditions(selectedNode?.data?.conditions || []);
    setConnector(selectedNode?.data?.conditionsConnector || "and");
  }, [selectedNode?.id]);

  const conditionSummary = useMemo(() => {
    if (!conditions?.length) {
      return "No conditions configured yet. Click the button below to start.";
    }

    return conditions
      .map((condition) => {
        const field = condition.field?.trim() || "Field";
        const operator = getConditionOperatorLabel(condition.operator);
        const value = condition.value?.trim() || "value";
        return `${field} ${operator} ${value}`;
      })
      .join(` ${connector.toUpperCase()} `);
  }, [conditions, connector]);

  const totalLabel = useMemo(() => {
    const count = conditions?.length || 0;
    const suffix = count === 1 ? "" : "s";
    return `total: ${count} condition${suffix}`;
  }, [conditions]);

  const handleSave = (nextConditions, nextConnector) => {
    setConditions(nextConditions);
    setConnector(nextConnector);

    if (onUpdateNode && selectedNode) {
      onUpdateNode({
        ...selectedNode,
        data: {
          ...selectedNode.data,
          conditions: nextConditions,
          conditionsConnector: nextConnector,
        },
      });
    }
  };

  return (
    <>
      <div className="space-y-3 rounded-3xl border border-[#242635] bg-[#1B1D27] p-5 text-white">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Conditional Editor
          </p>
          <p className="mt-1 text-xs text-white/40">Dependencies</p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="w-full text-left rounded-2xl border border-dashed border-white/10 bg-[#11131C] px-4 py-6 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/5"
        >
          {conditionSummary}
        </button>

        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-white/40">
            {totalLabel}
          </span>
        </div>
      </div>

      <ConditionalEditorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialConditions={conditions}
        initialConnector={connector}
      />
    </>
  );
};

export default RulesForm;
