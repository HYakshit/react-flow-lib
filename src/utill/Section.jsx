import { ChevronDown, ChevronUp } from "lucide-react";

export default function Section({ title, children, open, toggle, noToggle = false }) {
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