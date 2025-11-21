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
} from "lucide-react";
import { Action, TriggerType } from "./NodeConstants";

export const triggerTypeIcons = {
  [TriggerType.SelectType]: Sparkles,
  [TriggerType.TimeBased]: Clock8,
  [TriggerType.EventBased]: CalendarClock,
  [TriggerType.Conditional]: Filter,
  [TriggerType.System]: ServerCog,
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


