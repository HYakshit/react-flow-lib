import {
  NodeType,
  ActionType,
  TriggerType,
  DelayType,
  ConditionalType,
  DecisionType,
  NotificationType,
} from "../utill/NodeConstants";
const nodeTriggerTypes = {
  [NodeType.Action]: [
    ActionType.SelectType,
    ActionType.APICall,
    ActionType.DatabaseUpdate,
    ActionType.SendEmail,
    ActionType.Webhook,
    ActionType.FileOperations,
  ],

  [NodeType.Trigger]: [
    TriggerType.SelectType,
    TriggerType.TimeBased,
    TriggerType.EventBased,
    TriggerType.Conditional,
    TriggerType.System,
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
