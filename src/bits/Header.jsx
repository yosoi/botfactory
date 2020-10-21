import { Button, Icon, Input, Label } from "semantic-ui-react";
import React, { useState } from "react";

import DeleteButton from "bits/DeleteButton";
import PropertyEditor from "bits/PropertyEditor";
import SaveButton from "bits/SaveButton";
import ToggleButton from "bits/ToggleButton";

export default function Header(props) {
  const [hidden, setHidden] = useState(false);
  return (
    <PropertyEditor placeholder={"Name your header"} {...props}>
      <Input fluid action>
        <input placeholder="Enter a key..."></input>
        <input
          placeholder="Enter a value..."
          style={{ borderRadius: "0px" }}
          type={hidden ? "password" : "text"}
        ></input>
        <ToggleButton
          onHide={() => setHidden(false)}
          onShow={() => setHidden(true)}
        ></ToggleButton>
      </Input>
    </PropertyEditor>
  );
}
