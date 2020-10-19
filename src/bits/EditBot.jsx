import {
  Button,
  Divider,
  Form,
  Header,
  Icon,
  Input,
  Menu,
  Segment,
} from "semantic-ui-react";
import { NavLink, Route, Switch, useParams } from "react-router-dom";
import React, { useState } from "react";

import Action from "bits/Action";
import Command from "bits/Command";
import Editor from "bits/Editor";
import View from "bits/View";

export default function EditBot() {
  const httpMethods = ["GET", "POST", "PUT", "DELETE"];

  const { botId } = useParams();

  // TODO: set bot by id in url
  const [bot, setBot] = useState({ id: "", name: "Maester" });
  const [headers, setHeaders] = useState([]);

  const commands = [{}, {}];
  const actions = [{}, {}];

  return (
    <div>
      <Menu attached="top" tabular>
        <Menu.Item
          activeClassName="active"
          as={NavLink}
          to={`/bot/${botId}/commands`}
          name="commands"
          icon="bullhorn"
        ></Menu.Item>
        <Menu.Item
          activeClassName="active"
          as={NavLink}
          to={`/bot/${botId}/actions`}
          name="actions"
          icon="lightning"
        ></Menu.Item>
      </Menu>
      <Segment attached padded="very">
        <Form>
          <Switch>
            <Route path={`/bot/${botId}/commands`}>
              {commands.map((command) => (
                <Form.Field>
                  <Command actions={actions} command={command}></Command>
                </Form.Field>
              ))}
              <Form.Field>
                <Button
                  content="Add a new command"
                  fluid
                  icon="add"
                  labelPosition="left"
                  primary
                ></Button>
              </Form.Field>
            </Route>
            <Route path={`/bot/${botId}/actions`}>
              {actions.map((action) => (
                <Form.Field>
                  <Action
                    action={action}
                    headers={headers}
                    httpMethods={httpMethods.map((method) => {
                      return { key: method, value: method, text: method };
                    })}
                  ></Action>
                </Form.Field>
              ))}
              <Form.Field>
                <Button
                  content="Add a new action"
                  fluid
                  icon="add"
                  labelPosition="left"
                  primary
                ></Button>
              </Form.Field>
            </Route>
          </Switch>
        </Form>
      </Segment>
      <Segment
        attached="bottom"
        padded="very"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <Header as="h5" content="Bot settings" icon="cog"></Header>
        <Form>
          <Form.Field>
            <Input
              fluid
              iconPosition="left"
              type="text"
              placeholder="Rename bot"
              action
            >
              <Icon name="tag"></Icon>
              <input />
              <Button positive icon="cloud upload"></Button>
            </Input>
          </Form.Field>
          <Form.Field>
            <Input
              fluid
              iconPosition="left"
              type="text"
              placeholder="Reset Discord token"
              action
              type="password"
            >
              <Icon name="key"></Icon>
              <input />
              <Button positive icon="cloud upload"></Button>
            </Input>
          </Form.Field>
          <Form.Field>
            <Divider horizontal>
              <Icon name="warning sign"></Icon>
            </Divider>
          </Form.Field>
          <Form.Field>
            <Button
              content={`Delete this bot forever`}
              fluid
              icon="trash alternate"
              labelPosition="left"
              negative
            ></Button>
          </Form.Field>
        </Form>
      </Segment>
    </div>
  );
}
