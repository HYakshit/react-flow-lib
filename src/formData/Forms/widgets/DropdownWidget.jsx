import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const normalizeOptions = (optionMeta = [], enumOptions = []) => {
  if (optionMeta.length) {
    return optionMeta;
  }

  if (enumOptions?.length) {
    return enumOptions.map((opt) => ({
      value: opt.value,
      label: opt.label ?? opt.value,
      icon: opt.icon,
    }));
  }

  return [];
};

const DropdownWidget = ({
  id,
  value,
  required,
  disabled,
  readonly,
  onChange,
  placeholder,
  options = {},
  rawErrors = [],
}) => {
  const optionMeta = normalizeOptions(
    options.optionMeta ?? [],
    options.enumOptions
  );
  const resolvedPlaceholder =
    placeholder ??
    options.placeholder ??
    options["ui:placeholder"] ??
    "Select an option";
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const selectedOption = useMemo(
    () => optionMeta.find((opt) => opt.value === value) ?? null,
    [optionMeta, value]
  );

  const handleSelect = (nextValue) => {
    onChange(nextValue);
    setOpen(false);
  };

  const canInteract = !disabled && !readonly;

  return (
    <div className="space-y-1">
      <div className="relative" ref={containerRef}>
        <button
          type="button"
          id={id}
          className={`select select-bordered w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white text-left text-sm font-medium text-gray-800 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 ${
            canInteract ? "" : "cursor-not-allowed opacity-70"
          }`}
          onClick={() => canInteract && setOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="flex items-center gap-2 truncate">
            {selectedOption?.icon && (
              <span className="inline-flex items-center justify-center">
                {selectedOption.icon}
              </span>
            )}
            <span className="truncate">
              {selectedOption?.label || resolvedPlaceholder}
              {!value && required && <span className="text-red-500">*</span>}
            </span>
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

        {open && (
          <ul
            className="absolute z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-xl"
            role="listbox"
            aria-activedescendant={value}
          >
            {optionMeta.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <li key={opt.value} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between px-4 py-3 text-sm transition hover:bg-indigo-50 ${
                      isSelected
                        ? "bg-indigo-100 text-indigo-600"
                        : "text-gray-700"
                    }`}
                    onClick={() => handleSelect(opt.value)}
                  >
                    <span className="flex items-center gap-3">
                      {opt.icon && (
                        <span className="inline-flex items-center justify-center">
                          {opt.icon}
                        </span>
                      )}
                      <span className="font-medium">{opt.label}</span>
                    </span>
                    {isSelected && (
                      <span className="text-xs font-semibold uppercase text-indigo-500">
                        Selected
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {rawErrors?.length > 0 && (
        <p className="text-xs font-medium text-red-500">{rawErrors[0]}</p>
      )}
    </div>
  );
};

export default DropdownWidget;
