import { Icon, Input } from "semantic-ui-react";

import DeleteButton from "bits/DeleteButton";
import React from "react";
import SaveButton from "bits/SaveButton";

export default function Setting({ icon, onSave, onDelete, placeholder }) {
  return (
    <Input
      action
      fluid
      iconPosition="left"
      placeholder={placeholder}
      type="text"
    >
      <Icon name={icon}></Icon>
      <input />
      <SaveButton onClick={() => onSave()}></SaveButton>
      <DeleteButton onClick={() => onDelete()}></DeleteButton>
    </Input>
  );
}
