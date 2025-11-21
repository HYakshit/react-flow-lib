// JsonForm.jsx
import { useMemo } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import GeneralSchema from "./GeneralSchema";
import GeneralUiSchema from "./GeneralUiSchema";
import { NODEDESCRIPTION } from "../../../lib/NodeConstants";

const GeneralForm = ({ nodeLabel, selectedNode, onUpdateNode }) => {
  // Initialize formData from node data if available, otherwise use defaults
  const initialFormData = useMemo(() => {
    if (selectedNode?.data) {
      return {
        title: selectedNode.data.title || nodeLabel || "Trigger",
        status: selectedNode.data.status || "Active",
        description: selectedNode.data.description || NODEDESCRIPTION[nodeLabel] || "Initiate workflows",
      };
    }
    return {
      title: nodeLabel || "Trigger",
      status: "Active",
      description: NODEDESCRIPTION[nodeLabel] || "Initiate workflows",
    };
  }, [selectedNode, nodeLabel]);

  const handleChange = ({ formData }) => {
    if (onUpdateNode && selectedNode) {
      // Update the node data with the new form values
      onUpdateNode({
        ...selectedNode,
        data: {
          ...selectedNode.data,
          title: formData.title,
          status: formData.status,
          description: formData.description,
        },
      });
    }
  };

  const log = (type) => console.log.bind(console, type);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <Form
        schema={GeneralSchema}
        uiSchema={GeneralUiSchema}
        formData={initialFormData}
        validator={validator}
        onChange={handleChange}
        onSubmit={log("submitted")}
        onError={log("errors")}
        templates={{
          ButtonTemplates: {
            SubmitButton: () => null, // fully hide submit
          },
        }}
      />
    </div>
  );
};

export default GeneralForm;
