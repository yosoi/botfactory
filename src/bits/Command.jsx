import { Input, Label, Select } from "semantic-ui-react";

import DeleteButton from "bits/DeleteButton";
import React from "react";
import SaveButton from "bits/SaveButton";

export default function Command({ actions, onDelete, onSave, prefix }) {
  return (
    <Input
      fluid
      labelPosition="left"
      type="text"
      placeholder="Command trigger"
      action
    >
      <Label content={prefix} icon="chevron right"></Label>
      <input />
      <Select compact options={actions} />
      <SaveButton
        onClick={() => {
          onSave();
        }}
      ></SaveButton>
      <DeleteButton onClick={() => onDelete()}></DeleteButton>
    </Input>
  );
}
