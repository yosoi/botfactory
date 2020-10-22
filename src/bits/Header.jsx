import React, { useState } from "react";

import { Input } from "semantic-ui-react";
import PropertyEditor from "bits/PropertyEditor";
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
