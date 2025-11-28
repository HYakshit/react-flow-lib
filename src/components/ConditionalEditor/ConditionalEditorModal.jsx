import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Plus, Trash2, X } from "lucide-react";
import { CONDITION_OPERATORS } from "../../lib/conditionOperators";

const ensureId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `cond-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const buildEmptyCondition = () => ({
  id: ensureId(),
  field: "",
  operator: CONDITION_OPERATORS[0]?.value || "eq",
  value: "",
});

const hydrateConditions = (conditions) => {
  if (!conditions?.length) {
    return [buildEmptyCondition()];
  }

  return conditions.map((condition) => ({
    id: condition?.id || ensureId(),
    field: condition?.field || "",
    operator: condition?.operator || CONDITION_OPERATORS[0]?.value || "eq",
    value: condition?.value || "",
  }));
};

const ConditionalEditorModal = ({
  isOpen,
  onClose,
  onSave,
  initialConditions = [],
  initialConnector = "and",
  title = "Conditional Editor",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
}) => {
  const [conditions, setConditions] = useState(() =>
    hydrateConditions(initialConditions)
  );
  const [connector, setConnector] = useState(initialConnector);

  useEffect(() => {
    if (isOpen) {
      setConditions(hydrateConditions(initialConditions));
      setConnector(initialConnector || "and");
    }
  }, [isOpen, initialConditions, initialConnector]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const body = document.body;
    const originalOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const handleKey = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);



  const updateCondition = (index, key, value) => {
    setConditions((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: value };
      return next;
    });
  };

  const handleRemove = (index) => {
    setConditions((prev) => {
      if (prev.length === 1) {
        return [buildEmptyCondition()];
      }
      return prev.filter((_, idx) => idx !== index);
    });
  };

  const handleAdd = () => {
    setConditions((prev) => [...prev, buildEmptyCondition()]);
  };

  const handleConfirm = () => {
    const cleaned = conditions.map(({ id, ...rest }) => ({
      ...rest,
      id,
    }));
    onSave?.(cleaned, connector);
    onClose?.();
  };

  const renderedConditions = useMemo(
    () =>
      conditions.map((condition, index) => (
        <React.Fragment key={condition.id}>
          <div className="rounded-3xl border border-white/10 bg-[#11131C] p-5 shadow-lg">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-sm font-semibold text-white/70">
                {index + 1}
              </span>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="rounded-2xl border border-transparent p-2 text-white/50 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                aria-label={`Remove condition ${index + 1}`}
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-[1fr,auto,1fr]">
              <input
                type="text"
                value={condition.field}
                onChange={(event) =>
                  updateCondition(index, "field", event.target.value)
                }
                placeholder="Field"
                className="rounded-2xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/30 focus:border-[#3B82F6] focus:outline-none"
              />
              <select
                value={condition.operator}
                onChange={(event) =>
                  updateCondition(index, "operator", event.target.value)
                }
                className="rounded-2xl border border-white/10 bg-[#1C2030] px-4 py-2 text-sm text-white focus:border-[#3B82F6] focus:outline-none"
              >
                {CONDITION_OPERATORS.map((operator) => (
                  <option
                    key={operator.value}
                    value={operator.value}
                    className="bg-[#1C2030] text-white"
                  >
                    {operator.label}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={condition.value}
                onChange={(event) =>
                  updateCondition(index, "value", event.target.value)
                }
                placeholder="Value"
                className="rounded-2xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/30 focus:border-[#3B82F6] focus:outline-none"
              />
            </div>
          </div>

          {index < conditions.length - 1 && (
            <div className="flex items-center justify-center gap-4 py-2">
              <span className="text-xs uppercase tracking-wide text-white/40">
                Condition type
              </span>
              <div className="inline-flex rounded-full border border-white/10 bg-black/20 p-1">
                {["and", "or"].map((option) => (
                  <button
                    key={`${condition.id}-${option}`}
                    type="button"
                    onClick={() => setConnector(option)}
                    className={`px-4 py-1 text-sm font-semibold capitalize transition ${connector === option
                      ? "rounded-full bg-[#3B82F6] text-white shadow-lg"
                      : "text-white/60"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </React.Fragment>
      )),
    [conditions, connector]
  );

  const hasDocument = typeof document !== "undefined";
  if (!isOpen || !hasDocument) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-[#1B1F2A] text-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-white/60 transition hover:bg-white/5 hover:text-white"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[70vh] space-y-4 overflow-y-auto px-6 py-6">
          {renderedConditions}

          <button
            type="button"
            onClick={handleAdd}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-white/20 px-3 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            <Plus size={16} />
            Add condition
          </button>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-white/5 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-white/10 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="rounded-2xl bg-[#3B82F6] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#2563eb]"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConditionalEditorModal;
