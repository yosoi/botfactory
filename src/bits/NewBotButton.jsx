import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";

export default function NewBotButton({ compact }) {
  const props = compact
    ? { content: "New", labelPosition: "right" }
    : { fluid: true, content: "New bot", labelPosition: "left" };
  return (
    <Button as={Link} icon="add" primary {...props} to="/bot/new"></Button>
  );
}
