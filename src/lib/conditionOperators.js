export const CONDITION_OPERATORS = [
  { value: "eq", label: "is equal to" },
  { value: "neq", label: "is not equal to" },
  { value: "gt", label: "is greater than" },
  { value: "lt", label: "is less than" },
  { value: "gte", label: "is greater than or equal to" },
  { value: "lte", label: "is less than or equal to" },
  { value: "contains", label: "contains" },
  { value: "not_contains", label: "does not contain" },
];

export const getConditionOperatorLabel = (value) => {
  const operator = CONDITION_OPERATORS.find((option) => option.value === value);
  return operator ? operator.label : value || "";
};

