import { Button, Icon, Input, Select } from "semantic-ui-react";

import React from "react";

export default function Command({ command, actions }) {
  return (
    <Input
      fluid
      iconPosition="left"
      type="text"
      placeholder="Command trigger"
      action
    >
      <Icon name="quote left"></Icon>
      <input />
      <Select compact options={actions} />
      <Button icon="check"></Button>
      <Button icon="close"></Button>
    </Input>
  );
}
