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
      <Segment attached="top" color="blue" padded>
        <Header as="h5" content="Action" icon="lightning"></Header>
      </Segment>
      <Segment attached padded>
        <Form>
          <Form.Field>
            <Input
              fluid
              icon="tag"
              iconPosition="left"
              type="text"
              placeholder="Name"
            ></Input>
          </Form.Field>
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
      <Segment attached="bottom" stacked>
        <Button.Group widths={2}>
          <Button
            positive
            content="Update"
            icon="cloud upload"
            labelPosition="left"
            fluid
          ></Button>
          <Button
            negative
            content="Delete"
            icon="close"
            labelPosition="left"
            fluid
          ></Button>
        </Button.Group>
      </Segment>
    </div>
  );
}
