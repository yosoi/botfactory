import { Button, Grid, Header, Menu, Rail } from "semantic-ui-react";

import { Link } from "react-router-dom";
import React from "react";
import signOut from "bits/signOut";

export default function Page(props) {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column>
          <Grid container style={{ paddingTop: "2rem" }} verticalAlign="middle">
            <Grid.Column
              computer={2}
              floated="left"
              mobile={5}
              tablet={2}
            ></Grid.Column>
            <Grid.Column
              computer={14}
              floated="right"
              mobile={11}
              tablet={14}
              textAlign="right"
            >
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
                    primary
                    onClick={(e) => signOut(e)}
                  ></Button>
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Grid centered columns={3}>
            <Grid.Row>
              <Grid.Column>
                {props.content}
                <Rail position="left">{props.menu.primary}</Rail>
                <Rail position="right">{props.menu.secondary}</Rail>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
