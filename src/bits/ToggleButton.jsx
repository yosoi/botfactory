import React, { useState } from "react";

import { Button } from "semantic-ui-react";

export default function ToggleButton({ onHide, onShow }) {
  const [hidden, setHidden] = useState(false);
  return (
    <Button
      icon={hidden ? "eye slash" : "eye"}
      onClick={() => {
        setHidden((hidden) => {
          setHidden(!hidden);
          if (hidden) {
            onHide();
          } else {
            onShow();
          }
        });
      }}
    ></Button>
  );
}
