import { Icon, Input } from "semantic-ui-react";
import React, { useRef, useState } from "react";

import DeleteButton from "bits/DeleteButton";
import SaveButton from "bits/SaveButton";

export default function Setting({ icon, onSave, onDelete, placeholder }) {
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  function onChange(newValue) {
    setDisabled(newValue == false);
  }

  return (
    <Input
      action
      fluid
      iconPosition="left"
      placeholder={placeholder}
      type="text"
    >
      <Icon name={icon}></Icon>
      <input onChange={(e) => onChange(e.target.value)} ref={inputRef} />
      <SaveButton
        disabled={disabled}
        icon={disabled ? "check" : "save"}
        loading={loading}
        onClick={() => {
          setLoading(true);
          onSave(inputRef.current.value).finally(() => {
            setLoading(false);
            inputRef.current.value = "";
            onChange(inputRef.current.value);
          });
        }}
        primary={!disabled}
      ></SaveButton>
      {onDelete ? (
        <DeleteButton
          disabled={false}
          onClick={() => onDelete()}
        ></DeleteButton>
      ) : (
        <></>
      )}
    </Input>
  );
}
