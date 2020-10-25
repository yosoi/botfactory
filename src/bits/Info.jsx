import { Divider, Message } from "semantic-ui-react";
import React, { useState } from "react";

export default function Info({ children, content, header }) {
  // TODO: make sure these don't all close when you close one of them
  const [visible, setVisible] = useState(true);
  return visible ? (
    <>
      <Message info onDismiss={() => setVisible(false)}>
        <Message.Header>{header}</Message.Header>
        {content}
      </Message>
      <Divider hidden></Divider>
      {children}
    </>
  ) : (
    children
  );
}
