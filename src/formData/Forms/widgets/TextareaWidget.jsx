const TextareaWidget = ({
  id,
  value,
  required,
  disabled,
  readonly,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  rawErrors = [],
}) => {
  const handleChange = (event) => {
    onChange(event.target.value ?? "");
  };

  return (
    <div className="space-y-1">
      <textarea
        id={id}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition disabled:cursor-not-allowed disabled:bg-gray-50 min-h-[120px]"
        value={value ?? ""}
        required={required}
        disabled={disabled || readonly}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={(event) => onBlur?.(id, event.target.value)}
        onFocus={(event) => onFocus?.(id, event.target.value)}
      />
      {rawErrors?.length > 0 && (
        <p className="text-xs font-medium text-red-500">{rawErrors[0]}</p>
      )}
    </div>
  );
};

export default TextareaWidget;


