import { Input, Label, Select } from "semantic-ui-react";

import DeleteButton from "bits/DeleteButton";
import React from "react";
import SaveButton from "bits/SaveButton";

export default function Command({ onDelete, onSave, prefix }) {
  const actionOptions = [
    { key: "get", value: "get", text: "GET" },
    { key: "post", value: "post", text: "POST" },
    { key: "put", value: "put", text: "PUT" },
    { key: "delete", value: "delete", text: "DELETE" },
  ];
  return (
    <Input
      fluid
      labelPosition="left"
      type="text"
      placeholder="Enter a trigger..."
      action
    >
      <Label content={prefix} icon="chevron right"></Label>
      <input />
      <Select
        compact
        options={actionOptions}
        placeholder="Select an action..."
      />
      <SaveButton
        onClick={() => {
          onSave();
        }}
      ></SaveButton>
      <DeleteButton onClick={() => onDelete()}></DeleteButton>
    </Input>
  );
}
