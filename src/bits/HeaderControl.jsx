import { Menu, Segment } from "semantic-ui-react";

import React from "react";

export default function HeaderControl() {
  return (
    <div>
      <Menu attached="top"></Menu>
      <Segment attached="bottom" stacked></Segment>
    </div>
  );
}
