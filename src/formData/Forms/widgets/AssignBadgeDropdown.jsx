import DropdownWidget from "./DropdownWidget";

const AssignBadgeDropdown = (props) => {
  const { value } = props;

  return (
    <div className="space-y-3">
      <DropdownWidget {...props} />
      {value ? (
        <div className="rounded-xl bg-[#0C6EF3] px-4 py-3 text-sm font-semibold text-white shadow">
          {value}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-200 px-4 py-3 text-xs text-gray-400">
          No assignee selected
        </div>
      )}
    </div>
  );
};

export default AssignBadgeDropdown;

