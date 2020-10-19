import { Button, Header, Segment } from "semantic-ui-react";

import React from "react";

export default function View({ action, children, header }) {
  return (
    <Segment raised padded="very">
      <Segment basic attached="top" padded>
        <Header as="h5" content={header.content} icon={header.icon}></Header>
      </Segment>
      <Segment attached padded="very">
        {children}
      </Segment>
      <Segment attached="bottom">
        <Button
          fluid
          {...action.props}
          content={action.content}
          icon={action.icon}
          labelPosition="left"
        ></Button>
      </Segment>
    </Segment>
  );
}
