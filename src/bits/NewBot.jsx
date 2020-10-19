import { Button, Form, Header, Icon, List, Segment } from "semantic-ui-react";

import CardField from "bits/CardField";
import React from "react";

export default function NewBot() {
  return (
    <Segment basic padded="very">
      <Segment basic attached="top" padded>
        <Header
          as="h5"
          content="Add a new bot to your roster"
          icon="cog"
        ></Header>
      </Segment>
      <Segment attached padded="very">
        <Segment padded>
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
        </Segment>
        <Form>
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
        </Form>
      </Segment>
      <Segment attached="bottom">
        <Button
          fluid
          primary
          content="Add new bot for $6"
          icon="payment"
          labelPosition="left"
        ></Button>
      </Segment>
    </Segment>
  );
}
