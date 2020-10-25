import { Button, Icon, Menu } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";

import BotsContext from "bits/BotsContext";
import NewBotButton from "bits/NewBotButton";
import signOut from "bits/signOut";

export default function MainMenu({ views }) {
  const bots = useContext(BotsContext);
  return (
    <div>
      <Menu fluid vertical secondary>
        <Menu.Item align="center" header as="h1" className="logo">
          botspot.
        </Menu.Item>
        <Menu.Item>
          <NewBotButton></NewBotButton>
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
                to={`/bot/${bot.id}/commands`}
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
      </Menu>
    </div>
  );
}

/* <Button
  as={Link}
  content="Docs"
  fluid
  icon="map"
  labelPosition="left"
  secondary
  to=""
></Button>
<Button.Group
  basic
  labelPosition="left"
  fluid
  vertical
  style={{ marginTop: "1rem" }}
>
  <Button as={Link} content="Billing" icon="credit card" to=""></Button>
  <Button content="Lock" icon="lock" onClick={(e) => signOut(e)}></Button>
</Button.Group> */
