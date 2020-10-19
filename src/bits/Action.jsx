import {
  Button,
  Dropdown,
  Form,
  Header,
  Icon,
  Input,
  Menu,
  Segment,
  Select,
} from "semantic-ui-react";

import React from "react";

export default function Action({ action, headers, httpMethods, transforms }) {
  return (
    <div>
      <Menu attached="top">
        <Menu.Item>
          <Input
            transparent
            icon="tag"
            iconPosition="left"
            placeholder="Name your action..."
          ></Input>
        </Menu.Item>
        <Menu.Menu icon position="right">
          <Menu.Item onClick={() => {}}>
            <Icon name="check"></Icon>
          </Menu.Item>
          <Menu.Item onClick={() => {}}>
            <Icon name="close"></Icon>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Segment attached="bottom" stacked style={{ backgroundColor: "#fafafa" }}>
        <Form>
          <Form.Field>
            <Input
              fluid
              iconPosition="left"
              type="text"
              placeholder="URL"
              action
            >
              <Icon name="linkify"></Icon>
              <input />
              <Select compact options={httpMethods} defaultValue="POST" />
            </Input>
          </Form.Field>
          <Form.Field>
            <Dropdown
              placeholder="Headers"
              fluid
              multiple
              search
              selection
              options={headers}
            />
          </Form.Field>
          <Form.Field>
            <Dropdown
              placeholder="Request transform"
              fluid
              search
              selection
              options={transforms}
            />
          </Form.Field>
          <Form.Field>
            <Dropdown
              placeholder="Response transform"
              fluid
              search
              selection
              options={transforms}
            />
          </Form.Field>
        </Form>
      </Segment>
    </div>
  );
}