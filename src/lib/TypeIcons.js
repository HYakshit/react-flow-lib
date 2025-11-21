import {
  CalendarClock,
  Clock8,
  Filter,
  Globe,
  Mail,
  Database,
  Link2,
  FolderCog,
  User ,
  Sparkles,
  ServerCog,
} from "lucide-react";
import { ActionType, TriggerType } from "./NodeConstants";

export const triggerTypeIcons = {
  [TriggerType.SelectType]: Sparkles,
  [TriggerType.TimeBased]: Clock8,
  [TriggerType.EventBased]: CalendarClock,
  [TriggerType.Conditional]: Filter,
  [TriggerType.System]: ServerCog,
};

export const actionTypeIcons = {
  [ActionType.SelectType.label]: Sparkles,
  [ActionType.UserAction.label]: User,
  [ActionType.APICall.label]: Globe,
  [ActionType.DatabaseUpdate.label]: Database,
  [ActionType.SendEmail.label]: Mail,
  [ActionType.Webhook.label]: Link2,
  [ActionType.FileOperations.label]: FolderCog,
};


