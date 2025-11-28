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
    Action.UpdateRecord.label,
    Action.UserAction.label,
    Action.SendEmail.label,
    // Action.Webhook.label,
    Action.CreateRecord.label,
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
    DelayType.SelectType.label,
    DelayType.Fixed.label,
    DelayType.Dynamic.label,
    DelayType.Conditional.label,
    DelayType.UntilSpecificDate.label,
  ],

  [NodeType.Conditional]: [
    ConditionalType.Conditional.label,
    // ConditionalType.IfNotMet.label,
  ],

  [NodeType.Decision]: [
    DecisionType.SwitchRoute.label,
    DecisionType.MultiBranch.label,
  ],

  [NodeType.Notification]: [
    NotificationType.SelectType.label,
    NotificationType.Email.label,
    NotificationType.Push.label,
    NotificationType.SMS.label,
    NotificationType.Call.label,
  ],
};

export default nodeTriggerTypes;
