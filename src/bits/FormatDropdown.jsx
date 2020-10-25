import React from "react";
import { Select } from "semantic-ui-react";

export default function FormatDropdown({ placeholder }) {
  return (
    <Select
      fluid
      options={[
        { key: "text", value: "text", text: "Text" },
        { key: "json", value: "json", text: "JSON" },
        { key: "xml", value: "xml", text: "XML" },
      ]}
      placeholder={placeholder}
    ></Select>
  );
}
