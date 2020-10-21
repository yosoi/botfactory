import {
  Button,
  Divider,
  Form,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";

import CardField from "bits/CardField";
import React from "react";

export default function NewBot() {
  return (
    <div>
      <Segment padded>
        <Header as="h5" content="Spawn a new bot" icon="star"></Header>
        <List>
          <List.Item>
            <List.Icon name="arrow right"></List.Icon>
            <List.Content>Fully serverless; unlimited commands</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="arrow right"></List.Icon>
            <List.Content>Designed for flexible integration</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="arrow right"></List.Icon>
            <List.Content>
              <strong>$6/month per bot</strong> plus{" "}
              <strong>$0.01/action</strong>
            </List.Content>
          </List.Item>
        </List>
        <p>
          Not sold yet?{" "}
          <a href="" target="_blank">
            Check out the docs.
          </a>
        </p>
      </Segment>
      <Divider section horizontal>
        <Icon name="hand point down outline"></Icon>
      </Divider>
      <Segment padded raised>
        <Form>
          <Form.Field>
            <Header>New bot</Header>
          </Form.Field>
          <Form.Input
            fluid
            icon="tag"
            iconPosition="left"
            placeholder="Name your bot"
          ></Form.Input>
          <Form.Input
            icon="key"
            iconPosition="left"
            fluid
            placeholder="Paste your token"
            type="password"
          ></Form.Input>
          <CardField></CardField>
          <Form.Field>
            <Button
              fluid
              icon="payment"
              labelPosition="left"
              content="Spawn your bot for $6"
              primary
            ></Button>
          </Form.Field>
        </Form>
      </Segment>
    </div>
  );
}
