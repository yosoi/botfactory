import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Route, Switch } from "react-router-dom";

import React from "react";

export default function View({ header, subviews }) {
  const submenu = (
    <Menu.Menu position={header ? "right" : "left"}>
      {subviews.map((subview) => (
        <Menu.Item as={NavLink} {...subview}></Menu.Item>
      ))}
    </Menu.Menu>
  );
  return (
    <div>
      <Menu attached="top" tabular>
        {header ? (
          <>
            <Menu.Item header content={header}></Menu.Item>
            {submenu}
          </>
        ) : (
          submenu
        )}
      </Menu>
      <Segment attached="bottom" padded="very">
        <Switch>
          {subviews.map((subview) => (
            <Route key={subview.key} path={subview.to}>
              {subview.render}
            </Route>
          ))}
        </Switch>
      </Segment>
    </div>
  );
}
