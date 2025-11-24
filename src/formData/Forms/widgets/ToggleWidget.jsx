const ToggleWidget = ({
  id,
  value = false,
  required,
  disabled,
  readonly,
  onChange,
  rawErrors = [],
}) => {
  const canInteract = !(disabled || readonly);

  return (
    <div className="space-y-1">
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={value}
        aria-required={required}
        disabled={!canInteract}
        onClick={() => canInteract && onChange(!value)}
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 focus-visible:ring-offset-2 ${
          value ? "bg-indigo-500" : "bg-gray-200"
        } ${canInteract ? "" : "opacity-60 cursor-not-allowed"}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      {rawErrors?.length > 0 && (
        <p className="text-xs font-medium text-red-500">{rawErrors[0]}</p>
      )}
    </div>
  );
};

export default ToggleWidget;


