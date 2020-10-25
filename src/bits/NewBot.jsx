import {
  Button,
  Divider,
  Form,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

export default function NewBot() {
  const [awaitingRedirect, setAwaitingRedirect] = useState(false);

  const [complete, setComplete] = useState(false);
  const [focused, setFocused] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const canSubmit = stripe && elements && complete;

  // TODO: why does this render side-by-side on ipad?
  return (
    <>
      <Segment basic padded>
        <Header as="h1" content="Spawn a new bot"></Header>
        <p>
          Focus on writing the code that makes your bot unique. Botspot will
          handle the rest.
        </p>
        <List>
          <List.Item>
            <List.Icon name="arrow right"></List.Icon>
            <List.Content>
              Fully serverless, with unlimited custom commands
            </List.Content>
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
          Not sold yet? <a href="#docs">Check out the docs.</a>
        </p>
      </Segment>
      <Divider section horizontal>
        <Icon name="hand point down outline"></Icon>
      </Divider>
      <Segment padded raised>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!canSubmit) {
              return;
            }

            setAwaitingRedirect(true);
          }}
        >
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
          <Form.Field
            className={
              focused
                ? "CardElementField CardElementField_focus"
                : "CardElementField"
            }
          >
            {/* TODO: make this render as CardElement */}
          </Form.Field>
          <Button
            content="Spawn your bot for $6"
            disabled={!canSubmit}
            fluid
            icon="payment"
            labelPosition="left"
            loading={awaitingRedirect}
            primary
            type="submit"
          ></Button>
        </Form>
      </Segment>
    </>
  );
}
