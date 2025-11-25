import DropdownWidget from "./DropdownWidget";
import TextInputWidget from "./TextInputWidget";
import TextareaWidget from "./TextareaWidget";
import ToggleWidget from "./ToggleWidget";
import AssignBadgeDropdown from "./AssignBadgeDropdown";

export const formWidgets = {
  TextWidget: TextInputWidget,
  SelectWidget: DropdownWidget,
  TextareaWidget: TextareaWidget,
  CheckboxWidget: ToggleWidget,
  customDropdown: DropdownWidget,
  styledText: TextInputWidget,
  styledTextarea: TextareaWidget,
  styledToggle: ToggleWidget,
  assignBadgeDropdown: AssignBadgeDropdown,
};

export default formWidgets;


