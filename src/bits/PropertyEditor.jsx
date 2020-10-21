import { Icon, Input, Menu, Segment } from "semantic-ui-react";

import React from "react";

export default function PropertyEditor({
  children,
  onDelete,
  onSave,
  placeholder,
}) {
  return (
    <>
      <Menu borderless attached="top">
        <Menu.Item>
          <Input
            transparent
            icon="tag"
            iconPosition="left"
            placeholder={placeholder}
          ></Input>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item onClick={() => onSave()}>
            <Icon name="check"></Icon>
          </Menu.Item>
          <Menu.Item onClick={() => onDelete()}>
            <Icon name="close"></Icon>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Segment attached="bottom" stacked style={{ backgroundColor: "#fafafa" }}>
        {children}
      </Segment>
    </>
  );
}
