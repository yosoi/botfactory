import { Button, Dropdown, Grid, Menu, Rail, Sticky } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";

import BotsContext from "bits/BotsContext";
import NewBotButton from "./NewBotButton";
import signOut from "bits/signOut";

export default function Page({ content, menu }) {
  const bots = useContext(BotsContext);
  // const bots = [
  //   { id: "maester", name: "Maester", path: "/bot/maester", text: "maester" },
  //   {
  //     id: "untitled",
  //     name: "Untitled",
  //     path: "/bot/untitled",
  //     text: "untitiled",
  //   },
  //   { id: "workbot", name: "Workbot", path: "/bot/workbot", text: "workbot" },
  // ];

  // TODO: make sure this looks good on all screens
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Grid container style={{ paddingTop: "2rem" }} verticalAlign="middle">
            <Grid.Row only="mobile tablet">
              <Grid.Column>
                <Sticky>
                  <Menu fluid secondary style={{ backgroundColor: "#fff" }}>
                    <Menu.Item header as="h1" className="logo">
                      botspot.
                    </Menu.Item>
                    <Menu.Menu position="right">
                      <Menu.Item>
                        <Button.Group>
                          <NewBotButton compact></NewBotButton>
                          <Button
                            as={Link}
                            icon="map"
                            secondary
                            target="_blank"
                            to=""
                          ></Button>
                          <Dropdown
                            button
                            basic
                            className="icon primary"
                            floating
                            icon="grid layout"
                          >
                            <Dropdown.Menu>
                              <Dropdown.Header content="Bots"></Dropdown.Header>
                              {bots.map((bot) => (
                                <Dropdown.Item
                                  as={NavLink}
                                  activeClassName="active"
                                  key={bot.id}
                                  name={bot.name}
                                  to={`/bot/${bot.id}/commands`}
                                >
                                  {bot.name}
                                </Dropdown.Item>
                              ))}
                              <Dropdown.Divider></Dropdown.Divider>
                              <Dropdown.Item
                                as={NavLink}
                                activeClassName="active"
                                icon="lightning"
                                text="Actions"
                                to="/actions"
                              ></Dropdown.Item>
                              <Dropdown.Item
                                as={NavLink}
                                activeClassName="active"
                                icon="code"
                                text="Headers"
                                to="/headers"
                              ></Dropdown.Item>
                              <Dropdown.Item
                                as={NavLink}
                                activeClassName="active"
                                icon="exchange"
                                text="Transforms"
                                to="/transforms"
                              ></Dropdown.Item>
                              <Dropdown.Divider></Dropdown.Divider>
                              <Dropdown.Item
                                as={Link}
                                icon="credit card"
                                target="_blank"
                                text="Billing"
                                to="/billing"
                              ></Dropdown.Item>
                              <Dropdown.Divider></Dropdown.Divider>
                              <Dropdown.Item
                                icon="lock"
                                onClick={(e) => signOut(e)}
                                text="Lock"
                              ></Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Button.Group>
                      </Menu.Item>
                    </Menu.Menu>
                  </Menu>
                </Sticky>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row only="large screen">
              <Grid.Column textAlign="right">
                <Menu compact secondary>
                  <Menu.Item
                    icon="map"
                    as={Link}
                    content="Docs"
                    target="_blank"
                    to=""
                  ></Menu.Item>
                  <Menu.Item>
                    <Button
                      basic
                      content="Lock"
                      icon="lock"
                      labelPosition="left"
                      onClick={(e) => signOut(e)}
                    ></Button>
                  </Menu.Item>
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="mobile tablet">
        <Grid.Column>
          <Grid container>{content}</Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="large screen">
        <Grid.Column>
          <Grid centered columns={2}>
            <Grid.Row>
              <Grid.Column>
                {content}
                <Rail position="left">
                  <Sticky position="right">
                    <Grid>
                      <Grid.Column width={12} floated="right">
                        {menu.primary}
                      </Grid.Column>
                    </Grid>
                  </Sticky>
                </Rail>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
