import {
  Button,
  Divider,
  Form,
  Header,
  Icon,
  Input,
  Menu,
  Pagination,
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
        <Menu.Item header>{bot.name}</Menu.Item>
        <Menu.Menu position="right">
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
          <Menu.Item
            activeClassName="active"
            as={NavLink}
            to={`/bot/${botId}/settings`}
            name="settings"
            icon="cog"
          ></Menu.Item>
        </Menu.Menu>
      </Menu>
      <Segment attached="bottom" padded="very">
        <Switch>
          <Route path={`/bot/${botId}/commands`}>
            <Menu>
              <Menu.Item>
                <Input
                  icon="filter"
                  placeholder="Filter commands..."
                  iconPosition="left"
                  transparent
                ></Input>
              </Menu.Item>
              <Menu.Menu icon position="right">
                <Menu.Item onClick={() => {}}>
                  <Icon name="add"></Icon>
                </Menu.Item>
                <Menu.Item onClick={() => {}}>
                  <Icon name="info circle"></Icon>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <Divider section horizontal>
              <Icon name="hand point down outline"></Icon>
            </Divider>
            <Form>
              {commands.map((command) => (
                <Form.Field>
                  <Command actions={actions} command={command}></Command>
                </Form.Field>
              ))}
            </Form>
            <Divider section horizontal hidden></Divider>
            <Pagination
              defaultActivePage={1}
              ellipsisItem={{
                content: <Icon name="ellipsis horizontal" />,
                icon: true,
              }}
              firstItem={{
                content: <Icon name="angle double left" />,
                icon: true,
              }}
              lastItem={{
                content: <Icon name="angle double right" />,
                icon: true,
              }}
              prevItem={{ content: <Icon name="angle left" />, icon: true }}
              nextItem={{ content: <Icon name="angle right" />, icon: true }}
              totalPages={10}
            />
          </Route>
          <Route path={`/bot/${botId}/actions`}>
            <Menu>
              <Menu.Item>
                <Input
                  icon="filter"
                  placeholder="Filter actions..."
                  iconPosition="left"
                  transparent
                ></Input>
              </Menu.Item>
              <Menu.Menu icon position="right">
                <Menu.Item onClick={() => {}}>
                  <Icon name="add"></Icon>
                </Menu.Item>
                <Menu.Item onClick={() => {}}>
                  <Icon name="info circle"></Icon>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <Divider section horizontal>
              <Icon name="hand point down outline"></Icon>
            </Divider>
            <Form>
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
            </Form>
            <Divider section horizontal hidden></Divider>
            <Pagination
              defaultActivePage={1}
              ellipsisItem={{
                content: <Icon name="ellipsis horizontal" />,
                icon: true,
              }}
              firstItem={{
                content: <Icon name="angle double left" />,
                icon: true,
              }}
              lastItem={{
                content: <Icon name="angle double right" />,
                icon: true,
              }}
              prevItem={{ content: <Icon name="angle left" />, icon: true }}
              nextItem={{ content: <Icon name="angle right" />, icon: true }}
              totalPages={10}
            />
          </Route>
          <Route path={`/bot/${botId}/settings`}>
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
                  <Button icon="check"></Button>
                </Input>
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  iconPosition="left"
                  type="text"
                  placeholder="Change command prefix"
                  action
                >
                  <Icon name="chevron right"></Icon>
                  <input />
                  <Button icon="check"></Button>
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
                  <Button icon="check"></Button>
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
                ></Button>
              </Form.Field>
            </Form>
          </Route>
        </Switch>
      </Segment>
    </div>
  );
}
