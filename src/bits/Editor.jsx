import { Button, Header, Segment } from "semantic-ui-react";

import React from "react";

export default function Editor({ button, children, header, style }) {
  return (
    <div style={style}>
      <Segment attached="top">
        <Header as="h6" content={header.content} icon={header.icon}></Header>
      </Segment>
      <Segment attached>{children}</Segment>
      <Segment attached="bottom">
        <Button
          content={button.content}
          fluid
          icon={button.icon}
          labelPosition="left"
        ></Button>
      </Segment>
    </div>
  );
}
