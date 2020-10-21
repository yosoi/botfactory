import { Divider, Message } from "semantic-ui-react";
import React, { useState } from "react";

export default function Info({ children, content, header }) {
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
