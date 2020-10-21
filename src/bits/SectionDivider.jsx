import { Divider, Icon } from "semantic-ui-react";

import React from "react";

export default function SectionDivider({ hidden, warning }) {
  return (
    <Divider section horizontal hidden={hidden}>
      {hidden ? (
        <></>
      ) : (
        <Icon
          name={warning ? "warning sign" : "hand point down outline"}
        ></Icon>
      )}
    </Divider>
  );
}
