import { Button } from "semantic-ui-react";
import React from "react";

export default function SaveButton(props) {
  return <Button icon={props.icon ? props.icon : "check"} {...props}></Button>;
}
