import ApiCallForm from "../formData/Action/actionForms/ApiCallForm/ApiCallForm";
import DatabaseUpdateForm from "../formData/Action/actionForms/DatabaseUpdate/DatabaseUpdateForm";

function GetForm(nodeLabel , type) {
  switch (type) {
    case nodeLabel.APICall.label:
      return {
        label: nodeLabel.APICall.description,
        component: <ApiCallForm />,
      };

    case nodeLabel.DatabaseUpdate.label:
      return {
        label: nodeLabel.DatabaseUpdate.description,
        component: <DatabaseUpdateForm />,
      };

    case nodeLabel.SendEmail.label:
      return {
        label: nodeLabel.SendEmail.description,
        // component: <SendEmailForm />,
      };

    case nodeLabel.Webhook.label:
      return {
        label: nodeLabel.Webhook.description,
        // component: <WebhookForm />,
      };

    case nodeLabel.FileOperations.label:
      return {
        label: nodeLabel.FileOperations.description,
        // component: <FileOperationsForm />,
      };

    default:
      return {
        label: "General Configuration",
        component: <GeneralForm nodeLabel={nodeLabel} />,
      };
  }
}
export default GetForm;
