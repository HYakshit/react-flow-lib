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
  FormInput,
  Menu,
  Bell,
  MessageSquare,
  Phone,
  Hourglass,
  PauseCircle,
  Layers2,
} from "lucide-react";
import { Action, DelayType, NotificationType, TriggerType } from "./NodeConstants";

export const triggerTypeIcons = {
  [TriggerType.SelectType.label]: Menu,
  [TriggerType.formAction.label]: FormInput,
  [TriggerType.TimeBased.label]: Clock8,
  [TriggerType.EventBased.label]: CalendarClock,
  [TriggerType.Conditional.label]: Filter,
  [TriggerType.System.label]: ServerCog,
};

export const actionTypeIcons = {
  [Action.SelectType.label]: Menu,
  [Action.UserAction.label]: User,
  [Action.APICall.label]: Globe,
  [Action.UpdateRecord.label]: Database,
  [Action.SendEmail.label]: Mail,
  [Action.Webhook.label]: Link2,
  [Action.CreateRecord.label]: FolderCog,
};
export const NotificationTypeIcons = {
  [NotificationType.SelectType.label]: Menu,
  [NotificationType.Email.label]: Mail,
  [NotificationType.Push.label]: Bell,
  [NotificationType.SMS.label]: MessageSquare,
  [NotificationType.Call.label]: Phone,
};
export const DelayTypeIcons = {
  [DelayType.SelectType.label]: Menu,
  [DelayType.Fixed.label]: Clock8,
  [DelayType.Dynamic.label]: Hourglass,
  [DelayType.Conditional.label]: Layers2,
  [DelayType.UntilSpecificDate.label]: CalendarClock,
};
