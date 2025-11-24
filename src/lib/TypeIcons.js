import {
  CalendarClock,
  Clock8,
  Filter,
  Globe,
  Mail,
  Database,
  Link2,
  FolderCog,
  User,
  Sparkles,
  ServerCog,
  FormInput
} from "lucide-react";
import { Action, TriggerType } from "./NodeConstants";

export const triggerTypeIcons = {
  [TriggerType.SelectType.label]: Sparkles,
  [TriggerType.formAction.label]: FormInput ,
  [TriggerType.TimeBased.label]: Clock8,
  [TriggerType.EventBased.label]: CalendarClock,
  [TriggerType.Conditional.label]: Filter,
  [TriggerType.System.label]: ServerCog,
};

export const actionTypeIcons = {
  [Action.SelectType.label]: Sparkles,
  [Action.UserAction.label]: User,
  [Action.APICall.label]: Globe,
  [Action.DatabaseUpdate.label]: Database,
  [Action.SendEmail.label]: Mail,
  [Action.Webhook.label]: Link2,
  [Action.FileOperations.label]: FolderCog,
};


