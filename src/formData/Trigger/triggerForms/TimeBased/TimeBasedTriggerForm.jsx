import TriggerScheduleForm from "../../../Forms/TriggerScheduleForm/TriggerScheduleForm";
import RetrySettingsForm from "../../../Forms/RetrySettingsForm/RetrySettingsForm";

/**
 * TimeBased Trigger Form - Combines Trigger Schedule and Retry Settings
 * This wrapper component contains both sections needed for time-based triggers
 */
const TimeBasedTriggerForm = ({ nodeLabel }) => {
  return (
    <div>
      <TriggerScheduleForm />
      <div className="mt-4">
        <RetrySettingsForm />
      </div>
    </div>
  );
};

export default TimeBasedTriggerForm;

