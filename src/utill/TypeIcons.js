import {
  CalendarClock,
  Clock8,
  Filter,
  Globe,
  Mail,
  Database,
  Link2,
  FolderCog,
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
  [ActionType.SelectType]: Sparkles,
  [ActionType.APICall]: Globe,
  [ActionType.DatabaseUpdate]: Database,
  [ActionType.SendEmail]: Mail,
  [ActionType.Webhook]: Link2,
  [ActionType.FileOperations]: FolderCog,
};


