import { Button, Grid, Menu, Rail, Sticky } from "semantic-ui-react";
import React, { useRef } from "react";

import { Link } from "react-router-dom";
import signOut from "bits/signOut";

export default function Page({ content, menu }) {
  const stickyRef = useRef();
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column>
          <Grid container style={{ paddingTop: "2rem" }} verticalAlign="middle">
            <Grid.Row only="mobile tablet">
              <Grid.Column>
                <Sticky>
                  <Menu fluid secondary style={{ backgroundColor: "#fff" }}>
                    <Menu.Item header as="h2">
                      botspot.
                    </Menu.Item>
                    <Menu.Menu position="right">
                      <Menu.Item
                        content="Docs"
                        icon="map"
                        onClick={() => {}}
                      ></Menu.Item>
                      <Menu.Item>
                        <Button.Group>
                          <Button icon="plus" primary></Button>
                          <Button icon="caret down" basic primary></Button>
                        </Button.Group>
                      </Menu.Item>
                      <Menu.Item>
                        <Button basic icon="lock"></Button>
                      </Menu.Item>
                    </Menu.Menu>
                  </Menu>
                </Sticky>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row only="computer large screen">
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
        <Grid.Column>{content}</Grid.Column>
      </Grid.Row>
      <Grid.Row only="computer large screen">
        <Grid.Column>
          <Grid centered columns={2}>
            <Grid.Row>
              <Grid.Column>
                {content}
                <Rail position="left">
                  <Sticky position="right" ref={stickyRef}>
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

// TODO: make menu sticky
