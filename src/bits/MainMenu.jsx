import { Button, Icon, Menu } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

import React from "react";
import signOut from "bits/signOut";

export default function MainMenu({ bots, views }) {
  return (
    <div>
      <Menu fluid vertical secondary>
        <Menu.Item align="center" header as="h1" className="logo">
          botspot.
        </Menu.Item>
        <Menu.Item>
          <Button
            as={Link}
            content="Spawn a new bot"
            fluid
            icon="add"
            labelPosition="left"
            primary
            to="/bot/new"
          ></Button>
        </Menu.Item>
      </Menu>
      <Menu fluid pointing vertical>
        <Menu.Item>
          Roster
          <Menu.Menu>
            {bots.map((bot) => (
              <Menu.Item
                as={NavLink}
                activeClassName="active"
                key={bot.id}
                name={bot.name}
                to={`/bot/${bot.id}`}
              ></Menu.Item>
            ))}
          </Menu.Menu>
        </Menu.Item>
        {views.map((item) => (
          <Menu.Item
            as={NavLink}
            activeClassName="active"
            key={item.name}
            name={item.name}
            to={item.path}
            {...item.props}
          >
            <Icon name={item.icon}></Icon>
            {item.text}
          </Menu.Item>
        ))}
        <Menu.Item as={Link} name="billing" target="_blank" to="">
          <Icon name="credit card"></Icon>Billing
        </Menu.Item>
      </Menu>
      <Button
        as={Link}
        content="Docs"
        fluid
        icon="map"
        labelPosition="left"
        secondary
        target="_blank"
        to=""
      ></Button>
      <Button
        basic
        content="Lock"
        fluid
        icon="lock"
        labelPosition="left"
        primary
        onClick={(e) => signOut(e)}
        style={{ marginTop: "1rem" }}
      ></Button>
    </div>
  );
}
