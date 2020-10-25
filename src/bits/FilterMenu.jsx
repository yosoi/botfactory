import { Icon, Input, Menu } from "semantic-ui-react";

import React from "react";

export default function FilterMenu({ placeholder, onClickAdd }) {
  return (
    <Menu>
      <Menu.Item>
        <Input
          icon="filter"
          placeholder={placeholder}
          iconPosition="left"
          transparent
        ></Input>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item onClick={() => onClickAdd()}>
          <Icon name="add"></Icon>
          Add
        </Menu.Item>
        <Menu.Item onClick={() => {}}>
          <Icon name="map"></Icon>
          Docs
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
