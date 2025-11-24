import {
  NodeType,
  Action,
  TriggerType,
  DelayType,
  ConditionalType,
  DecisionType,
  NotificationType,
} from "./NodeConstants";

const nodeTriggerTypes = {
  [NodeType.Action]: [
    Action.SelectType.label,
    Action.APICall.label,
    Action.DatabaseUpdate.label,
    Action.UserAction.label,
    Action.SendEmail.label,
    Action.Webhook.label,
    Action.FileOperations.label,
  ],

  [NodeType.Trigger]: [
    TriggerType.SelectType.label,
    TriggerType.formAction.label,
    TriggerType.TimeBased.label,
    TriggerType.EventBased.label,
    TriggerType.Conditional.label,
    TriggerType.System.label,
  ],

  [NodeType.Delay]: [
    "Select Type",
    DelayType.WaitDuration,
    DelayType.WaitUntil,
    DelayType.PauseUntil,
  ],

  [NodeType.Conditional]: [ConditionalType.IfMet, ConditionalType.IfNotMet],

  [NodeType.Decision]: [DecisionType.SwitchRoute, DecisionType.MultiBranch],

  [NodeType.Notification]: [
    NotificationType.Email,
    NotificationType.Push,
    NotificationType.SMS,
  ],
};

export default nodeTriggerTypes;
