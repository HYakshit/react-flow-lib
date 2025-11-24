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
    // DelayType.SelectType.label,
    DelayType.WaitDuration.label,
    DelayType.WaitUntil.label,
    DelayType.PauseUntil.label,
  ],

  [NodeType.Conditional]: [
    ConditionalType.IfMet.label,
    ConditionalType.IfNotMet.label,
  ],

  [NodeType.Decision]: [
    DecisionType.SwitchRoute.label,
    DecisionType.MultiBranch.label,
  ],

  [NodeType.Notification]: [
    NotificationType.Email.label,
    NotificationType.Push.label,
    NotificationType.SMS.label,
  ],
};

export default nodeTriggerTypes;
