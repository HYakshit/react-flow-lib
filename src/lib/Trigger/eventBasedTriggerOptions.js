import { FileText, RefreshCw, Globe, UserRound } from "lucide-react";

const eventBasedTriggerOptions = [
  {
    value: "form_submission",
    label: "Form Submission",
    Icon: FileText,
  },
  {
    value: "record_change",
    label: "Record Change",
    Icon: RefreshCw,
  },
  {
    value: "api_call",
    label: "API Call",
    Icon: Globe,
  },
  {
    value: "user_action",
    label: "User Action",
    Icon: UserRound,
  },
];

export default eventBasedTriggerOptions;