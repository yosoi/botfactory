import { Button, Form, Header, List, Segment } from "semantic-ui-react";

import CardField from "bits/CardField";
import React from "react";
import View from "bits/View";

export default function NewBot() {
  return (
    <div>
      <Segment inverted padded>
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
      </Segment>
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
              content="Create Bot - $6"
              primary
            ></Button>
          </Form.Field>
        </Form>
      </Segment>
    </div>
  );
}

/* <View
action={{
  content: "Pay $6",
  icon: "payment",
  props: { primary: true },
}}
header={{
  content: "Add a new bot to your roster!",
  icon: "star",
}}
>

</View> */
